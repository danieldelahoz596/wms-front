import { useState } from 'react';
import { OTable } from '@/components/Globals/OTable';
import { Card, Row, Col } from 'antd';
import { Table2DemoColumns, Table2StaticData } from '@/data';
import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';

const Details: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<any[]>([]);

  const buttonStyle = {
    marginBottom: '10px',
    width: '80%',
  };

  const actionButtons: IOButton[] = [
    {
      type: 'primary',
      onClick: () => console.log('Add New'),
      style: buttonStyle,
      btnText: 'Add',
    },
    {
      type: 'primary',
      disabled: true,
      onClick: () => console.log('Edit'),
      style: buttonStyle,
      btnText: 'Edit',
    },
    {
      type: 'primary',
      disabled: true,
      onClick: () => console.log('Remove'),
      style: buttonStyle,
      btnText: 'Remove',
    },
  ];

  return (
    <Row>
      <Col span={8}>
        <Card size="small" title="PO Details">
          <Row>
            <Col span={12}>&nbsp;</Col>
          </Row>
          <OTable
            columns={Table2DemoColumns}
            rows={Table2StaticData}
            type="checkbox"
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
          />
        </Card>
      </Col>
      <Col span={2}>
        <Card size="small">
          {actionButtons.map((btn, index) => (
            <OButton key={index} type={btn.type} onClick={btn.onClick} btnText={btn.btnText} />
          ))}
        </Card>
      </Col>
    </Row>
  );
};

export default Details;
