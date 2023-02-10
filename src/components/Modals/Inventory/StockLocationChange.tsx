import { OModal } from '@/components/Globals/OModal';
import { Row, Col, Input, Card, Form, Checkbox } from 'antd';
import React, { useEffect, useState } from 'react';
const { TextArea } = Input;

interface IStockLocationChangeModal {
  isOpen: boolean;
  vendorName: string;
  locationName: string;
  onClose: () => void;
  onSave: (name: string) => void;
}

const StockLocationChangeModal: React.FC<IStockLocationChangeModal> = ({
  isOpen,
  vendorName,
  locationName,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(locationName);
  }, [isOpen]);

  return (
    <OModal
      title="In-House Warehouse - Change Stock Location"
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
          onClick: () => onSave(name),
        },
      ]}
    >
      <Row justify="center">
        <Col>
          <h2>{vendorName}</h2>
        </Col>
      </Row>
      <Card title="Location">
        <Input value={name} onChange={(e) => setName(e.target.value)} />

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

      <Form layout="vertical" style={{ marginTop: 10 }}>
        <Form.Item label="Edit Notes:">
          <TextArea />
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default StockLocationChangeModal;
