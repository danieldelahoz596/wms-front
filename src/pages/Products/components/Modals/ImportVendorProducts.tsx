import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { Col, Row } from 'antd';

interface IImportVendorProductsModal {
  isOpen: boolean;
  onClose: () => void;
  onClick: (value: any) => void;
}

const ImportVendorProductsModal: React.FC<IImportVendorProductsModal> = ({ isOpen, onClose, onClick }) => {
  return (
    <OModal
      title="Select How To Import Vendor Products"
      helpLink="/help/products/import/vendorproducts"
      width={400}
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
      <>
        <p>
          Skubana gives you the option to import your vendor products by uploading an individial file for each vendor, or by
          importing one global file that contains all your vendor products.
        </p>

        <Row gutter={10}>
          <Col span={12}>
            <OButton
              btnText={'Import By Vendor'}
              onClick={() => onClick(modalType.ImportVendorProductsByVendor)}
              style={{ width: '100%', marginBottom: 10 }}
            />
            <p>Import vendor products using an individual file for each vendor.</p>
          </Col>
          <Col span={12}>
            <OButton
              btnText={'Import All At Once'}
              onClick={() => onClick(modalType.ImportVendorProductsAll)}
              style={{ width: '100%', marginBottom: 10 }}
            />
            <p>Import all your vendor products with one file that includes vendor names.</p>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ImportVendorProductsModal;
