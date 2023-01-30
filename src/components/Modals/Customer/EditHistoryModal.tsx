import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import { Modal, Row, Col } from 'antd';
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
    <Modal
      title="CUSTOMER EDIT HISTORY"
      open={isOpen}
      onOk={onSave}
      onCancel={onClose}
      width={800}
    >
      <Row>
        <Col span={24}>
          <OTable columns={THistoryColumns} rows={historyData} />
        </Col>
      </Row>
    </Modal>
  );
}
