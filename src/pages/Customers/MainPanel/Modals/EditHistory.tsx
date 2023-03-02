import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { FormattedMessage, useModel } from '@umijs/max';
import { Row, Col } from 'antd';
import moment from 'moment';
import { useMemo } from 'react';

const THistoryColumns = [
  {
    title: <FormattedMessage id="component.table.column.editTime" />,
    dataIndex: 'editTime',
    key: 'editTime',
  },
  {
    title: <FormattedMessage id="component.table.column.user" />,
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: <FormattedMessage id="component.table.column.changedValues" />,
    dataIndex: 'changedValues',
    key: 'changedValues',
  },
];

export default function EditHistoryModal({ isOpen, onSave, onClose }) {
  const { selectedCustomer } = useModel('customer');

  const historyData = useMemo(() => {
    if (selectedCustomer) {
      return selectedCustomer.edit_history?.map((_item) => ({
        editTime: moment(_item.created_at).format('M/D/Y h:mm A'),
        user: selectedCustomer.name,
        changedValues: _item.details?.toUpperCase(),
      }));
    } else return [];
  }, [selectedCustomer]);

  return (
    <OModal
      title={<FormattedMessage id="pages.customers.history.title" />}
      helpLink="/help/customers/module"
      width={800}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.cancel" />,
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: <FormattedMessage id="component.button.save" />,
          onClick: onSave,
        },
      ]}
    >
      <Row>
        <Col span={24}>
          <OTable columns={THistoryColumns} rows={historyData} />
        </Col>
      </Row>
    </OModal>
  );
}
