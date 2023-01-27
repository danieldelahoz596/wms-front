import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row, Select, Upload } from 'antd';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
import httpClient from '@/utils/http-client';
const { Option } = Select;

interface IImportProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportProduct: React.FC<IImportProduct> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  const handleDownloadTemplate = () => {
    httpClient
      .post('/api/products/import_template', {}, { responseType: 'arraybuffer' })
      .then((res) => {
        const fileName = 'Excel Template for Product Import.xlsx';
        const url = window.URL.createObjectURL(
          new Blob([res.data], {
            type: 'application/vnd.ms-excel',
          }),
        );
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch((error) => console.log(error));
  };

  return (
    <OModal
      title={'Product Import'}
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
        <a
          style={{ display: 'block', textAlign: 'center', margin: '1rem 0', fontSize: '1rem' }}
          onClick={handleDownloadTemplate}
        >
          <u>Download the Excel Template for Product Import</u>
        </a>
        <p>
          Every product is uniquely identified by its <b>Internal SKU</b>, and those SKU's are 
          <i><strong> not</strong></i> case sensitive. For example, <i>'sku123' </i>
          is regarded the same as <i>'SKU123'</i> by the system.
        </p>
        <p>
          If Skubana encounters duplicate SKU values in your Excel file, it will process the first
          encounter of that product with that SKU and disregard all remaining products with that SKU
          and log them in the <b>Import Summary</b> that is generated at the end, which you can use
          to correct duplicate values and re-submit.
        </p>
        <Row >
          <Col offset={16} span={8} style={{ textAlign: 'right' }}>
            <label>Products File:</label>&nbsp;&nbsp;
            <Upload {...fileUploadProps}>
              <Button icon={<UploadOutlined />}>SELECT...</Button>
            </Upload>
          </Col>
          <Col span={24} style={{ textAlign: 'right', marginTop: '1rem' }}>
            <label>Update existing products if changes found in the Excel file?</label>&nbsp;&nbsp;
            <Select placeholder="Yes - Update existing products and import new" style={{ textIndent: '0.5rem' }}>
              <Option value="1">Yes - Update existing products and import new.</Option>
              <Option value="2">No - Ignore exisiting products; only import new.</Option>
            </Select>
          </Col>
        </Row>
      </div>
    </OModal>
  );
};

export default ImportProduct;
