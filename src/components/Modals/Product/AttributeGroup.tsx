import { OModal } from '@/components/Globals/OModal';
import { Input, Button, Collapse } from 'antd';
import { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

interface IAttributeGroup {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const AttributeGroup: React.FC<IAttributeGroup> = ({ isOpen, onClose, onSave }) => {
  const [attributeList, setAttributeList] = useState<string[]>([]);
  const [attribute, setAttribute] = useState<string>('');
  const handleSave = () => onSave();

  const handleAttributeAddClick = () => {
    setAttributeList([...attributeList, attribute]);
    setAttribute('');
  };

  const handleAttributeChange = (e) => {
    setAttribute(e.target.value);
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
            <Button size="small" type="primary" onClick={handleAttributeAddClick}>
              Add
            </Button>
          }
          value={attribute}
          onChange={handleAttributeChange}
        />
        <Collapse onChange={() => {}} expandIconPosition="end" style={{ marginTop: '5px' }}>
          {attributeList.map((item, key) => (
            <Panel
              header={item}
              key={key}
              extra={() => (
                <SettingOutlined
                  onClick={(event) => {
                    // If you don't want click extra trigger collapse, you can prevent this:
                    event.stopPropagation();
                  }}
                />
              )}
            >
              <div>{item}</div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </OModal>
  );
};

export default AttributeGroup;
