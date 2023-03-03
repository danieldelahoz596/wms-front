import { Card, Row, Col, Alert } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} Working with PO Milestones</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Working with PO Milestones</h1>
            <br />
            <p>
              Milestones for PO tracking purposes are set when creating a PO. You can create as many milestones as you want but
              you will have to check them manually per issued PO.
            </p>
            <p>To create a milestone, follow the procedure below.</p>
            <ol>
              <li>
                On the <b>Toolbar</b>, click <b>Purchasing</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/po%2B_22_.PNG" />
              </li>
              <li>
                On the <b>Purchase Orders</b> page, click <b>New P.O.</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/po%2B_23_.PNG" />
              </li>
              <li>
                Select a vendor from the list, then click <b>Continue</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/po%2B_24_.PNG" />
              </li>
              <li>
                On the <b>New Purchase Order</b> window, under the <b>P.O. Details</b> section, click the{' '}
                <b>
                  <i>Configure Milestones</i>
                </b>{' '}
                button to the right of the Milestones box.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-01-14%2Bat%2B4.57.46%2BPM.png" />
              </li>
              <li>
                On the <b>Configure Milestones</b> window, click <b>New Milestone</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/po%2B_25_.PNG" />
              </li>
              <li>
                On the <b>New Milestone</b> window, enter a name for the milestone, position your mouse over the color box, then
                optionally choose a color for the milestone from the palette.
              </li>
              <li>
                Click <b>Save</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/po%2B_26_.PNG" />
              </li>
              <li>
                On the <b>New Milestone</b> window, the milestone is now added to the list. Click <b>Close</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/po%2B_27_.PNG" />
              </li>
            </ol>
            <p>Back on the New Purchase Order window, you may select the milestone from the list.</p>
            <Alert message="Note" description="For more detailed instructions on creating a PO, see Creating Purchase Orders." />
          </Card>
        </Col>
      </Row>
    </>
  );
}
