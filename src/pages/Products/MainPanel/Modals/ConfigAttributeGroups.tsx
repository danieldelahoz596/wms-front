import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/components/Globals/EditableTable';
import { ToolFilled } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useMemo, useState } from 'react';
import ConfigAttributes from './ConfigAttributes';
import { useModel } from '@umijs/max';
import type IAttributeGroup from '@/interfaces/IAttributeGroup';

interface IConfigAttributeGroupsModal {
  isOpen: boolean;
  onClose: () => void;
}

const ConfigAttributeGroupsModal: React.FC<IConfigAttributeGroupsModal> = ({ isOpen, onClose }) => {
  const [enteredRow, setEnteredRow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editableGroup, setEditableGroup] = useState<IAttributeGroup>(null);
  const { attributeGroups, setAttributeGroups, updateAttributeGroup } = useModel('attributeGroups');

  const TColumns = useMemo(
    () => [
      {
        title: '',
        key: 'id',
        width: '16%',
        align: 'center',
      },
      {
        title: '',
        dataIndex: 'name',
        key: 'name',
        editable: true,
      },
      {
        title: '',
        key: 'action',
        width: '16%',
        render: (_, record) => {
          return record.name === enteredRow ? (
            <Button
              size="small"
              icon={<ToolFilled style={{ color: 'blue' }} />}
              onClick={() => {
                setShowModal(true);
                setEditableGroup(record);
              }}
            />
          ) : (
            <></>
          );
        },
      },
    ],
    [enteredRow],
  );

  const dataSource = useMemo(() => attributeGroups.map((_item) => ({ ..._item, key: _item.id })), [attributeGroups]);

  return (
    <OModal
      title="Configure Attribute Groups"
      helpLink="/help/products/create/productvariations"
      width={400}
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
        <Row style={{ border: 'solid', borderWidth: 1, borderColor: 'gray' }}>
          <Col
            span={15}
            pull={4}
            push={4}
            style={{
              border: 'solid',
              borderWidth: 1,
              borderColor: 'gray',
              padding: 5,
              borderTop: 0,
              borderBottom: 0,
            }}
          >
            Group Name
          </Col>
        </Row>
        <EditableTable
          columns={TColumns}
          dataSource={dataSource}
          props={{
            showHeader: false,
            style: { overflowX: 'hidden', overflowY: 'scroll', height: 500 },
            onRow: (record) => {
              return {
                onMouseEnter: () => {
                  setEnteredRow(record.name);
                },
                onMouseLeave: () => {
                  setEnteredRow(null);
                },
              };
            },
          }}
          handleSave={(key: any, name: any, value: any) => {
            updateAttributeGroup(key, value);
          }}
        />

        <ConfigAttributes
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={(items: any[]) => {
            setAttributeGroups(
              attributeGroups.map((attributeGroup) =>
                attributeGroup.id === editableGroup.id ? { ...attributeGroup, items } : attributeGroup,
              ),
            );
            setShowModal(false);
          }}
          attributeGroupId={editableGroup?.id}
        />
      </>
    </OModal>
  );
};

export default ConfigAttributeGroupsModal;
