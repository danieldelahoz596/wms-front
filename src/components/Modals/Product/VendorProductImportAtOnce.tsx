import { OModal } from '@/components/Globals/OModal';
import { Button, Select, Upload } from 'antd';
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
  isOpen,
  onClose,
  onSave,
}) => {
  return (
    <OModal
      title={'GLOBAL VENDOR PRODUCT IMPORT'}
      width={1000}
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
          onClick: () => onSave(modalType.ImportVendorProductSummary),
        },
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <p>
          Batch imports of Vendor products is done through the Microsoft Excel Spreadsheet format.
        </p>
        <a href="#" style={{ display: 'block', textAlign: 'center', margin: '1rem 0' }}>
          Download the Excel Template for Global Vendor Product Import.
        </a>
        <p>
          To associate your product Master SKUs with Vendor Names and SKUs, simply use the provided
          template.
        </p>
        <br />
        <p>
          <strong>Vendor name</strong> must be <strong>unique</strong> for each vendor and are not
          case sensitive. <strong>Vendor SKUs are not case sensitive.</strong> For example, 'sku123'{' '}
          <b>is regarded the same as</b> 'SKU123' by the system. The same applies for product's
          Master SKU's.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-between',
            margin: '1rem 0',
          }}
        >
          <div>&nbsp;</div>
          <Upload {...fileUploadProps}>
            <span>Excel File: </span>
            <Button icon={<UploadOutlined />}>SELECT...</Button>
          </Upload>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
          <p>Update exiting SKUs if changes found in the Excel file?</p>
          <Select placeholder="Yes - Update existing SKUs and import new.">
            <Option value="1">Yes - Update existing SKUs and import new.</Option>
            <Option value="2">No - Ignore exisiting SKUs only import new.</Option>
          </Select>
        </div>
      </div>
    </OModal>
  );
};

export default VendorProductImportAtOnce;
