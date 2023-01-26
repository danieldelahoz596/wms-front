import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row } from 'antd';
import {
  CloseCircleFilled,
  PlusCircleFilled,
  PlusOutlined,
  SettingOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Fragment, useEffect, useState } from 'react';
import { OInput } from '@/components/Globals/OInput';
import { productSelectOptions } from '@/utils/helpers/base';
import AttributeGroupModal from './AttributeGroup';
import { modalType } from '@/utils/helpers/types';
import { uuidv4 } from '@antv/xflow-core';
import ConfigAttributeGroups from './ConfigAttributeGroups';

interface IProductVariants {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ProductVariants: React.FC<IProductVariants> = ({ isOpen, onClose, onSave }) => {
  const [modalOpen, setModal] = useState('');
  const [step, setStep] = useState(1);
  const [attributeGroups, setAttributeGroups] = useState<any[]>([]);
  const [variationDetailsGroup, setVariationDetailsGroup] = useState([{ key: uuidv4() }]);
  const [selectedAttributeGroup, setSelectedAttributeGroup] = useState(null);
  const handleSave = () => onSave();

  useEffect(() => {
    setStep(1);
  }, [isOpen]);

  const handleContinueClick = () => {
    setStep(step + 1);
  };

  const handleAddVariantDetails = () => {
    setVariationDetailsGroup([...variationDetailsGroup, { key: uuidv4() }]);
  };

  const handleRemoveVariantDetails = (item) => {
    setVariationDetailsGroup(variationDetailsGroup.filter((group) => group.key !== item.key));
  };

  const newProductInputFields = [
    {
      type: 'text',
      onChange: () => {},
      label: 'Master Sku *',
      name: 'masterSku',
      placeholder: 'Master Sku',
      defaultValue: '',
    },
    {
      type: 'text',
      onChange: () => {},
      label: 'Name *',
      name: 'name',
      placeholder: 'Name',
      defaultValue: '',
    },
    [
      {
        type: 'select',
        onChange: () => {},
        label: 'Buy | Brand *',
        name: 'buy',
        defaultValue: 'lucy',
        options: [
          {
            value: 'lucy',
            label: 'lucky',
          },
        ],
      },
      {
        type: 'select',
        onChange: () => {},
        name: 'band',
        defaultValue: 'lucy',
        options: [
          {
            value: 'lucy',
            label: 'lucky',
          },
        ],
        render: (inputField: any) => (
          <Row>
            <Col flex="1 1 200px">{inputField}</Col>
            <Col flex="0 1 70px">
              <Row justify="space-between" style={{ marginLeft: '5px' }}>
                <>
                  <Button
                    style={{
                      width: '30px',
                      height: '33px',
                      borderColor: 'blue',
                    }}
                    icon={<PlusOutlined />}
                  />
                  <Button
                    style={{
                      width: '30px',
                      height: '33px',
                      borderColor: 'blue',
                    }}
                    icon={<SettingOutlined />}
                  />
                </>
              </Row>
            </Col>
          </Row>
        ),
      },
    ],
    {
      type: 'select',
      onChange: () => {},
      label: 'Categories',
      name: 'categories',
      placeholder: 'Please Select',
      options: productSelectOptions,
      render: (inputField: any) => (
        <Row>
          <Col flex="1 1 200px">{inputField}</Col>
          <Col flex="0 1 70px">
            <Row justify="space-between" style={{ marginLeft: '5px' }}>
              <>
                <Button
                  style={{
                    width: '30px',
                    height: '33px',
                    borderColor: 'blue',
                  }}
                  icon={<PlusOutlined />}
                />
                <Button
                  style={{
                    width: '30px',
                    height: '33px',
                    borderColor: 'blue',
                  }}
                  icon={<SettingOutlined />}
                />
              </>
            </Row>
          </Col>
        </Row>
      ),
    },
    {
      type: 'select',
      onChange: () => {},
      label: 'Lables',
      name: 'lables',
      placeholder: 'Please Select',
      options: productSelectOptions,
      render: (inputField: any) => (
        <Row>
          <Col flex="1 1 200px">{inputField}</Col>
          <Col flex="0 1 70px">
            <Row justify="space-between" style={{ marginLeft: '5px' }}>
              <>
                <Button
                  style={{
                    width: '30px',
                    height: '33px',
                    borderColor: 'blue',
                  }}
                  icon={<PlusOutlined />}
                />
                <Button
                  style={{
                    width: '30px',
                    height: '33px',
                    borderColor: 'blue',
                  }}
                  icon={<SettingOutlined />}
                />
              </>
            </Row>
          </Col>
        </Row>
      ),
    },
    {
      type: 'textarea',
      onChange: () => {},
      label: 'Description',
      name: 'description',
    },
  ];

  const variationDetailsInputFields = [
    {
      type: 'text',
      onChange: () => {},
      label: 'SKU',
      name: 'sku',
      placeholder: 'Required',
      defaultValue: '',
    },
    {
      type: 'text',
      onChange: () => {},
      label: 'UPC',
      name: 'sku',
      defaultValue: '',
    },
    {
      type: 'text',
      onChange: () => {},
      label: 'Image',
      name: 'image',
      defaultValue: '',
    },
  ];

