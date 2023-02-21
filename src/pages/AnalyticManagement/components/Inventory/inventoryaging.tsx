import { Card, Row, Col, Form, Table, Space, Select, Button } from 'antd';
import React, { useState } from 'react';
import { PlayCircleOutlined, QuestionCircleFilled } from '@ant-design/icons';
import LaunchIcon from '@/utils/icons/launch';
import ExportModal from '@/pages/AnalyticManagement/components/Modals/Export';
import tableExport from 'antd-table-export';

const InventoryAging: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const TColumns = [
    {
      key: 'id',
      dataIndex: 'id',
      title: '',
    },
    {
      key: 'product',
      dataIndex: 'product',
      title: 'Product Name',
    },
    {
      key: 'master_sku',
      dataIndex: 'master_sku',
      title: 'Master SKU',
    },
    {
      key: 'warehouse',
      dataIndex: 'warehouse',
      title: 'Warehouse',
      align: 'center',
    },
    {
      key: 'brand',
      dataIndex: 'brand',
      title: 'Brand',
      align: 'center',
    },
    {
      key: 'bu',
      title: 'BU',
      render: () => <></>,
    },
    {
      key: 'first_quarter_qty',
      dataIndex: 'first_quarter_qty',
      title: '<3M Qty',
      align: 'center',
    },
    {
      key: 'first_quarter_value',
      dataIndex: 'first_quarter_value',
      title: '<3M Value',
      align: 'center',
      render: (value) => <>${`${Number(value).toFixed(2)}`}</>,
    },
    {
      key: 'second_quarter_qty',
      dataIndex: 'second_quarter_qty',
      title: '3-6M Qty',
      align: 'center',
    },
    {
      key: 'second_quarter_value',
      dataIndex: 'second_quarter_value',
      title: '3-6M Value',
      align: 'center',
      render: (value) => <>${`${Number(value).toFixed(2)}`}</>,
    },
    {
      key: 'third_quarter_qty',
      dataIndex: 'third_quarter_qty',
      title: '6-9M Qty',
      align: 'center',
    },
    {
      key: 'third_quarter_value',
      dataIndex: 'third_quarter_value',
      title: '6-9M Value',
      align: 'center',
      render: (value) => <>${`${Number(value).toFixed(2)}`}</>,
    },
    // {
    //   key: 'fourth_quarter_qty',
    //   dataIndex: 'fourth_quarter_qty',
    //   title: '9-12M Qty',
    //   align: 'center',
    // },
    // {
    //   key: 'fourth_quarter_value',
    //   dataIndex: 'fourth_quarter_value',
    //   title: '9-12M Qty',
    //   align: 'center',
    // },
  ];

  const dataSource = [
    {
      key: 1,
      id: 1,
      product: 'water bottler',
      master_sku: '1234',
      warehouse: "DL's WHSE",
      brand: 'rutgers',
      first_quarter_qty: 10,
      first_quarter_value: 110.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 40,
      third_quarter_value: 400,
    },
    {
      key: 2,
      id: 2,
      product: 'Sterling Silver Flg...',
      master_sku: '10063487',
      warehouse: "DL's WHSE",
      brand: 'YoYO',
      first_quarter_qty: 0,
      first_quarter_value: 0.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 0,
      third_quarter_value: 0,
    },
    {
      key: 3,
      id: 3,
      product: 'Sterling Silver St...',
      master_sku: '10063487',
      warehouse: "DL's WHSE",
      brand: 'YoYO',
      first_quarter_qty: 30,
      first_quarter_value: 1980.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 0,
      third_quarter_value: 0,
    },
    {
      key: 4,
      id: 4,
      product: '2 Pink Cocktail R...',
      master_sku: '19789458',
      warehouse: "DL's WHSE",
      brand: '',
      first_quarter_qty: 0,
      first_quarter_value: 0.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 0,
      third_quarter_value: 0,
    },
    {
      key: 5,
      id: 5,
      product: 'Hats',
      master_sku: '1230',
      warehouse: "DL's WHSE",
      brand: '',
      first_quarter_qty: 0,
      first_quarter_value: 0.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 0,
      third_quarter_value: 0,
    },
    {
      key: 6,
      id: 6,
      product: 'Pack of pencils',
      master_sku: 'Pencil',
      warehouse: "DL's WHSE",
      brand: 'Paper Hear...',
      first_quarter_qty: 0,
      first_quarter_value: 0.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 0,
      third_quarter_value: 0,
    },
    {
      key: 7,
      id: 7,
      product: 'Bundle1',
      master_sku: 'Cluster',
      warehouse: "DL's WHSE",
      brand: 'Training',
      first_quarter_qty: 0,
      first_quarter_value: 0.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 0,
      third_quarter_value: 0,
    },
    {
      key: 8,
      id: 8,
      product: 'Shoes Pink',
      master_sku: 'Shoes-1234-1',
      warehouse: "DL's WHSE",
      brand: 'asdf.old',
      first_quarter_qty: 25,
      first_quarter_value: 100.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 0,
      third_quarter_value: 0,
    },
    {
      key: 9,
      id: 9,
      product: 'Bjj Belt White K1',
      master_sku: '1201',
      warehouse: "DL's WHSE",
      brand: 'Sanabul',
      first_quarter_qty: 0,
      first_quarter_value: 0.0,
      second_quarter_qty: 0,
      second_quarter_value: 0,
      third_quarter_qty: 0,
      third_quarter_value: 0,
    },
  ];

  return (
    <>
      <div style={{ margin: '10px' }}>
        <Row justify="space-between" style={{ marginTop: 10 }}>
          <Col>
            <h2>Inventory Aging</h2>
          </Col>
          <Col>
            <Space size={10} align="center">
              <h2 style={{ textTransform: 'uppercase' }}>
                This report is only available|Aged Inventory only apples To inventory received after
                4/26/2018.
              </h2>
              <QuestionCircleFilled style={{ fontSize: 20 }} />
              <span onClick={() => setShowModal(true)}>
                <LaunchIcon style={{ fontSize: 20 }} />
              </span>
            </Space>
          </Col>
        </Row>

        <Card>
          <Form layout="vertical">
            <Row style={{ width: '100%' }} align="middle">
              <Col flex="auto">
                <Row>
                  <Col span={6}>
                    <Form.Item label="Warehouse" style={{ margin: 0 }}>
                      <Select defaultValue="DL's WHSE" style={{ width: 200 }} size="small" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Brand" style={{ margin: 0 }}>
                      <Select
                        defaultValue="No brands selected..."
                        style={{ width: 200 }}
                        size="small"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Buyer" style={{ margin: 0 }}>
                      <Select
                        defaultValue="No buyers selected"
                        style={{ width: 200 }}
                        size="small"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Product" style={{ margin: 0 }}>
                      <Select
                        defaultValue="No products selected"
                        style={{ width: 200 }}
                        size="small"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col flex="100px">
                <Button>
                  Search
                  <PlayCircleOutlined />
                </Button>
              </Col>
            </Row>
          </Form>
          <Table
            columns={TColumns}
            dataSource={dataSource}
            pagination={{ hideOnSinglePage: true }}
            style={{ marginTop: 10 }}
          />
        </Card>
      </div>

      <ExportModal
        isOpen={showModal}
        title="Inventory Aging"
        helpLink="/analytics/inventory/inventoryaging"
        onClose={() => setShowModal(false)}
        onSave={() => {
          setShowModal(false);
          const exportInstance = new tableExport(dataSource, TColumns);
          exportInstance.download('Inventory Aging', 'xlsx');
        }}
      />
    </>
  );
};

export default InventoryAging;
