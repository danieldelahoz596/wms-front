import { OModal } from '@/components/Globals/OModal';
import { Col, Row, Select, Input, Table, Tabs, Upload, Modal, UploadFile } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  CheckCircleOutlined,
  PlusOutlined,
  SettingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Fragment, useEffect, useState } from 'react';
import { OInput } from '@/components/Globals/OInput';
import { getBase64, sampleImages, productSelectOptions } from '@/utils/helpers/base';
import { modalType } from '@/utils/helpers/types';
import type { UploadProps } from 'antd/es/upload';
import type { TabsProps } from 'antd';
import { OButton } from '@/components/Globals/OButton';
import { OTable } from '@/components/Globals/OTable';

interface IBundleKit {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

interface DataType {
  key: React.Key;
  name: string;
  quantity: string;
}

const BundleKit: React.FC<IBundleKit> = ({ isOpen, onClose, onSave }) => {
  const [step, setStep] = useState(1);
  const { productList } = useModel('product');
  const [selectedProducts, setSelectedProduct] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [fileList, setFileList] = useState<UploadFile[]>(sampleImages);
  const [previewImage, setPreviewImage] = useState('');
  const [modalOpen, setModal] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  useEffect(() => {
    setStep(1);
    setSelectedProduct([]);
    setTableData([]);
  }, [isOpen]);

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

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleCancel = () => setModal(modalType.Close);

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

  const bundledTableColumns = [
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'MASTER SKU',
      dataIndex: 'masterSKU',
      key: 'masterSKU',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];

  const bundledTableRows = [];

  const vendorProductsButtons = [
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

  const bundledItemsButtons = [
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'ADD CORE PRODUCT',
    },
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'EDIT QUANTITY',
    },
    {
      type: 'dashed',
      onClick: () => {},
      btnText: 'REMOVE',
    },
  ];

  const handleContiuneClick = () => {
    if (step === 1) {
      setTableData(
        selectedProducts.map((product, index) => ({
          key: index + 1,
          name: product,
          quantity: '',
        })),
      );
    }
    setStep(step + 1);
  };

  const handleProductSelect = (value: string[]) => {
    setSelectedProduct(value);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Bundled Product',
      dataIndex: 'name',
      width: 600,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render: () => <Input />,
    },
  ];

  const tabItems: TabsProps['items'] = [
    {
      key: 'tab-1',
      label: 'BASIC INFO FIEDLS',
      children: (
        <>
          {inputFields.map((inputItem, inputItemIndex) =>
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
      ),
    },
    {
      key: 'tab-2',
      label: 'GALLERY CUSTOMS',
      children: (
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
      ),
    },
    {
      key: 'tab-3',
      label: 'BUNDLED ITEMS',
      children: (
        <>
          <div>
            <h3>Manage cord products and their respective quantities within this bundle/kit</h3>
          </div>
          {bundledItemsButtons.map((btn, index) => (
            <OButton key={index} {...btn} />
          ))}
          <div style={{ marginTop: '5px' }}>
            <OTable columns={bundledTableColumns} rows={bundledTableRows} pagination={false} />
          </div>
        </>
      ),
    },
    {
      key: 'tab-4',
      label: 'VENDOR PRODUCTS',
      children: (
        <>
          <p>Add vendor SKUs associated with this product.</p>
          <Row justify="space-between">
            <Col>
              {vendorProductsButtons.map((btn, index) => (
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
      ),
    },
  ];

  return (
    <OModal
      title={'NEW BUNDLE/KIT'}
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
          btnLabel: step == 3 ? 'Save' : 'Continue',
          onClick: step === 3 ? onSave : handleContiuneClick,
        },
      ]}
    >
      {step === 1 && (
        <div style={{ height: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2>Select Core Products to Bundle</h2>
          </div>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Searcy by Master SKU or Name..."
            onChange={handleProductSelect}
          >
            {productList.map((product, index) => (
              <Select.Option key={`product-${index}`} value={product.name}>
                {product.master_sku} - {product.name}
              </Select.Option>
            ))}
          </Select>
        </div>
      )}
      {step === 2 && (
        <div style={{ height: '300px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h2>Provide Quantity of each Bundled Product</h2>
          </div>
          <Table columns={columns} dataSource={tableData} />
        </div>
      )}
      {step === 3 && (
        <div>
          <Tabs defaultActiveKey="1" items={tabItems} />
        </div>
      )}
    </OModal>
  );
};

export default BundleKit;
