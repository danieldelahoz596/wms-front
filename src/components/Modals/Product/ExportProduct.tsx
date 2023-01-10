import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface IExportProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExportProduct: React.FC<IExportProduct> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  return (
    <OModal
      title={'Export Product'}
      width={400}
      centered
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <p>Click Export Button to download the Excel file</p>
        <p>
          Every product is uniquely identified by its Internal SKU, and those SKU's are not case
          sensitive.
        </p>
        <Row>
          <Col span={4}>Download Here:</Col>
          <Col span={8}>
            <Button icon={<UploadOutlined />}>Click to Download</Button>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ExportProduct;