  return (
    <OModal
      title={'NEW VIRTUAL PRODUCT'}
      width={800}
      centered
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
          btnLabel: step === 2 ? 'Save' : 'Continue',
          onClick: step === 2 ? handleSave : handleContinueClick,
        },
      ]}
    >
      <>
        {step === 1 && (
          <>
            <h3>Create parent virtual product that will group your core product variants</h3>
            {newProductInputFields.map((inputItem, inputItemIndex) =>
              Array.isArray(inputItem) ? (
                <Row className="pb-3" key={`inputItem1-${inputItemIndex}`}>
                  {inputItem.map((item: any, itemIndex) => (
                    <Fragment key={`item-${itemIndex}`}>
                      {item.label && <Col span={4}> {item.label} </Col>}
                      <Col span={10}>
                        <OInput {...item} style={{ width: '100%' }} />
                      </Col>
                    </Fragment>
                  ))}
                </Row>
              ) : (
                <Row key={`inputItem2-${inputItemIndex}`} className="pb-3">
                  <Col span={4}>{inputItem.label}</Col>
                  <Col span={20}>
                    <OInput {...inputItem} style={{ width: '100%' }} />
                  </Col>
                </Row>
              ),
            )}
          </>
        )}
        {step === 2 && (
          <>
            <Row className="pb-3">
              <>
                <Col span={4}>
                  <h3>Attribute Groups:</h3>
                </Col>
                <Col span={20}>
                  <Row>
                    <Col flex="auto">
                      <OInput
                        type="select"
                        onChange={(name, value) => setSelectedAttributeGroup(value)}
                        name="attributes"
                        placeholder="Select the attribute groups you want to work with ..."
                        options={attributeGroups.map((item) => ({
                          value: item.name,
                          text: item.name,
                        }))}
                        value={selectedAttributeGroup}
                      />
                    </Col>
                    <Col style={{ marginLeft: '10px' }}>
                      <Button
                        style={{
                          width: '30px',
                          height: '33px',
                          borderColor: 'blue',
                        }}
                        icon={<PlusOutlined />}
                        onClick={() => setModal(modalType.AttributeGroup)}
                      />
                    </Col>
                  </Row>
                </Col>
              </>
            </Row>
            <Row justify="start">
              <h2>Create your Core pro </h2>
              <Button
                style={{
                  width: '30px',
                  height: '30px',
                  borderColor: 'blue',
                }}
                icon={<SettingOutlined />}
                onClick={() => setModal(modalType.ConfigAttributeGroups)}
              />
              <h2> variations below by clicking on the + symbol</h2>
            </Row>
            <Row style={{ marginTop: '10px' }} justify="space-between">
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
                      onClick={handleAddVariantDetails}
                    />
                  </Col>
                  <Col span={20}>
                    <h2>Variation Details</h2>
                  </Col>
                </Row>
                <Row>
                  {variationDetailsGroup.map((group) => (
                    <Fragment key={group.key}>
                      <Col span={4}>
                        <Button
                          style={{
                            width: '20px',
                            height: '20px',
                            borderColor: 'blue',
                          }}
                          icon={<CloseCircleFilled />}
                          onClick={() => handleRemoveVariantDetails(group)}
                          disabled={variationDetailsGroup.length < 2}
                        />
                      </Col>
                      <Col span={20}>
                        {variationDetailsInputFields.map((inputItem, inputItemIndex) => (
                          <Row key={`inputItem2-${inputItemIndex}`} className="pb-3">
                            <Col span={4}>{inputItem.label}</Col>
                            <Col span={20}>
                              <OInput {...inputItem} style={{ width: '100%' }} />
                            </Col>
                          </Row>
                        ))}
                      </Col>
                    </Fragment>
                  ))}
                </Row>
              </Col>
              <Col span={15}>
                <Row>
                  <h2>Dimension & Attributes</h2>
                </Row>
                <Row className="pb-3">
                  <Col span={4}>Attributes:</Col>
                  <Col span={20}>
                    <OInput
                      type="select"
                      name="attributes"
                      onChange={() => {}}
                      placeholder="Selected..."
                      options={attributeGroups
                        .find((item) => item.name === selectedAttributeGroup)
                        ?.attributes.map((item) => ({
                          value: item,
                          text: item,
                        }))}
                    />
                  </Col>
                </Row>
                <Row className="pb-3">
                  <Col span={4}>Weight:</Col>
                  <Col span={6}>
                    <Row>
                      <Col span={16}>
                        <OInput
                          type="number"
                          name="weightlb"
                          onChange={() => {}}
                          defaultValue="0"
                        />
                      </Col>
                      <Col>
                        <h3>lb.</h3>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={6}>
                    <Row>
                      <Col span={16}>
                        <OInput
                          type="number"
                          name="weightoz"
                          onChange={() => {}}
                          defaultValue="0"
                        />
                      </Col>
                      <Col>
                        <h3>oz.</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="pb-3">
                  <Col span={4}>H/W/L:</Col>
                  <Col span={6}>
                    <Row>
                      <Col span={16}>
                        <OInput type="number" name="heightx" onChange={() => {}} defaultValue="0" />
                      </Col>
                      <Col>
                        <h3>x</h3>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={6}>
                    <Row>
                      <Col span={16}>
                        <OInput type="number" name="weightx" onChange={() => {}} defaultValue="0" />
                      </Col>
                      <Col>
                        <h3>x</h3>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={6}>
                    <Row>
                      <Col span={16}>
                        <OInput type="number" name="in" onChange={() => {}} defaultValue="0" />
                      </Col>
                      <Col>
                        <h3>in</h3>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
      </>

      <AttributeGroupModal
        isOpen={modalOpen === modalType.AttributeGroup}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
        attributeGroups={attributeGroups}
        setAttributeGroups={setAttributeGroups}
      />

      <ConfigAttributeGroups
        isOpen={modalOpen === modalType.ConfigAttributeGroups}
        onClose={() => setModal(modalType.Close)}
      />
    </OModal>
  );
};

export default ProductVariants;
