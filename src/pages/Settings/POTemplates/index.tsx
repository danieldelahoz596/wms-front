import { OButton } from '@/components/Globals/OButton';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Space, Table } from 'antd';
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
    <>
      <div className="title-row">
        <h1 className="page-title">P.O. Templates</h1>
      </div>
      <Card className="content-box">
        <Space size={HORIZONTAL_SPACE_SIZE} className="button-row">
          <OButton btnText={<FormattedMessage id="component.button.new-template" />} />
          <OButton btnText={<FormattedMessage id="component.button.edit" />} />
          <OButton btnText={<FormattedMessage id="component.button.copy" />} />
          <OButton btnText={<FormattedMessage id="component.button.delete" />} />
        </Space>
        <Table columns={TColumns} dataSource={TRows} style={{ marginTop: 10 }} />
      </Card>
    </>
  );
}
