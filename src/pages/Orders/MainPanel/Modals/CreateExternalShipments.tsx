import { useState, useEffect } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Form, Input, Select, Button, Row, Col, DatePicker } from 'antd';
import { CaretRightFilled, CloseCircleFilled } from '@ant-design/icons';
import { EditableTable } from '@/components/Globals/EditableTable';

interface ICreateExternalShipmentsModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  items: any[];
}

const CreateExternalShipmentsModal: React.FC<ICreateExternalShipmentsModal> = ({ isOpen, onClose, onSave, items }) => {
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    setTableRows(items.map((item) => ({ ...item, key: item.id })));
  }, [items]);

  const handleRemove = (id) => {
    setTableRows(tableRows.filter((item) => item.id !== id));
  };

  const TColumns = [
    {
      key: 'action',
      title: '',
      dataIndex: 'id',
      render: (id) => (
        <span onClick={() => handleRemove(id)}>
          <CloseCircleFilled />
        </span>
      ),
    },
    {
      key: 'order_number',
      dataIndex: 'order_number',
      title: 'Order Number',
    },
    {
      key: 'tracking_number',
      dataIndex: 'tracking_number',
      title: 'Tracking Number',
      editable: true,
    },
    {
      key: 'shipping_carrier',
      dataIndex: 'shipping_carrier',
      title: 'Shipping Carrier',
      options: [{ value: 'deliverr', label: 'Deliverr' }],
      editable: true,
    },
    {
      key: 'carrier_fee',
      dataIndex: 'carrier_fee',
      title: 'Carrier Fee',
      editable: true,
    },
    {
      key: 'notify',
      dataIndex: 'notify',
      title: 'Notify Customer (Yes/No)',
      options: [
        { value: false, label: 'No' },
        { value: true, label: 'Yes' },
      ],
      editable: true,
    },
    {
      key: 'update',
      dataIndex: 'update',
      title: 'Update Channel (Yes/No)',
      options: [
        { value: false, label: 'No' },
        { value: true, label: 'Yes' },
      ],
      editable: true,
    },
    {
      key: 'ship_date',
      dataIndex: 'ship_date',
      title: 'Ship Date',
      editable: true,
    },
  ];

  return (
    <OModal
      title="Create External Shipments"
      width={MODAL_WIDTH}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Mark Shipped',
          onClick: onSave,
        },
      ]}
    >
      <>
        <p>
          External shipments are any shipments that wre not processed through {"Skubana's"} shipping module. THis includes
          shipments for orders that were fulfilled by a channel (e.g. Amazon FBA), a 3PL, a dropship vendor, or any source outside
          of Skubana. Orders pending multichannel fulfillment will not be shown here.
        </p>

        <Row align="middle">
          <Col span={4}>
            <h2>Bulk Selection</h2>
          </Col>
          <Col span={20}>
            <Form layout="vertical">
              <Row gutter={10}>
                <Col>
                  <Form.Item label="Artifical Tracking">
                    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                      <Form.Item style={{ flex: 1 }}>
                        <Input />
                      </Form.Item>
                      <Button icon={<CaretRightFilled />} />
                    </div>
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="Select Carrier">
                    <Select options={[{ value: 'deliverr', label: 'Deliverr' }]} style={{ width: 80 }} />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="Carrier Fed">
                    <Input />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="Notify?">
                    <Select
                      options={[
                        { value: false, label: 'No' },
                        { value: true, label: 'Yes' },
                      ]}
                      style={{ width: 50 }}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="Update?">
                    <Select
                      options={[
                        { value: false, label: 'No' },
                        { value: true, label: 'Yes' },
                      ]}
                      style={{ width: 50 }}
                    />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="Date">
                    <DatePicker />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <EditableTable
          columns={TColumns}
          pagination={false}
          dataSource={tableRows}
          handleSave={(key: any, name: any, value: any) => {
            console.log('key: ', key);
            setTableRows(tableRows.map((row) => (row.id === key ? { ...row, [name]: value } : row)));
          }}
        />
      </>
    </OModal>
  );
};

export default CreateExternalShipmentsModal;
