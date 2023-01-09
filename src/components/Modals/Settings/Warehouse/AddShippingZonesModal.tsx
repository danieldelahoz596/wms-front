import { OModal } from '@/components/Globals/OModal';
import { HomeOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import { Link, useModel } from '@umijs/max';
import { Card, Select } from 'antd';
const { Option } = Select;

export default function ({ isOpen, onSave, onClose }) {
  const { warehouseList } = useModel('warehouse');

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <OModal
      title="INVENTORY ALLOCATION SHIPPING ZONES"
      isOpen={isOpen}
      width={600}
      centered
      handleCancel={onClose}
      className="OModal"
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
            <Select mode="tags" style={{ width: '100%' }} onChange={handleChange} bordered={false}>
              <Option value="State 1">Alabama</Option>
              <Option value="State 2">Alabama</Option>
              <Option value="State 3">Alaska</Option>
              <Option value="">Alabama</Option>
              <Option value="">Alaska</Option>
              <Option value="">Arizona</Option>
              <Option value="">Arkansas</Option>
              <Option value="">California</Option>
              <Option value="">Colorado</Option>
              <Option value="">Connecticut</Option>
              <Option value="">Delaware</Option>
              <Option value="">Florida</Option>
              <Option value="">Georgia</Option>
              <Option value="">Hawaii</Option>
              <Option value="">Idaho</Option>
              <Option value="">IllinoisIndiana</Option>
              <Option value="">Iowa</Option>
              <Option value="">Kansas</Option>
              <Option value="">Kentucky</Option>
              <Option value="">Louisiana</Option>
              <Option value="">Maine</Option>
              <Option value="">Maryland</Option>
              <Option value="">Massachusetts</Option>
              <Option value="">Michigan</Option>
              <Option value="">Minnesota</Option>
              <Option value="">Mississippi</Option>
              <Option value="">Missouri</Option>
              <Option value="">Montana</Option>
              <Option value="">Nebraska</Option>
              <Option value="">Nevada</Option>
              <Option value="">New Hampshire</Option>
              <Option value="">New Jersey</Option>
              <Option value="">New Mexico</Option>
              <Option value="">New York</Option>
              <Option value="">North Carolina</Option>
              <Option value="">North Dakota</Option>
              <Option value="">Ohio</Option>
              <Option value="">Oklahoma</Option>
              <Option value="">Oregon</Option>
              <Option value="">PennsylvaniaRhode Island</Option>
              <Option value="">South Carolina</Option>
              <Option value="">South Dakota</Option>
              <Option value="">Tennessee</Option>
              <Option value="">Texas</Option>
              <Option value="">Utah</Option>
              <Option value="">Vermont</Option>
              <Option value="">Virginia</Option>
              <Option value="">Washington</Option>
              <Option value="">West Virginia</Option>
              <Option value="">Wisconsin</Option>
              <Option value="">Wyoming</Option>
            </Select>
          </Card>
        ))}
      </>
    </OModal>
  );
}
