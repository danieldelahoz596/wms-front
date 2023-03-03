import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Exporting POs</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Exporting POs</h1>
            <br />

            <ol>
              <li>
                Click on the <b>Purchasing</b> module in Extensiv Order Manager.
                <br />
                <img src="https://downloads.intercomcdn.com/i/o/282212680/96a549b6313e6acc375f55a9/PO.png" />
              </li>
              <li>
                Select the POs you would like to export and then click on import/export and select Export Purchase Orders.
                <br />
                <img src="https://downloads.intercomcdn.com/i/o/282213068/37082103fb61a5dcef2b04fe/PO.png" />
              </li>
              <li>
                If you have not done so already, you will need to configure an export of the columns you would like to to appear
                on your export.
              </li>
              <li>
                This can be done by clicking on Configure Settings and selecting + New Settings.
                <br />
                <img src="https://downloads.intercomcdn.com/i/o/282213489/bcc8e6e4111cf879f70b636d/PO.png" />
                <br />
                <img src="https://downloads.intercomcdn.com/i/o/289079077/b232a290237c1bedbbd67397/image.png" />
              </li>
              <li>
                Here you must name the export, choose from the File Configuration options, and select all of the data fields that
                you wto be included in the export. You must give them a column name that will appear in your export, and then
                press save.
                <br />
                <img src="https://downloads.intercomcdn.com/i/o/282213835/9005a1272620d1b72cd2bb75/PO.png" />
              </li>
              <li>
                Close the second box and then select the export settings you created and press Export Purchase Orders.
                <br />
                <img src="https://downloads.intercomcdn.com/i/o/282213978/5d5f4e44ce30401394ca74dc/PO.png" />
              </li>
              <li>The file will then be emailed to your user email address.</li>
            </ol>
          </Card>
        </Col>
      </Row>
    </>
  );
}
