import { OModal } from '@/components/Globals/OModal';
import { InfoCircleFilled } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Card, Checkbox, Col, Form, Input, Row, List, message } from 'antd';
import { useState, useEffect } from 'react';
import styles from './index.less';

const userAdministration = [
  {
    id: 'orders',
    title: 'Orders',
    content:
      'Ability to process orders from all sales channels through direct shipping, multi-channel fulfillment, 3PL exports, or dropshipping. This includes all manual orders, as well as canceling of orders.',
  },
  {
    id: 'shipments',
    title: 'Shipments',
    content:
      'Ability to view all shipments, batches, and returns. This includes the ability to track or void shipments, as well as print labels, pick lists, and packing slips.',
  },
  {
    id: 'customers',
    title: 'Customers',
    content:
      'Ability to view and manage all customer data Skubana automatically imports with incoming orders from sales channels. This also includes manual creation of customers.',
  },
  {
    id: 'inventory',
    title: 'Inventory',
    content:
      'Ability to fully manage inventory across all in-house, FBA, 3PL, and dropship warehouses. This includes setting minimum inventory levels and channel allocation rules.',
  },
  {
    id: 'purchase_orders',
    title: 'Purchase Orders',
    content:
      'Ability to create, edit, and track vendor purchase orders throughout the procurement life cycle. This includes the canceling of purchase orders.',
  },
  {
    id: 'purchase_order_authorization',
    title: 'Purchase Order Authorization',
    content:
      'Ability to approve and authorize newly created purchase orders. Users with this permission effectively issue purchase orders.',
  },
  {
    id: 'products',
    title: 'Products',
    content:
      'Ability to manage your core products, kits, bundles, and variations. This includes the creation and editing of basic product info, image gallery, listing SKUs, vendor products, and customs.',
  },
  {
    id: 'analytics',
    title: 'Analytics',
    content:
      'Ability to run and view all reporting and analysis, including ad hoc, business intelligence, and forecasting reports. This includes auto-generation and e-mailing of reports.',
  },
  {
    id: 'warehouses',
    title: 'Warehouses',
    content:
      'Ability to create and modify in-house warehouses and 3PLs from which your company fulfills orders, including document print settings (in-house warehouses) and FTP settings (3PLs).',
  },
  {
    id: 'sales_channels',
    title: 'Sales Channels',
    content:
      'Ability to create and modify the sales channels on which your company sells. This includes channel connection, general settings, and requested shipment service mappings.',
  },
  {
    id: 'shipping_providers',
    title: 'Shipping Providers',
    content:
      'Ability to create and modify shipping providers used for address verification, rate calculation, and printing of shipping labels for orders fulfilled from direct/in-house warehouses.',
  },
  {
    id: 'templates',
    title: 'Templates',
    content:
      'Ability to create and modify all of your templates, including shipment e-mail notifications, packing slips, and purchase order templates.',
  },
  {
    id: 'vendors',
    title: 'Vendors',
    content:
      'Ability to create and modify vendors that supply and/or manufacture the products your company sells. This includes the ability to configure dropshipping capabilities for eligible vendors.',
  },
  {
    id: 'orderbots',
    title: 'Orderbots',
    content:
      'Ability to create and modify orderbots used for filtering and workflow automation of customer orders from marketplaces and shopping carts.',
  },
  {
    id: 'skubana_apps',
    title: 'Skubana Apps',
    content: 'Ability to install and uninstall apps from the Skubana App Store.',
  },
  {
    id: 'user_administration',
    title: 'User Administration',
    content:
      "Ability to create new users, modify other users' permissions, as well as activate and deactivate users in Skubana. This permission should be given to administrators only.",
  },
  {
    id: 'billing_invoices',
    title: 'Billing & Invoices',
    content:
      'Ability to enter and edit billing information, as well as view Skubana invoices of your monthly order totals. This permission should be given to administrators only.',
  },
  {
    id: 'inventory_reconciliation',
    title: 'Inventory Reconciliation',
    content:
      'Ability to use the individual inventory reconciliation feature found in the Inventory Module. This feature relates to data used in Analytics reports.',
  },
  {
    id: 'bulk_inventory_reconciliation',
    title: 'Bulk Inventory Reconciliation',
    content:
      'Ability to use the bulk inventory reconciliation feature found in the Inventory Module.',
  },
];

export default function ({ isOpen, onSave, onClose }) {
  const [form] = Form.useForm();
  const [permissions, setPermissions] = useState([]);
  const { selectedUser, createUser, updateUser } = useModel('user');
  const [messageApi, contextHolder] = message.useMessage();

  const handleCheckboxClick = (id) => {
    setPermissions(
      permissions.includes(id) ? permissions.filter((_item) => _item !== id) : [...permissions, id],
    );
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
                content: 'User created successfully',
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
                content: 'User updated successfully',
              });

              onSave();
            })
            .catch(({ response }) => {
              if (response.status === 403) {
                messageApi.open({
                  type: 'error',
                  content: 'Permission Denied',
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
        title="New User"
        isOpen={isOpen}
        handleCancel={onClose}
        className="OModal"
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
            btnLabel: 'Save',
            onClick: handleSave,
          },
        ]}
        width={700}
        forceRender
      >
        <Form
          form={form}
          initialValues={{ full_name: selectedUser?.full_name, username: selectedUser?.username }}
        >
          <Row style={{ marginTop: 10 }} align="middle" gutter={10}>
            <Col span={12}>
              <Card title={<h5>Login Info</h5>}>
                <Form.Item
                  label="Full Name: "
                  name="full_name"
                  rules={[{ required: true, message: 'Please input Name!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Username:"
                  name="username"
                  rules={[{ required: true, type: 'email', message: 'Please input the Username!' }]}
                >
                  <Input />
                </Form.Item>
              </Card>
            </Col>
            <Col span={12}>
              <div style={{ display: 'flex', gap: 5 }}>
                <InfoCircleFilled style={{ color: '#8C8A8C', fontSize: '12px', paddingTop: 4 }} />
                <h3>
                  To add a user to your company account, simply enter their name, password, and
                  assign proper access permissions. Skubana will then send the new user an e-mail to
                  activate their account.
                </h3>
              </div>
            </Col>
          </Row>

          <Card title={<h5>ACCESS PERMISSIONS</h5>} style={{ marginTop: 30 }}>
            <List
              size="small"
              header={
                <Row className={styles.row}>
                  <Col>
                    <span>Permission</span>
                  </Col>
                  <Col>
                    <span>Allow?</span>
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
}
