import { OModal } from '@/components/Globals/OModal';
import { Button, Select, Upload } from 'antd';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
import { OInput } from '@/components/Globals/OInput';
import { modalType } from '@/utils/helpers/types';
const { Option } = Select;

interface IVendorProductImportByVendor {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const VendorProductImportByVendor: React.FC<IVendorProductImportByVendor> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  return (
    <OModal
      title={'VENDOR PRODUCT IMPORT BY VENDOR'}
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
          onClick: () => onSave(modalType.ImportVendorProductSummary),
        },
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <p>
          Batch import of Vendor products is done through the Microsoft Excel spreadsheet format.
        </p>
        <a href="#" style={{ display: 'block', textAlign: 'center', margin: '1rem 0' }}>
          Download the Excel Template for Vendor Product Import By Vendor
        </a>
        <p>
          To associate your product Master SKUs with Vendor SKUs, simply use the provided template
          and upload the data for each vendor.
        </p>
        <br />
        <p>
          <strong>Vendor SKUs, are <i>not</i> case sensitive.</strong> For example, <i>'sku123'</i>{' '}
          <b>is regarded the same as</b> <i>'SKU123'</i> by the system. The same applies for product's
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
          <div>
            <div>
              <strong>VENDOR</strong>
            </div>
            <OInput
              type="select"
              name="vendor"
              onChange={() => {}}
              defaultValue={'vendor-1'}
              options={[{ value: 'vendor-1', text: 'Vendor-1' }]}
            />
          </div>
          <Upload {...fileUploadProps}>
            <span>Excel File: </span>
            <Button icon={<UploadOutlined />}>SELECT...</Button>
          </Upload>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
          <p>Update existing SKUs if changes found in the Excel file?</p>
          <Select placeholder="Yes - Update existing SKUs and import new.">
            <Option value="1">Yes - Update existing SKUs and import new.</Option>
            <Option value="2">No - Ignore exisiting SKUs only import new.</Option>
          </Select>
        </div>
      </div>
    </OModal>
  );
};

export default VendorProductImportByVendor;
