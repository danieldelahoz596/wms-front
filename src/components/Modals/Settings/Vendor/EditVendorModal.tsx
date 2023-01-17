import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Row, Col, Input, Select, Checkbox, Card } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const { Option } = Select;

export default function ({ isOpen, onSave, onClose }) {
  const { editableVendor, updateNewVendor, setEditableVendor } = useModel('vendor');
  const { poTemplateList } = useModel('poTemplate');
  const { paymentTermList } = useModel('paymentTerm');
  const { poFormatList } = useModel('poFormat');
  const { incotermList } = useModel('incoterm');

  const handleInputChange = (name: string, value: any) =>
    setEditableVendor((prevState) => ({ ...prevState, [name]: value }));

  const handlePOInputChange = (name: string, value: any) =>
    setEditableVendor((prevState) => ({
      ...prevState,
      po_default: {
        ...prevState.po_default,
        [name]: value,
      },
    }));

  const handleSave = () => {
    updateNewVendor();
    onSave();
  };

  return (
    <OModal
      title="EDIT VENDOR"
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      className="OModal"
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
      width={1000}
    >
      {editableVendor && (
        <Row gutter={12}>
          <Col span={12}>
            <Card title="BASIC INFO" style={{ padding: '0.5rem' }}>
              <Row className="pb-3">
                <Col span={4}>Name:</Col>
                <Col span={20}>
                  <Input
                    placeholder="Name"
                    value={editableVendor?.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Address:</Col>
                <Col span={20}>
                  <TextArea
                    value={editableVendor?.address}
                    rows={4}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>City</Col>
                <Col span={20}>
                  <Input
                    placeholder="City"
                    value={editableVendor?.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>State/Zip</Col>
                <Col span={10}>
                  <Select
                    style={{ width: '100%' }}
                    defaultValue={editableVendor?.state}
                    onChange={(value) => handleInputChange('state', value)}
                  >
                    <Option value="1">Alabama</Option>
                    <Option value="2">Alabama</Option>
                    <Option value="3">Alaska</Option>
                    <Option value="4">Alabama</Option>
                    <Option value="5">Alaska</Option>
                    <Option value="6">Arizona</Option>
                    <Option value="7">Arkansas</Option>
                    <Option value="8">California</Option>
                    <Option value="9">Colorado</Option>
                    <Option value="10">Connecticut</Option>
                    <Option value="11">Delaware</Option>
                    <Option value="12">Florida</Option>
                    <Option value="13">Georgia</Option>
                    <Option value="14">Hawaii</Option>
                    <Option value="15">Idaho</Option>
                    <Option value="16">IllinoisIndiana</Option>
                    <Option value="17">Iowa</Option>
                    <Option value="18">Kansas</Option>
                    <Option value="19">Kentucky</Option>
                    <Option value="20">Louisiana</Option>
                    <Option value="21">Maine</Option>
                    <Option value="22">Maryland</Option>
                    <Option value="23">Massachusetts</Option>
                    <Option value="24">Michigan</Option>
                    <Option value="25">Minnesota</Option>
                    <Option value="26">Mississippi</Option>
                    <Option value="27">Missouri</Option>
                    <Option value="28">Montana</Option>
                    <Option value="29">Nebraska</Option>
                    <Option value="30">Nevada</Option>
                    <Option value="31">New Hampshire</Option>
                    <Option value="32">New Jersey</Option>
                    <Option value="33">New Mexico</Option>
                    <Option value="34">New York</Option>
                    <Option value="35">North Carolina</Option>
                    <Option value="36">North Dakota</Option>
                    <Option value="37">Ohio</Option>
                    <Option value="38">Oklahoma</Option>
                    <Option value="39">Oregon</Option>
                    <Option value="40">PennsylvaniaRhode Island</Option>
                    <Option value="41">South Carolina</Option>
                    <Option value="42">South Dakota</Option>
                    <Option value="43">Tennessee</Option>
                    <Option value="44">Texas</Option>
                    <Option value="45">Utah</Option>
                    <Option value="46">Vermont</Option>
                    <Option value="47">Virginia</Option>
                    <Option value="48">Washington</Option>
                    <Option value="49">West Virginia</Option>
                    <Option value="50">Wisconsin</Option>
                    <Option value="51">Wyoming</Option>
                  </Select>
                </Col>
                <Col span={10}>
                  <Input
                    value={editableVendor?.zip}
                    placeholder="Zip"
                    onChange={(e) => handleInputChange('zip', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Phone 1</Col>
                <Col span={20}>
                  <Input
                    value={editableVendor?.phone1}
                    placeholder="Phone 1"
                    onChange={(e) => handleInputChange('phone1', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Phone 2</Col>
                <Col span={20}>
                  <Input
                    placeholder="Phone 2"
                    value={editableVendor?.phone2}
                    onChange={(e) => handleInputChange('phone2', e.target.value)}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="SERVICES" style={{ padding: '0.5rem' }}>
              <Row className="pb-3">
                <Col span={24}>
                  <Checkbox
                    onChange={(e) => handleInputChange('is_supplier', e.target.checked)}
                    checked={editableVendor?.is_supplier}
                  >
                    This vendor is a supplier
                  </Checkbox>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={24}>
                  <Checkbox
                    onChange={(e) => handleInputChange('is_manufacturer', e.target.checked)}
                    checked={editableVendor?.is_manufacturer}
                  >
                    This vendor is a manufacturer
                  </Checkbox>
                </Col>
              </Row>
            </Card>
            <Card title="P.O DEFAULTS" style={{ marginTop: '1rem', padding: '0.5rem' }}>
              <Row className="pb-3">
                <Col span={4}>P.O Template:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Select..."
                    style={{ width: '100%' }}
                    defaultValue={`${editableVendor?.po_default.template}`}
                    onChange={(value) => handlePOInputChange('template', value)}
                  >
                    {poTemplateList.map((_item) => (
                      <Option key={_item.id} value={`${_item.id}`}>
                        {_item.value}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>P.O Email</Col>
                <Col span={20}>
                  <Input
                    placeholder="Email"
                    value={editableVendor?.po_default.email}
                    onChange={(e) => handlePOInputChange('email', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>P.O Fax</Col>
                <Col span={20}>
                  <Input
                    placeholder="Fax"
                    value={editableVendor?.po_default.fax}
                    onChange={(e) => handlePOInputChange('fax', e.target.value)}
                  />
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>P.O Format:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    defaultValue={editableVendor?.po_default.format}
                    onChange={(value) => handlePOInputChange('format', value)}
                  >
                    {poFormatList.map((_item) => (
                      <Option key={_item.id} value={`${_item.id}`}>
                        {_item.value}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Incoterm:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Please select"
                    style={{ width: '100%' }}
                    defaultValue={`${editableVendor?.po_default.incoterm}`}
                    onChange={(value) => handlePOInputChange('incoterm', value)}
                  >
                    {incotermList.map((_item) => (
                      <Option key={_item.id} value={`${_item.id}`}>
                        {_item.value}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>
              <Row className="pb-3">
                <Col span={4}>Payment Term:</Col>
                <Col span={20}>
                  <Select
                    placeholder="Select..."
                    style={{ width: '100%' }}
                    defaultValue={`${editableVendor?.po_default.payment_term}`}
                    onChange={(value) => handlePOInputChange('payment_term', value)}
                  >
                    {paymentTermList.map((_item) => (
                      <Option key={_item.id} value={`${_item.id}`}>
                        {_item.value}
                      </Option>
                    ))}
                  </Select>
                </Col>
              </Row>

              <Row className="pb-3">
                <Col span={4}>Item Tax:</Col>
                <Col span={4}>
                  <Input
                    placeholder="0"
                    value={editableVendor?.po_default.item_tax}
                    onChange={(e) => handlePOInputChange('item_tax', e.target.value)}
                  />
                </Col>
                <Col span={2}>&nbsp;&nbsp; %</Col>
                <Col span={6}>&nbsp;</Col>
                <Col span={4}>P.O L.T.R:</Col>
                <Col span={4}>
                  <Checkbox
                    onChange={(e) => handlePOInputChange('ltr', e.target.checked)}
                    checked={editableVendor?.po_default.ltr}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}
    </OModal>
  );
}
