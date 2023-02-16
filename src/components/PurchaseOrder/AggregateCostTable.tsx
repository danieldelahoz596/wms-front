import { OInput } from '@/components/Globals/OInput';
import { OTable } from '@/components/Globals/OTable';
import type { IPOOtherCost } from '@/interfaces';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Col, Row } from 'antd';
import React, { useMemo, useState } from 'react';
import { OModal } from '../Globals/OModal';

const AggregateCostTable: React.FC = () => {
  const { selectedPO, setSelectedPO } = useModel('po');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCost, setNewCost] = useState<IPOOtherCost>({
    name: '',
    cost: 0,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (name: string, value: any) =>
    setNewCost((prev) => ({
      ...prev,
      [name]: name === 'cost' ? parseFloat(value) : value,
    }));

  const handleOk = () => {
    setSelectedPO((item) => ({ ...item, otherCost: [...item.otherCost, newCost] }));
    setNewCost({
      name: '',
      cost: 0,
    });
    setIsModalOpen(false);
  };

  const handleRemove = (removeIndex) => {
    setSelectedPO((item) => ({
      ...item,
      otherCost: item.otherCost.filter((cost, index) => index !== removeIndex),
    }));
  };

  const columns = [
    {
      title: <PlusCircleOutlined style={{ color: 'blue', fontSize: 14 }} onClick={showModal} />,
      dataIndex: 'add',
      key: 'add',
    },
    {
      title: 'Other Costs',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Amount',
      dataIndex: 'cost',
      key: 'cost',
    },
  ];

  const rows = useMemo(
    () =>
      selectedPO?.otherCost.map((item: any, index: number) => ({
        key: index,
        add: (
          <div onClick={() => {}}>
            <MinusCircleOutlined style={{ color: 'blue' }} onClick={() => handleRemove(index)} />
          </div>
        ),
        name: item.name,
        cost: item.cost,
      })),
    [selectedPO],
  );

  return (
    <>
      <OTable
        type="checkbox"
        columns={columns}
        rows={rows}
        pagination={false}
        style={{ marginTop: 3, marginBottom: 3, textAlign: '' }}
      />
      <Row>
        <Col offset={12} span={6}>
          <span>Total:</span>
        </Col>
        <Col span={6}>
          <span>${selectedPO?.otherCost.reduce((pre, cur) => pre + cur.cost, 0)}</span>{' '}
        </Col>
      </Row>

      <OModal
        title="Add New Cost"
        width={250}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <>
          <OInput
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Title"
            value={newCost.name}
          />
          <div style={{ margin: '0.1rem 0' }}>&nbsp;</div>
          <OInput
            type="number"
            name="cost"
            onChange={handleChange}
            placeholder="amount"
            value={newCost.cost}
          />
        </>
      </OModal>
    </>
  );
};

export default AggregateCostTable;
