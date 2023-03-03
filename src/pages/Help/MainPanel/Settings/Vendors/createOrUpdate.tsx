import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Vendors {'>'} Creating or Updating
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Creating or Updating Vendors</h1>
            <br />
            <h2>Before you Begin</h2>
            <p>
              If you are setting up a new vendor, it is recommended you work directly with the vendor before moving forward. You
              should confirm the types of connections they support, credentials needed, required fields to reorder, and any
              additional requirements they may have.
            </p>
            <p>To set up your vendors, follow the procedure below.</p>

            <ol>
              <li>
                Navigate to the <b>Settings</b> Module.
              </li>
              <li>
                On the left sidebar, click <b>Vendors.</b>
              </li>
              <li>
                On the <b>Vendors</b> page, <b>click + New Vendor.</b>
              </li>
            </ol>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor.png" />

            <h2>Basic Info</h2>
            <ol>
              <li>
                In the New Vendor window, under the Basic Info section, enter the vendor's name, complete address, and telephone
                number. To allow Order Manager to send auto-generated POs to the vendor directly via email, enter the vendor's
                email address as well in the P.O. E-Mail field. Otherwise, you may leave this blank.
              </li>
            </ol>

            <p>
              <b>Note:</b> You can add multiple email addresses in the P.O. E-Mail field, as long as the total number of
              characters including the comma to separate them is under 100 characters. Make sure there are no spaces in between
              email addresses, or any addresses after a space will not receive the PO email.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-04-08%2Bat%2B9.08.53%2BAM.png" />

            <h2>Services</h2>
            <p>
              Under the <b>Services</b> section, check the applicable boxes to indicate that the vendor is a supplier,
              manufacturer, and/or dropshipper. Suppliers do not produce any product, manufacturers can both produce and supply
              your products, and drop-shippers supply and fulfill their products to your customers in your name.
            </p>
            <p>
              If you indicate your vendor as a dropshipper, Order Manager will automatically create a dropship warehouse in the
              Inventory module where you can set inventory available for purchase through the dropshipper. This Warehouse will not
              appear in the Settings – Warehouses page. <b>Note:</b> Some accounts may list these dropship warehouses as Excluded
              Warehouses under the Sales Channels tab if the inventory at the dropship warehouse is intentionally inflated to
              indicate infinite availability.
            </p>
            <p>
              If your vendor is a dropshipper, select the Auto Authorize checkbox if you would like your dropship purchase orders
              created through Order Manager to automatically skip the Awaiting Authorization status in the POs module and send an
              email to the dropship vendor once the order is in the Awaiting Dropship status in the Orders module. If you do not
              check this setting, then dropship POs will need to be manually authorized before the vendor is contacted.
            </p>

            <h2>P.O. Defaults</h2>
            <p>
              Under the <b>P.O. Defaults</b> section, click the dropdown menu for <b>P.O. Template </b> and{' '}
              <b>Dropship Template</b> to select from the options available in the PO Templates tab where you can create
              customized PO templates according to your preferences. If your vendor isn't a dropshipper, you don't need to select
              a Dropship Template.
            </p>
            <p>
              To give Order Manager the capability to seamlessly communicate purchase orders between your account and your vendor,
              enter the <b>P.O. Email, P.O. Fax,</b> and <b>P.O. Format</b>. The P.O. email is the address to which Order Manager
              will send POs; you may enter your email address here if you do not want Order Manager to send the PO directly to the
              vendor. The P.O. Fax is a fax number to which the auto-generated PO can be sent. For the P.O file format, you can
              choose to send the PO as a PDF, e-mail, or HTML attachment.
            </p>
            <p>
              Still under the <b>P.O. Defaults</b> section, enter the <b>Incoterm, Payment</b> method, and <b>Item Tax</b>. For{' '}
              <b>Incoterm</b>, use DAP (Delivered At Place), unless your vendor communicated to you otherwise. The item tax is a
              percentage of the total product cost.
            </p>
            <p>
              Lastly, the <b>P.O. LTR</b> checkbox is a feature you can select depending on how you would like product variations
              to be shown on a PO PDF. If you'd like variations to be grouped together under their parent SKU, select this
              setting. Otherwise, leave it unchecked to have variants ordered on their own lines.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor2.PNG" />

            <p>
              Once you are done entering the required vendor information, click <b>Save</b> to close the <b>New Vendor</b> window.
              On the <b>Vendors</b> page, the new vendor will be added to your vendor list. From this point on, you can Edit
              existing vendors, view their Edit History, and/or Deactivate them in the top right corner after highlighting a
              vendor.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor3%2B_2_.PNG" />

            <h2>Updating Dropshipper Information</h2>
            <p>
              If you created a dropshipping vendor that will receive POs via FTP, you will need to define the FTP Connection
              Settings under the Services section seen below. For more information on how to do this,{' '}
              <a href="/om-settings-warehouses-vendors/dropship-vendor-ftp-configuration">see this article.</a>
            </p>
            <p>
              You can also update the Returns Location for the vendor. If the Returns Location is different than the vendor’s
              Basic Info address, please click the <b>Returns Location</b> button and enter the preferred return address.
            </p>

            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/vendor4%2B_1_.PNG" />

            <h2>Additional Info</h2>
            <ul>
              <li>Currently, you cannot bulk import vendors into Order Manager.</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
}
