import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Step by Step - Guided Order pick on Device
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Step by Step - Guided Order pick on Device</h1>
            <br />
            <p>
              The guided version of order pick in Extensiv Warehouse Manager will direct the user bin by bin to pick the products
              needed for each order. By default, the device will create an alphabetical path based on bin name. You can also set a
              custom pick path if you'd like something other than an alphabetical pick path.
            </p>
            <br />
            <p>1 Navigate on the device to 'Shipping/Receiving' and click the Order Pick menu option</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319644374-1%2Bpickmenu.png" />
            <br />
            <br />
            <p>2Enter the order number (doc number)</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319658151-2%2Benterdoc.png" />
            <p>You can scan or type the order number in the textbox. Other options on this page:</p>
            <ul>
              <li>
                <b>Next Order</b> - This will open the oldest order with a status of 'Open'
              </li>
              <li>
                <b>Search Icon</b> - Lookup orders by date, customer or part
              </li>
            </ul>
            <br />
            <p>
              3The first input the device asks for is a <b>bin name</b>. Ideally, you would scan the bin barcode located on the
              bin. You can also type into this textbox
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319675756-3%2Bscanbin.png" />
            <p>The screen also shows the Part Description of the next part found in that bin. Other options on this page are:</p>
            <ul>
              <li>
                <b>Print Doc #</b> - This will print the order # barcode to a Zebra Printer set up in Warehouse Manager
              </li>
              <li>
                <b>Add Line</b> - Add a new line to the order
              </li>
              <li>
                <b>Pick List</b> - Brings up a list of all parts on the order, allowing you to select a different part
              </li>
              <li>
                <b>Part Loc</b> - Select another bin location for the current part
              </li>
            </ul>
            <br />
            <p>4Next, Scan the part number displayed above the text box.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319694662-4%2Bscanpart.png" />
            <br />
            <p>
              5Enter the QTY to be picked. Note the QTY displayed in the parenthesis is the QTY needed for the order, or the QTY
              available in that bin
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319707213-5%2Benterqty.png" />
            <p>
              *There is an option that can be enabled that will have the user scan the part to equal QTY 1 of that product. This
              setting is called 'Pick Item with Part Scan' and can be enabled by your Extensiv support rep. This option is system
              wide, so consider the QTY of products that you typically have on orders. Scanning 1000 times can be cumbersome to
              the user. Also this option is only applicable with non-serial and non-lot products (items).
            </p>
            <br />
            <p>6If all of the lines have been picked, the user will receive the message 'Order Pick Complete'</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319719165-6%2Bpickcomplete.png" />
            <p>
              If no QTY is available for any of the lines on the order, the guided order pick will skip those lines and give the
              following message at the end of the order pick:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319741699-7%2Bnoqty.png" />
            <p>The order will be marked as 'Incomplete'. Check stock on the products on the order</p>
            <br />
            <p>
              7No Stock Button (optional). If Warehouse Manager has inventory of a product, it will send the user to the bin to
              pick it. If a user goes to that location and does not find any inventory, they can use the '<b>No Stock</b>' button
              on the order pick page (bottom right)
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319753894-8%2Bnostockbutton.png" />
            <p>
              Pressing the <b>No Stock</b> button will flag that part in that bin as being unpickable and send the user to the
              next part on the order. Until the 'Not Found Commit' function is used, the part in this bin will be skipped over
              until the 'No Stock' flag is cleared.
            </p>
            <p>
              To view parts marked as '<b>No Stock</b>' in your system, open the '<b>Inventory Reviews Needed</b>' report in
              Warehouse Manager under '<b>{"Reports > Inventory > Inventory Reviews Needed'"}</b>
            </p>
            <br />
            <p>
              8To clear the products marked as No Stock, navigate on the device to '<b>{'Inventory > Not Found Commit'}</b>'
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319770261-9%2Bnotfoundcommit.png" />
            <p>
              If there are parts currently marked as No Stock, the device will send the user to the first bin for not found
              products. Scan or type the bin name into the field:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319782454-10%2Bnotfoundscanbin.png" />
            <p>
              Next, the device will ask '<b>Is there any stock of part xxxx?</b>'
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319793075-11%2Bnotfoundpart.png" />
            <ul>
              <li>Clicking Yes to this prompt will simply clear the 'No Stock' flag and return the part to a pickable status</li>
              <li>Clicking No to this prompt will zero out the inventory of that part in the bin</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
}
