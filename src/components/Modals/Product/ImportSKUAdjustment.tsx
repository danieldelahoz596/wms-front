import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row, Upload } from 'antd';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';

interface IImportSKUAdjustment {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportSKUAdjustment: React.FC<IImportSKUAdjustment> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  return (
    <OModal
      title={'SKU Adjustment Import'}
      width={600}
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
          btnLabel: 'CONTINUE',
          onClick: handleSave,
        },
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <p>
          All batch imports into Skubana are done through the Microsoft Excel spreadsheet format.
        </p>
        <a style={{ display: 'block', textAlign: 'center', margin: '1rem 0' }}>
          Download the Excel Template for Product Import
        </a>
        <p>
          Every product is uniquely identified by its <u>Internal SKU</u>, and those SKU's are not
          case sensitive. For example, 'sku123' is regarded the same as 'SKU123' by the system.
        </p>
        <p>
          This import is for adjusting SKUs in bulk. If there are any issues, Skubana will take not
          of that SKU and long them in the <b>Import Summary</b> that is generated at the end, which
          you can use to correct any errors and re-submit
        </p>
        <br />
        <Row justify="end">
          <Col>
            SKU Adjustment File:{' '}
            <Upload {...fileUploadProps}>
              <Button icon={<UploadOutlined />}>SELECT...</Button>
            </Upload>
          </Col>
        </Row>
      </div>
    </OModal>
  );
};

export default ImportSKUAdjustment;
