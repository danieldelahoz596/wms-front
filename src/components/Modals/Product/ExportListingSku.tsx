import { OModal } from '@/components/Globals/OModal';
import { OInput } from '@/components/Globals/OInput';

interface IExportListingSku {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExportListingSku: React.FC<IExportListingSku> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  return (
    <OModal
      title={'EXPORT LISTING SKUS'}
      width={800}
      centered
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <p>
          Export of Sales Channel Listing SKUs is generated in the Microsoft Excel spreadsheet
          format and will be emailed to you shortly
        </p>
        <p>
          While <strong>Master SKUs are not</strong> case-sensitive,{' '}
          <strong>Listing SKUs are</strong> Listing SKUs should be entered exactly the same as they
          appear on your sales channel(s). Ensure that your Listing SKUs do not include any
          extraneous characters before or after them, including spaces or dashes.
        </p>

        <div style={{ margin: '0 1rem' }}>
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
      </div>
    </OModal>
  );
};

export default ExportListingSku;
