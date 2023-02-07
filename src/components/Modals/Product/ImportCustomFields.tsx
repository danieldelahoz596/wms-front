import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row, Select, Upload, Space } from 'antd';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;

interface IImportCustomFields {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportCustomFields: React.FC<IImportCustomFields> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  // const handleDownloadTemplate = () => {
  //   httpClient
  //     .post('/api/products/import_template', {}, { responseType: 'arraybuffer' })
  //     .then((res) => {
  //       const fileName = 'Excel Template for Product Import.xlsx';
  //       const url = window.URL.createObjectURL(
  //         new Blob([res.data], {
  //           type: 'application/vnd.ms-excel',
  //         }),
  //       );
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.setAttribute('download', fileName);
  //       document.body.appendChild(link);
  //       link.click();
  //       link.remove();
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <OModal
      title={'Product Custom Fields Import'}
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
        <a className="download-link">
          <u>Download the Excel Template for the Custom Field Import</u>
        </a>
        <p>
          Please note that a given product can only have up to 20 custom fields. If there are any
          issues, Skubana will take note of that SKU and log them in the <b>Import Summary</b> that
          is generated at the end, which you can use to correct any errors and re-submit.
        </p>
        <Row justify="end">
          <Col>
            <Space size={10}>
              <label>Custom File Import File:</label>
              <Upload {...fileUploadProps}>
                <Button icon={<UploadOutlined />}>Select...</Button>
              </Upload>
            </Space>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ImportCustomFields;
