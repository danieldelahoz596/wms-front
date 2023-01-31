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
          btnLabel: 'Continue',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <p>
          All batch imports into Skubana are done through the Microsoft Excel spreadsheet format.
        </p>
        <a
          // onClick={handleDownloadTemplate}
          className="download-link"
        >
          <u>Download the Excel Template for the Sku Adjustment Import</u>
        </a>
        <p>
          Every product is uniquely identified by its <b>Internal SKU</b>, and those SKU's are <i>not </i> 
          case sensitive. For example, <i>'sku123' </i> is regarded the same as <i>'SKU123' </i> by the system.
        </p>
        <p>
          This import is for adjusting SKUs in bulk. If there are any issues, Skubana will take not
          of that SKU and long them in the <b>Import Summary</b> that is generated at the end, which
          you can use to correct any errors and re-submit
        </p>
        <br />
        <Row>
          <Col>
            SKU Adjustment File: &nbsp;
            <Upload {...fileUploadProps}>
              <Button icon={<UploadOutlined />}>Select...</Button>
            </Upload>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ImportSKUAdjustment;
