import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row } from 'antd';
import { PlusOutlined, SettingOutlined, UploadOutlined } from '@ant-design/icons';
import { Fragment, useEffect, useState } from 'react';
import { OInput } from '@/components/Globals/OInput';
import { productSelectOptions } from '@/utils/helpers/base';

interface IProductVariants {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ProductVariants: React.FC<IProductVariants> = ({ isOpen, onClose, onSave }) => {
  const [step, setStep] = useState(1);
  const handleSave = () => onSave();

  useEffect(() => {
    setStep(1);
  }, [isOpen]);

  const handleContinueClick = () => {
    setStep(step + 1);
  };

  const newProductInputFields = [
    {
      type: 'text',
      onChange: () => {},
      label: 'Master Sku *:',
      name: 'masterSku',
      placeholder: 'Master Sku',
      defaultValue: '',
    },
    {
      type: 'text',
      onChange: () => {},
      label: 'Name *:',
      name: 'name',
      placeholder: 'Name',
      defaultValue: '',
    },
    [
      {
        type: 'select',
        onChange: () => {},
        label: 'Buy | Brand *:',
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
          <div style={{ display: 'flex' }}>
            {inputField}
            <PlusOutlined
              style={{
                color: 'blue',
                cursor: 'pointer',
                padding: '0.5rem',
                border: '1px solid blue',
              }}
            />
            <SettingOutlined
              style={{
                color: 'blue',
                cursor: 'pointer',
                padding: '0.5rem',
                border: '1px solid blue',
              }}
            />
          </div>
        ),
      },
    ],
    {
      type: 'select',
      onChange: () => {},
      label: 'Categories:',
      name: 'categories',
      placeholder: 'Please Select',
      options: productSelectOptions,
      render: (inputField: any) => (
        <div style={{ display: 'flex' }}>
          {inputField}
          <PlusOutlined
            style={{
              color: 'blue',
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid blue',
            }}
          />
          <SettingOutlined
            style={{
              color: 'blue',
              cursor: 'pointer',
              padding: '0.5rem',
              border: '1px solid blue',
            }}
          />
        </div>
      ),
    },
    {
      type: 'select',
      onChange: () => {},
      label: 'Lables:',
      name: 'lables',
      placeholder: 'Please Select',
      options: productSelectOptions,
      render: (inputField: any) => (
        <Row>
          <Col flex="1 1 200px">{inputField}</Col>
          <Col flex="0 1 80px">
            <Button
              style={{
                width: '30px',
                height: '33px',
                backgroundColor: 'white !important',
                borderColor: 'blue',
              }}
              icon={<PlusOutlined />}
            />
            <Button
              style={{
                width: '30px',
                height: '33px',
                backgroundColor: 'white !important',
                borderColor: 'blue',
              }}
              icon={<SettingOutlined />}
            />
          </Col>
        </Row>
      ),
    },
    {
      type: 'textarea',
      onChange: () => {},
      label: 'Description:',
      name: 'description',
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
                  <h3>Attribute Gropus:</h3>
                </Col>
                <Col span={20}>
                  <OInput
                    style={{ width: '100%' }}
                    type="select"
                    onChange={() => {}}
                    name="attributes"
                    placeholder="Select the attribute groups you want to work with ..."
                  />
                  <Button icon={<PlusOutlined size={20} />}></Button>
                </Col>
              </>
            </Row>
          </>
        )}
      </>
    </OModal>
  );
};

export default ProductVariants;
