import { useEffect, useMemo } from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Card, Select, Form } from 'antd';
import { useModel } from '@umijs/max';

interface ISelectWarehouseForInventoryImportModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}

const SelectWarehouseForInventoryImportModal: React.FC<ISelectWarehouseForInventoryImportModal> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const [form] = Form.useForm();
  const { warehouseList } = useModel('warehouse');

  useEffect(() => {
    form.resetFields();
  }, [isOpen]);

  const warehouseOptions = useMemo(
    () => warehouseList.map((warehouse) => ({ value: warehouse.id, label: warehouse.name })),
    [warehouseList],
  );

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(warehouseList.find((warehouse) => warehouse.id === values.warehouse).name);
    });
  };

  return (
    <OModal
      forceRender
      title="Select Warehouse For Inventory Import"
      helpLink=""
      width={400}
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
          btnLabel: 'Continue',
          onClick: handleSave,
        },
      ]}
    >
      <Card title="Warehouse">
        <Form form={form}>
          <Form.Item rules={[{ required: true, message: 'Please select warehouse.' }]} name="warehouse">
            <Select options={warehouseOptions} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Card>
    </OModal>
  );
};

export default SelectWarehouseForInventoryImportModal;
