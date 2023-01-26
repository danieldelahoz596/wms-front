import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <div style={{ margin: '10px' }}>
        <h2>Settings {'>'} Company Info</h2>
        <Row>
          <Col span={24}>
            <Card>
              <h1>Company Info and Additional Account Settings</h1>
              <p>Your company's name, address, and contact information are visible in the Settings module, in addition to account settings like Purchase Order Settings, Product Settings, Inventory Settings, Inventory Value Reconciliation Settings, and Shipping Settings. To update this info, first, go to the Settings Module, click on the Company Info tab, then follow the steps below.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504838/info.PNG" style={{ width: 600 }} />
              
              <h2>Company Info Section</h2>
              <p>You can edit your company name, contact name, email address, phone number, and address. These fields are pulled from for Field Replacements on things like packing slip templates, email templates, PO templates, etc.</p>
              <p><strong>Example:</strong> Field Replacements under the Company section for a packing slip template</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504839/Screen_Shot_2021-05-06_at_9.55.55_AM.png" style={{ width: 600}} />
              
              <h2>Company Logo Section</h2>
              <p>You can upload or delete your company logo. Click on the Select button to choose & upload the file you wish to upload as your company logo or click on the Delete Logo button to delete the currently uploaded company logo image.</p>
              
              <h2>Billing, Operations, & Technical Sections</h2>
              <p>You can edit the recipient name, email address, and phone number of the billing, operations, and technical contacts. The following details what each contact is emailed about. You can enter one email address per field.</p>
              <p>Billing</p>
              <ul>
                <li>Combine orders notifications</li>
                <li>Credit card expiring soon</li>
                <li>Deactivated company</li>
                <li>eBay quota limit reached</li>
                <li>Invoice paid</li>
                <li>No payment info</li>
                <li>Payment failed</li>
                <li>Postage balance recredit</li>
                <li>Shipment void failure</li>
                <li>Trial ending</li>
              </ul>
              <p>Operations</p>
              <ul>
                <li>Inventory update failure</li>
                <li>Channel purchase updates errors</li>
                <li>Combine orders notifications</li>
                <li>Credit card expiring soon</li>
                <li>Deactivated company</li>
                <li>Deactivated sales channel notification</li>
                <li>eBay quota limit reached</li>
                <li>FBA inventory sync failed</li>
                <li>Orders download failed</li>
                <li>Skipped download orders notification</li>
                <li>Order status change notification</li>
                <li>Void shipment failure</li>
                <li>PO received</li>
              </ul>
              <p>Technical</p>
              <ul>
                <li>Access denied to Amazon Finance API</li>
                <li>Channel health</li>
                <li>Deactivated sales channel notification</li>
                <li>eBay token expiring soon</li>
                <li>Invalid parameter value</li>
                <li>Amazon marketplace (FBA listing SKU service)</li>
              </ul>

              <h2>Order Settings Section</h2>
              <p><strong>Prevent the editing of partially picked orders:</strong> This setting blocks the editing of order items once the order has had any quantities picked. Once the order is picked and this checkbox is selected, the order will not be able to be edited in the UI or via API. "Partially picked" means that the order has had at least one unit of an order item indicated as picked in Extensiv Order Manager.</p>
              <p style={{ color: 'red' }}><strong>This setting is only applicable to customers who use Barcoders.</strong></p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504840/image-20210504-211427.png" style={{ width: 600}} />
              <p><strong>Example:</strong> These orders have not had any units of this SKU picked because the Picked quantities are all 0.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504841/Screen_Shot_2021-05-06_at_10.11.24_AM.png" style={{ width: 600}} />
             
              <h2>Purchase Order Settings Section</h2>
              <p>You can edit the <strong>PO Number Prefix</strong> and <strong>Auto PO Generation</strong> settings.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504842/Screen_Shot_2021-05-06_at_10.33.14_AM.png" style={{ width: 600}} />
              <ul>
                <li><strong>PO Number Prefix:</strong> Any number or text that you input here will be appended to the beginning of all non-dropship purchase order numbers generated by Extensiv Order Manager.</li>
                <li><strong>Auto PO Generation:</strong> Selecting this checkbox will enable Extensiv Order Manager to generate Auto POs, which will be visible in the Awaiting Authorization Status in the <strong>Purchasing</strong> module.</li>
              </ul>
              
              <h2 id="Product_Settings_Section">Product Settings Section</h2>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504843/Screen_Shot_2021-05-06_at_10.32.45_AM.png" style={{ width: 600}} />
              <p><strong>Automatically update product weight and dimensions from shipped orders?:</strong> Checking this setting will automatically update the weight and dimensions of a product based on the weight and dimensions of the most recent shipped order that contained a single unit of the product.</p>
              
              <h2>Inventory Settings Section</h2>
              <p>You can edit the <strong>Inventory Update</strong> setting and the default auto-reorder rules that will be assigned to any new products that are created after these settings have been updated.</p>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504844/Screen_Shot_2021-05-06_at_10.32.30_AM.png" style={{ width: 600}} />
              <ul>
                <li><strong>Inventory Update:</strong> This checkbox enables Extensiv Order Manager to push inventory to all active sales channels with active listing SKUs that have the "Push inventory to channel" setting enabled. <strong>⚠️ Note: DO NOT TOUCH THIS SETTING WITHOUT CONSULTING YOUR IMPLEMENTATION MANAGER, ACCOUNT MANAGER, OR Extensiv Order Manager SUPPORT.</strong></li>
                <li><strong>Auto Reorder Sales Days Back Default:</strong> The number of days that Extensiv Order Manager will use to calculate the sales velocity of a product.<br/>
                <strong>Auto Reorder Days In Stock Default:</strong> The number of days that you want the product to be in stock for once it's been reordered.</li>
                <li><strong>Auto Reorder Growth Percentage Default:</strong> The expected percentage change in the sales velocity for a product. This can be a positive or negative number.</li>
                <li><strong>Auto Reorder Lead Days Buffer Default:</strong> The number of days that you want to add to the lead time of the product as a buffer.</li>
              </ul>

              <h2>Inventory Value Reconciliation Settings Section</h2>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504845/Screen_Shot_2021-05-06_at_10.32.14_AM.png" style={{ width: 600}} />
              <p><strong>Choose from all Vendors for reconciliation?:</strong> Enables you to reconcile bundles based on the vendor products of the core components. To enable this setting, select its checkbox and click on the Update <strong>button</strong> at the bottom of the page.</p>
              
              <h2>Returns Settings Section</h2>
              <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2504847/Screen_Shot_2021-05-06_at_10.31.27_AM.png" style={{ width: 600}} />
              <p><strong>Automated Returns Receiving Warehouse:</strong> This setting will determine what the Receiving Warehouse is for any automatically generated RMAs (such as those created from webhooks). Read on here to learn more about returns webhooks and their default warehouse settings for RMAs.</p>
              <p style={{ color: 'red'}}>If a user deactivates the warehouse that is assigned to be the Automated Returns Receiving Warehouse, then Extensiv Order Manager will automatically reset this dropdown value to "No Overriding Returns Warehouse" and will record that edit in the History logs. If this happens or if the No Overriding Returns Warehouse option is chosen here in general, then Extensiv Order Manager will return to its previous functionality.</p>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
