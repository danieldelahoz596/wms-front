import { useMemo, useEffect } from 'react';
import { Select, Form, Space } from 'antd';
import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';

interface IStockTransferFirstStepModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: any) => void;
  warehouses: any;
}

const StockTransferFirstStepModal: React.FC<IStockTransferFirstStepModal> = ({ isOpen, onClose, onSave, warehouses }) => {
  const [form] = Form.useForm();
  const { warehouseList } = useModel('warehouse');

  const warehouseOptions = useMemo(() => warehouseList.map((item) => ({ value: item.id, label: item.name })), [warehouseList]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      onSave(values);
    });
  };

  useEffect(() => {
    if (!warehouses) form.resetFields();
    else form.setFieldsValue(warehouses);
  }, [isOpen, form, warehouses]);

  return (
    <OModal
      title="New Cross-Warehouse Stock Transfer Order"
      width={500}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
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
      <Form layout="vertical" form={form}>
        <Space size={10} direction="vertical" style={{ width: '100%' }}>
          <Form.Item
            label="Eligible Source Warehouses"
            name="source"
            rules={[{ required: true, message: 'Please select source warehouse' }]}
          >
            <Select defaultValue="Select Source Warehouse..." options={warehouseOptions} />
          </Form.Item>
          <Form.Item
            label="Eligible Destination Warehouses"
            name="destination"
            rules={[{ required: true, message: 'Please select destination warehouse' }]}
          >
            <Select defaultValue="Select Source Warehouse..." options={warehouseOptions} />
          </Form.Item>
        </Space>
      </Form>
    </OModal>
  );
};

export default StockTransferFirstStepModal;
