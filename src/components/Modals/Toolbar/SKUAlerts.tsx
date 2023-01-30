import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { CloseOutlined, ExclamationCircleFilled, InfoCircleFilled } from '@ant-design/icons';
import { skuAlertsType } from '@/utils/helpers/types';
import { OTable } from '@/components/Globals/OTable';

interface ISKUAlerts {
  isOpen: boolean;
  onClose: () => void;
  alerts: any[];
  setAlerts: (any) => void;
}

const SKUAlerts: React.FC<ISKUAlerts> = ({ isOpen, onClose, alerts, setAlerts }) => {
  const handleDelete = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  const handleRemove = () => {
    setAlerts([]);
  };

  const columns = [
    {
      key: 'type',
      dataIndex: 'type',
      title: 'Type',
      align: 'center',
    },
    {
      key: 'created',
      dataIndex: 'created',
      title: 'Created',
      align: 'center',
    },
    {
      key: 'message',
      title: 'Message',
      render: (_, record) => {
        return (
          <p>
            {skuAlertsType.ALERT === record.type && (
              <span
                style={{
                  float: 'left',
                  width: '30px',
                  lineHeight: '80%',
                }}
              >
                <InfoCircleFilled style={{ color: '#00CD0A', fontSize: '20px' }} />
              </span>
            )}
            {skuAlertsType.POSTAGE === record.type && (
              <span
                style={{
                  float: 'left',
                  width: '30px',
                  lineHeight: '80%',
                }}
              >
                <ExclamationCircleFilled style={{ color: '#F6871B', fontSize: '20px' }} />
              </span>
            )}
            {record.message}
          </p>
        );
      },
    },
    {
      key: 'action',
      title: 'Dismiss',
      align: 'center',
      render: (_, record) => {
        return (
          <span onClick={() => handleDelete(record.id)}>
            <CloseOutlined style={{ color: 'blue' }} />
          </span>
        );
      },
    },
  ];

  return (
    <OModal
      title="SKU Alerts"
      width={800}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'delete_all',
          type: 'default',
          btnLabel: 'Delete All',
          onClick: handleRemove,
        },
        {
          key: 'cancel',
          type: 'primary',
          btnLabel: `Close`,
          onClick: onClose,
        },
      ]}
    >
      <OTable
        columns={columns}
        rows={alerts.map((_item) => ({
          key: _item.id,
          ..._item,
        }))}
      />
    </OModal>
  );
};

export default SKUAlerts;
