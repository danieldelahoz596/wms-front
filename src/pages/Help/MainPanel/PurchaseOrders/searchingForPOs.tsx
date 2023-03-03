import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Searching for POs</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Searching for POs</h1>
            <br />
            <p>The Purchasing module's search function offers two ways to search for PO records in Extensiv Order Manager.</p>
            <ul>
              <li>
                The first one uses the traditional search function, which involves narrowing down your search by entering as much
                information on the Search fields as possible.
              </li>
            </ul>
            <p>In the example below, only the status and PO number fields are filled up.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502836/PO.PNG" />
            <ul>
              <li>The second way involves searching for specific POs under the various PO milestones.</li>
            </ul>
            <p>
              If you know the milestone the PO record is currently in, click a milestone, then the location under which the PO was
              issued, then look for the record on the center panel of the <b>Purchasing</b> page.
            </p>
            <p>
              If you do not know the record's current milestone, you have to click, then go through the records under each
              milestone.
            </p>
            <p>
              In the example below, since you know that your PO was issued in New York and is <b>Awaiting Authorization</b>, you
              click <b>Awaiting Authorization</b>, then <b>New York</b>.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502838/PO__1_.PNG" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
