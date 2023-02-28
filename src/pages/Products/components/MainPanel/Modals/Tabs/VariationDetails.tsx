import { Button, Col, Row, Select, Form, Input, InputNumber } from 'antd';
import { CloseCircleFilled, PlusCircleFilled, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import React, { Fragment, useEffect, useMemo, useState } from 'react';
import AddAttributeGroupModal from '../AddAttributeGroup';
import { modalType } from '@/utils/helpers/types';
import ConfigAttributeGroups from '../../../Modals/ConfigAttributeGroups';
import { useModel } from '@umijs/max';

interface IVariationDetails {
  form: any;
  attributeGroup: any;
}

const VariationDetails: React.FC<IVariationDetails> = ({ form, attributeGroup }) => {
  const [currentModal, setCurrentModal] = useState('');
  const [selectedAttributeGroup, setSelectedAttributeGroup] = useState(null);
  const { getAttributeGroups, attributeGroups, setAttributeGroups } = useModel('attributeGroups');

  useEffect(() => {
    setSelectedAttributeGroup(attributeGroup);
  }, [attributeGroup]);

  const attributeGroupOptions = useMemo(
    () =>
      attributeGroups.map((item) => ({
        value: item.id,
        label: item.name,
      })),
    [attributeGroups],
  );

  const attributeOptions = useMemo(
    () =>
      attributeGroups
        .find((item) => item.id === selectedAttributeGroup)
        ?.items.map((item) => ({
          value: item,
          text: item,
        })),
    [attributeGroups, selectedAttributeGroup],
  );

  useEffect(() => {
    getAttributeGroups();
  }, []);

  return (
    <>
      <Row className="pb-3" align="middle">
        <>
          <Col span={4}>
            <h3>Attribute Groups:</h3>
          </Col>
          <Col span={20}>
            <Row gutter={10}>
              <Col flex="auto">
                <Select
                  onChange={(value) => setSelectedAttributeGroup(value)}
                  placeholder="Select the attribute groups you want to work with ..."
                  options={attributeGroupOptions}
                  value={selectedAttributeGroup}
                  style={{ width: '100%' }}
                />
              </Col>
              <Col>
                <Button
                  style={{
                    width: '30px',
                    height: '33px',
                    borderColor: 'blue',
                  }}
                  icon={<PlusOutlined />}
                  onClick={() => setCurrentModal(modalType.AttributeGroup)}
                />
              </Col>
              <Col>
                <Button
                  style={{
                    width: '30px',
                    height: '33px',
                    borderColor: 'blue',
                  }}
                  icon={<SettingOutlined />}
                  onClick={() => setCurrentModal(modalType.ConfigAttributeGroups)}
                />
              </Col>
            </Row>
          </Col>
        </>
      </Row>
      <Row justify="start">
        <h2>Create your Core product variations below by clicking on the + symbol</h2>
      </Row>
      <Form labelCol={{ span: 4 }} labelAlign="left" form={form}>
        <Row className="mt-10" justify="space-between">
          <Form.List name="variationDetailsGroup">
            {(fields, { add, remove }) => (
              <>
                <Col span={8}>
                  <Row>
                    <Col span={4}>
                      <Button
                        style={{
                          width: '20px',
                          height: '20px',
                          borderColor: 'blue',
                        }}
                        icon={<PlusCircleFilled />}
                        onClick={add}
                      />
                    </Col>
                    <Col span={20}>
                      <h2>Variation Details</h2>
                    </Col>
                  </Row>
                </Col>
                <Col span={15}>
                  <h2>Dimension & Attributes</h2>
                </Col>
                <hr style={{ width: '100%', borderTopStyle: 'solid', borderTopColor: 'gray', borderTopWidth: 1 }} />

                {fields.map(({ key, name, ...restField }) => (
                  <Fragment key={key}>
                    <Col span={8}>
                      <Row>
                        <Col span={4}>
                          <Button
                            style={{
                              width: '20px',
                              height: '20px',
                              borderColor: 'blue',
                            }}
                            icon={<CloseCircleFilled />}
                            onClick={() => remove(name)}
                          />
                        </Col>
                        <Col span={20}>
                          <Form.Item {...restField} label="SKU" name={[name, 'master_sku']}>
                            <Input />
                          </Form.Item>
                          <Form.Item {...restField} label="UPC" name={[name, 'upc']}>
                            <Input />
                          </Form.Item>
                          <Form.Item {...restField} label="Image" name={[name, 'image']}>
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={15}>
                      <Form.Item label="Attributes" {...restField} name={[name, 'attribute']}>
                        <Select options={attributeOptions} />
                      </Form.Item>
                      <Form.Item label="Weight" className="custom-form-item">
                        <Input.Group compact>
                          <Form.Item label="lb." {...restField} name={[name, 'lb']} colon={false} labelCol={{ offset: 1 }}>
                            <InputNumber defaultValue={0} />
                          </Form.Item>
                          <Form.Item label="oz." {...restField} name={[name, 'oz']} colon={false} labelCol={{ offset: 1 }}>
                            <InputNumber defaultValue={0} />
                          </Form.Item>
                        </Input.Group>
                      </Form.Item>
                      <Form.Item label="H/W/L" className="custom-form-item">
                        <Input.Group compact>
                          <Form.Item label="x" {...restField} name={[name, 'x']} colon={false} labelCol={{ offset: 1 }}>
                            <InputNumber defaultValue={0} />
                          </Form.Item>
                          <Form.Item label="y" {...restField} name={[name, 'y']} colon={false} labelCol={{ offset: 1 }}>
                            <InputNumber defaultValue={0} />
                          </Form.Item>
                          <Form.Item label="in" {...restField} name={[name, 'in']} colon={false} labelCol={{ offset: 1 }}>
                            <InputNumber defaultValue={0} />
                          </Form.Item>
                        </Input.Group>
                      </Form.Item>
                    </Col>
                  </Fragment>
                ))}
              </>
            )}
          </Form.List>
        </Row>
      </Form>

      <AddAttributeGroupModal
        isOpen={currentModal === modalType.AttributeGroup}
        onSave={() => setCurrentModal(modalType.Close)}
        onClose={() => setCurrentModal(modalType.Close)}
        attributeGroups={attributeGroups}
        setAttributeGroups={setAttributeGroups}
      />

      <ConfigAttributeGroups
        isOpen={currentModal === modalType.ConfigAttributeGroups}
        onClose={() => setCurrentModal(modalType.Close)}
        attributeGroups={attributeGroups}
        setAttributeGroups={setAttributeGroups}
      />
    </>
  );
};

export default VariationDetails;
