import { OModal } from '@/components/Globals/OModal';
import ReturnItemsTab from '@/pages/Orders/MainPanel/Modals/CreateRMA/ReturnItems';
import { Form } from 'antd';
import { useEffect } from 'react';

interface IReturnItemsModal {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onSave: () => void;
}

const ReturnItemsModal: React.FC<IReturnItemsModal> = ({ isOpen, title, onClose, onSave }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      items: [
        {
          product: 'Pencil - Pack of pencils',
          qty: 1,
          seller: 0,
          type: 'refund',
          reason: 'customer',
          action: 'reinsert',
        },
      ],
    });
  }, [form]);

  return (
    <OModal
      title={title}
      width={MODAL_WIDTH}
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
      <>
        <ReturnItemsTab form={form} />
      </>
    </OModal>
  );
};

export default ReturnItemsModal;
