import { Card, Row, Col } from 'antd';

export default function () {
  return (
    <>
      <h2>Settings {'>'} PO Template</h2>
      <Row>
        <Col span={24}>
          <Card>
            <h1>PO Templates</h1>
            <br />
            <h2>Setting up Purchase Order Templates</h2>
            <p>
              The <b>purchase order template</b> generated when sending and authorizing a P.O. can be customized. Once completed,
              vendors can share a common template or users can create specific P.O. templates per vendor.
            </p>

            <ol>
              <li>
                To begin, go to the <b>Settings</b> module and click on the <b>P.O Templates</b> tab from the left-side menu.
                Every account comes pre-loaded with a <b>default template</b> that cannot be edited or deleted. These defaults are
                basic guides that can help you start creating a custom template, or can be used as they are.
              </li>

              <li>
                To begin customizing a basic PO Template, click on + <b>New Template</b>.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/template.png" />
              </li>

              <li>
                Otherwise, you can highlight the <b>Default Dropship Template</b> row and click <b>Copy</b> to customize a PO
                template specifically for dropship vendors.
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/template2.png" />
              </li>

              <li>
                In the topmost row of the new window, you can give your new template a unique name. Users can also change the
                “FROM” email address so that the PO appears to be coming from a specific e-mail address instead of the default{' '}
                <a href="mailto:no-reply@skubana.com">no-reply@skubana.com</a> by specifying the desired address in the text field
                in the top right:
                <br />
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/template3.png" />
              </li>

              <li>
                PO templates are split up into 4 main sections:
                <ol>
                  <li>
                    <b>PO Header</b>
                  </li>
                  <li>
                    <b>PO Items Header</b>
                  </li>
                  <li>
                    <b>PO Items</b>
                  </li>
                  <li>
                    <b>PO Footer</b>
                    <br />
                    You can choose to edit existing static and dynamic text. To insert dynamic fields into the template, first
                    click on where you want to place them in the template on the left side, then click on the desired{' '}
                    <b>Field Replacements</b> on the right.
                  </li>
                  <li>
                    <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/template4.png" />
                  </li>
                  <li>
                    The field replacements options here are split into six sections:
                    <ul>
                      <li>
                        <b>Company</b>
                      </li>
                      <li>
                        <b>Vendor</b>
                      </li>
                      <li>
                        <b>Warehouse</b>
                      </li>
                      <li>
                        <b>Purchase Order</b>
                      </li>
                      <li>
                        <b>PO Items</b>
                      </li>
                      <li>
                        <b>Barcode Imag</b>
                        <br />
                        All of the field replacements are optional. Users can customize their own set-up within each section by
                        using field replacement options and/or static text. Relevant information will be shown on a PO form at the
                        time of its generation.
                      </li>
                    </ul>
                  </li>
                </ol>
              </li>

              <li>
                For more advanced users, the templates support editing via HTML by clicking the <b>Toggle</b> button at the bottom
                of the window. Field replacements will insert using the {'{}'} syntax into this view as well.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/template5.png" />
              </li>

              <li>
                These templates can be previewed by clicking on the <b>Preview</b> button in the bottom-right menu bar. Below is
                an example of a PO Template Preview where the Company Logo is populated. <br />
                <b>Please note:</b> not all dynamic field replacements will populate text or images in the preview generated as it
                would need to be connected to an actual purchase order for the preview to pull all relevant fields that exist in
                the PO.
                <img src="https://static.helpjuice.com/helpjuice_production/uploads/upload/image/12985/direct/Screen%2BShot%2B2021-03-31%2Bat%2B9.37.31%2BPM.png" />
              </li>
              <li>
                Click <b>Save</b> after making all desired edits. Saved templates can be modified later by selecting then clicking
                the <b>“Edit”</b> button in the <b>P.O Templates</b> tab. At this point, you can set your new PO template as the
                default template for a Vendor in the <b>PO Defaults</b> section of Vendor information, use it in orderbots, and/or
                set it as the template for a specific PO in the <b>POs module</b>.
              </li>
            </ol>
            <p>There is no limit to the number of templates you can create within an account.</p>
          </Card>
        </Col>
      </Row>
    </>
  );
}
