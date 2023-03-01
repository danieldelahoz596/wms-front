import { OModal } from '@/components/Globals/OModal';
import { InfoCircleFilled } from '@ant-design/icons';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, List, message } from 'antd';
import { useState, useEffect } from 'react';
import styles from './index.less';

interface INewUserModal {
  isOpen: boolean;
  onSave: () => void;
  onClose: () => void;
}

const userAdministration = [
  {
    id: 'orders',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.orders.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.orders.content" />,
  },
  {
    id: 'shipments',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.shipments.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.shipments.content" />,
  },
  {
    id: 'customers',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.customers.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.customers.content" />,
  },
  {
    id: 'inventory',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.inventory.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.inventory.content" />,
  },
  {
    id: 'purchase_orders',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.purchaseOrders.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.purchaseOrders.content" />,
  },
  {
    id: 'purchase_order_authorization',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.purchaseOrderAuthorization.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.purchaseOrderAuthorization.content" />,
  },
  {
    id: 'products',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.products.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.products.content" />,
  },
  {
    id: 'analytics',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.analytics.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.analytics.content" />,
  },
  {
    id: 'warehouses',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.warehouses.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.warehouses.content" />,
  },
  {
    id: 'templates',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.templates.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.templates.content" />,
  },
  {
    id: 'vendors',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.vendors.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.vendors.content" />,
  },
  {
    id: 'orderbots',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.orderbots.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.orderbots.content" />,
  },
  {
    id: 'user_administration',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.userAdministration.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.userAdministration.content" />,
  },
  {
    id: 'inventory_reconciliation',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.inventoryReconciliation.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.inventoryReconciliation.content" />,
  },
  {
    id: 'bulk_inventory_reconciliation',
    title: <FormattedMessage id="pages.settings.userAdministration.newUser.bulkInventoryReconciliation.title" />,
    content: <FormattedMessage id="pages.settings.userAdministration.newUser.bulkInventoryReconciliation.content" />,
  },
];

const NewUserModal: React.FC<INewUserModal> = ({ isOpen, onSave, onClose }) => {
  const [form] = Form.useForm();
  const [permissions, setPermissions] = useState([]);
  const { selectedUser, createUser, updateUser } = useModel('user');
  const [messageApi, contextHolder] = message.useMessage();

  const handleCheckboxClick = (id) => {
    setPermissions(permissions.includes(id) ? permissions.filter((_item) => _item !== id) : [...permissions, id]);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        if (!selectedUser) {
          createUser({ ...values, permissions })
            .then(() => {
              messageApi.open({
                type: 'success',
                content: <FormattedMessage id="pages.settings.userAdministration.created.content" />,
              });

              onSave();
            })
            .catch(({ response }) => {
              const formData = [];
              for (const [name, errors] of Object.entries(response.data)) {
                formData.push({ name, errors });
              }
              form.setFields(formData);
            });
        } else {
          updateUser({ ...selectedUser, ...values, permissions })
            .then(() => {
              messageApi.open({
                type: 'success',
                content: <FormattedMessage id="pages.settings.userAdministration.updated.content" />,
              });

              onSave();
            })
            .catch(({ response }) => {
              if (response.status === 403) {
                messageApi.open({
                  type: 'error',
                  content: <FormattedMessage id="pages.settings.userAdministration.permissionDenied.content" />,
                });

                onSave();
              } else if (response.status === 422) {
                const formData = [];
                for (const [name, errors] of Object.entries(response.data)) {
                  formData.push({ name, errors });
                }
                form.setFields(formData);
              }
            });
        }
      })
      .catch((info) => console.log('Validate Failed', info));
  };

  useEffect(() => {
    setPermissions(selectedUser ? selectedUser.permissions : []);
    form.setFieldsValue({ full_name: selectedUser?.full_name, username: selectedUser?.username });
  }, [form, selectedUser, isOpen]);

  return (
    <>
      {contextHolder}
      <OModal
        title={<FormattedMessage id="pages.settings.userAdministration.newUser.title" />}
        helpLink="http://localhost:8001/help/settings/useradministration"
        isOpen={isOpen}
        handleCancel={onClose}
        buttons={[
          {
            key: 'back',
            type: 'default',
            btnLabel: <FormattedMessage id="component.button.cancel" />,
            onClick: onClose,
          },
          {
            key: 'submit',
            type: 'primary',
            btnLabel: <FormattedMessage id="component.button.save" />,
            onClick: handleSave,
          },
        ]}
        width={700}
        forceRender
      >
        <Form form={form} initialValues={{ full_name: selectedUser?.full_name, username: selectedUser?.username }}>
          <Row style={{ marginTop: 10 }} align="middle" gutter={10}>
            <Col span={12}>
              <Card title={<FormattedMessage id="component.card.title.loginInfo" />}>
                <Form.Item
                  label={<FormattedMessage id="component.form.label.fullName" />}
                  name="full_name"
                  rules={[{ required: true, message: <FormattedMessage id="component.form.label.fullName.required" /> }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label={<FormattedMessage id="component.form.label.userName" />}
                  name="username"
                  rules={[{ required: true, message: <FormattedMessage id="component.form.label.userName.required" /> }]}
                >
                  <Input />
                </Form.Item>

                {!selectedUser && (
                  <Form.Item
                    label={<FormattedMessage id="component.form.label.password" />}
                    name="password"
                    rules={[{ required: true, message: <FormattedMessage id="component.form.label.password.required" /> }]}
                  >
                    <Input.Password />
                  </Form.Item>
                )}
              </Card>
            </Col>
            <Col span={12}>
              <div style={{ display: 'flex', gap: 5 }}>
                <InfoCircleFilled style={{ color: '#8C8A8C', fontSize: '12px', paddingTop: 4 }} />
                <h3>
                  <FormattedMessage id="pages.settings.userAdministration.newUser.description" />
                </h3>
              </div>
            </Col>
          </Row>

          <Card title={<FormattedMessage id="component.card.title.accessPermissions" />} style={{ marginTop: 30 }}>
            <List
              size="small"
              header={
                <Row className={styles.row} style={{ color: 'blue' }}>
                  <Col>
                    <span>
                      <FormattedMessage id="pages.settings.userAdministration.newUser.permission" />
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <FormattedMessage id="pages.settings.userAdministration.newUser.allow" />
                    </span>
                  </Col>
                </Row>
              }
              bordered
              dataSource={userAdministration}
              renderItem={(_item) => (
                <List.Item
                  actions={[
                    <Checkbox
                      key={_item.id}
                      onChange={() => handleCheckboxClick(_item.id)}
                      checked={permissions.includes(_item.id)}
                    />,
                  ]}
                >
                  <List.Item.Meta title={_item.title} description={_item.content} />
                </List.Item>
              )}
              style={{ overflow: 'auto', height: '500px' }}
            />
          </Card>
        </Form>
      </OModal>
    </>
  );
};

export default NewUserModal;
