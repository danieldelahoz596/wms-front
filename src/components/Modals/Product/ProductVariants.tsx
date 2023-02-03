import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row } from 'antd';
import {
  CloseCircleFilled,
  PlusCircleFilled,
  PlusOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Fragment, useState } from 'react';
import { OInput } from '@/components/Globals/OInput';
import AddAttributeGroupModal from './AddAttributeGroup';
import { modalType } from '@/utils/helpers/types';
import { uuidv4 } from '@antv/xflow-core';
import ConfigAttributeGroups from './ConfigAttributeGroups';

interface IProductVariants {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ProductVariants: React.FC<IProductVariants> = ({ isOpen, onClose, onSave }) => {
  const [currentModal, setCurrentModal] = useState('');
  const [attributeGroups, setAttributeGroups] = useState<any[]>([]);
  const [variationDetailsGroup, setVariationDetailsGroup] = useState([{ key: uuidv4() }]);
  const [selectedAttributeGroup, setSelectedAttributeGroup] = useState(null);

  const handleAddVariantDetails = () => {
    setVariationDetailsGroup([...variationDetailsGroup, { key: uuidv4() }]);
  };

  const handleRemoveVariantDetails = (item) => {
    setVariationDetailsGroup(variationDetailsGroup.filter((group) => group.key !== item.key));
  };

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
          onClick: onSave,
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
        <Row className='mt-10' justify="space-between">
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
                    ?.items.map((item) => ({
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
                    <OInput type="number" name="weightlb" onChange={() => {}} defaultValue="0" />
                  </Col>
                  <Col>
                    <h3>lb.</h3>
                  </Col>
                </Row>
              </Col>
              <Col span={6}>
                <Row>
                  <Col span={16}>
                    <OInput type="number" name="weightoz" onChange={() => {}} defaultValue="0" />
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
    </OModal>
  );
};

export default ProductVariants;
