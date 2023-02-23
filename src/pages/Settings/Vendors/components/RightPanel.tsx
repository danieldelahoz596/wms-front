import { OButton } from '@/components/Globals/OButton';
import { modalType } from '@/utils/helpers/types';
import ManufacturerIcon from '@/utils/icons/manufacturer';
import TrainIcon from '@/utils/icons/train';
import { FormattedMessage, useModel } from '@umijs/max';
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
        template: poTemplateList?.find((_item) => _item.id == selectedVendor?.template)?.name,
        format: poFormats?.find((_item) => _item.value === selectedVendor?.format).label,
        payment_term: paymentTermList?.find((_item) => _item.id == selectedVendor?.payment_term)?.name,
      });
  }, [selectedVendor, poTemplateList, paymentTermList]);

  const handleEditVendor = () => {
    setModal(modalType.Edit);
  };

  return vendorDetails ? (
    <>
      <h2 style={{ marginLeft: '10px' }}>
        <FormattedMessage id="pages.settings.vendors.details" />
      </h2>
      <Card style={{ padding: 3 }}>
        <Space size={HORIZONTAL_SPACE_SIZE}>
          <OButton btnText={<FormattedMessage id="component.button.edit" />} onClick={handleEditVendor} />
          <OButton
            btnText={<FormattedMessage id="component.button.history" />}
            onClick={() => {
              getVendorHistory(vendorDetails.id);
              setModal(modalType.History);
            }}
          />
          <Popconfirm
            title={<FormattedMessage id="component.popconfirm.sureDeactivate" />}
            onConfirm={() => {
              updateVendor({ ...selectedVendor, status: !selectedVendor.status });
              getVendorList();
              setSelectedVendor(null);
            }}
          >
            <OButton
              btnText={
                vendorDetails.status ? (
                  <FormattedMessage id="component.button.deactivate" />
                ) : (
                  <FormattedMessage id="component.button.activate" />
                )
              }
            />
          </Popconfirm>
        </Space>
        <Space direction="vertical" size={15} style={{ display: 'flex', marginTop: 20 }}>
          <Card title={<FormattedMessage id="component.card.title.basicInfo" />}>
            <Descriptions>
              <Descriptions.Item label={<FormattedMessage id="component.form.label.name" />}>
                {vendorDetails.name}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={<FormattedMessage id="component.form.label.address" />}>
                {vendorDetails.address}
                <br />
                {vendorDetails.city}, {vendorDetails.state}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={<FormattedMessage id="component.form.label.phone1" />}>
                {vendorDetails.phone1}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={<FormattedMessage id="component.form.label.phone2" />}>
                {vendorDetails.phone2}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={<FormattedMessage id="component.form.label.website" />}>
                {vendorDetails.website}
              </Descriptions.Item>
            </Descriptions>
          </Card>
          <Card title={<FormattedMessage id="component.card.title.services" />}>
            {vendorDetails.is_supplier ? (
              <Row align="middle">
                <Col span={4}>
                  <Row justify="center">
                    <TrainIcon style={{ fontSize: 15 }} />
                  </Row>
                </Col>
                <Col span={20}>
                  <div style={{ fontSize: '10px' }}>
                    <FormattedMessage id="pages.settings.vendors.supplier.description" />
                  </div>
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
                  <div style={{ fontSize: '10px' }}>
                    <FormattedMessage id="pages.settings.vendors.manufacturer.description" />
                  </div>
                </Col>
              </Row>
            ) : (
              ''
            )}
          </Card>
          <Card title={<FormattedMessage id="component.card.title.poDefaults" />}>
            <Descriptions>
              <Descriptions.Item label={<FormattedMessage id="component.form.label.poTemplate" />}>
                {vendorDetails.template}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={<FormattedMessage id="component.form.label.poFormat" />}>
                {vendorDetails.format}
              </Descriptions.Item>
            </Descriptions>
            <Descriptions>
              <Descriptions.Item label={<FormattedMessage id="component.form.label.paymentTerm" />}>
                {vendorDetails.payment_term}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Space>
      </Card>
    </>
  ) : null;
};

export default VendorDetails;
