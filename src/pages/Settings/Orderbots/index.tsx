import { useMemo, useState } from 'react';
import { Space, Table, Card } from 'antd';
import { OButton } from '@/components/Globals/OButton';
import { useModel } from '@umijs/max';
import ManageItemsModal from '@/components/ManageItems';
import { modalType } from '@/utils/helpers/types';
import NewOrderbotModal from '../Modals/Orderbots/NewOrderbot';

const TColumns = [
  {
    key: 'rank',
    dataIndex: 'rank',
    title: 'Rank',
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Name',
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
    render: (status) => (status ? 'Active' : 'Deactive'),
  },
];

const OrderBots: React.FC = () => {
  const { orderbotList, selectedOrderbot, setSelectedOrderbot, setOrderbotList } =
    useModel('orderbots');
  const [showActive, setShowActive] = useState<boolean>(true);
  const [activeModal, setActiveModal] = useState<modalType>(modalType.Close);

  const actionButtons = useMemo(
    () => [
      {
        key: 'new',
        btnText: 'New OrderBot',
        onClick: () => setActiveModal(modalType.New),
      },
      {
        key: 'edit',
        btnText: 'Edit',
        disabled: !selectedOrderbot,
      },
      {
        key: 'copy',
        btnText: 'Copy',
        disabled: !selectedOrderbot,
      },
      {
        key: 'deactivate',
        btnText: `${showActive ? 'Deactivate' : 'Activate'}`,
        disabled: !selectedOrderbot,
        onClick: () => setActiveModal(modalType.Activate),
      },
      {
        key: 'history',
        btnText: 'History',
        disabled: !selectedOrderbot,
      },
    ],
    [showActive, selectedOrderbot],
  );

  const TRows = useMemo(
    () =>
      orderbotList
        .filter((item) => item.status === showActive)
        .map((item) => ({ key: item.id, ...item })),
    [orderbotList, showActive],
  );

  return (
    <>
      <Card style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Space size={10}>
            <div style={{ gap: 5, display: 'flex' }}>
              {actionButtons.map((item) => (
                <OButton key={item.key} {...item} />
              ))}
            </div>
          </Space>
          <div>
            <OButton
              btnText={`${showActive ? 'Show Inactive' : 'Show Active'}`}
              onClick={() => setShowActive((prev) => !prev)}
            />
          </div>
        </div>

        <Table
          columns={TColumns}
          dataSource={TRows}
          pagination={{ hideOnSinglePage: true }}
          style={{ marginTop: 10 }}
          onRow={(record) => {
            return {
              onClick: () => {
                if (selectedOrderbot?.id === record.id) setSelectedOrderbot(null);
                else setSelectedOrderbot(record);
              },
            };
          }}
          rowClassName={(record) =>
            record.id === selectedOrderbot?.id ? `ant-table-row-selected` : ''
          }
        />
      </Card>

      <ManageItemsModal
        isOpen={activeModal === modalType.Activate}
        onClose={() => setActiveModal(modalType.Close)}
        onSave={() => {
          setActiveModal(modalType.Close);
          setOrderbotList((prev) =>
            prev.map((item) =>
              item.id === selectedOrderbot.id ? { ...item, status: !item.status } : item,
            ),
          );
          setSelectedOrderbot(null);
        }}
        description={`${
          showActive ? 'Deacticating' : 'Acticating'
        } this orderbot will stop it from running against <b>all</b> new orders coming into the system.`}
        confirmMessage="Are you sure you wawnt to proceed?"
        title={`${showActive ? 'Deactive' : 'Active'} ${selectedOrderbot?.name}`}
        submitBtnText={`Yes-${showActive ? 'Deactivate' : 'Activate'}`}
      />

      <NewOrderbotModal
        isOpen={activeModal === modalType.New}
        onSave={() => setActiveModal(modalType.Close)}
        onClose={() => setActiveModal(modalType.Close)}
      />
    </>
  );
};

export default OrderBots;
