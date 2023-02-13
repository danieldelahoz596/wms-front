import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import { Row, Col } from 'antd';
import moment from 'moment';

export default function EditHistoryModal({ isOpen, onSave, onClose }) {
  const { selectedCustomer } = useModel('customer');

  const THistoryColumns = [
    {
      title: 'Edit Time',
      dataIndex: 'editTime',
      key: 'editTime',
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: 'Changed Values',
      dataIndex: 'changedValues',
      key: 'changedValues',
    },
  ];

  const historyData = selectedCustomer
    ? selectedCustomer.edit_history?.map((_item) => ({
        editTime: moment(_item.created_at).format('M/D/Y h:mm A'),
        user: selectedCustomer.name,
        changedValues: _item.details?.toUpperCase(),
      }))
    : [];

  return (
    <OModal
      title="CUSTOMER EDIT HISTORY"
      helpLink="/help/customers/module"
      width={800}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
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
