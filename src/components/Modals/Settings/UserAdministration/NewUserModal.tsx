import { OModal } from '@/components/Globals/OModal';
import { InfoCircleFilled } from '@ant-design/icons';
import { Card, Checkbox, Col, Form, Input, Row, List } from 'antd';
import styles from './index.less';

const userAdministration = [
  {
    title: 'Ordrs',
    content:
      'Ability to process orders from all sales channels through direct shipping, multi-channel fulfillment, 3PL exports, or dropshipping. This includes all manual orders, as well as canceling of orders.',
  },
  {
    title: 'Shipments',
    content:
      'Ability to view all shipments, batches, and returns. This includes the ability to track or void shipments, as well as print labels, pick lists, and packing slips.',
  },
  {
    title: 'Customers',
    content:
      'Ability to view and manage all customer data Skubana automatically imports with incoming orders from sales channels. This also includes manual creation of customers.',
  },
  {
    title: 'Inventory',
    content:
      'Ability to fully manage inventory across all in-house, FBA, 3PL, and dropship warehouses. This includes setting minimum inventory levels and channel allocation rules.',
  },
  {
    title: 'Purchase Orders',
    content:
      'Ability to create, edit, and track vendor purchase orders throughout the procurement life cycle. This includes the canceling of purchase orders.',
  },
  {
    title: 'Purchase Order Authorization',
    content:
      'Ability to approve and authorize newly created purchase orders. Users with this permission effectively issue purchase orders.',
  },
  {
    title: 'Products',
    content:
      'Ability to manage your core products, kits, bundles, and variations. This includes the creation and editing of basic product info, image gallery, listing SKUs, vendor products, and customs.',
  },
  {
    title: 'Analytics',
    content:
      'Ability to run and view all reporting and analysis, including ad hoc, business intelligence, and forecasting reports. This includes auto-generation and e-mailing of reports.',
  },
  {
    title: 'Warehouses',
    content:
      'Ability to create and modify in-house warehouses and 3PLs from which your company fulfills orders, including document print settings (in-house warehouses) and FTP settings (3PLs).',
  },
  {
    title: 'Sales Channels',
    content:
      'Ability to create and modify the sales channels on which your company sells. This includes channel connection, general settings, and requested shipment service mappings.',
  },
  {
    title: 'Shipping Providers',
    content:
      'Ability to create and modify shipping providers used for address verification, rate calculation, and printing of shipping labels for orders fulfilled from direct/in-house warehouses.',
  },
  {
    title: 'Templates',
    content:
      'Ability to create and modify all of your templates, including shipment e-mail notifications, packing slips, and purchase order templates.',
  },
  {
    title: 'Vendors',
    content:
      'Ability to create and modify vendors that supply and/or manufacture the products your company sells. This includes the ability to configure dropshipping capabilities for eligible vendors.',
  },
  {
    title: 'Orderbots',
    content:
      'Ability to create and modify orderbots used for filtering and workflow automation of customer orders from marketplaces and shopping carts.',
  },
  {
    title: 'Skubana Apps',
    content: 'Ability to install and uninstall apps from the Skubana App Store.',
  },
  {
    title: 'User Administration',
    content:
      "Ability to create new users, modify other users' permissions, as well as activate and deactivate users in Skubana. This permission should be given to administrators only.",
  },
  {
    title: 'Billing & Invoices',
    content:
      'Ability to enter and edit billing information, as well as view Skubana invoices of your monthly order totals. This permission should be given to administrators only.',
  },
  {
    title: 'Inventory Reconciliation',
    content:
      'Ability to use the individual inventory reconciliation feature found in the Inventory Module. This feature relates to data used in Analytics reports.',
  },
  {
    title: 'Bulk Inventory Reconciliation',
    content:
      'Ability to use the bulk inventory reconciliation feature found in the Inventory Module.',
  },
];

export default function ({ isOpen, onSave, onClose }) {
  return (
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
          onClick: onSave,
        },
      ]}
      width={700}
    >
      <Form>
        <Row style={{ marginTop: 10 }} align="middle" gutter={10}>
          <Col span={12}>
            <Card title={<h5>Login Info</h5>}>
              <Form.Item
                label="Username: "
                name="username"
                rules={[{ required: true, message: 'Please input username!' }]}
              >
                <Input value="" />
              </Form.Item>

              <Form.Item
                label="Password:"
                name="password"
                rules={[{ required: true, message: 'Please input the password!' }]}
              >
                <Input.Password />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <div style={{ display: 'flex', gap: 5 }}>
              <InfoCircleFilled style={{ color: '#8C8A8C', fontSize: '12px', paddingTop: 4 }} />
              <h3>
                To add a user to your company account, simply enter their name, password, and assign
                proper access permissions. Skubana will then send the new user an e-mail to activate
                their account.
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
              <List.Item actions={[<Checkbox key={_item.title} />]}>
                <List.Item.Meta title={_item.title} description={_item.content} />
              </List.Item>
            )}
            style={{ overflow: 'auto', height: '500px' }}
          />
        </Card>
      </Form>
    </OModal>
  );
}
