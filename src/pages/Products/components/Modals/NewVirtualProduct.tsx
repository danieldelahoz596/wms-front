import { OModal } from '@/components/Globals/OModal';
import { Button, Col, Row } from 'antd';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import { Fragment } from 'react';
import { OInput } from '@/components/Globals/OInput';
import { productSelectOptions } from '@/utils/helpers/base';

interface INewVirtualProductModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const NewVirtualProductModal: React.FC<INewVirtualProductModal> = ({ isOpen, onClose, onSave }) => {
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
              <Row justify="space-between" className="ml-5">
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
            <Row justify="space-between" className="ml-10">
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
            <Row justify="space-between" className="ml-10">
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

  return (
    <OModal
      title="NEW VIRTUAL PRODUCT"
      helpLink="/help/products/create/productvariations"
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
          btnLabel: 'Continue',
          onClick: onSave,
        },
      ]}
    >
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
    </OModal>
  );
};

export default NewVirtualProductModal;
