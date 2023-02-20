import { OModal } from '@/components/Globals/OModal';
import { Button, Upload } from 'antd';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
interface IImportCustomFieldsModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportCustomFieldsModal: React.FC<IImportCustomFieldsModal> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const handleSave = () => onSave();

  return (
    <OModal
      title="Product Custom Fields Import"
      helpLink=""
      width={550}
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
          All custom field imports into Skubana are done through the Microsoft Excel spreadsheet
          format.
        </p>
        <a
          className="download-link"
          href={`${BACKEND_URL}/template/template_for_custom_field_import.xlsx`}
        >
          <u>Download the Excel Template for the Custom Field Import</u>
        </a>
        <p>
          Please note that a given product can only have up to 20 custom fields. If there are any
          issues, Skubana will take note of that SKU and log them in the <b>Import Summary</b> that
          is generated at the end, which you can use to correct any errors and re-submit.
        </p>
        <div style={{ textAlign: 'right', marginTop: 20 }}>
          <span>Custom File Import File: &nbsp;</span>
          <Upload {...fileUploadProps}>
            <Button icon={<UploadOutlined />}>Select...</Button>
          </Upload>
        </div>
      </>
    </OModal>
  );
};

export default ImportCustomFieldsModal;
