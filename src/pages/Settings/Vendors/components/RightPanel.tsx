import { OButton } from '@/components/Globals/OButton';
import { modalType } from '@/utils/helpers/types';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import ShippingIcon from '@/utils/icons/shipping';
import TrainIcon from '@/utils/icons/train';
import { useModel } from '@umijs/max';
import { Card, Col, Descriptions, Popconfirm, Row, Space } from 'antd';

const VendorDetails = ({ setModal }) => {
  const { selectedVendor, setEditableVendor, getVendorHistory, updateVendor } = useModel('vendor');
  const { paymentTermList } = useModel('paymentTerm');
  const { poTemplateList } = useModel('poTemplate');

  let vendorDetails = null;
  if (selectedVendor) {
    vendorDetails = {
      ...selectedVendor,
      po_default: {
        ...selectedVendor.po_default,
        template: poTemplateList.find((_item) => _item.id == selectedVendor.po_default?.template)?.value,
        payment_term: paymentTermList.find((_item) => _item.id == selectedVendor.po_default?.payment_term)?.value,
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
        <Space size={4}>
          <OButton btnText="Edit" onClick={handleEditVendor} />
          <OButton
            btnText="History"
            onClick={() => {
              getVendorHistory(vendorDetails.id);
              setModal(modalType.History);
            }}
          />
          <Popconfirm
            title="Sure to deactivate?"
            onConfirm={() => {
              updateVendor({ id: selectedVendor.id, status: !selectedVendor.status });
            }}
          >
            <OButton btnText={selectedVendor.status ? 'Deactivate' : 'Activate'} />
          </Popconfirm>
        </Space>
        <Space direction="vertical" size="small" style={{ display: 'flex' }}>
          <Card title="Basic Info" size="small">
            <Descriptions>
              <Descriptions.Item label="Name">{vendorDetails.name}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Address">
                {vendorDetails.address}
                <br />
                <br />
                {vendorDetails.city}, {vendorDetails.state}, {vendorDetails.zip}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Phone 1">{vendorDetails.phone1}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Phone 2">{vendorDetails.phone2}</Descriptions.Item>
            </Descriptions>
          </Card>
          <Card title="Services" size="small">
            {vendorDetails.is_supplier ? (
              <Row align="middle">
                <Col span={4}>
                  <Row justify="center">
                    <TrainIcon />
                  </Row>
                </Col>
                <Col span={20}>
                  <div style={{ fontSize: '10px' }}>This vendor is a supplier</div>
                </Col>
              </Row>
            ) : (
              ''
            )}
            {vendorDetails.is_manufacturer ? (
              <Row align="middle">
                <Col span={4}>
                  <Row justify="center">
                    <ManufacturerIcon />
                  </Row>
                </Col>
                <Col span={20}>
                  <div style={{ fontSize: '10px' }}>This vendor manufactures products</div>
                </Col>
              </Row>
            ) : (
              ''
            )}
            {vendorDetails.is_dropshipper ? (
              <Row align="middle">
                <Col span={4}>
                  <Row justify="center">
                    <ShippingIcon />
                  </Row>
                </Col>
                <Col span={20}>
                  <div style={{ fontSize: '10px' }}>This vendor is a dropshipper</div>
                </Col>
              </Row>
            ) : (
              ''
            )}
          </Card>
          <Card title="P.O. Defaults" size="small">
            <Descriptions>
              <Descriptions.Item label="P.O. Template">{vendorDetails.po_default.template}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="P.O. Format">{vendorDetails.po_default.format}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Payment Term">{vendorDetails.po_default.payment_term}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Space>
      </Card>
    </>
  ) : null;
};

export default VendorDetails;
