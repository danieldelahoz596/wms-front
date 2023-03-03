import { Alert, Card, Col, Row } from 'antd';

export default function () {
  return (
    <>
      <h2>Shipments {'>'} Voiding Shipments</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Voiding Shipments</h1>
            <br />
            <p>You can void shipments within a certain time-frame.</p>
            <p>
              Voiding a shipment returns the shipment to its previous order status. The main exception is if the item is{' '}
              <b>not</b>
              selected to be added back to inventory and there is no inventory to re-ship the order, it will move to an
              <b>Unresolved</b> status.
            </p>
            <p>
              Once voided, the record will appear in the Shipments module as a strike-through record. It is as if the record has
              been deleted, except Extensiv Order Manager retains a copy for record purposes. If you ship the order again, it will
              create another record in Extensiv Order Manager.
            </p>
            <p>
              To void a shipment, go to the <b>Shipments</b> module, locate the record you want to void, highlight the record on
              the list, then click the <b>Void Shipment</b> button at the top of the module.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503791/shipping.PNG" />

            <p>
              A pop up box will appear informing you the selected shipment(s) will be voided. Please note, Endicia, FedEx, and
              Amazon Partnered shipping providers are the only services that support refunds for voided shipments.
            </p>
            <p>
              You should now select whether or not you want to add the item(s) back into inventory upon voiding. If you check this
              setting, then the units shipped will return to <b>On Hand/Available</b> statuses, allowing the units to be
              re-shipped in Extensiv Order Manager. If you choose not to check this box, then the inventory shipped for this order
              will remain as. Should you re-ship this order, additional inventory will be removed.
            </p>
            <p>
              Click <b>Yes - Void Shipment(s)</b> when asked to confirm the action.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503792/shipping__1_.PNG" />

            <Alert
              message="Note"
              description="Amazon FBA orders/shipments cannot be voided or edited. The status of FBA orders is primarily dependent on
                updates Extensiv Order Manager receives directly from Amazon, preventing the platform from voiding the shipment
                or reverting its status."
            />
            <h2>Voiding and Refunds</h2>
            <h3>FedEx</h3>
            <p>
              You can cancel a shipment created online within{' '}
              <b>
                <i>seven</i>
              </b>{' '}
              days, only if the shipment has{' '}
              <b>
                <i>not</i>
              </b>
              been picked up yet.
            </p>
            <a href="https://ask.fedex.com/help/en-ae/preparing-to-send/cancel-online-shipment">
              https://ask.fedex.com/help/en-ae/preparing-to-send/cancel-online-shipment
            </a>
            <h3>Amazon Partnered</h3>
            <p>
              You can cancel up to one hour after approving estimated charges by going to your Shipping Queue and following these
              steps:
            </p>
            <ul>
              <li>
                Locate the shipment and click the <b>Work on Shipment</b> button.
              </li>
              <li>
                Click the <b>Provide Details</b> tab.
              </li>
              <li>
                Click the <b>Void Charges</b> button.
              </li>
            </ul>
            <Alert
              message="Important"
              description="Canceling the shipment does not cancel the charges. You must follow the Canceling an Amazon Partnered Carrier
                instructions above to ensure no pickup is made and charges will not apply. If one hour has passed since
                approving charges, you will not be able to cancel those charges or receive a refund for them."
            />
            <a href="https://sellercentral.amazon.com/gp/help/external/201119120">
              https://sellercentral.amazon.com/gp/help/external/201119120
            </a>
          </Card>
        </Col>
      </Row>
    </>
  );
}
