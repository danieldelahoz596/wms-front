import { OButton } from '@/components/Globals/OButton';
import { modalType } from '@/utils/helpers/types';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { useModel } from '@umijs/max';
import { Card, Col, Descriptions, Popconfirm, Row, Space } from 'antd';
import { useEffect, useState } from 'react';

const poFormats = [
  { value: 1, label: 'PDF Attachment' },
  { value: 2, label: 'HTML Attachment' },
];

const VendorDetails = ({ setModal }) => {
  const { selectedVendor, setSelectedVendor, getVendorHistory, updateVendor, getVendorList } = useModel('vendor');
  const { paymentTermList } = useModel('paymentTerm');
  const { poTemplateList } = useModel('poTemplate');
  const [vendorDetails, setVendorDetails] = useState(null);

  useEffect(() => {
    if (!selectedVendor) setVendorDetails(null);
    else
      setVendorDetails({
        ...selectedVendor,
        po_default: {
          ...selectedVendor.po_default,
          template: poTemplateList.find((_item) => _item.id == selectedVendor.po_default?.template)?.name,
          // format: poFormats.find((_item) => _item.value === selectedVendor.po_default?.format).label,
          payment_term: paymentTermList.find((_item) => _item.id == selectedVendor.po_default?.payment_term)?.name,
        },
      });
  }, [selectedVendor]);

  const handleEditVendor = () => {
    setModal(modalType.Edit);
  };

  return vendorDetails ? (
    <>
      <h2 style={{ marginLeft: '10px' }}>Vendor Details</h2>
      <Card style={{ padding: 3 }}>
        <Space size={HORIZONTAL_SPACE_SIZE}>
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
              updateVendor({ ...selectedVendor, status: !selectedVendor.status });
              getVendorList();
              setSelectedVendor(null);
            }}
          >
            <OButton btnText={vendorDetails.status ? 'Deactivate' : 'Activate'} />
          </Popconfirm>
        </Space>
        <Space direction="vertical" size={15} style={{ display: 'flex', marginTop: 20 }}>
          <Card title="Basic Info">
            <Descriptions>
              <Descriptions.Item label="Name">{vendorDetails.name}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Address">
                {vendorDetails.address}
                <br />
                {vendorDetails.city}, {vendorDetails.state}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Phone 1">{vendorDetails.phone1}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Phone 2">{vendorDetails.phone2}</Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label="Website">{vendorDetails.website}</Descriptions.Item>
            </Descriptions>
          </Card>
          <Card title="Services">
            {vendorDetails.is_supplier ? (
              <Row align="middle">
                <Col span={4}>
                  <Row justify="center">
                    <TrainIcon style={{ fontSize: 15 }} />
                  </Row>
                </Col>
                <Col span={20}>
                  <div style={{ fontSize: '10px' }}>This vendor is a supplier.</div>
                </Col>
              </Row>
            ) : (
              ''
            )}
            {vendorDetails.is_manufacturer ? (
              <Row align="middle" style={{ marginTop: 10 }}>
                <Col span={4}>
                  <Row justify="center">
                    <ManufacturerIcon style={{ fontSize: 15 }} />
                  </Row>
                </Col>
                <Col span={20}>
                  <div style={{ fontSize: '10px' }}>This vendor manufactures products.</div>
                </Col>
              </Row>
            ) : (
              ''
            )}
          </Card>
          <Card title="P.O. Defaults">
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
