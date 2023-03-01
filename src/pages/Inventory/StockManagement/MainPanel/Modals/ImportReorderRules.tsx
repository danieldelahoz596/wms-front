import { OModal } from '@/components/Globals/OModal';
import { fileUploadProps } from '@/utils/helpers/base';
import { FolderOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

interface IImportReorderRulesModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportReorderRulesModal: React.FC<IImportReorderRulesModal> = ({ isOpen, onClose, onSave }) => {
  return (
    <OModal
      title="Product Auto-Reorder Rules Import"
      helpLink=""
      width={700}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'close',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'save',
          type: 'default',
          btnLabel: 'Save',
          onClick: onSave,
        },
      ]}
    >
      <>
        <div style={{ fontSize: 14 }}>
          Batch imports of P.O. Auto-Reorder Rules are down through the Microsoft Excel spreadsheet format.
        </div>
        <a style={{ color: '#5f5fff', fontSize: 14 }}>
          <u>Download the Excel Template for Auto-Reorder Rules Import</u>
        </a>
        <div style={{ fontSize: 14, marginTop: 10 }}>
          All products are uniquely identified by the <b>Master SKU, </b> and those {`SKU's`} are <b>not</b> case sensitive. For
          example,{' '}
          {`'sku123' is regarded the same as 'SKU123' by the system. All of the following columns are required for each product:`}
        </div>
        <div style={{ marginTop: 10, marginBottom: 5, fontSize: 14 }}>
          <b>1. Velocity Days Back</b>
          {` - The date range for which Skubana should calculate a product's sales velocity.`}
        </div>
        <div style={{ marginTop: 5, marginBottom: 5, fontSize: 14 }}>
          <b>2. Desired Days in Stock</b>
          {` - The number of days a product must be in stock once replenished.`}
        </div>
        <div style={{ marginTop: 5, marginBottom: 5, fontSize: 14 }}>
          <b>3. Forecasted Growth</b>
          {` - Expected % change in a product's sales velocity. The number can be negative.`}
        </div>
        <div style={{ marginTop: 5, marginBottom: 5, fontSize: 14 }}>
          <b>4. Buffer (Safety) days</b>
          {` - Days to order before lead time to allow for vendor to respond to a P.O. request.`}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            marginLeft: 5,
            marginTop: 20,
          }}
        >
          <div style={{ marginRight: 10, fontSize: 14 }}>Auto-Reorder Rules Excel Files:</div>
          <Upload {...fileUploadProps}>
            <Button icon={<FolderOutlined />}>Select...</Button>
          </Upload>
        </div>
      </>
    </OModal>
  );
};

export default ImportReorderRulesModal;
