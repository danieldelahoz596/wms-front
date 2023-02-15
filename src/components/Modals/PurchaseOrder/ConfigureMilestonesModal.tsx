import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { uuidv4 } from '@antv/xflow-core';
import { useModel } from '@umijs/max';
import { Space } from 'antd';
import React, { useState } from 'react';
import NewMilestone from './NewMilestone';

export interface IConfigureMilestonesModal {
  isOpen: boolean;
  onClose: () => void;
}

const TColumns = [
  {
    key: 'id',
    dataIndex: 'id',
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
    render: (color) => <div style={{ width: '100px', height: '20px', backgroundColor: color }} />,
    width: '100px',
    align: 'center',
  },
];

const ConfigureMilestonesModal: React.FC<IConfigureMilestonesModal> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const { milestonesList, setMilestonesList } = useModel('milestones');
  const [selectedMilestone, setSelectedMilestone] = useState(null);

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
        <Space size={4}>
          <OButton btnText="New Milestone" onClick={() => setShowModal(true)} />
          <OButton
            btnText="Delete Selected"
            onClick={() => {
              setMilestonesList((prev) =>
                prev.filter((item) => item.value !== selectedMilestone.value),
              );
              setSelectedMilestone(null);
            }}
            disabled={!selectedMilestone}
          />
        </Space>
        <OTable
          columns={TColumns}
          rows={milestonesList.map((item, index) => ({ ...item, id: index + 1, key: index }))}
          pagination={false}
          onRow={(record) => {
            return {
              onClick: () => setSelectedMilestone(record), // click row
            };
          }}
          rowClassName={(record) =>
            record.id === selectedMilestone?.id ? `ant-table-row-selected` : ''
          }
          style={{ marginTop: 5 }}
        />

        <NewMilestone
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
