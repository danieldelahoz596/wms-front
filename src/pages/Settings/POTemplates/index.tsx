import { FormattedMessage, useModel } from '@umijs/max';
import { Button, Card, Space, Table } from 'antd';
import { useMemo } from 'react';

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
  const { poTemplateList } = useModel('poTemplate');

  const TRows = useMemo(() => poTemplateList?.map((item) => ({ key: item.id, ...item })), [poTemplateList]);

  return (
    <Card style={{ width: '100%' }}>
      <Space size={HORIZONTAL_SPACE_SIZE}>
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

      <Table columns={TColumns} dataSource={TRows} style={{ marginTop: 10 }} />
    </Card>
  );
}
