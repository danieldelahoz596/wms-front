import { OModal } from '@/components/Globals/OModal';
import { CheckCircleOutlined, PlusCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Space, Table } from 'antd';
import { useEffect, useMemo } from 'react';

interface IImportExportSummaryModal {
  title: string;
  info: string;
  isOpen: boolean;
  getImportExportSummary: () => void;
  onClose: () => void;
  onSave: () => void;
}

const TColumns = [
  {
    key: 'id',
    dataIndex: 'id',
    title: '',
  },
  {
    key: 'row',
    dataIndex: 'row',
    title: 'Row',
  },
  {
    key: 'error_log',
    dataIndex: 'error_log',
    title: 'Error Log',
  },
  {
    key: 'error_level',
    dataIndex: 'error_level',
    title: 'Error Level',
  },
];

const ImportExportSummaryModal: React.FC<IImportExportSummaryModal> = ({
  title,
  info,
  getImportExportSummary,
  isOpen,
  onClose,
  onSave,
}) => {
  const { summary } = useModel('exportSummary');

  useEffect(() => {
    getImportExportSummary();
  }, [getImportExportSummary, isOpen]);

  const handleSave = () => onSave();

  const rows = useMemo(
    () =>
      summary?.logs.map((log, index) => ({
        ...log,
        key: index + 1,
        id: index + 1,
      })),
    [summary],
  );

  return (
    <OModal
      title={title}
      width={MODAL_WIDTH}
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
          key: 'email_sumbit',
          type: 'primary',
          btnLabel: 'EMAIL SUMMARY & FINISH',
          onClick: handleSave,
        },
        {
          key: 'done',
          type: 'primary',
          btnLabel: 'Done',
          onClick: handleSave,
        },
      ]}
    >
      <>
        <p style={{ borderBottom: '1px dashed black', marginBottom: '1rem', textAlign: 'center' }}>{info}</p>
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
          <Space size={10}>
            <div>
              <PlusCircleOutlined style={{ color: 'blue' }} />
              {` New SKUs Created: ${summary?.new_sku_created}`}
            </div>
            <div>
              | <CheckCircleOutlined style={{ color: 'blue' }} />
              {` Existing SKU Updated: ${summary?.existing_sku_updated}`}
            </div>
            <div>
              | <WarningOutlined style={{ color: 'blue' }} />
              {` Errors In ExcelFile: ${summary?.errors_count}`}
            </div>
          </Space>
        </div>
        <Table columns={TColumns} dataSource={rows} pagination={{ hideOnSinglePage: true }} />
      </>
    </OModal>
  );
};

export default ImportExportSummaryModal;
