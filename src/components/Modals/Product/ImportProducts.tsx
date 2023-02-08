import { OModal } from '@/components/Globals/OModal';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Select, Upload } from 'antd';
const { Option } = Select;

interface IImportProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportProduct: React.FC<IImportProduct> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  return (
    <OModal
      title={'Product Import'}
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
          All batch imports into Skubana are done through the Microsoft Excel spreadsheet format.
        </p>
        <a
          className="download-link"
          href={`${BACKEND_URL}/template/template_for_product_import.xlsx`}
        >
          <u>Download the Excel Template for Product Import</u>
        </a>
        <p>
          Every product is uniquely identified by its <b>Internal SKU</b>, and those SKU's are
          <i>
            <strong> not </strong>
          </i>
          case sensitive. For example, <i>'sku123' </i>
          is regarded the same as <i>'SKU123'</i> by the system.
        </p>
        <p>
          If Skubana encounters duplicate SKU values in your Excel file, it will process the first
          encounter of that product with that SKU and disregard all remaining products with that SKU
          and log them in the <b>Import Summary</b> that is generated at the end, which you can use
          to correct duplicate values and re-submit.
        </p>
        <div style={{ textAlign: 'right', marginTop: 20 }}>
          <span>Products File: &nbsp;</span>
          <Upload {...fileUploadProps}>
            <Button icon={<UploadOutlined />}>Select...</Button>
          </Upload>
          <span>Update existing products if changes found in the Excel file? &nbsp;</span>
          <Select
            placeholder="Yes - Update existing products and import new"
            defaultValue="update"
            size="small"
            options={[
              { value: 'update', label: 'Yes - Update existing products and import new.' },
              { value: 'ignore', label: 'No - Ignore exisiting products; only import new.' },
            ]}
            style={{ marginTop: 10, width: 250, textAlign: 'left' }}
          />
        </div>
      </>
    </OModal>
  );
};

export default ImportProduct;
