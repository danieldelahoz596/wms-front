import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';
import { modalType } from '@/utils/helpers/types';
import { useModel } from '@umijs/max';
import { Card, Space } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { DragDropContainer } from 'react-drag-drop-container-typescript';
import CreateCustomerModal from './Modals/CreateCustomer';
import EditHistoryModal from './Modals/EditHistory';

const TColumns = [
  {
    title: 'Phone Number',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'Card ID Number',
    dataIndex: 'cardNumber',
    key: 'cardNumber',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: any) => (
      <DragDropContainer targetKey="merge" dragData={text}>
        {text}
      </DragDropContainer>
    ),
  },
  {
    title: 'Orders',
    dataIndex: 'orders',
    key: 'orders',
  },
  {
    title: 'Total Sales',
    dataIndex: 'totalsales',
    key: 'totalsales',
  },
];

const MainPanel: React.FC = () => {
  const { customerList, selectedCustomer, setSelectedCustomer, onGetSelectedCustomer } = useModel('customer');
  const [modalOpen, setModal] = useState('');
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const prepareCustomersTableData = useMemo(
    () =>
      customerList?.map((item) => ({
        key: item.id,
        phone: item.phonenumber,
        cardNumber: item.card_number,
        name: item.name,
        address: item.address,
        orders: 1,
        totalsales: '$0.00',
      })),
    [customerList],
  );

  // get selected customer
  useEffect(() => {
    if (selectedRows[0]) {
      onGetSelectedCustomer(selectedRows[0]);
    } else {
      setSelectedCustomer(null);
    }
  }, [selectedRows, onGetSelectedCustomer, setSelectedCustomer]);

  return (
    <>
      <div className="main-panel">
        <div className="title-row">
          <h1 className="page-title">Customers</h1>
        </div>
        <Card className="content-box">
          <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
            <OButton btnText="Merge" onClick={() => setModal(modalType.Merge)} />
            <OButton btnText="History" disabled={!selectedCustomer} onClick={() => setModal(modalType.History)} />
            <OButton btnText="New Customers" onClick={() => setModal(modalType.New)} />
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

      <CreateCustomerModal isOpen={modalOpen === modalType.New} onClose={() => setModal(modalType.Close)} />
    </>
  );
};

export default MainPanel;
