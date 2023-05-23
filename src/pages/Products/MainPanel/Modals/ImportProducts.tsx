import { OModal } from '@/components/Globals/OModal';
import { UploadOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Button, Select, Upload, message } from 'antd';
import type { RcFile } from 'antd/es/upload/interface';
import { useState } from 'react';

interface IImportProductModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportProductModal: React.FC<IImportProductModal> = ({ isOpen, onClose, onSave }) => {
  const [file, setFile] = useState<RcFile>();
  const { handleImportProductsToCSV, getProductList } = useModel('product');
  const { getBrands } = useModel('brand');
  const { getCategories } = useModel('category');
  const { getLabels } = useModel('label');

  const beforeUpload = (data: RcFile) => {
    const isCsv = data.type === 'text/csv';
    if (!isCsv) {
      message.error('You can only upload CSV file!');
    }
    const isLt2M = data.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    setFile(data);
    return isCsv && isLt2M;
  };

  const handleSave = () => {
    const formData = new FormData();
    formData.append('file', file, 'file');
    handleImportProductsToCSV(formData).then(() => {
      message.success('Success to upload the CSV file');
      onSave();
      getProductList();
      getBrands();
      getCategories();
      getLabels();
    });
    // onSave();
  };

  return (
    <OModal
      title="Product Import"
      helpLink="/help/products/import/products"
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
        <p>All batch imports into Skubana are done through the Microsoft Excel spreadsheet format.</p>
        <a className="download-link" href={`${BACKEND_URL}/template/template_for_product_import.xlsx`}>
          <u>Download the Excel Template for Product Import</u>
        </a>
        <p>
          Every product is uniquely identified by its <b>Internal SKU</b>
          {`, and those SKU's are`}
          <i>
            <strong> not </strong>
          </i>
          case sensitive. For example, <i>{`'sku123'`}</i>
          is regarded the same as <i>{`'SKU123'`}</i> by the system.
        </p>
        <p>
          If Skubana encounters duplicate SKU values in your Excel file, it will process the first encounter of that product with
          that SKU and disregard all remaining products with that SKU and log them in the <b>Import Summary</b> that is generated
          at the end, which you can use to correct duplicate values and re-submit.
        </p>
        <div style={{ textAlign: 'right', marginTop: 20 }}>
          <div>
            <span>Products File: &nbsp;</span>
            <Upload name="upload" showUploadList={false} beforeUpload={beforeUpload}>
              <Button icon={<UploadOutlined />}>Select...</Button>
            </Upload>
          </div>
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

export default ImportProductModal;
