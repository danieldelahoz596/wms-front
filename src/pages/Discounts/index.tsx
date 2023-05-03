import { OButton } from '@/components/Globals/OButton';
import { modalType } from '@/utils/helpers/types';
import { PageContainer } from '@ant-design/pro-components';
import { Badge, Card, Space, Table } from 'antd';
import { useState } from 'react';
import AmountOffProductsModal from './Modals/AmountOffProducts';
import FreeShippingModal from './Modals/FreeShipping';
import SelectDiscountTypeModal from './Modals/SelectDiscountType';

const discountData = [
  {
    id: 1,
    type: {
      id: 1,
      name: 'Amount off products',
    },
    method: 'Automatic',
    code: '20% discount',
    amount_type: 'Percentage',
    amount: 10,
    num_of_uses: 0,
    req_type: 'Quantity',
    req_amount: 4,
    start_date: new Date(2023, 5, 2, 10, 20, 10),
    end_date: new Date(2023, 5, 20, 10, 20, 10),
    status: 1,
  },
  {
    id: 2,
    type: {
      id: 2,
      name: 'Amount off orders',
    },
    method: 'Code',
    code: 'QIERTFFPWVD11',
    amount_type: 'Fixed',
    amount: 20,
    num_of_uses: 10,
    req_type: 'Amount',
    req_amount: 300,
    start_date: new Date(2023, 5, 2, 10, 20, 10),
    end_date: new Date(2023, 5, 20, 10, 20, 10),
    status: 1,
  },
];

const TColumns = [
  {
    title: 'Title',
    dataIndex: 'code',
    key: 'title',
    width: '50%',
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <Badge
        count={status === 1 ? 'Active' : status === 2 ? 'Scheduled' : 'Expired'}
        style={{ backgroundColor: status === 1 ? 'green' : status === 2 ? '#faad14' : 'gray' }}
      />
    ),
  },
  {
    title: 'Method',
    dataIndex: 'method',
    key: 'method',
  },
  {
    title: 'Type',
    dataIndex: ['type', 'name'],
    key: 'type',
  },
  {
    title: 'Used',
    dataIndex: 'num_of_uses',
    key: 'num_of_uses',
  },
];

const DiscountManagement: React.FC = () => {
  const [openModal, setOpenModal] = useState<modalType>(modalType.Close);

  return (
    <>
      <PageContainer title={false} className={'flex flex-column overflow-hidden'}>
        <div className="main-panel">
          <div className="title-row">
            <h1 className="page-title">Discounts</h1>
          </div>
          <Card className="content-box">
            <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
              <OButton btnText="Export" />
              <OButton btnText="Create Discount" onClick={() => setOpenModal(modalType.SelectDiscountType)} />
            </Space>
            <Table columns={TColumns} dataSource={discountData} pagination={{ hideOnSinglePage: true }} />
          </Card>
        </div>
      </PageContainer>

      <SelectDiscountTypeModal
        isOpen={openModal === modalType.SelectDiscountType}
        onClose={() => setOpenModal(modalType.Close)}
        onSave={(value) => setOpenModal(value)}
      />

      <AmountOffProductsModal
        isOpen={
          openModal === modalType.AmountOffProducts || openModal === modalType.AmountOffOrder || openModal === modalType.BuyXGetY
        }
        onClose={() => setOpenModal(modalType.Close)}
        onSave={() => setOpenModal(modalType.Close)}
      />

      <FreeShippingModal
        isOpen={openModal === modalType.FreeShipping}
        onClose={() => setOpenModal(modalType.Close)}
        onSave={() => setOpenModal(modalType.Close)}
      />
    </>
  );
};

export default DiscountManagement;
