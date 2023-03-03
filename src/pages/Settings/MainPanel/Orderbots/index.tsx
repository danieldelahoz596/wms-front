import { OButton } from '@/components/Globals/OButton';
import ManageItemsModal from '@/components/Modals/ManageItems';
import { modalType } from '@/utils/helpers/types';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Space, Table } from 'antd';
import { useMemo, useState } from 'react';
import NewOrderbotModal from '../Modals/Orderbots/NewOrderbot';

const TColumns = [
  {
    key: 'rank',
    dataIndex: 'rank',
    title: <FormattedMessage id="component.table.column.rank" />,
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: <FormattedMessage id="component.table.column.name" />,
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: <FormattedMessage id="component.table.column.status" />,
    render: (status) => (status ? 'Active' : 'Deactive'),
  },
];

const OrderBots: React.FC = () => {
  const { orderbotList, selectedOrderbot, setSelectedOrderbot, setOrderbotList } = useModel('orderbots');
  const [showActive, setShowActive] = useState<boolean>(true);
  const [activeModal, setActiveModal] = useState<modalType>(modalType.Close);

  const actionButtons = useMemo(
    () => [
      {
        key: 'new',
        btnText: <FormattedMessage id="component.button.newOrderBot" />,
        onClick: () => setActiveModal(modalType.New),
      },
      {
        key: 'edit',
        btnText: <FormattedMessage id="component.button.edit" />,
        disabled: !selectedOrderbot,
      },
      {
        key: 'copy',
        btnText: <FormattedMessage id="component.button.copy" />,
        disabled: !selectedOrderbot,
      },
      {
        key: 'deactivate',
        btnText: showActive ? (
          <FormattedMessage id="component.button.deactivate" />
        ) : (
          <FormattedMessage id="component.button.activate" />
        ),
        disabled: !selectedOrderbot,
        onClick: () => setActiveModal(modalType.Activate),
      },
      {
        key: 'history',
        btnText: <FormattedMessage id="component.button.history" />,
        disabled: !selectedOrderbot,
      },
    ],
    [showActive, selectedOrderbot],
  );

  const TRows = useMemo(
    () => orderbotList.filter((item) => item.status === showActive).map((item) => ({ key: item.id, ...item })),
    [orderbotList, showActive],
  );

  return (
    <>
      <div className="title-row">
        <h1 className="page-title">
          <FormattedMessage id="pages.settings.menu.orderBots" />
        </h1>
      </div>
      <Card className="content-box">
        <div className="button-row space-between">
          <Space size={HORIZONTAL_SPACE_SIZE}>
            {actionButtons.map((item) => (
              <OButton key={item.key} {...item} />
            ))}
          </Space>
          <OButton
            btnText={
              showActive ? (
                <FormattedMessage id="component.button.showInactive" />
              ) : (
                <FormattedMessage id="component.button.showActive" />
              )
            }
            onClick={() => setShowActive((prev) => !prev)}
          />
        </div>
        <Table
          columns={TColumns}
          dataSource={TRows}
          pagination={{ hideOnSinglePage: true }}
          onRow={(record) => {
            return {
              onClick: () => {
                if (selectedOrderbot?.id === record.id) setSelectedOrderbot(null);
                else setSelectedOrderbot(record);
              },
            };
          }}
          rowClassName={(record) => (record.id === selectedOrderbot?.id ? `ant-table-row-selected` : '')}
        />
      </Card>

      <FormattedMessage
        id={
          showActive
            ? 'pages.settings.orderbots.manageItems.deactive.description'
            : 'pages.settings.orderbots.manageItems.active.description'
        }
      >
        {(description: string) => (
          <ManageItemsModal
            isOpen={activeModal === modalType.Activate}
            onClose={() => setActiveModal(modalType.Close)}
            onSave={() => {
              setActiveModal(modalType.Close);
              setOrderbotList((prev) =>
                prev.map((item) => (item.id === selectedOrderbot.id ? { ...item, status: !item.status } : item)),
              );
              setSelectedOrderbot(null);
            }}
            description={description}
            confirmMessage={<FormattedMessage id="pages.settings.orderbots.manageItems.confirmMessage" />}
            title={
              <>
                {showActive ? (
                  <FormattedMessage id="pages.settings.orderbots.manageItems.deactive.title" />
                ) : (
                  <FormattedMessage id="pages.settings.orderbots.manageItems.deactive.title" />
                )}{' '}
                ${selectedOrderbot?.name}
              </>
            }
            submitBtnText={
              showActive ? (
                <FormattedMessage id="component.button.yDeactivate" />
              ) : (
                <FormattedMessage id="component.button.yActivate" />
              )
            }
          />
        )}
      </FormattedMessage>

      <NewOrderbotModal
        isOpen={activeModal === modalType.New}
        onSave={() => setActiveModal(modalType.Close)}
        onClose={() => setActiveModal(modalType.Close)}
      />
    </>
  );
};

export default OrderBots;
