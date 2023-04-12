import React from 'react';
import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row, Select, Form, Input, InputNumber } from 'antd';
import { CloseCircleFilled, PlusCircleFilled, PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { useEffect, useMemo, useState } from 'react';
import AddAttributeGroupModal from './AddAttributeGroup';
import { modalType } from '@/utils/helpers/types';
import ConfigAttributeGroups from './ConfigAttributeGroups';
import { FormattedMessage, useModel } from '@umijs/max';

interface IProductVariationsDetailsModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  virtualProductData: any;
}

const ProductVariationsDetailsModal: React.FC<IProductVariationsDetailsModal> = ({
  isOpen,
  onClose,
  onSave,
  virtualProductData,
}) => {
  const [currentModal, setCurrentModal] = useState('');
  const [selectedAttributeGroupId, setSelectedAttributeGroupId] = useState(null);
  const { getAttributeGroups, attributeGroups, setAttributeGroups } = useModel('attributeGroups');
  const { createProduct } = useModel('product');

  const [form] = Form.useForm();

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
        .find((item) => item.id === selectedAttributeGroupId)
        ?.items.map((item) => ({
          value: item.id,
          label: item.name,
        })),
    [attributeGroups, selectedAttributeGroupId],
  );

  useEffect(() => {
    getAttributeGroups();
  }, [getAttributeGroups]);

  const handleSave = () => {
    form.validateFields().then((values) => {
      createProduct({
        type: 'Virtual Product',
        ...virtualProductData,
        attribute_group_id: selectedAttributeGroupId,
        variations: values.variations,
      }).then(() => {
        onSave();
      });
    });
  };

  return (
    <OModal
      title="New Virtual Product"
      helpLink="/help/products/create/productvariations"
      width={800}
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
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
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
                    onChange={(value) => {
                      setSelectedAttributeGroupId(value);
                      form.resetFields();
                    }}
                    placeholder="Select the attribute groups you want to work with ..."
                    options={attributeGroupOptions}
                    value={selectedAttributeGroupId}
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

        <Form labelCol={{ span: 6 }} labelAlign="left" form={form}>
          <Form.List name="variations">
            {(fields, { add, remove }) => (
              <>
                <Row justify="start">
                  <h2>Create your Core product variations below by clicking on the + symbol</h2>
                </Row>
                <Row className="mt-10" justify="space-between">
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
                          onClick={() => add()}
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
                </Row>
                <>
                  {fields.map(({ key, name, ...resetField }) => (
                    <Row className="mt-10" justify="space-between" key={key}>
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
                              disabled={fields.length < 2}
                            />
                          </Col>
                          <Col span={20}>
                            <Form.Item
                              {...resetField}
                              label="SKU"
                              name={[name, 'sku']}
                              rules={[{ required: true, message: 'Please input SKU' }]}
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item {...resetField} label="UPC" name={[name, 'upc']}>
                              <Input />
                            </Form.Item>
                            <Form.Item {...resetField} label="image">
                              <Input />
                            </Form.Item>
                          </Col>
                        </Row>
                      </Col>
                      <Col span={15}>
                        <Form.Item
                          {...resetField}
                          label="Attribute"
                          name={[name, 'attribute_id']}
                          rules={[{ required: true, message: 'Please select attribute' }]}
                        >
                          <Select options={attributeOptions} />
                        </Form.Item>
                        <Form.Item label={<FormattedMessage id="component.form.label.weight" />} className="custom-form-item">
                          <Input.Group compact>
                            <Form.Item
                              {...resetField}
                              label={<FormattedMessage id="component.form.label.lb" />}
                              name={[name, 'pound']}
                              colon={false}
                              labelCol={{ offset: 1 }}
                              style={{ width: '50%' }}
                            >
                              <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                              {...resetField}
                              label={<FormattedMessage id="component.form.label.oz" />}
                              name={[name, 'ounce']}
                              colon={false}
                              labelCol={{ offset: 1 }}
                              style={{ width: '50%' }}
                            >
                              <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                          </Input.Group>
                        </Form.Item>
                        <Form.Item label={<FormattedMessage id="component.form.label.hwl" />} className="custom-form-item">
                          <Input.Group compact>
                            <Form.Item
                              {...resetField}
                              label={<FormattedMessage id="component.form.label.x" />}
                              name={[name, 'height']}
                              style={{ width: '33%', margin: 0 }}
                              colon={false}
                              labelCol={{ offset: 1 }}
                            >
                              <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                              {...resetField}
                              label={<FormattedMessage id="component.form.label.y" />}
                              name={[name, 'width']}
                              style={{ width: '33%', margin: 0 }}
                              colon={false}
                              labelCol={{ offset: 1 }}
                            >
                              <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item
                              {...resetField}
                              label={<FormattedMessage id="component.form.label.z" />}
                              name={[name, 'length']}
                              style={{ width: '33%', margin: 0 }}
                              colon={false}
                              labelCol={{ offset: 1 }}
                            >
                              <InputNumber style={{ width: '100%' }} />
                            </Form.Item>
                          </Input.Group>
                        </Form.Item>
                      </Col>
                    </Row>
                  ))}
                </>
              </>
            )}
          </Form.List>
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
        />
      </>
    </OModal>
  );
};

export default ProductVariationsDetailsModal;
