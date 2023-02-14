import { OInput } from '@/components/Globals/OInput';
import { OModal } from '@/components/Globals/OModal';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Form, Space } from 'antd';
import React, { useState } from 'react';

interface IPaymentTerm {
  inputField: any;
}

const PaymentTerm: React.FC<IPaymentTerm> = ({ inputField }) => {
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <div style={{ display: 'flex', gap: 3 }}>
      <div style={{ flex: '1' }}>{inputField}</div>
      <PlusOutlined className="plus-button" onClick={() => setAddModal(true)} />
      <SettingOutlined className="setting-button" onClick={() => setEditModal(true)} />

      <OModal
        title={'Add Payment Term'}
        isOpen={addModal}
        handleCancel={() => setAddModal(false)}
        buttons={[
          {
            key: 'back',
            type: 'default',
            btnLabel: 'Cancel',
            onClick: () => setAddModal(false),
          },
          {
            key: 'submit',
            type: 'primary',
            btnLabel: 'Save',
            onClick: () => setAddModal(false),
          },
        ]}
      >
        <div>Add Payment Term</div>
      </OModal>

      <OModal
        title={'Edit Payment Term'}
        isOpen={editModal}
        handleCancel={() => setEditModal(false)}
        buttons={[
          {
            key: 'back',
            type: 'default',
            btnLabel: 'Cancel',
            onClick: () => setEditModal(false),
          },
          {
            key: 'submit',
            type: 'primary',
            btnLabel: 'Save',
            onClick: () => setEditModal(false),
          },
        ]}
      >
        <Form>
          <Form.Item>
            <OInput
              type="text"
              onChange={() => {}}
              name={'paymentTerm'}
              placeholder="Payment Term"
            />
          </Form.Item>
        </Form>
      </OModal>
    </div>
  );
};

export default PaymentTerm;
