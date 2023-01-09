import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CheckCircleOutlined, PlusCircleOutlined, WarningOutlined } from '@ant-design/icons';

interface IImportExportSummary {
  title: string;
  info: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportExportSummary: React.FC<IImportExportSummary> = ({ title, info, isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  const errorState = {
    newSkuCreated: 0,
    existingSkuUpdated: 0,
    errorsInExcelFile: 2,
    logs: {
      columns: [
        {
          key: 'sl',
          dataIndex: 'sl',
          title: '',
        },
        {
          key: 'errorLog',
          dataIndex: 'errorLog',
          title: 'Error Log',
        },
      ],

      rows: [
        {
          sl: '1',
          errorLog:
            'SKU not processed at row 2 :: The Listing SKU has already been asigned to another product. The val...',
        },
        {
          sl: '2',
          errorLog:
            'SKU not processed at row 3 :: The Listing SKU has already been asigned to another product. The val...',
        },
      ],
    },
  };

  return (
    <OModal
      title={title}
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
          btnLabel: 'EMAIL SUMMARY & FINISH',
          onClick: handleSave,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'CONTINUE',
          onClick: handleSave,
        },
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <p style={{ borderBottom: '1px dashed black', marginBottom: '1rem', textAlign: 'center' }}>
          {info}
        </p>
        <div
          style={{
            margin: '1rem 0',
            background: '#FDFAF0',
            padding: '0.5rem',
            display: 'flex',
            gap: '1rem',
            border: '1px solid rgb(255 233 163)',
          }}
        >
          <div>
            <PlusCircleOutlined style={{ color: 'blue' }} /> New SKUs Created:{' '}
            {errorState.newSkuCreated}
          </div>
          <div>
            {' '}
            | <CheckCircleOutlined style={{ color: 'blue' }} /> Existing SKU Updated:{' '}
            {errorState.existingSkuUpdated}
          </div>
          <div>
            {' '}
            | <WarningOutlined style={{ color: 'blue' }} /> Errors In ExcelFile:{' '}
            {errorState.errorsInExcelFile}
          </div>
        </div>
        <OTable columns={errorState.logs.columns} rows={errorState.logs.rows} pagination={false} />
      </div>
    </OModal>
  );
};

export default ImportExportSummary;
