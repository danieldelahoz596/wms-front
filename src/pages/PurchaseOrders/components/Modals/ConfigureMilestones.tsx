import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';
import { Space } from 'antd';
import React, { useState } from 'react';
import NewMilestoneModal from './NewMilestone';

export interface IConfigureMilestonesModal {
  isOpen: boolean;
  onClose: () => void;
}

const TColumns = [
  {
    key: 'index',
    dataIndex: 'index',
    title: '',
  },
  {
    key: 'name',
    dataIndex: 'text',
    title: 'Milestone Name',
  },
  {
    key: 'color',
    dataIndex: 'color',
    title: 'Color',
    render: (color) => (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '70px', height: '20px', backgroundColor: color }} />
      </div>
    ),
    align: 'center',
  },
];

const ConfigureMilestonesModal: React.FC<IConfigureMilestonesModal> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const { milestonesList, setMilestonesList } = useModel('milestones');
  const [selectedMilestone, setSelectedMilestone] = useState([]);

  return (
    <OModal
      title="Configure Milestones"
      helpLink=""
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
      ]}
    >
      <>
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <OButton btnText="New Milestone" onClick={() => setShowModal(true)} />
          <OButton
            btnText="Delete Selected"
            onClick={() => {
              setMilestonesList((prev) => prev.filter((item) => item.id !== selectedMilestone[0]));
              setSelectedMilestone([]);
            }}
            disabled={selectedMilestone.length === 0}
          />
        </Space>
        <OTable
          type="radio"
          columns={TColumns}
          rows={milestonesList?.map((item, index) => ({ ...item, key: item.id, index: index + 1 }))}
          pagination={false}
          setSelectedRows={setSelectedMilestone}
          selectedRows={selectedMilestone}
        />

        <NewMilestoneModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={(value) => {
            setMilestonesList((prev) => [
              ...prev,
              {
                id: uuidv4(),
                value: `${uuidv4()}`,
                text: value.name,
                color: value.color.hex,
              },
            ]);
            setShowModal(false);
          }}
        />
      </>
    </OModal>
  );
};

export default ConfigureMilestonesModal;
