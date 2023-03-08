import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} No Stock
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>No Stock</h1>
            <br />
            <p>The No Stock button is a way for the pickers to perform an on the fly cycle count.</p>
            <p>
              If Extensiv Warehouse Manager has inventory of a product, it will send the user to the bin to pick it. If a user
              goes to that location and does not find any inventory, they can use the 'No Stock' button on the order pick page
              (bottom right)
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319277807-1%2Bnostockbutton.png" />
            <p>
              Pressing the No Stock button will flag that part in that bin as being unpickable and send the user to the next part
              on the order. Until the 'Not Found Commit' function is used, the part in this bin will be skipped over until the 'No
              Stock' flag is cleared.
            </p>
            <p>
              To view parts marked as 'No Stock' in your system, open the 'Inventory Reviews Needed' report in Warehouse Manager
              under {"'Reports > Inventory > Inventory Reviews Needed'"}
            </p>
            <br />
            <p>
              To clear the products marked as No Stock, navigate on the device to '<b>{'Inventory > Not Found Commit'}</b>'
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319295046-2%2Bnotfoundcommit.png" />
            <p>
              If there are parts currently marked as No Stock, the device will send the user to the first bin for not found
              products. Scan or type the bin name into the field:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319309427-3%2Bnotfoundscanbin.png" />
            <p>Next, the device will ask 'Is there any stock of part xxxx?'</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319326835-4%2Bnotfoundpart.png" />
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
