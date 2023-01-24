import { FormattedMessage } from '@umijs/max';
import { Button, Card, Space, Table } from 'antd';

const potemplateList = [
  {
    id: 1,
    name: 'Default Template',
    status: 1,
    created: '05/15/2015',
    modified: '05/15/2017',
  },
  {
    id: 2,
    name: 'Sandi Test Received PO Quantity',
    status: 1,
    created: '06/08/2017',
    modified: '03/03/2020',
  },
  {
    id: 1,
    name: "Sam's New Po Template",
    status: 1,
    created: '06/25/2017',
    modified: '09/11/2019',
  },
  {
    id: 1,
    name: 'Mecca Sample',
    status: 1,
    created: '08/23/2017',
    modified: '09/10/2020',
  },
  {
    id: 1,
    name: 'Default Template',
    status: 1,
    created: '08/23/2017',
    modified: '08/23/2017',
  },
  {
    id: 1,
    name: 'Default PO Template',
    status: 1,
    created: '01/07/2018',
    modified: '01/07/2018',
  },
];

const TColumns = [
  {
    title: <FormattedMessage id="component.table.column.name" />,
    dataIndex: 'name',
    key: 'name',
    width: '80%',
  },
  {
    title: <FormattedMessage id="component.table.column.created" />,
    dataIndex: 'created',
    key: 'created',
  },
  {
    title: <FormattedMessage id="component.table.column.modified" />,
    dataIndex: 'modified',
    key: 'modified',
  },
];

export default function () {
  return (
    <Card style={{ width: '100%' }}>
      <Space size={5}>
        <Button>
          <FormattedMessage id="component.button.new-template" />
        </Button>
        <Button>
          <FormattedMessage id="component.button.edit" />
        </Button>
        <Button>
          <FormattedMessage id="component.button.copy" />
        </Button>
        <Button>
          <FormattedMessage id="component.button.delete" />
        </Button>
      </Space>

      <Table columns={TColumns} dataSource={potemplateList} style={{ marginTop: 10 }} />
    </Card>
  );
}
