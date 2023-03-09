import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Single Bin Receiving - Device
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Single Bin Receiving - Device</h1>
            <br />
            <p>
              Single Bin Receiving is the default receiving method with the handheld scanner and is best used when receiving
              product into a single bin to later be bin moved into the rest of the warehouse.
            </p>
            <p>
              Navigate to Receiving from the main {'page>Shipping/Receiving>Receiving'}. You will then be prompted to open a
              document number.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320572181-1%2Benter_doc_number.png" />
            <p>
              Enter the doc Number, then you will be prompted to enter a single bin to receive to. You can change this bin mid
              receiving if receiving into multiple bins.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320586060-2%2BEnter_Bin.png" />
            <p>Once the Bin is entered,simply scan the part number to receive the quantity.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320599170-3%2BEnter_Part.png" />
            <p>
              or click the Parts List Button for a list of parts on the Receiving transaction and select the part to receive from
              the list
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320615895-4%2BPartslist.png" />
            <p>There are different types of product that can be received. Items, Assets (serialized inventory) or Lot Product:</p>
            <h3>
              <u>Receiving Items</u>
            </h3>
            <p>
              Items are non-serialized product. Simply select the part and then you will be prompted to enter the quantity and hit
              submit.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320637820-5%2BReceive_items.png" />
            <h3>
              <u>Receiving Assets</u>
            </h3>
            <p>
              Enter the part number of the asset you would like to receive. then you will be asked for the serial number which you
              can scan or enter manually. Note: You can only receive one asset at a time.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320652955-6%2BReceive_asset.png" />
            <h3>
              <u>Receiving Lot Product</u>
            </h3>
            <p>
              Enter the lotted part number, then you will be prompted to enter the lot number. If a lot number has already been
              created, all pertinent information (i.e. expiration date etc.) from that lot will be automatically filled in. Enter
              the quantity under the lot.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320666631-7%2BReceiving_Lot.png" />
            <p>
              Once you have finished receiving, even if you have only partially received the product, make sure to hit the done
              buton at the upper right corner this will update the status of the document and bring you to a discrepency screen.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320677887-8%2BDiscrepency.png" />
            <p>
              Enter any discrepencies that you have and select a reason code. If there is no discrepency, simply click "close".
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
