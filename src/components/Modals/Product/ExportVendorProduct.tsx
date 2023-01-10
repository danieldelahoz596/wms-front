import { OModal } from '@/components/Globals/OModal';
import { OButton } from '@/components/Globals/OButton';

interface IExportVendorProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExportVendorProduct: React.FC<IExportVendorProduct> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  return (
    <OModal
      title={'SELECT HOW TO EXPORT VENDOR PRODUCTS'}
      width={400}
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
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <p>
          Skubana gives you the option to export vendor products by downloading an individial file
          for each vendor, or by exporting one global file that contains all your vendor products.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <OButton type="dashed" btnText={'EXPORT BY VENDOR'} />
            <p>Export vendor productS through individual file for each vendor.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <OButton type="dashed" btnText={'EXPORT ALL AT ONCE'} />
            <p>Export all your vendor products in one file that includes vendor names.</p>
          </div>
        </div>
      </div>
    </OModal>
  );
};

export default ExportVendorProduct;
