import { Card, Row, Col, DatePicker, Form, Table, Space, Select, Input } from 'antd';
import React, { useState } from 'react';
import { QuestionCircleFilled, QuestionCircleOutlined } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/pages/Analytics/MainPanel/Modals/Export';
import tableExport from 'antd-table-export';

const InventoryValue: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const TColumns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: '',
    },
    {
      key: 'master_sku',
      dataIndex: 'master_sku',
      title: 'Master SKU',
    },
    {
      key: 'product_name',
      dataIndex: 'product_name',
      title: 'Product Name',
    },
    {
      key: 'vendor',
      dataIndex: 'vendor',
      title: 'Vendor',
    },
    {
      key: 'category',
      dataIndex: 'category',
      title: 'Category',
      align: 'right',
    },
    {
      key: 'brand',
      dataIndex: 'brand',
      title: 'Brand',
      align: 'right',
    },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      master_sku: 'IGG ME Single Pad',
      product_name: 'IGG ME Single Pad',
      vendor: 'Bird Stuff',
      category: '',
      brand: 'ABC Brand',
    },
    {
      key: 2,
      id: 2,
      master_sku: 'Bottle123',
      product_name: '00-S000-00',
      vendor: 'JSD',
      category: '',
      brand: 'Awesome Brand',
    },
    {
      key: 3,
      id: 3,
      master_sku: '01-0203',
      product_name: '01-0203',
      vendor: '',
      category: '',
      brand: 'Awesome Brand',
    },
    {
      key: 4,
      id: 4,
      master_sku: '01-0369',
      product_name: '01-0369',
      vendor: '',
      category: '',
      brand: 'Awesome Brand',
    },
    {
      key: 5,
      id: 5,
      master_sku: 'CL10-PVC',
      product_name: '1 MNPT Fittings',
      vendor: '',
      category: '',
      brand: 'Springwell',
    },
    {
      key: 6,
      id: 6,
      master_sku: '10000501',
      product_name: '10000501 Chandelier',
      vendor: '',
      category: '',
      brand: 'Urbanest',
    },
    {
      key: 7,
      id: 7,
      master_sku: 'Card Card',
      product_name: '12342',
      vendor: 'Bird Stuff',
      category: '273yd',
      brand: 'DL Jeans',
    },
    {
      key: 8,
      id: 8,
      master_sku: 'BetterSkinCoJar',
      product_name: '2 oz Jar',
      vendor: '',
      category: '',
      brand: '',
    },
    {
      key: 9,
      id: 9,
      master_sku: 'BetterSkinCoJarLid',
      product_name: '2 oz Jar Lid',
      vendor: '',
      category: '',
      brand: '',
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Inventory Value By Product</h2>
          </Col>
          <Col>
            <Space size={10} align="center">
              <h2 style={{ textTransform: 'uppercase' }}>This report is only available in utc</h2>
              <QuestionCircleFilled style={{ fontSize: 20 }} />
              <span onClick={() => setShowModal(true)}>
                <LaunchIcon style={{ fontSize: 20 }} />
              </span>
            </Space>
          </Col>
        </Row>

        <Card>
          <Form>
            <Row gutter={[20, 10]}>
              <Col span={6}>
                <Form.Item label="Product" style={{ margin: 0 }}>
                  <Input style={{ width: 200 }} size="small" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Warehouse" style={{ margin: 0 }}>
                  <Select size="small" defaultValue="37 Selected" style={{ width: '100%' }} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Vendor" style={{ margin: 0 }}>
                  <Select defaultValue="No vendor selected..." style={{ width: '100%' }} size="small" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Date" style={{ margin: 0 }}>
                  <DatePicker style={{ width: '100%' }} size="small" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Label" style={{ margin: 0 }}>
                  <Select defaultValue="No label selected..." style={{ width: '100%' }} size="small" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Category" style={{ margin: 0 }}>
                  <Select defaultValue="No category selected..." style={{ width: '100%' }} size="small" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Brand" style={{ margin: 0 }}>
                  <Select defaultValue="No brand selected..." style={{ width: '100%' }} size="small" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="Group By" style={{ margin: 0 }}>
                  <Select defaultValue="Product Group By" style={{ width: '80%', marginRight: 10 }} size="small" />
                  <QuestionCircleOutlined style={{ color: 'blue', fontSize: 15 }} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <Table columns={TColumns} dataSource={dataSource} pagination={{ hideOnSinglePage: true }} style={{ marginTop: 10 }} />
        </Card>
      </div>

      <ExportModal
        isOpen={showModal}
        title="Inventory Value By Product"
        helpLink="/analytics/accounting/inventoryvalue"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Inventory Value By Product', 'xlsx');
        }}
      />
    </>
  );
};

export default InventoryValue;
