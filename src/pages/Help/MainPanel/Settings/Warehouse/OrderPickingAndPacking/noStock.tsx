import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Step by Step - Non-Guided Order Pick on Device
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Step by Step - Non-Guided Order Pick on Device</h1>
            <br />
            <p>
              The non-guided version of order pick does not automatically select which parts / bins the user will pick. It will
              allow the user to select any part to begin picking. This mode may be better for more non conventional warehouse
              models
            </p>
            <br />
            <p>1 Navigate on the device to 'Shipping/Receiving' and click the Order Pick menu option</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319899677-1%2Bpickmenu.png" />
            <br />
            <p>2Enter the Order number in the text box (Doc Number)</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319920314-2%2Boldorderdoc.png" />
            <ul>
              <li>You can use the spyglass search option to look up orders by date, client or part</li>
            </ul>
            <br />
            <p>
              3After the order is opened, the focus will land on the PN or Part Name field. You can scan a part here when the
              field is highlighted blue. You can also select a part from the grid above
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319933063-3%2Boldorderpick1.png" />
            <br />
            <p>
              4Next, the focus will go to the bin field, or you may have to tap into the field if the part was selected rather
              than scanned. You will get a popup box showing which bins the product can be found in. Scan or type the bin into the
              field. *Note, if you do not have inventory of that product, the pop up box will be empty
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319944842-4%2Boldorderbin.png" />
            <br />
            <p>5Last, enter the QTY to be picked and hit the 'Save' button, or the enter key on your device</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319956336-5%2Boldorderqty.png" />
            <p>Other options on this screen:</p>
            <ul>
              <li>
                <b>Print Doc #</b> - This will print out the order number barcode to a label printer set up in Extensiv Warehouse
                Manager
              </li>
              <li>
                <b>UoM</b> - Click this to enter a Unit of Measure for the product being picked. The unit of measure must be set
                up for each part
              </li>
              <li>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320009028-6%2Brefresh.png" />
                <b>Refresh</b> - The QTY picked does not automatically refresh on the non guided order pick screen. Press the
                refresh icon to update the information on the page at any time
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
}
