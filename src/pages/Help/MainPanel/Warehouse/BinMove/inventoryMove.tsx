import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Inventory Move
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Inventory Move</h1>
            <br />
            <p>
              Inventory Move is used to Bin Move Items. Start by entering the Part Name. Once you enter the Part Name, the rest of
              the available fields will be displayed. You can use the magnifying glass next to each field to look up Part Names or
              Bins.
            </p>
            <p>
              Enter the From and To Bins and a QTY to be moved. You may also enter Reason Codes or Reason Notes if desired. Select
              Move and the inventory has been moved to the selected Bin.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671288362232-Item_Move.jpg" />
          </Card>
        </Col>
      </Row>
    </>
  );
}
