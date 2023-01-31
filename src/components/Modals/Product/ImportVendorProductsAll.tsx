import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row, Select, Upload } from 'antd';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
import { modalType } from '@/utils/helpers/types';
const { Option } = Select;

interface IVendorProductImportAtOnce {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const VendorProductImportAtOnce: React.FC<IVendorProductImportAtOnce> = ({
  isOpen, onClose, onSave,
}) => {
  return (
    <OModal
      title={'GLOBAL VENDOR PRODUCT IMPORT'}
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
          onClick: () => onSave(modalType.ImportVendorProductsSummary),
        },
      ]}
    >
      <>
        <p>Batch import of Vendor products is done through the Microsoft Excel spreadsheet format.</p>
        <a
          // onClick={handleDownloadTemplate}
          className="download-link"
        >
          <u>Download the Excel Template for Global Vendor Product Import</u>
        </a>
        <p>To associate your product Master SKUs with Vendor Names and SKUs, simply use the provided template.</p>
        <p>
          <b>Vendor name</b> must be <b>unique</b> for each vendor and are not
          case sensitive. <b>Vendor SKUs are <i>not</i> case sensitive.</b> For example, <i>'sku123'</i>{' '}
          <b>is regarded the same as</b> <i>'SKU123'</i> by the system. The same applies for product's
          Master SKUs.
        </p>
        <Row>
          <Col >
            <label>Excel File:</label>&nbsp;&nbsp;
            <Upload {...fileUploadProps}>
              <Button icon={<UploadOutlined />}>Select...</Button>
            </Upload>
          </Col>
          <Col style={{ marginTop: '1rem' }}>
            <label>Update existing SKUs if changes found in the Excel file?</label>&nbsp;&nbsp;
            <Select placeholder="Yes - Update existing SKUs and import new.">
              <Option value="1">Yes - Update existing SKUs and import new.</Option>
              <Option value="2">No - Ignore exisiting SKUs only import new.</Option>
            </Select>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default VendorProductImportAtOnce;
