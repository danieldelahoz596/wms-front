import { OModal } from '@/components/Globals/OModal';
import { Row, Col, Input, Card, Form, Checkbox } from 'antd';
import React, { useEffect } from 'react';
const { TextArea } = Input;

interface IStockLocationChangeModal {
  isOpen: boolean;
  vendorName: string;
  locationName: string;
  onClose: () => void;
  onSave: (values: any) => void;
}

const StockLocationChangeModal: React.FC<IStockLocationChangeModal> = ({ isOpen, vendorName, locationName, onClose, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isOpen) {
      form.setFieldsValue({ name: locationName });
    }
  }, [isOpen, form, locationName]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  return (
    <OModal
      title="In-House Warehouse - Change Stock Location"
      helpLink=""
      width={500}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'close',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'save',
          type: 'default',
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <Row justify="center">
          <Col>
            <h2>{vendorName}</h2>
          </Col>
        </Row>
        <Form layout="vertical" style={{ marginTop: 10 }} form={form}>
          <Card title="Location">
            <Form.Item name="name" rules={[{ required: true, message: 'Please input the location name' }]}>
              <Input />
            </Form.Item>

            <Checkbox.Group
              options={[
                {
                  label: 'Is Pickable?',
                  value: 'is_pickable',
                },
                {
                  label: 'Is Receivable?',
                  value: 'is_receivable',
                },
              ]}
              style={{ marginTop: 10 }}
            />
          </Card>

          <Form.Item label="Edit Notes:">
            <TextArea />
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default StockLocationChangeModal;
