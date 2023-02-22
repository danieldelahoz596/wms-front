import { Alert, Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Analytics {'>'} Inventory {'>'} Analytics - Inventory Aging
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>What does this report reveal?</h1>
            <p>
              The Inventory Aging report reveals the age and value of your inventory at specific warehouses for inventory aged
              less than 3 months, within 3 to 6 months, 6 to 9 months, 9 to 12 months, and greater than 12 months. This report can
              be filtered by warehouse, brand, buyer, and product.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-02-23%2Bat%2B3.40.45%2BPM.png"
              style={{ width: 1000 }}
            />
            <br />
            <br />
            <br />
            <h1>How to read this report?</h1>
            <p>
              Select the warehouses and filters, then click the <strong>Search</strong> button. The report will show you the
              number of units that have reached a specific age and the value of those units. For example, the "{'<'} 3M QTY"
              column will show you the number of units aged 3 months or less. The "{'<'} 3M VALUE" column will show you the value
              of those units in the "{'<'} 3M QTY" column.
            </p>
            <h1>What actions to take after analyzing this report?</h1>
            <p>
              Look at inventory for a specific timeframe and then decide what you want to do with that inventory if it's not
              selling as quickly as you hoped. Aging inventory at 3PL warehouses can cost more money over time as you continue to
              pay for storage.
            </p>
            <h1>How to export this report?</h1>
            <p>
              For instructions on how to export this report as a Microsoft Excel spreadsheet, see{' '}
              <a href="/help/analytics/general/exportingreports" className="helplink">
                Exporting Reports
              </a>
              .
            </p>
            <Alert
              message="Note"
              description="If you think any of the inventory values appear incorrect, make sure there are no
              inventory value discrepancies for those products in the Inventory module. For more
              information on the Inventory Value Reconciliation tool, click here."
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
