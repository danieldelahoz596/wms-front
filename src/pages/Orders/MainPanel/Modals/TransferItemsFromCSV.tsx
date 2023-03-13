import { Form, Input } from 'antd';
import { OModal } from '@/components/Globals/OModal';

const { TextArea } = Input;

interface ITransferItemsFromCSVModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (values: any) => void;
}

const TransferItemsFromCSVModal: React.FC<ITransferItemsFromCSVModal> = ({ isOpen, onClose, onSave }) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form.validateFields().then((values) => onSave(values.fileData));
  };

  return (
    <OModal
      title="Input Items From CSV File"
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
          btnLabel: 'Apply To Order',
          onClick: handleSave,
        },
      ]}
    >
      <Form form={form}>
        <Form.Item name="fileData">
          <TextArea rows={10} placeholder="Master SKU, Quantity" />
        </Form.Item>
      </Form>
    </OModal>
  );
};

export default TransferItemsFromCSVModal;
