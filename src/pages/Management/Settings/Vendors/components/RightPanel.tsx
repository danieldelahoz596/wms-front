import { modalType } from '@/utils/helpers/types';
import { useModel } from '@umijs/max';
import { Button, Card, Row, Col, Descriptions, Space } from 'antd';

const VendorDetails = ({ setModal }) => {
  const { selectedVendor, makeDeactivate, setEditableVendor } = useModel('vendor');
  const { paymentTermList } = useModel('paymentTerm');
  const { incotermList } = useModel('incoterm');
  const { poFormatList } = useModel('poFormat');
  const { poTemplateList } = useModel('poTemplate');

  let vendorDetails = null;
  if (selectedVendor) {
    vendorDetails = {
      ...selectedVendor,
      po_default: {
        ...selectedVendor.po_default,
        template: poTemplateList.find((_item) => _item.id == selectedVendor.po_default?.template)
          ?.value,
        format: poFormatList.find((_item) => _item.id == selectedVendor.po_default?.format)?.value,
        incoterm: incotermList.find((_item) => _item.id == selectedVendor.po_default?.incoterm)
          ?.value,
        payment_term: paymentTermList.find(
          (_item) => _item.id == selectedVendor.po_default?.payment_term,
        )?.value,
      },
    };
  }

  const handleEditVendor = () => {
    setEditableVendor(selectedVendor);
    setModal(modalType.Edit);
  };

  return vendorDetails ? (
    <>
      <Card title={'Vendor Details'}>
        <Row>
          <Col span={24}>
            <Button type="dashed" onClick={handleEditVendor} style={{ margin: '5px' }}>
              EDIT
            </Button>
            <Button
              type="dashed"
              onClick={() => setModal(modalType.History)}
              style={{ margin: '5px' }}
            >
              HISTORY
            </Button>
            <Button
              type="dashed"
              onClick={() => makeDeactivate(selectedVendor.id, !selectedVendor.status)}
              style={{ margin: '5px' }}
            >
              {selectedVendor.status ? 'DEACTIVATE' : 'ACTIVATE'}
            </Button>
          </Col>
        </Row>
        <br />
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <Card title="Basic Info" size="small">
            <Descriptions>
              <Descriptions.Item label="Name">{vendorDetails.name}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Address">{vendorDetails.address}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Phone 1">{vendorDetails.phone1}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Phone 2">{vendorDetails.phone2}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Email">{vendorDetails.email}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Website">{vendorDetails.website}</Descriptions.Item>
            </Descriptions>
          </Card>
          <Card title="Services" size="small">
            {vendorDetails.is_supplier ? <p>This vendor is a supplier</p> : ''}
            {vendorDetails.is_manufacturer ? <p>This vendor manufactures products</p> : ''}
            {vendorDetails.is_dropshipper ? <p>This vendor is a dropshipper</p> : ''}
          </Card>
          <Card title="P.O. Defaults" size="small">
            <Descriptions>
              <Descriptions.Item label="P.O. Template">
                {vendorDetails.po_default.template}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="P.O. E-Mail">
                {vendorDetails.po_default.email}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="P.O. Fax">{vendorDetails.po_default.fax}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="P.O. Format">
                {vendorDetails.po_default.format}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Incoterm">
                {vendorDetails.po_default.incoterm}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Payment Term">
                {vendorDetails.po_default.payment_term}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Space>
      </Card>
    </>
  ) : null;
};

export default VendorDetails;
