import { OModal } from '@/components/Globals/OModal';
import { FormattedMessage, useModel } from '@umijs/max';
import { Table, Spin } from 'antd';
import moment from 'moment';
import { useState, useEffect } from 'react';

interface ICustomerHistory {
  id: number;
  customer_id: number;
  edit_time: Date;
  user: { id: number; username: string };
  description: string;
}

const THistoryColumns = [
  {
    title: <FormattedMessage id="component.table.column.editTime" />,
    dataIndex: 'edit_time',
    key: 'edit_time',
    render: (date) => moment(date).locale('en').format('YYYY-MM-DD HH:mm A'),
  },
  {
    title: <FormattedMessage id="component.table.column.user" />,
    dataIndex: ['user', 'username'],
    key: 'user',
  },
  {
    title: <FormattedMessage id="component.table.column.changedValues" />,
    dataIndex: 'description',
    key: 'description',
  },
];

export default function EditHistoryModal({ isOpen, onSave, onClose }) {
  const { selectedCustomer, getCustomerHistories } = useModel('customer');
  const [histories, setHistories] = useState<ICustomerHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      getCustomerHistories(selectedCustomer.id).then((data) => {
        setIsLoading(false);
        setHistories(data);
      });
    }
  }, [isOpen, getCustomerHistories, selectedCustomer]);

  return (
    <OModal
      title={<FormattedMessage id="pages.customers.history.title" />}
      helpLink="/help/customers/module"
      width={800}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'cancel',
          type: 'default',
          btnLabel: <FormattedMessage id="component.button.cancel" />,
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: <FormattedMessage id="component.button.save" />,
          onClick: onSave,
        },
      ]}
    >
      <>
        {isLoading && (
          <div style={{ height: 80 }}>
            <Spin tip="Loading" size="large" style={{ marginTop: 30 }}>
              <div className="content" />
            </Spin>
          </div>
        )}
        {!isLoading && (
          <Table
            columns={THistoryColumns}
            dataSource={histories.map((item) => ({ key: item.id, ...item }))}
            pagination={{ hideOnSinglePage: true }}
          />
        )}
      </>
    </OModal>
  );
}
