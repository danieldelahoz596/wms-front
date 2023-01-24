import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { Card, Checkbox, Col, Form, Input, Row } from 'antd';

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
    >
      <Form>
        <Row>
          <Col span={12}>
            <Card title="Login Info">
              <Form.Item
                label="Username: "
                name="username"
                rules={[{ required: true, message: 'Please input username!' }]}
              >
                <Input value="" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input the password!' }]}
              >
                <Input.Password />
              </Form.Item>
            </Card>
          </Col>
          <Col span={12}>
            <p>
              To add a user to your company account, simply enter their name, password, and assign
              proper access permissions.
            </p>
          </Col>
        </Row>

        <Card title="Access Permissions">
          <Row>
            <Col span="20">
              <span>Permission</span>
            </Col>
            <Col span="4">
              <span>Allow?</span>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Orders</h4>
              <p>
                Ability to process orders from all sales channels through direct shipping,
                multi-channel fulfillment, 3PL exports, or dropshipping. This includes all manual
                orders, as well as canceling of orders.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Shipments</h4>
              <p>
                Ability to view all shipments, batches, and returns. This includes the ability to
                track or void shipments, as well as print labels, pick lists, and packing slips.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Customers</h4>
              <p>
                Ability to view and manage all customer data Skubana automatically imports with
                incoming orders from sales channels. This also includes manual creation of
                customers.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Inventory</h4>
              <p>
                Ability to fully manage inventory across all in-house, FBA, 3PL, and dropship
                warehouses. This includes setting minimum inventory levels and channel allocation
                rules.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Purchase Orders</h4>
              <p>
                Ability to create, edit, and track vendor purchase orders throughout the procurement
                life cycle. This includes the canceling of purchase orders.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Purchase Order Authorization</h4>
              <p>
                Ability to approve and authorize newly created purchase orders. Users with this
                permission effectively issue purchase orders.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Products</h4>
              <p>
                Ability to manage your core products, kits, bundles, and variations. This includes
                the creation and editing of basic product info, image gallery, listing SKUs, vendor
                products, and customs.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Analytics</h4>
              <p>
                Ability to run and view all reporting and analysis, including ad hoc, business
                intelligence, and forecasting reports. This includes auto-generation and e-mailing
                of reports.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Warehouses</h4>
              <p>
                Ability to create and modify in-house warehouses and 3PLs from which your company
                fulfills orders, including document print settings (in-house warehouses) and FTP
                settings (3PLs).
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Sales Channels</h4>
              <p>
                Ability to create and modify the sales channels on which your company sells. This
                includes channel connection, general settings, and requested shipment service
                mappings.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Shipping Providers</h4>
              <p>
                Ability to create and modify shipping providers used for address verification, rate
                calculation, and printing of shipping labels for orders fulfilled from
                direct/in-house warehouses.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Templates</h4>
              <p>
                Ability to create and modify all of your templates, including shipment e-mail
                notifications, packing slips, and purchase order templates.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Vendors</h4>
              <p>
                Ability to create and modify vendors that supply and/or manufacture the products
                your company sells. This includes the ability to configure dropshipping capabilities
                for eligible vendors.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Orderbots</h4>
              <p>
                Ability to create and modify orderbots used for filtering and workflow automation of
                customer orders from marketplaces and shopping carts.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Skubana Apps</h4>
              <p>Ability to install and uninstall apps from the Skubana App Store.</p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>User Administration</h4>
              <p>
                Ability to create new users, modify other users' permissions, as well as activate
                and deactivate users in Skubana. This permission should be given to administrators
                only.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Billing & Invoices</h4>
              <p>
                Ability to enter and edit billing information, as well as view Skubana invoices of
                your monthly order totals. This permission should be given to administrators only.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Inventory Reconciliation</h4>
              <p>
                Ability to use the individual inventory reconciliation feature found in the
                Inventory Module. This feature relates to data used in Analytics reports.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span="20">
              <h4>Bulk Inventory Reconciliation</h4>
              <p>
                Ability to use the bulk inventory reconciliation feature found in the Inventory
                Module.
              </p>
            </Col>
            <Col span="4">
              <Form.Item name="orders" valuePropName="checked">
                <Checkbox />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </OModal>
  );
}
