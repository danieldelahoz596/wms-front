import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { CheckCircleOutlined, PlusCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { Alert, Row } from 'antd';

interface IImportVendorProductsSummary {
  title: string;
  info: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ImportVendorProductsSummary: React.FC<IImportVendorProductsSummary> = ({ title, info, isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();

  const errorState = {
    newSkusCreated: 0,
    existingSkusUpdated: 0,
    errorsInExcelFile: 3,
    logs: {
      columns: [
        {
          key: 'sl',
          dataIndex: 'sl',
          title: '',
        },
        {
          key: 'row',
          dataIndex: 'row',
          title: 'Row',
        },
        {
          key: 'errorLog',
          dataIndex: 'errorLog',
          title: 'Error Log',
        },
        {
          key: 'errorLevel',
          dataIndex: 'errorLevel',
          title: 'Error Level',
        },
        {
          key: '',
          dataIndex: '',
          title: '',
        },
      ],

      rows: [
        {
          sl: '1',
          row: 2,
          errorLog: "SKU not processed at row 2 :: Product not found for Master SKU '12356'",
          errorLevel: 'High Priority'
        },
        {
          sl: '2',
          row: 3,
          errorLog: "SKU not processed at row 3 :: Product not found for Master SKU '56648'",
          errorLevel: 'High Priority'
        },
        {
          sl: '3',
          row: 4,
          errorLog: "SKU not processed at row 4 :: Product not found for Master SKU '523242'",
          errorLevel: 'High Priority'
        },
      ],
    },
  };

  return (
    <OModal
      title={title}
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
          btnLabel: 'Email Summary & Finish',
          onClick: handleSave,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Done',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <p style={{ borderBottom: '1px dashed black', marginBottom: '1rem', textAlign: 'center' }}>
          {info}
        </p>
        <Alert
          message={
            <div>
            <PlusCircleOutlined style={{ color: 'blue' }} /> New Records Created:{' '}
            {errorState.newSkusCreated} &nbsp; | &nbsp;&nbsp;
            <CheckCircleOutlined style={{ color: 'blue' }} /> Existing SKUs Updated:{' '}
            {errorState.existingSkusUpdated} &nbsp; | &nbsp;&nbsp;
            <WarningOutlined style={{ color: 'blue' }} /> Errors In Excel File:{' '}
            {errorState.errorsInExcelFile}
            </div>
          }
          type="warning"
        />
        <OTable columns={errorState.logs.columns} rows={errorState.logs.rows} pagination={false} />
      </>
    </OModal>
  );
};

export default ImportVendorProductsSummary;
