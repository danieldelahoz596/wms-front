import { OModal } from '@/components/Globals/OModal';
import { Input, Button, Collapse, List } from 'antd';
import { useState } from 'react';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

interface IAttributeGroup {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  attributeGroups: any[];
  setAttributeGroups: (item: any) => void;
}

const AttributeGroup: React.FC<IAttributeGroup> = ({
  isOpen,
  onClose,
  onSave,
  attributeGroups,
  setAttributeGroups,
}) => {
  const [groupName, setGroupName] = useState<string>('');
  const [attribute, setattribute] = useState<string>('');
  const [showInput, setShowInput] = useState(false);
  const [selectedPanel, setSelectedPanel] = useState(null);
  const handleSave = () => onSave();

  const handleAttributeAdd = () => {
    setAttributeGroups([...attributeGroups, { name: groupName, attributes: [] }]);
    setGroupName('');
  };

  const handleAttributeChange = (e) => {
    setGroupName(e.target.value);
  };

  const handleAddType = (event, key) => {
    event.stopPropagation();
    setShowInput(true);
    setSelectedPanel(key);
  };

  const handleRemoveType = (group) => {
    event.stopPropagation();
    setAttributeGroups(attributeGroups.filter((_item) => _item.name !== group.name));
  };

  return (
    <OModal
      title={'NEW ATTRIBUTE GROUPINGS'}
      width={500}
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
          onClick: handleSave,
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
            <Button size="small" type="primary" onClick={handleAttributeAdd}>
              Add
            </Button>
          }
          value={groupName}
          onChange={handleAttributeChange}
        />
        <Collapse
          onChange={(key) => {
            setShowInput(false);
            setSelectedPanel(key);
          }}
          expandIconPosition="end"
          expandIcon={() => <MinusOutlined />}
          style={{ marginTop: '5px', overflow: 'scroll', height: '300px' }}
          activeKey={selectedPanel}
          accordion
        >
          {attributeGroups.map((_group, index) => (
            <Panel
              header={<h3>{_group.name}</h3>}
              key={_group.name}
              extra={
                <>
                  <Button
                    icon={<CloseOutlined />}
                    style={{ marginRight: '50px' }}
                    onClick={() => handleRemoveType(_group)}
                  />
                  <Button icon={<PlusOutlined />} onClick={(e) => handleAddType(e, _group.name)} />
                </>
              }
            >
              <>
                <List
                  bordered={false}
                  dataSource={_group.attributes}
                  renderItem={(item) => (
                    <List.Item style={{ marginLeft: '30px' }}>
                      <h3>{item}</h3>
                    </List.Item>
                  )}
                />
                {showInput && (
                  <Input
                    value={attribute}
                    onChange={(e) => setattribute(e.target.value)}
                    onPressEnter={() => {
                      setAttributeGroups(
                        attributeGroups.map((item) =>
                          item.name === _group.name
                            ? { ...item, attributes: [...item.attributes, attribute] }
                            : item,
                        ),
                      );
                      setattribute('');
                      setShowInput(false);
                    }}
                    autoFocus
                  />
                )}
              </>
            </Panel>
          ))}
        </Collapse>
      </div>
    </OModal>
  );
};

export default AttributeGroup;
