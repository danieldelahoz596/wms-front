import { Card, Row, Col, Alert } from 'antd';

export default function () {

  return (
    <>
      <h2>Products {'>'} Import Products</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>How to Create Products via Spreadsheet</h1>
            <p>For an instructional video of how to create Master Products via spreadsheet, please click <a href='' className='helplink'>here</a>.</p>
            <p>For instructions on how to export existing product info, <a href='/help/products/exportproducts' className='helplink'>see this article</a>.</p>
            
            {/* Master SKU */}
            <h1>Master SKU</h1>
            <p>You can build your product catalog in Extensiv Order Manager using the <b>Import Products spreadsheet</b> to import all your product information and create the Extensiv Order Manager <b>MASTER SKU</b>.</p>
            <p>Here are some helpful tips to help you fill in the Import Products spreadsheet. Please take your time to review and plan how you will build your Product catalog because once products are created in Extensiv Order Manager they cannot be deleted, they can only be edited or deactivated.</p>
            
            <h2>Building Core Products and Variations using the Import Product Spreadsheet:</h2>
            <ol>
              <li>
                <p>Download the <b>“Import Products”</b> spreadsheet from the dropdown <b>Import/Export</b> button in the <b>Products Module</b>.</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product.png" style={{ width: 1000 }} />
                <br /><br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product%2B_1_.png" style={{ width: 600 }} />
                <br /><br />
              </li>
              <li>
                <p>Click on the <b>“Core Products”</b> sheet in the Excel spreadsheet to create single products</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product%2B_2_.png" style={{ width: 300 }} />
                <br /><br />
              </li>
              <li>
                <p>In this template, <b>these are the only 4 required fields, everything else is optional</b>:</p>
                <ul>
                  <li>
                    <p><b>Column A: Master SKU</b> - is your unique SKU in Extensiv Order Manager and it is tied to everything. If you have multiple listings for the same product only make one “Master SKU" for this product and you can connect multiple listings via the listing SKU spreadsheet.</p>
                    <p><b>NOTE:</b> The same Master SKU cannot be used twice, every Master SKU must be unique</p>
                  </li>
                  <li>
                    <p><b>Column C: Name</b> - the name of the product.</p>
                  </li>
                  <li>
                    <p><b>Column H: Brand</b> - the brand the product is associated with.</p>
                  </li>
                  <li>
                    <p><b>Column U: Active</b> - is this an active product? Please fill out with either a TRUE or FALSE (False will deactivate the product)</p>
                    <p><b>NOTE:</b> If you plan on building out parent-child relationships (<b>Variations</b>) <b>TWO MORE fields are REQUIRED</b>. Variations are comprised of one parent SKU with multiple child SKUs.</p>
                  </li>
                  <li>
                    <p><b>Column B: Virtual SKU</b> - this is your parent SKU. So if your master SKUs are “Red-Shirt”, “Green-Shirt”, “Blue-Shirt” in column A, then the virtual SKU (parent SKU) for all 3 rows can be “Shirts” so you can encompass them under one parent.</p>
                    <p><b>PLEASE NOTE:</b> YOUR VIRTUAL SKUS AND MASTER SKUS CANNOT BE THE SAME</p>
                  </li>
                  <li>
                    <p><b>Column E: The attributes</b> - these are the specific characteristic that make it a variation (i.e color, size, etc.) You can choose to call the attribute groups whatever you'd like and in the {`{}`} you will indicate the specific options you would like to see available for this attribute group. Example - Color {`{Azure Blue}`}</p>
                  </li>
                </ul>
              </li>
            </ol>
            <br/>

            {/* Build Product bundles/kits: */}
            <h1>Build Product bundles/kits:</h1>
            <ol>
              <li>
                <p>Using the <b>“Import Products”</b> spreadsheet, select the second sheet <b>“Bundles & Kits”</b>.</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product%2B_3_.png" style={{ width: 300 }} />
                <br /><br />
              </li>
              <li>
                <p>The <b>required fields</b> for creating Bundles or Kits are:</p>
                <ul>
                  <li>
                    <p><b>Column A: Master SKU,</b> the unique SKU in Extensiv Order Manager. If you have multiple listings for the same product only make one master SKU for this product and the listings will be connected via the listing SKU spreadsheet</p>
                    <p><b>NOTE:</b> You cannot use the same master SKU twice, each Master SKU must be unique.</p>
                  </li>
                  <li>
                    <p><b>Column B: Name</b> - the name of the product.</p>
                  </li>
                  <li>
                    <p><b>Column D: Bundled Item Master SKU & Quantity</b> - what SKU(s) from the core product sheet make up the bundle/kit and how many of each. Please follow format: <b>SKU-123 {`{10}`}</b></p>
                  </li>
                  <li>
                    <p><b>Column G: Brand</b> - the brand the product is associated with.</p>
                  </li>
                  <li>
                    <p><b>Column T: Active</b> - is this an active product? Please fill out with either <b>TRUE</b> or <b>FALSE</b>.</p>
                  </li>
                </ul>
              </li>
            </ol>
            <br /><br />
            <table className='helpTable'>
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Description</th>
                  <th>Example</th>
                  <th>Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Master SKU</td>
                  <td>The unique value used to identify in-house</td>
                  <td>1044568</td>
                  <td>Yes<br />100 Max Character</td>
                </tr>
                <tr>
                  <td>Virtual SKU</td>
                  <td>The unique variation value given to all related products. The virtual SKU cannot be a value that has been previously used as a Master SKU. You must have attributes when using a virtual SKU.</td>
                  <td>T-Shirt</td>
                  <td>No<br />100 Max Character</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>The title of the product</td>
                  <td>Bedazzled T-Shirt</td>
                  <td>Yes<br />100 Max Character</td>
                </tr>
                <tr>
                  <td>UPC</td>
                  <td>The universal product code used for barcode scanning</td>
                  <td>00001044568</td>
                  <td>No<br />30 Max Character</td>
                </tr>
                <tr>
                  <td>Attribute Group</td>
                  <td>The varying feature(s) for the individual Master SKU</td>
                  <td>Size{`{Small}`}Color{`{Blue}`}</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>The description of the product</td>
                  <td>A bedazzled Extensiv Order Manager t-shirt.</td>
                  <td>No<br />500 Max Character</td>
                </tr>
                <tr>
                  <td>Image URLs</td>
                  <td>The URL of the product image</td>
                  <td>&nbsp;</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Brand</td>
                  <td>The brand of the product</td>
                  <td>Extensiv</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Categories</td>
                  <td>The category of the product used to quickly filter search queries</td>
                  <td>Clothing|T-shirt|Women</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Labels</td>
                  <td>Labels used for search queries and Orderbots</td>
                  <td>Dropship</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>M.A.P.</td>
                  <td>The minimum advertised price</td>
                  <td>$19.95</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Shipping Cost</td>
                  <td>The total shipping cost for the item</td>
                  <td>$4.99</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Pounds...</td>
                  <td>The shipping weight</td>
                  <td>1</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>...plus Ounces</td>
                  <td>Any additional shipping weight in ounces</td>
                  <td>2</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Height (in.)</td>
                  <td>Height of the packaging</td>
                  <td>6</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Width (in.)</td>
                  <td>Width of the packaging</td>
                  <td>4</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Length (in.)</td>
                  <td>Length of the packaging</td>
                  <td>2</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Allow Backorders</td>
                  <td>Does the marketplace allow backorder orders?</td>
                  <td>False</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Hazmat</td>
                  <td>Is the product hazmat?</td>
                  <td>False</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Ships in Own Box</td>
                  <td>Does this product ship in its own box (usually for oversized boxes)?</td>
                  <td>False</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Active</td>
                  <td>Is this product active?</td>
                  <td>True</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Vendor Cost</td>
                  <td>Quick and easy way to put in COGS without vendors or vendor SKUS</td>
                  <td>$1.45</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>With Barcode</td>
                  <td>Does the item have a barcode?</td>
                  <td>False</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Buyer (E-mail)</td>
                  <td>E-mail of the buyer</td>
                  <td><a href="mailto:johndoe@extensiv.com">johndoe@extensiv.com</a></td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>MPN</td>
                  <td>Manufacturer Part Number</td>
                  <td>SK1542341</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Gift Card</td>
                  <td>Is the product a gift card?</td>
                  <td>False</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Digital</td>
                  <td>Is the product a digital product?</td>
                  <td>False</td>
                  <td>No</td>
                </tr>
              </tbody>
            </table>
            <br /><br />
            <Alert
              message="Note"
              description="We recommend having a maximum of 4000 products per spreadsheet for maximum efficiency."
              type="info"
            />
            <br />

            {/* Vendor Product */}
            <h1>Vendor Products</h1>
            <h2>Vendor Product Import</h2>
            <p>First download the <b>“Vendor Product” spreadsheet</b> from the dropdown <b>Import/Export</b> button in the <b>Products</b> Module.</p>
            <br />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product%2B_6_.png" style={{ width: 800 }} />
            <br /><br />
            <p>Extensiv Order Manager gives you an option between uploading an individual file for each vendor, or by importing one global file that contains vendor products for any/all vendors at once that will require you to specify which vendor a vendor product is for.</p>
            <br /><br />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product%2B_7_.png" style={{ width: 400 }} />
            <br /><br />
            <p>The window that pops up will allow you to download the required Excel template to import the Vendors. Click the link to <b>Download the Excel Template</b>.</p>
            <i>Import By Vendor</i>
            <br /><br />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product%2B_8_.png" style={{ width: 600 }} />
            <br /><br />
            <i>Global Vendor Import</i>
            <br /><br />
            <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/product%2B_9_.png" style={{ width: 600 }} />
            <br /><br />
            <h2>ALL FIELDS ARE REQUIRED TO BE FILLED OUT EXCEPT COLUMN H & K - YOUR FILE WILL ERROR IF THERE ARE BLANKS. YOU CANNOT DELETE COLUMNS OR ADD COLUMNS, DO NOT CHANGE THE INTEGRITY OF THE FILE</h2>
            <ul>
              <li>
                <p><b>Column A: Vendor Name</b> - You must select which vendor you are adding this cost for.</p>
              </li>
              <li>
                <p><b>Column B: Master SKU</b> - The Master SKU in Extensiv Order Manager you are adding a cost for.</p>
              </li>
              <li>
                <p><b>Column C: Vendor SKU</b> - This is the SKU your vendor recognizes the product as. It is the SKU included in the Purchase Orders Extensiv Order Manager creates when Auto PO Generations is turned on.</p>
              </li>
            </ul>
            <br />
            <p><b>Vendor SKUs must be different for each product if they come from the same vendor </b> - if the vendor SKU is the same but purchased from different vendors then you can add it multiple times for each vendor</p>
            <ul>
              <li>
                <p><b>Column D: Active</b> - Set this to “TRUE” if you want Extensiv Order Manager to calculate purchase orders for this product, “False” if you do not want to.</p>
              </li>
              <li>
                <p><b>Column E: Minimum Order Qty</b> - the minimum amount you must order from the vendor. the value must be greater than or equal to 1- cannot be 0.</p>
              </li>
              <li>
                <p><b>Column F: Lead Time</b> - this is the time it takes for the product to get from the vendor to you. This is in calendar days, the value must greater than or equal to 1.</p>
              </li>
              <li>
                <p><b>Column G: Pricing Tiers</b> - Please be very clear with the format. You can leave it as one group of parentheses if you are doing one large pricing tier. EXAMPLE: (1-10000|5.00) The price goes after the | If you do not have pricing tiers you can select an arbitrary number that you rarely order the quantity for to serve as the max. For example: 1-10000 (this is defining the first 10,000 orders are the same cost per unit, 10,000 is serving as the max). You can make the number as high as you want so you do not have a cap. If you do have pricing tiers then you can just enter them in this format: (1-100|12.00)(101-200|10.00)</p>
                <p><b>NOTE:</b> Pricing tiers must start at 1.</p>
              </li>
              <li>
                <p><b>Column H: Units of Measure</b> - This is an optional field, you can leave it blank. If you choose to use it you can just write the name of the measure and how many units go into it. The quantity of units goes into the {`{ }`}.</p>
              </li>
              <li>
                <p><b>Column I: Is Default</b> - this applies if you are ordering the Master SKU from multiple vendors, you will mark TRUE for the vendor you want to serve as the default when ordering the product. You can leave them all as FALSE if you do not want to specify a default vendor or TRUE if it is just for one.</p>
              </li>
              <li>
                <p><b>Column J: Auto-P.O. Rounding</b> - It is REQUIRED that you choose from one of the three statements below:</p>
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/pic2644473.jpg" style={{ width: 400 }} />
                <br /><br />
              </li>
              <li>
                <p><b>Column K: Packaging - This is an optional field</b>. This field is for vendors that need special instructions about packaging this product.</p>
              </li>
            </ul>
            <br />
            {/* Variation Tips & Tricks */}
            <h1>Variation Tips & Tricks</h1>
            <ul>
              <li><p>The difference in this spreadsheet between a core and a variation is that the variation requires a virtual SKU and an attribute group {`{attribute}`}.</p></li>
              <li>
                <p>For a variation, when the import catches a virtual SKU, it will list the first item with the virtual SKU in the spreadsheet and share that product details (everything but the attribute group {`{attribute}`} and master SKU) with the other products containing the same virtual SKU.</p>
              </li>
            </ul>
            <br />
            {/* Bundles & Kit Tips & Tricks */}
            <h1>Bundles & Kit Tips & Tricks</h1>
            <ul>
              <li><p>You cannot create nested bundles, meaning a bundle/kit of a bundle/kit.</p></li>
              <li>
                <p>After entering your product information into the excel template, save the document and return to Extensiv Order Manager. Upload your saved document via the <b>Select</b> button. Choose whether you would like to update products already synced with Extensiv Order Manager. Press <b>continue</b> and wait for the upload to complete. When the file is finished uploading, Extensiv Order Manager will generate a short report summarizing your uploaded products.</p>
              </li>
            </ul>
          </Card>
        </Col>
      </Row>
    </>
  );
};
