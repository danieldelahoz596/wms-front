import { OModal } from '@/components/Globals/OModal';
import { QuestionCircleTwoTone } from '@ant-design/icons';
import { Card, Checkbox, Col, Form, Input, Row, Select, Tabs } from 'antd';

export default function ({ isOpen, onSave, onClose }) {
  return (
    <OModal
      title="Document Print Settings For In House"
      helpLink=""
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
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
          btnLabel: 'SAVE CHANGES',
          onClick: onSave,
        },
      ]}
    >
      <>
        <Tabs
          defaultActiveKey="1"
          items={[
            {
              label: `SHIPPING LABELS`,
              key: '1',
              children: (
                <>
                  <Card title="LABEL PRINT FORMAT">
                    <p>
                      Select the format you prefer for printing labels. You can optionally select to
                      include packing slips inline with your labels.
                    </p>
                  </Card>
                  <Card title="LABEL PRINT OPTIONS">
                    <Form>
                      <Form.Item label="Order Labels By">
                        <Select
                          size="small"
                          defaultValue="0"
                          options={[{ value: 0, label: 'None - as selected' }]}
                        />
                      </Form.Item>
                      <Form.Item label="Label Messages">
                        <p>
                          You can define up to three custom messages to print on your shipping
                          labels, including information about the order.
                        </p>
                        <Input.Group compact style={{ display: 'flex', alignItems: 'center' }}>
                          <Form.Item noStyle>
                            <Input style={{ width: '30%', marginRight: '0.2rem' }} />
                          </Form.Item>
                          |
                          <Form.Item noStyle>
                            <Input style={{ width: '30%', margin: '0 0.2rem' }} />
                          </Form.Item>
                          |
                          <Form.Item noStyle>
                            <Input style={{ width: '30%', marginLeft: '0.2rem' }} />
                          </Form.Item>
                        </Input.Group>
                      </Form.Item>
                      <Form.Item label="Shipping cutoff">
                        <Row>
                          <Col span={2}>
                            <Checkbox />
                          </Col>
                          <Col span={16}>
                            <div>
                              Set the Ship Date to the next day if the current time is after:
                            </div>
                          </Col>
                          <Col span={6}>
                            <Select
                              size="small"
                              defaultValue="12am"
                              options={[{ value: '12am', label: '12:00 AM' }]}
                            />
                          </Col>
                        </Row>
                      </Form.Item>
                      <Form.Item label="Cutoff Timezone">
                        America/New York <QuestionCircleTwoTone />
                      </Form.Item>
                    </Form>
                  </Card>
                </>
              ),
            },
            {
              label: `PACKING SLIPS`,
              key: '2',
              children: (
                <>
                  <Card title="PACKING SLIP FORMAT">
                    <p>Select the format you prefer for packing slips.</p>
                  </Card>
                  <Card title="PACKING SLIP OPTIONS">
                    <Form labelCol={{ span: 16 }} wrapperCol={{ span: 8 }}>
                      <Form.Item label="Order Items By">
                        <Select
                          size="small"
                          defaultValue="0"
                          options={[{ value: 0, label: 'Master SKU' }]}
                        />
                      </Form.Item>
                      <Form.Item label="Use Label Ordering when Printing Packing Slips Independently">
                        <Checkbox />
                      </Form.Item>
                      <Form.Item label="Packing Slip Will End the Page">
                        <Checkbox />
                      </Form.Item>

                      <Form.Item label="Break Down Bundles?">
                        <Checkbox />
                      </Form.Item>
                    </Form>
                    <p style={{ color: '#4e4e4e' }}>
                      {`Selecting this will break down your bundles/kits to the core products on your
                      packing slips. This will allow you to get accurate picking location if needed
                      BUT will reflect information from the core products per line as opposed to the
                      bundles itself. We suggest you do NOT use 'PRICE' as a tag if you choose this.
                      For bundles, we can break down the unit price per core, but for kits we will
                      only display "-,-" as we cannot know the individual breakdown. The order total
                      will still remain the full price.`}
                    </p>
                  </Card>
                </>
              ),
            },
            {
              label: `PICK LISTS`,
              key: '3',
              children: (
                <>
                  <Card title="PACKING SLIP OPTIONS">
                    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                      <Form.Item label="Order Items By">
                        <Select
                          size="small"
                          defaultValue="0"
                          options={[{ value: 0, label: 'Master SKU' }]}
                        />
                      </Form.Item>
                      <Form.Item label="Product Images">
                        <Checkbox defaultChecked /> Print product image on Pick Lists
                      </Form.Item>
                      <Form.Item label="Order Number(s)">
                        <Checkbox defaultChecked /> Include order numbers for each product
                      </Form.Item>
                      <Form.Item label="Bundles/Kits">
                        <Checkbox /> Sort non-assembled bundles and kits Master Sku with Core
                        Products
                      </Form.Item>
                      <Form.Item label="Product UPC">
                        <Checkbox defaultChecked /> Include UPC for each product
                      </Form.Item>
                      <Form.Item label="FNSKU">
                        <Checkbox defaultChecked /> Include FNSKU for each product
                      </Form.Item>
                      <Form.Item label="Other Item Notes">
                        <Checkbox /> Include order item notes for each product
                      </Form.Item>
                    </Form>
                  </Card>
                </>
              ),
            },
          ]}
        />
      </>
    </OModal>
  );
}
