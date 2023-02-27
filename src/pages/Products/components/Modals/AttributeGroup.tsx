import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { CloseOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Collapse, Input, List } from 'antd';
import { useState } from 'react';
const { Panel } = Collapse;

interface IAttributeGroup {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  attributeGroups: any[];
  setAttributeGroups: (item: any) => void;
}

const AttributeGroup: React.FC<IAttributeGroup> = ({ isOpen, onClose, onSave, attributeGroups, setAttributeGroups }) => {
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
      title="New Attribute Grouping"
      helpLink="/help/products/create/productvariations"
      width={500}
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
      <>
        <h3>
          Enter your attribute group names to begin adding attributes for use in product creation. (blank attributes will not be
          saved)
        </h3>
        <Input
          placeholder="Enter a valid attribute group name"
          addonAfter={<OButton btnText="Add" onClick={handleAttributeAdd} />}
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
          {attributeGroups.map((_group) => (
            <Panel
              header={<h3>{_group.name}</h3>}
              key={_group.name}
              extra={
                <>
                  <OButton btnText={<CloseOutlined />} style={{ marginRight: '50px' }} onClick={() => handleRemoveType(_group)} />
                  <OButton btnText={<PlusOutlined />} onClick={(e) => handleAddType(e, _group.name)} />
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
                          item.name === _group.name ? { ...item, attributes: [...item.attributes, attribute] } : item,
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
      </>
    </OModal>
  );
};

export default AttributeGroup;
