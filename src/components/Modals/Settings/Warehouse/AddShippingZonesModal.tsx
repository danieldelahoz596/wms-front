import { OModal } from '@/components/Globals/OModal';
import { HomeOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import { Link, useModel } from '@umijs/max';
import { Card, Select } from 'antd';

export default function ({ isOpen, onSave, onClose }) {
  const { warehouseList } = useModel('warehouse');

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <OModal
      title="Inventory Allocation Shipping Zones"
      helpLink=""
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[]}
    >
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>
            Click and drag each U.S state or territory to the desired warehouse that will service
            it.
          </p>
          <Link to={'#'} style={{ textDecoration: 'underline' }}>
            What's this
            <QuestionCircleTwoTone />
          </Link>
        </div>
        {warehouseList.map((_item) => (
          <Card
            key={_item.id}
            title={
              <div>
                <span
                  style={{
                    background: `${_item.id_color ?? '#ccc'}`,
                    padding: '0.3rem 0.8rem',
                    borderRadius: '0.5rem',
                    marginRight: '0.1rem',
                  }}
                >
                  <HomeOutlined />
                </span>
                <span style={{ textTransform: 'uppercase' }}>{_item.name}</span>
              </div>
            }
            style={{ marginTop: '1.5rem', borderColor: `${_item.id_color}` }}
          >
            <Select
              mode="tags"
              size="small"
              style={{ width: '100%' }}
              onChange={handleChange}
              bordered={false}
              options={[]}
            />
          </Card>
        ))}
      </>
    </OModal>
  );
}
