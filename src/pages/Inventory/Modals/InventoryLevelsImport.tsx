import { OModal } from '@/components/Globals/OModal';
import { Button, Select, Upload } from 'antd';
import { fileUploadProps } from '@/utils/helpers/base';
import { FolderOutlined } from '@ant-design/icons';

interface IInventoryLevelsImportModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  warehouseName: string;
}

const InventoryLevelsImportModal: React.FC<IInventoryLevelsImportModal> = ({ isOpen, onClose, onSave, warehouseName }) => {
  return (
    <OModal
      title="Warehouse Minimum Inventory Levels Import"
      helpLink=""
      width={800}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
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
      <div style={{ fontSize: 14 }}>
        <p>
          To configure the stock quantities at which Skubana will send alerts to reorder a particular product within a warehouse,
          simply set your minimum inventory levels
        </p>

        <p>
          Batch imports of minimum inventory levels for a warehouse are done through the Microsoft Excel spreadsheet format{' '}
          <a>
            <u>Download the Excel Template for Min. Inventory Levels Import</u>
          </a>
        </p>

        <p>
          All product stock is uniquely identified by the <b>Master SKU</b>
          {`, and those SKU's are `}
          <b>not</b> {` case sensitive. For example, 'sku123' is regarded the same as 'SKU123' by the system.`}
        </p>

        {/* <p>
          If Skubana encounters duplicate SKU/Location values in your Excel file, it will process
          the first encounter of that product stock and disregard all remaining stock with that
          SKU/Location and log it into the <b>Import Summary</b> that is generated at the end, which
          you can use to correct duplicate values and re-submit.
        </p>

        <p>
          <b>Note: </b> The brand column will <b>Not</b> import. If you want to import brand please
          use the products import.
        </p> */}

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p>
              <b>Warehouse</b>
            </p>
            <p>{warehouseName}</p>
          </div>
          <div style={{ display: 'flex' }}>
            <p style={{ marginRight: 10 }}>Excel Inventory File:</p>
            <Upload {...fileUploadProps}>
              <Button icon={<FolderOutlined color="blue" />}>Select...</Button>
            </Upload>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ marginRight: 10 }}>Update existing stock if changes found in the Excel file?</div>
          <Select
            options={[
              { value: 'yes', label: 'Yes - Update existing stock and import new.' },
              { value: 'no', label: 'No - Ignore existing stock; only import new.' },
            ]}
            style={{ width: 250 }}
          />
        </div>
      </div>
    </OModal>
  );
};

export default InventoryLevelsImportModal;
