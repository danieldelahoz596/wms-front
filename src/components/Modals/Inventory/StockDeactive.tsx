import { OModal } from '@/components/Globals/OModal';
import { Row, Col, Typography, Input, Form } from 'antd';
import React from 'react';
const { TextArea } = Input;

interface IStockDeactiveModal {
  isOpen: boolean;
  subTitle: string;
  active: boolean;
  onClose: () => void;
  onSave: () => void;
}

const StockDeactiveModal: React.FC<IStockDeactiveModal> = ({
  isOpen,
  subTitle,
  active,
  onClose,
  onSave,
}) => {
  return (
    <OModal
      title="In-House Warehouse - Deactive Stock"
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
          onClick: onSave,
        },
      ]}
    >
      <>
        <Row justify="center">
          <Col>
            <h2>{subTitle}</h2>
          </Col>
        </Row>
        <Typography style={{ marginTop: '5px' }}>
          <Typography.Paragraph
            style={{
              backgroundColor: '#DEE0FF',
              color: 'black',
              fontSize: '12px',
              paddingLeft: 5,
              paddingRight: 5,
              paddingTop: 10,
              paddingBottom: 5,
            }}
          >
            {active ? 'Deactivating' : 'Activating'} this stock will subtract all of its available
            inventory from associated product listings
          </Typography.Paragraph>
        </Typography>

        <Form layout="vertical">
          <Form.Item label="Edit Notes:">
            <TextArea />
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default StockDeactiveModal;
