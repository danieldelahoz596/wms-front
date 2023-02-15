import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Button, Space, Table } from 'antd';
import React, { useState } from 'react';
import NewMilestone from './NewMilestone';
import { uuidv4 } from '@antv/xflow-core';

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
        <Space size={10}>
          <Button onClick={() => setShowModal(true)}>New Milestone</Button>
          <Button
            onClick={() => {
              setMilestonesList((prev) =>
                prev.filter((item) => item.value !== selectedMilestone.value),
              );
              setSelectedMilestone(null);
            }}
            disabled={!selectedMilestone}
          >
            Delete Selected
          </Button>
        </Space>
        <Table
          columns={TColumns}
          dataSource={milestonesList.map((item, index) => ({ ...item, id: index + 1, key: index }))}
          pagination={{ hideOnSinglePage: true }}
          onRow={(record) => {
            return {
              onClick: () => setSelectedMilestone(record), // click row
            };
          }}
          rowClassName={(record) =>
            record.id === selectedMilestone?.id ? `ant-table-row-selected` : ''
          }
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
