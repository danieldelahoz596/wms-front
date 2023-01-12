import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { OModal } from '@/components/Globals/OModal';
import { OTable } from '@/components/Globals/OTable';
import { getBase64, sampleImages, productSelectOptions } from '@/utils/helpers/base';
import { modalType } from '@/utils/helpers/types';
import {
  CheckCircleOutlined,
  PlusOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import type { UploadFile } from 'antd';
import { Modal } from 'antd';
import { Col, Row, Tabs, Upload } from 'antd';
import type { UploadProps } from 'antd/es/upload';
import type { RcFile } from 'antd/lib/upload';
import React, { useState } from 'react';
const { TabPane } = Tabs;

interface ICoreProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const CoreProduct: React.FC<ICoreProduct> = ({ isOpen, onClose, onSave }) => {
  const [fileList, setFileList] = useState<UploadFile[]>(sampleImages);
  const [previewImage, setPreviewImage] = useState('');
  const [modalOpen, setModal] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setModal(modalType.Preview);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleCancel = () => setModal(modalType.Close);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const inputFields = [
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
      type: 'textarea',
      onChange: () => {},
      label: 'Description:',
      name: 'description',
    },
  ];

  const vendorProductsTableColumns = [
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
    },
    {
      title: 'Vendor SKU',
      dataIndex: 'vendorSku',
      key: 'vendorSku',
    },
    {
      title: 'Min Order Qty',
      dataIndex: 'minOrderQty',
      key: 'minOrderQty',
    },
    {
      title: 'Lead Time',
      dataIndex: 'leadTime',
      key: 'leadTime',
    },
    {
      title: 'U.O.M',
      dataIndex: 'uom',
      key: 'uom',
    },
  ];

  const vendorProductsTableRows = [
    {
      vendor: (
        <span>
          <CheckCircleOutlined /> CART STUFF
        </span>
      ),
      vendorSku: 'K8321',
      minOrderQty: '1',
      leadTime: 1,
      uom: <UnorderedListOutlined />,
    },
  ];

  const actionButtons = [
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'NEW VENDOR PRODUCT',
    },
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'EDIT',
    },
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'DEACTIVE',
    },
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'DEFAULT',
    },
  ];

  return (
    <OModal
      title={'New Core Product'}
      width={1000}
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
          btnLabel: 'Save',
          onClick: () => onSave(null),
        },
      ]}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="BASIC INFO" key="1">
          {inputFields.map((inputItem, inputItemIndex) =>
            Array.isArray(inputItem) ? (
              <Row className="pb-3">
                {inputItem.map((item: any) => (
                  <>
                    {item.label && <Col span={4}> {item.label} </Col>}
                    <Col span={10}>
                      <OInput {...item} style={{ width: '100%' }} />
                    </Col>
                  </>
                ))}
              </Row>
            ) : (
              <Row key={inputItemIndex} className="pb-3">
                <Col span={4}>{inputItem.label}</Col>
                <Col span={20}>
                  <OInput {...inputItem} style={{ width: '100%' }} />
                </Col>
              </Row>
            ),
          )}
        </TabPane>
        <TabPane tab="GALLERY" key="2">
          <>
            <p>
              Manage images by adding, removing and/or dragging each image to create an ordered
              gallery.
            </p>
            <Upload
              accept="image/png, image/jpeg, image/jpg"
              multiple={true}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChangeImage}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={modalOpen == modalType.Preview}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </>
        </TabPane>
        <TabPane tab="VENDOR PRODUCTS" key="4">
          <>
            <p>Add vendor SKUs associated with this product.</p>
            <Row justify="space-between">
              <Col>
                {actionButtons.map((btn, index) => (
                  <OButton key={index} {...btn} />
                ))}
              </Col>
              <Col>
                <OButton type="dashed" btnText="SHOW INACTIVE" />
              </Col>
            </Row>
            <div style={{ marginTop: '1rem', minHeight: '200px' }}>
              <OTable
                columns={vendorProductsTableColumns}
                rows={vendorProductsTableRows}
                pagination={false}
              />
            </div>
          </>
        </TabPane>
      </Tabs>
    </OModal>
  );
};

export default CoreProduct;
