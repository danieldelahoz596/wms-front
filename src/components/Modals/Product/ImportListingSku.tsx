import { OModal } from '@/components/Globals/OModal';
import { Button, Select, Upload } from 'antd';
import { fileUploadProps } from '@/utils/helpers/base';
import { UploadOutlined } from '@ant-design/icons';
import { OInput } from '@/components/Globals/OInput';
import { modalType } from '@/utils/helpers/types';
const { Option } = Select;

interface IImportListingSku {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const ImportListingSku: React.FC<IImportListingSku> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title={'LISTING SKU IMPORT'}
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
          onClick: () => onSave(modalType.ImportListingSkusSummary),
        },
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <p>
          Batch imports of Sales Channel Listing SKUs for products are done through the Microsoft
          Excel Spreadsheet format.
        </p>
        <a href="#" style={{ display: 'block', textAlign: 'center', margin: '1rem 0' }}>
          Download the Excel Template for Listing SKU Import
        </a>
        <p>
          To reconcile your product Master SKUs with sales channel Listing SKUs, simply use the
          provided template and upload the data for each sales channel.
        </p>
        <br />
        <p>
          All product listings for a channel are uniquely identified by the{' '}
          <strong>Listing SKU</strong>, and those SKU's <strong>are not</strong> case sensitive. For
          example, 'sku123' <b>is regarded the same as</b> 'SKU123' by the system. The same applies
          for product's Master SKU's.
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
              <strong>SALES CHANNEL</strong>
            </div>
            <OInput
              type="select"
              name="salesChannel"
              onChange={() => {}}
              defaultValue={'manualOrders'}
              options={[{ value: 'manualOrders', text: 'Manual Orders' }]}
            />
          </div>
          <Upload {...fileUploadProps}>
            <span>Excel File: </span>
            <Button icon={<UploadOutlined />}>SELECT...</Button>
          </Upload>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
          <p>Update exiting products if changes found in the Excel file?</p>
          <Select placeholder="Yes - Update existing products and import n...">
            <Option value="1">Yes - Update existing products and import new.</Option>
            <Option value="2">No - Ignore exisiting products only import new.</Option>
          </Select>
        </div>
      </div>
    </OModal>
  );
};

export default ImportListingSku;
