import { OModal } from '@/components/Globals/OModal';
import { Input, Button, Collapse, List, Space } from 'antd';
import { useState } from 'react';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import AddAttributeModal from './AddAttribute';
import { uuidv4 } from '@antv/xflow-core';
const { Panel } = Collapse;

interface IAddAttributeGroup {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  attributeGroups: any[];
  setAttributeGroups: (groups: any[]) => void;
}

const AddAttributeGroup: React.FC<IAddAttributeGroup> = ({
  isOpen,
  onClose,
  onSave,
  attributeGroups,
  setAttributeGroups,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState<string>('');
  const [selectedGroupId, setSelectedGroupId] = useState<string>(null);
  const [selectedPanel, setSelectedPanel] = useState(null);

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleAddGroup = () => {
    setAttributeGroups([...attributeGroups, { id: uuidv4(), name: groupName, items: [] }]);
    setGroupName('');
  };

  const handleRemoveGroup = (name) => {
    event.stopPropagation();
    setAttributeGroups(attributeGroups.filter((_item) => _item.name !== name));
  };

  const handleAddAttribute = (event, key) => {
    event.stopPropagation();
    setShowModal(true);
    setSelectedPanel(key);
    setSelectedGroupId(key);
  };

  return (
    <OModal
      title={'NEW ATTRIBUTE GROUPINGS'}
      width={600}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: onSave,
        },
      ]}
    >
      <div style={{ padding: '1rem' }}>
        <h3>
          Enter your attribute group names to begin adding attributes for use in product creation.
          (blank attributes will not be saved)
        </h3>
        <Input
          placeholder="Enter a valid attribute group name"
          addonAfter={
            <Button size="small" type="primary" onClick={handleAddGroup} style={{ height: 30 }}>
              Add
            </Button>
          }
          value={groupName}
          onChange={handleGroupNameChange}
        />
        <Collapse
          onChange={(key) => setSelectedPanel(key)}
          expandIconPosition="end"
          expandIcon={({ isActive }) => (isActive ? <MinusOutlined /> : <PlusOutlined />)}
          style={{ marginTop: '5px', overflowY: 'scroll', overflowX: 'hidden', height: '600px' }}
          activeKey={selectedPanel}
          accordion
          ghost
        >
          {attributeGroups.map((_group) => (
            <Panel
              header={<h3>{_group.name}</h3>}
              key={_group.id}
              extra={
                <>
                  <Space size={50}>
                    <Button
                      icon={<CloseOutlined />}
                      onClick={() => handleRemoveGroup(_group.name)}
                    />
                    <Button
                      icon={<PlusOutlined />}
                      onClick={(e) => handleAddAttribute(e, _group.id)}
                    />
                  </Space>
                </>
              }
              className="custom"
            >
              <List
                bordered={false}
                dataSource={_group.items}
                renderItem={(item) => (
                  <List.Item style={{ marginLeft: '30px' }}>
                    <h3>{item}</h3>
                  </List.Item>
                )}
              />
            </Panel>
          ))}
        </Collapse>
      </div>

      <AddAttributeModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        onSave={(value) => {
          setShowModal(false);
          setAttributeGroups(
            attributeGroups.map((attributeGroup) =>
              attributeGroup.id === selectedGroupId
                ? { ...attributeGroup, items: [...attributeGroup.items, value] }
                : attributeGroup,
            ),
          );
        }}
      />
    </OModal>
  );
};

export default AddAttributeGroup;
