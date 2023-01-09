import { OTable } from '@/components/Globals/OTable';
import { useModel } from '@umijs/max';
import { Modal, Row, Col } from 'antd';
import moment from 'moment';

export default function EditHistoryModal({ isOpen, onSave, onClose }) {
  const { selectedVendor } = useModel('vendor');

  const THistoryColumns = [
    {
      title: 'Edit Time',
      dataIndex: 'editTime',
      key: 'editTime',
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
    },
    {
      title: 'Changed Values',
      dataIndex: 'changedValues',
      key: 'changedValues',
    },
  ];

  const historyData = selectedVendor
    ? selectedVendor.edit_history?.map((_item) => ({
        editTime: moment(_item.created_at).format('M/D/Y h:mm A'),
        vendor: selectedVendor.name,
        changedValues: _item.details?.toUpperCase(),
      }))
    : [];

  return (
    <Modal
      title="VENDOR EDIT HISTORY"
      centered
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
