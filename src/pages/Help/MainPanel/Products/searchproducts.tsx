import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>Products {'>'} Search Products</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Search Products</h1>
            <p>
              The <b>Products</b> module's search function offers two ways to search for products in Extensiv Order Manager.
            </p>
            <ul>
              <li>Search Filter</li>
              <li>Categories & Labels</li>
            </ul>
            <br />
            {/* Search Filter */}
            <h1>Search Filter</h1>
            <p>
              The first type uses the traditional search function, which involves filtering by criteria such as Name, SKU, Brand,
              etc. You can access it from the Products module by selecting the 🔎 icon in the top left of the window. The results
              of your search are displayed on the Products page's right panel after clicking the <b>Search</b> button.
            </p>
            <br />
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503689/image__6_.png"
              style={{ width: 400 }}
            />
            <br />
            <br />
            {/* Categories & Labels */}
            <h1>Categories & Labels</h1>
            <p>
              The second way involves filtering by specific categories or labels applied to your SKUs. In order to leverage this
              filtering feature, you will need to have applied categories or labels to your products during the product creation
              process. However, Categories and Labels{' '}
              <a href="/help/products/creatingproductsviaspreadsheet" className="helplink">
                can be added to products
              </a>{' '}
              at any time.
            </p>
            <p>
              You are also able to filter the products shown by multiple categories at once by using <b>Ctrl/Command + Click</b>{' '}
              on each category or label. This will show you the products that belong to <b>both/all</b> categories you selected.
              In the example below, we are filtering for items that belong to both the Accessories and Apparel category.
            </p>
            <img
              src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/2503690/image__7_.png"
              style={{ width: 500 }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}
