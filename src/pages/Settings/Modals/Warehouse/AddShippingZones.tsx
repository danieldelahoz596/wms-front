import { OModal } from '@/components/Globals/OModal';
import { HomeOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import { FormattedMessage, Link, useModel } from '@umijs/max';
import { Card, Select } from 'antd';

interface IAddShippingZonesModal {
  isOpen: boolean;
  onClose: () => void;
}

const AddShippingZonesModal: React.FC<IAddShippingZonesModal> = ({ isOpen, onClose }) => {
  const { warehouseList } = useModel('warehouse');

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <OModal
      title={<FormattedMessage id="pages.settings.warehouses.inventoryAllocationShippingZones" />}
      helpLink=""
      width={600}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[]}
    >
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p>
            <FormattedMessage id="pages.settings.warehouses.inventoryAllocationShippingZones.description" />
          </p>
          <Link to={'#'} style={{ textDecoration: 'underline' }}>
            <FormattedMessage id="pages.settings.warehouses.inventoryAllocationShippingZones.question" />
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
            <Select mode="tags" size="small" style={{ width: '100%' }} onChange={handleChange} bordered={false} options={[]} />
          </Card>
        ))}
      </>
    </OModal>
  );
};

export default AddShippingZonesModal;
