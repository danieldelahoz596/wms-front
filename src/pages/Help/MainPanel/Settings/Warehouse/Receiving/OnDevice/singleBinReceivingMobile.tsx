import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Single Bin Receiving - Mobile
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Single Bin Receiving - Mobile</h1>
            <br />
            <p>
              Single Bin Receiving is the default receiving method with the handheld scanner / mobile app and is best used when
              receiving product into a single bin to later be bin moved into the rest of the warehouse.
            </p>
            <p>
              Navigate to Receiving from the main {'page>Shipping/Receiving>Receiving'}. You will then be prompted to open a
              document number.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320758606-1%2BDocNumber.png" />
            <br />
            <p>
              Enter the doc Number, then you will be prompted to enter a single bin to receive to. You can change this bin mid
              receiving if receiving into multiple bins.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320769308-2%2BScanABin.png" />
            <br />
            <p>Once the Bin is entered,simply scan the part number to receive the quantity.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320783892-3%2BScanaPart.png" />
            <br />
            <p>
              or click the Parts List Button for a list of parts on the Receiving transaction and select the part to receive from
              the list
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320794392-4%2BPartList.png" />
            <p>There are different types of product that can be received. Items, Assets (serialized inventory) or Lot Product:</p>
            <h3>
              <u>Receiving Items</u>
            </h3>
            <p>
              Items are non-serialized product. Simply select or scan the part and then you will be prompted to enter the quantity
              and hit submit.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671321092390-5%2BEnterQTY.png" />
            <h3>
              <u>Receiving Assets</u>
            </h3>
            <p>
              Enter the part number of the asset you would like to receive. then you will be asked for the serial number which you
              can scan or enter manually. Note: You can only receive one asset at a time.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671321078074-6%2BScanSerial.png" />
            <h3>
              <u>Receiving Lot Product</u>
            </h3>
            <p>
              Enter the lotted part number, then you will be prompted to enter the lot number. If a lot number has already been
              created, all pertinent information (i.e. expiration date etc.) from that lot will be automatically filled in. Enter
              the quantity under the lot.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320913246-7%2BScanLot.png" />
            <br />
            <p>
              Once you have finished receiving, even if you have only partially received the product, make sure to hit the done
              buttonat the upper right corner this will update the status of the document and bring you to a discrepancy screen.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320929510-8%2BDisc.png" />
            <p>
              Enter any discrepancies that you have and select a reason code. If there is no discrepancy, simply click "close".
            </p>
            <br />
            <h3>Adding parts on the fly</h3>
            <p>
              One of the great new features about this receiving mode is that it will allow you to add parts that are not on the
              receiving order. Simply scan the part, and if it doesn't exist in the receiving order, it will prompt you to add it:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671321005336-10%2BAddPartQTY.png" />
            <p>
              Clicking Yes will bring you to the next screen where you will be asked the QTY that should be on the receiving order
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671321023004-9%2BAddPart.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
