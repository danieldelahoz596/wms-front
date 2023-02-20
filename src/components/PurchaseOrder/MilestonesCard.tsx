import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { useModel } from '@umijs/max';
import { CheckSquareFilled } from '@ant-design/icons';
import { OTable } from '../Globals/OTable';
import ConfigureMilestonesModal from '../Modals/PurchaseOrder/ConfigureMilestones';

const TColumns = [
  {
    id: 'text',
    dataIndex: 'id',
    key: 'id',
    title: 'Milestone',
    render: (id, milestone) => (
      <div style={{ display: 'flex', gap: 10 }}>
        <CheckSquareFilled style={{ color: milestone.color, fontSize: 15 }} />
        {milestone.text}
      </div>
    ),
  },
];

const MilestonesCard: React.FC = () => {
  const { milestonesList } = useModel('milestones');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card title="Milestones">
        <div style={{ marginTop: 10 }}>
          <OTable columns={TColumns} rows={milestonesList} pagination={false} />
        </div>

        <Button style={{ marginTop: 10 }} onClick={() => setIsOpen(true)}>
          Manage Milestone
        </Button>
      </Card>

      <ConfigureMilestonesModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MilestonesCard;
