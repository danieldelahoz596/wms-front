import { OModal } from '@/components/Globals/OModal';
import { Input, Button, Collapse, List, Space } from 'antd';
import { useState } from 'react';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import AddAttributeModal from './AddAttribute';
const { Panel } = Collapse;

interface IAddAttributeGroup {
  isOpen: boolean;
  onClose: () => void;
  onSave: (items: any[]) => void;
}

const AddAttributeGroup: React.FC<IAddAttributeGroup> = ({ isOpen, onClose, onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const [groupName, setGroupName] = useState<string>('');
  const [selectedGroupName, setSelectedGroupname] = useState<string>(null);
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [attributeGroups, setAttributeGroups] = useState<any[]>([]);

  const handleGroupNameChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleAddGroup = () => {
    setAttributeGroups([...attributeGroups, { name: groupName, items: [] }]);
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
    setSelectedGroupname(key);
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
          onClick: () => onSave(attributeGroups),
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
              key={_group.name}
              extra={
                <>
                  <Space size={50}>
                    <Button
                      icon={<CloseOutlined />}
                      onClick={() => handleRemoveGroup(_group.name)}
                    />
                    <Button
                      icon={<PlusOutlined />}
                      onClick={(e) => handleAddAttribute(e, _group.name)}
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
              attributeGroup.name === selectedGroupName
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
