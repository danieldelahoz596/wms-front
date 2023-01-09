import { OModal } from '@/components/Globals/OModal';
import { OButton } from '@/components/Globals/OButton';
import { modalType } from '@/utils/helpers/types';

interface IImportVendorProduct {
  isOpen: boolean;
  onClose: () => void;
  onClick: (value: any) => void;
}

const ImportVendorProduct: React.FC<IImportVendorProduct> = ({ isOpen, onClose, onClick }) => {
  return (
    <OModal
      title={'SELECT HOW TO IMPORT VENDOR PRODUCTS'}
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
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <p>
          Skubana gives you the option to import your vendor products by uploading an individial
          file for each vendor, or by importing one global file that contains all your vendor
          products.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <OButton
              type="dashed"
              btnText={'IMPORT BY VENDOR'}
              onClick={() => onClick(modalType.VendorProductImportByVendor)}
            />
            <p>Import vendor products using an individual file for each vendor.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <OButton
              type="dashed"
              btnText={'IMPORT ALL AT ONCE'}
              onClick={() => onClick(modalType.VendorProductImportOnce)}
            />
            <p>Import all your vendor products in one file that includes vendor names.</p>
          </div>
        </div>
      </div>
    </OModal>
  );
};

export default ImportVendorProduct;
