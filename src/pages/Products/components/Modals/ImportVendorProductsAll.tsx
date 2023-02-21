import { OModal } from '@/components/Globals/OModal';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Select, Upload } from 'antd';

interface IVendorProductImportAtOnceModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const VendorProductImportAtOnceModal: React.FC<IVendorProductImportAtOnceModal> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  return (
    <OModal
      title="Global Vendor Product Import"
      helpLink="/help/products/import/vendorproducts"
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
          onClick: onSave,
        },
      ]}
    >
      <>
        <p>
          Batch import of Vendor products is done through the Microsoft Excel spreadsheet format.
        </p>
        <a
          className="download-link"
          href={`${BACKEND_URL}/template/template_for_global_vendor_product_import.xlsx`}
        >
          <u>Download the Excel Template for Global Vendor Product Import</u>
        </a>
        <p>
          To associate your product Master SKUs with Vendor Names and SKUs, simply use the provided
          template.
        </p>
        <p>
          <b>Vendor name</b> must be <b>unique</b> for each vendor and are not case sensitive.
          <b>
            Vendor SKUs are <i>not</i> case sensitive.
          </b>{' '}
          For example, <i>{"'sku123'"} </i>
          <b>is regarded the same as</b> <i>{"'SKU123'"}</i> by the system. The same applies for
          {"product's Master SKUs."}
        </p>
        <div style={{ textAlign: 'right', marginTop: 20 }}>
          <span>Excel File: &nbsp;</span>
          <Upload {...fileUploadProps}>
            <Button icon={<UploadOutlined />}>Select...</Button>
          </Upload>
          <span>Update existing SKUs if changes found in the Excel file? &nbsp;</span>
          <Select
            placeholder="Yes - Update existing SKUs and import new"
            defaultValue="update"
            size="small"
            options={[
              { value: 'update', label: 'Yes - Update existing SKUs and import new.' },
              { value: 'ignore', label: 'No - Ignore exisiting SKUs only import new.' },
            ]}
            style={{ marginTop: 10, width: 250, textAlign: 'left' }}
          />
        </div>
      </>
    </OModal>
  );
};

export default VendorProductImportAtOnceModal;
