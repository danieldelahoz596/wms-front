import React, { useEffect, useMemo, useState } from 'react';
import { Card, Button } from 'antd';
import { useModel } from '@umijs/max';
import { CheckSquareFilled } from '@ant-design/icons';
import { OTable } from '../../../../../components/Globals/OTable';
import ManageMilestoneModal from '../ManageMilestone';

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
  const { selectedPO } = useModel('po');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    setSelectedRows([selectedPO.milestone.id]);
  }, [selectedPO]);

  const milestoneRows = useMemo(() => milestonesList.map((milestone) => ({ key: milestone.id, ...milestone })), [milestonesList]);

  return (
    <>
      <Card title="Milestones">
        <div style={{ marginTop: 10 }}>
          <OTable
            type="radio"
            columns={TColumns}
            rows={milestoneRows}
            pagination={false}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </div>

        <Button style={{ marginTop: 10 }} onClick={() => setIsOpen(true)}>
          Manage Milestone
        </Button>
      </Card>

      {/* <ConfigureMilestonesModal isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}

      <ManageMilestoneModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSave={() => setIsOpen(false)} />
    </>
  );
};

export default MilestonesCard;
