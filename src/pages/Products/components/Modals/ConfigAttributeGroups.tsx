import { OModal } from '@/components/Globals/OModal';
import { EditableTable } from '@/utils/components/EditableTable';
import { ToolFilled } from '@ant-design/icons';
import { Button, Col, Row } from 'antd';
import { useMemo, useState } from 'react';
import ConfigAttributes from './ConfigAttributes';

interface IConfigAttributeGroupsModal {
  isOpen: boolean;
  onClose: () => void;
  attributeGroups: any[];
  setAttributeGroups: (items: any) => void;
}

const ConfigAttributeGroupsModal: React.FC<IConfigAttributeGroupsModal> = ({
  isOpen,
  onClose,
  attributeGroups,
  setAttributeGroups,
}) => {
  const [enteredRow, setEnteredRow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editableGroup, setEditableGroup] = useState(null);
  const TColumns = [
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
  ];

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
          <Col span={4}></Col>
          <Col
            span={15}
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
          <Col span={4}></Col>
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
            setAttributeGroups(attributeGroups.map((item) => (item.id === key ? { ...item, [name]: value } : item)));
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
          attributes={editableGroup ? editableGroup.items : []}
        />
      </>
    </OModal>
  );
};

export default ConfigAttributeGroupsModal;
