import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>PurchaseOrders {'>'} How to Create a Manual PO</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Create a Manual PO</h1>
            <br />
            <p>
              Purchase Orders (POs) in Extensiv Order Manager can be generated a couple ways. The first way is via auto-PO
              generation, or what we call Auto-POs. Extensiv Order Manager is able to auto-generate purchase orders based on the
              re-order rules that was set up in the Inventory module.
              <br />
              <br />
              The second way is by creating a Manual PO, which is completed in the POs module. To begin creating your own Manual
              PO, go to your <b>Purchasing</b> module and click <b>“+ New P.O”.</b>
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502667/PO.png" />
            <p>
              When the window appears, select the vendor you’d like to create your PO for. Please note, to find your vendor(s) in
              this list, they must have been previously added via the Vendors sub-section in the Settings module.
            </p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502668/Screen_Shot_2021-03-31_at_5.48.26_PM.png" />
            <p>
              The next window will be titled “New Purchase Order” and has several fields that must be completed before proceeding
              to the next step.
              <br />
              <br />
              There are four sections requiring your input here, including:
            </p>
            <ul>
              <li>
                <b>P.O. Details:</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502669/Screen_Shot_2018-06-18_at_10.20.20_PM.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502670/PO__1_.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502671/Screen_Shot_2018-06-18_at_10.21.16_PM.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502672/PO__2_.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502673/Screen_Shot_2018-06-18_at_10.21.54_PM.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502674/PO__3_.png" />
              </li>
              <li>
                <b>Aggregate Costs:</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502676/Screen_Shot_2018-06-18_at_10.22.41_PM.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502678/PO__4_.png" />
              </li>
              <li>
                <b>Communication:</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502679/Screen_Shot_2018-06-18_at_10.23.45_PM.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502681/PO__5_.png" />
              </li>
              <li>
                <b>Product Catalog:</b>
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502683/Screen_Shot_2018-06-18_at_10.25.10_PM.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502684/PO__6_.png" />
              </li>
            </ul>
            <p>
              Once you’ve completed all those sections, you’ll have the option to click <b>“Save & Authorize”</b> or{' '}
              <b>“Save”:</b>
            </p>
            <ul>
              <li>
                <b>Save & Authorize:</b> this will save your PO and move it to the <b>“Awaiting Confirmation”</b> sub-section on
                the left-hand navigation, where it will await confirmation from your vendor before proceeding.
              </li>
              <li>
                <b>Save:</b> this will save your PO and keep it in the <b>“Awaiting Authorization”</b> sub-section of the
                left-hand navigation, where it will need to be authorized by an admin on your team with authority to do so.
              </li>
            </ul>
            <p>
              If you select <p>“Save & Authorize”</p>, you can find the PO in the <b>“Awaiting Confirmation”</b> sub-section under
              whichever warehouse you selected as a destination. By selecting the PO(s), you’ll be presented with several new
              options, including:
            </p>
            <ul>
              <li>
                <b>Print:</b> this will provide you with a downloadable version of the Pro Forma, in bulk for all POs selected.
              </li>
              <li>
                <b>Re-send:</b> this will re-send the PO to your vendor, in bulk for all POs selected.
              </li>
              <li>
                <b>Cancel:</b> this will cancel the PO(s) selected, and will send the PO(s) to the “Canceled” sub-section in the
                left-hand navigation.
              </li>
              <li>
                <b>Confirm:</b> select this option if your vendor acknowledges and confirms the PO, in bulk for all POs selected.
              </li>
            </ul>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502685/PO__7_.png" />
            <p>
              In the bottom half of this page, you may also edit the PO on an item-by-item basis by adding an item, editing an
              existing item or removing an item. If you pursue any edit actions, this will bounce the PO to “Awaiting
              Re-Authorization”, where it must be re-authorized and ultimately confirmed at a later time. All actions taken
              regarding the PO will also be tracked in the “History” tab in the bottom-right of the window.
            </p>
            <p>
              If you select <b>“Save”</b>, you can find the PO in the <b>“Awaiting Authorization”</b> sub-section under whichever
              warehouse you selected as a destination. By selecting the PO, you’ll be presented with several new options,
              including:
            </p>
            <ul>
              <li>
                <b>Print:</b> this will provide you with a downloadable version of the Pro Forma, in bulk for all POs selected.
              </li>
              <li>
                <b>Authorize:</b> this will authorize the PO and move it to the “Awaiting Confirmation” stage, in bulk for all POs
                selected.
              </li>
              <li>
                <b>Cancel:</b> this will cancel the PO(s) selected, and will send the PO(s) to the “Canceled” sub-section in the
                left-hand navigation.
              </li>
            </ul>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502686/PO__8_.png" />
            <p>Once you’re ready to confirm a PO, you’ll be prompted with a new window. Click “Yes – Confirm P.O.”</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502699/PO__9_.png" />
            <p>
              You will be able to find the PO you’ve created in the <b>“Pending Delivery”</b> sub-section, under whatever your
              selected destination warehouse was. By selecting the PO, you’ll be presented with several new options, including:
            </p>
            <ul>
              <li>
                Print: this will provide you with a downloadable version of the Pro Forma, or a sheet of the Pending Items, in
                bulk for all POs selected.
              </li>
              <li>Re-send: this will re-send the PO to your vendor, in bulk for all POs selected.</li>
              <li>
                Receive: this will accept the inventory into your warehouse, in bulk, in bulk for all POs selected. You should
                accurately complete the fields requested, including:
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502700/Screen_Shot_2018-06-18_at_10.25.44_PM.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502701/PO__10_.png" />
              </li>
              <li>
                <b>Void:</b> click here if you and the vendor mutually agree to cancel the selected PO(s) at this stage, and will
                send the PO(s) to the <b>“Voided”</b> sub-section in the left-hand navigation.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502702/PO__11_.png" />
              </li>
            </ul>
            <p>
              Before proceeding, make sure you hit <b>“Save”</b>.
            </p>
            <p>
              In the bottom section of this window, you’ll have five options to manage this PO’s individual items on a one-by-one
              basis, including:
            </p>
            <ul>
              <li>
                <b>Add Item:</b> this will add an item to the PO.
              </li>
              <li>
                <b>Edit:</b> this will revise an item already on the PO.
              </li>
              <li>
                <b>Receive:</b> this will present receiving options for items on this PO, and you should accurately complete the
                fields requested, including:
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502706/Screen_Shot_2018-06-18_at_10.28.11_PM.png" />
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502707/PO__12_.png" />
              </li>
              <li>
                <b>Void:</b> this will present receiving options for items on this PO, and will send the PO to the “Voided”
                sub-section of the left-hand navigation.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502709/PO__13_.png" />
              </li>
              <li>
                <b>Cancel:</b> this will cancel items on this PO, and will send the PO to the “Canceled” sub-section in the
                left-hand navigation.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502710/PO__14_.png" />
              </li>
            </ul>
            <p>
              Once you have received your PO – or accepted some units in your PO, but not others – the PO will move to a new set
              of statuses in the left-hand navigation, including:
            </p>
            <ul>
              <li>
                <b>Partially delivered:</b> if the PO(s) had product quantities accepted and others pending, the PO(s) will go
                here and be denoted with an appropriate status icon.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502711/PO__15_.png" />
              </li>
              <li>
                <b>Fulfilled:</b> your PO(s) go here if it/they was/were accepted in entirety, and then denoted with the
                appropriate status icon.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502712/PO__16_.png" />
              </li>
              <li>
                <b>Closed short:</b> if any items that were originally received and then revised to “Voided”, the PO(s) would go
                here and be denoted with the appropriate status icon.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2502713/PO__17_.png" />
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
}
