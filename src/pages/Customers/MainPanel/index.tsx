import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import { modalType } from '@/utils/helpers/types';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Space } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { DragDropContainer } from 'react-drag-drop-container-typescript';
import CreateCustomerModal from './Modals/CreateCustomer';
import EditHistoryModal from './Modals/EditHistory';

const TColumns = [
  {
    title: 'Phone Type',
    dataIndex: 'phone_type',
    key: 'phone_type',
  },
  {
    title: <FormattedMessage id="component.table.column.phoneNumber" />,
    dataIndex: 'phone_number',
    key: 'phone_number',
  },
  {
    title: <FormattedMessage id="component.table.column.name" />,
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => (
      <DragDropContainer targetKey="merge" dragData={text}>
        {text}
      </DragDropContainer>
    ),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Sex',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: <FormattedMessage id="component.table.column.orders" />,
    dataIndex: 'orders',
    key: 'orders',
  },
  {
    title: <FormattedMessage id="component.table.column.totalSales" />,
    dataIndex: 'totalsales',
    key: 'totalsales',
  },
];

const MainPanel: React.FC = () => {
  const { customerList, selectedCustomer, setSelectedCustomer, getCustomer } = useModel('customer');
  const [modalOpen, setModal] = useState('');
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const prepareCustomersTableData = useMemo(
    () =>
      customerList.map((item) => ({
        key: item.id,
        phone_type: item.phone_type,
        phone_number: item.phone_number,
        name: item.name,
        address: item.address,
        sex: item.sex == true ? 'Male' : 'Female',
        age: item.age,
        state: item.state && item.state.name,
        city: item.city && item.city.name,
        orders: item.orders.length,
        totalsales: `$${item.total_sales.toFixed(2)}`,
      })),
    [customerList],
  );

  // get selected customer
  useEffect(() => {
    if (selectedRows[0]) {
      getCustomer(selectedRows[0]);
    } else {
      setSelectedCustomer(null);
    }
  }, [selectedRows, setSelectedCustomer, getCustomer]);

  return (
    <>
      <div className="main-panel">
        <div className="title-row space-between">
          <h1 className="page-title">
            <FormattedMessage id="pages.customers.title" />
          </h1>
        </div>
        <Card className="content-box">
          <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
            <OButton btnText={<FormattedMessage id="component.button.merge" />} onClick={() => setModal(modalType.Merge)} />
            <OButton
              btnText={<FormattedMessage id="component.button.history" />}
              disabled={!selectedCustomer}
              onClick={() => setModal(modalType.History)}
            />
            <OButton
              btnText={<FormattedMessage id="component.button.newCustomers" />}
              onClick={() => {
                setSelectedRows([]);
                setModal(modalType.New);
              }}
            />
          </Space>
          <OTable
            columns={TColumns}
            rows={prepareCustomersTableData}
            type="radio"
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </Card>
      </div>

      <EditHistoryModal
        isOpen={modalOpen === modalType.History}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />

      <CreateCustomerModal
        isOpen={modalOpen === modalType.New}
        onClose={() => setModal(modalType.Close)}
        onSave={() => setModal(modalType.Close)}
      />
    </>
  );
};

export default MainPanel;
