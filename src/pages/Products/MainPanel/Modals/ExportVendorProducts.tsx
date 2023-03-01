import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { Col, Row } from 'antd';

interface IExportVendorProductModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExportVendorProductModal: React.FC<IExportVendorProductModal> = ({ isOpen, onClose }) => {
  return (
    <OModal
      title="Select How To Export Vendor Products"
      helpLink="/help/products/export/vendorproducts"
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
          Skubana gives you the option to export vendor products by downloading an individial file for each vendor, or by
          exporting one global file that contains all your vendor products.
        </p>

        <Row gutter={16}>
          <Col span={12}>
            <OButton btnText={'Export By Vendor'} style={{ width: '100%', marginBottom: 10 }} />
            <p>Export vendor products through individual file for each vendor.</p>
          </Col>
          <Col span={12}>
            <OButton btnText={'Export All At Once'} style={{ width: '100%', marginBottom: 10 }} />
            <p>Export all your vendor products in one file that includes vendor names.</p>
          </Col>
        </Row>
      </>
    </OModal>
  );
};

export default ExportVendorProductModal;
