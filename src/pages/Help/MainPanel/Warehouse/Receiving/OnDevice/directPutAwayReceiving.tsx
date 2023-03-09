import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Direct Put Away Receiving
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Direct Put Away Receiving</h1>
            <br />
            <p>
              Direct Put Away Receiving is to be utilized when receiving product directly into the bin where it will be commonly
              stored. This is a setting that needs to be enabled on your account. Please contact your Extensiv Support Engineer to
              have this setting enabled.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320319663-1%2BOpen_doc.png" />
            <p>
              Once the setting is enabled, log into the device and select Shipping/Receiving. Go to Receiving. and open the
              receiving document you want to receive against.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320336259-2%2BCapture.png" />
            <p>
              Once the document is entered you will see a list at the top of the screen of items that are waiting to be received
              with the first part on the list auto-populated in the partname field by default. Next select the bin to be received
              to and enter any pertinent receiving information (i.e. Lot Numbe, Serial Number, Required receiving information
              configured in the part record) By default the bin, once selected, will remain unchanged while receiving until is
              manually changed by the receiver.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320502704-5%2Breceiving_1st_screen.png" />
            <p>
              <strong>Item Receiving</strong>
            </p>
            <p>
              When receiving items (non-serialied, non lotted product), You will select the part, enter the bin, then add the
              quantity and hit save.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320387652-3%2BItem_Receiving.png" />
            <p>
              <strong>Asset Receiving</strong>
            </p>
            <p>
              When receiving assets. Scan the part number or select it from the list. Scan the bin or hit the magnifying glass to
              find bins that already contain that product. then enter or scan the serial number.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320416553-4%2BAsset_Receiving.png" />
            <p>
              <strong>Lot Receiving</strong>
            </p>
            <p>
              When Receiving Lots, select or scan the lotted part. Scan, search or type the bin name, then add the lot number.
              After entering the lot number you will be taken to a quantity page that you can also input any reuired information
              such as perishable date or any required custom field.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320440902-6%2BLot_receiving_with_paerishable.png" />
            <p>
              <strong>Completing Receiving</strong>
            </p>
            <p>
              After receiving product, you must hit the refresh button above the grid view in order to see updated totals on the
              grid view. Then hit close. If you still have items to be received on the document, you will get the following
              message.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320463156-7%2BIncomplete_receiving.png" />
            <p>
              If you select yes you will be taken to the discrepency screen where you can give reason codes to the discrepencies.
              If you are simply exiting the transaction to come back to it later, just hit close. Otherwise enter the reason codes
              wit hthe quantities and hit "Save and close".
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671320474809-8%2BReceiving_discrepency.png" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
