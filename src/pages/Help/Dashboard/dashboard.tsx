import { Card, Row, Col } from 'antd';

export default function () {

  return (
    <>
      <h2 className='page-title'>Dashboard</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>Dashboard</h1>
            <p>Upon logging in to Extensiv Order Manager, the first thing you'll see is the Dashboard.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/dashboard.PNG" style={{ width: 600 }}/>
            <p>The Dashboard contains an Announcements panel on the left that shows important news and information from Extensiv Order Manager, in addition to four panels that include information about your orders and inventory. To learn more about each panel, click the panel title from the list below.</p>
            
            <h2>Details</h2>
            <p>In the Order Aging by Warehouse panel, information on all your warehouses is displayed in the pie chart by default. Click the icons alongside the warehouse names at the bottom of the chart to hide or show specific warehouse data. The pie chart represents order aging in number of days across warehouses.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/dashboard4.png" style={{ width: 600}} />

            <h2>Fulfillment Performance</h2>
            <p>The Fulfillment Performance panel on the Extensiv Order Manager Dashboard provides a breakdown of orders within three of the seven Unresolved statuses (Missing Product Info, Missing Stock Location, and Out of Stock), paused orders that are in Awaiting Payment or On Hold, orders in an Awaiting Fulfillment status (Awaiting Shipment, Awaiting 3PL Export, and Pending Fulfillment), and the total number of orders that have been recently shipped.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/dashboard1.PNG" style={{ width: 600}} />

            <ul>
              <li><p><b>Unresolved orders</b> in these statuses are missing product info or are currently out of stock. These should be resolved as soon as possible so they can be shipped.</p></li>
              <li><p><b>Paused orders</b> are in <a href="https://help.extensiv.com/om-orders/resolving-an-awaiting-payment-order" target="_blank">Awaiting Payment</a> or have been put On Hold.</p></li>
              <li><p><b>Awaiting Fulfillment orders</b> are currently in <a href="https://help.extensiv.com/om-orders/shipping-orders" target="_blank">Awaiting Shipment</a>, <a href="https://help.extensiv.com/om-orders/export-an-order-to-a-3pl" target="_blank">Awaiting 3PL Export</a>, or <a href="https://help.extensiv.com/om-orders/shipping-orders" target="_blank">Pending Fulfillment</a>.</p></li>
              <li><p><b>Unresolved orders</b> in these statuses are missing product info or are currently out of stock. These should be resolved as soon as possible so they can be shipped.</p></li>
            </ul>

            <h2>Stock Requiring Attention</h2>
            <p>The Stock Requiring Attention panel shows you which products are below your minimum stock levels. It also includes the estimated runout date (Est. Runout), which is when stock is likely to run out based on the current sales velocity for these products, and if there are any purchase orders to replenish stock. If your product is already out of stock, the Est. Runout column will show "Out of Stock" instead of a date.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/dashboard3.PNG" style={{ width: 600}} />
            
            <h2>Incoming Stock</h2>
            <p>The Incoming Stock panel on the Extensiv Order Manager Dashboard allows you to see incoming inventory scheduled to arrive at your warehouses, including the number of units, inventory values, and corresponding purchase order numbers.</p>
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/incoming.PNG" style={{ width: 600}} />
          </Card>
        </Col>
      </Row>
    </>
  );
};
