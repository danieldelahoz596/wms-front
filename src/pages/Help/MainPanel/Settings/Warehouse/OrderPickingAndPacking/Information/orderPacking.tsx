import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Order Packing
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Order Packing</h1>
            <br />
            <p>
              Once you have Picked your Sales Order in Extensiv Warehouse Manager you may choose to utilize Order Packing as well.
              Packing provides the benefit of a double verification of picked orders.
            </p>
            <p>Start by entering/scanning or searching a Sales Order that has already been picked.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319182232-1%2Bopen.jpg" />
            <p>
              The order will be opened and you will next select the Carton you would like to Pack into. The carton can be whatever
              you are packing the products into. You can use 1 Carton or add additional Cartons if needed.
            </p>
            <p>
              Enter the part that you will be Packing into the Carton. You can Type or Scan the Part or select it from the parts
              list.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319196258-2%2BPart.jpg" />
            <p>You will then be prompted to enter the QTY that you would like to Pack into the selected Carton.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319207588-3%2Bpack_qty.jpg" />
            <p>
              Enter the QTY that you would like to Pack and click Submit. Follow these steps until the entire order is Packed.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
