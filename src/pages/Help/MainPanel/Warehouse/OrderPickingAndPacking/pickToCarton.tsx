import { Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>
        Settings {'>'} Warehouse {'>'} Pick to Carton
      </h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Pick to Carton</h1>
            <br />
            <p>
              The pick to carton option allows users to assemble cartons (boxes or packages) and identify which products are in
              each package during the picking process. Cartons can also be assembled later in the process under the Shipping or
              Packing features in Extensiv Warehouse Manager. Tracking numbers and other information can be added to each carton
              in Warehouse Manager. You can also print a <b>Bill of Lading</b>, which will give you a separate packing slip for
              each carton
            </p>
            <p>
              In order for the pick to carton option to show in the order pick screens, the setting will need to be enabled by
              your Extensiv support rep (<b>Pick to Carton</b>).
            </p>
            <br />
            <p>During the order pick process you will see the following section:</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319473410-1%2Bcarton1.png" />
            <br />
            <p>Check the box to begin the process:</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319502148-2%2Bcarton2.png" />
            <p>
              If this is the first carton of the order, or you are adding another carton, click the + button. You will be prompted
              with the following:
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319519305-3%2Baddnewcarton.png" />
            <p>Now the carton dropdown will be populated with a carton identifier.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/1671319543966-4%2Bcarton3.png" />
            <p>
              Optionally, you can print a carton label by pressing the 'Print' button. This will require that a label printer be
              set up in Warehouse Manager
            </p>
            <br />
            <p>
              You can now enter the QTY to be picked into that carton. As you pick other products on the same order, you can
              either select the existing carton or repeat the process to create a new carton to be picked into.
            </p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
