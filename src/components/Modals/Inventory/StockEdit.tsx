import { OModal } from '@/components/Globals/OModal';
import { Row, Col, Input, Form, InputNumber } from 'antd';
import React, { useEffect, useState } from 'react';
const { TextArea } = Input;

interface IStockEditModal {
  isOpen: boolean;
  vendorName: string;
  locationInfo: any;
  actionType: string;
  onClose: () => void;
  onSave: (count: any) => void;
}

const StockEditModal: React.FC<IStockEditModal> = ({
  isOpen,
  vendorName,
  locationInfo,
  actionType,
  onClose,
  onSave,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
  }, [isOpen]);

  return (
    <OModal
      title={`In-House Warehouse - ${actionType} Stock`}
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
          onClick: () => onSave(count),
        },
      ]}
    >
      <>
        <Row justify="center">
          <Col>
            <h1>{vendorName}</h1>
          </Col>
        </Row>

        <div style={{ position: 'relative' }}>
          <h2 style={{ textAlign: 'center' }}>
            Available stock at <u>{`${locationInfo?.location}`}</u>{' '}
          </h2>
          <h2
            style={{ position: 'absolute', top: 0, left: 440 }}
          >{`${locationInfo?.available}`}</h2>
        </div>

        <Form layout="inline" style={{ marginTop: 10 }} labelCol={{ span: 6 }}>
          <Form.Item label={`${actionType}`} style={{ marginLeft: 'auto' }}>
            <InputNumber
              style={{ width: '100%' }}
              value={count}
              min={0}
              max={actionType === 'Remove' && locationInfo?.available}
              onChange={(value) => setCount(value)}
            />
          </Form.Item>
        </Form>

        <Form layout="vertical" style={{ marginTop: 10 }}>
          <Form.Item label="Edit Notes:">
            <TextArea />
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default StockEditModal;
