import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OModal } from '@/components/Globals/OModal';
import { modalType } from '@/utils/helpers/types';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FormattedMessage } from '@umijs/max';
import { Space } from 'antd';

interface INewProductSelectTypeModal {
  isOpen: boolean;
  onClose: () => void;
  handleClick: (value: any) => void;
}

const NewProductSelectTypeModal: React.FC<INewProductSelectTypeModal> = ({ isOpen, onClose, handleClick }) => {
  const buttons: IOButton[] = [
    {
      btnText: <FormattedMessage id="component.button.coreProduct" />,
      onClick: () => handleClick(modalType.CoreProduct),
    },
    {
      btnText: <FormattedMessage id="component.button.bundleKit" />,
      onClick: () => handleClick(modalType.BundleKitProduct),
    },
    {
      btnText: <FormattedMessage id="component.button.productVariations" />,
      onClick: () => handleClick(modalType.ProductVariations),
    },
  ];

  return (
    <OModal
      title={<FormattedMessage id="pages.products.newProductSelectType.title" />}
      helpLink="/help/products/create/coreproduct"
      width={300}
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[]}
    >
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ textTransform: 'uppercase' }}>
          <FormattedMessage id="pages.products.newProductSelectType.selectType" />
        </h2>
        <Space direction="vertical" size={VERTICAL_SPACE_SIZE} style={{ display: 'flex' }}>
          {buttons.map((btn, index) => (
            <OButton key={index} btnText={btn.btnText} size="large" onClick={btn.onClick} style={{ width: '100%' }} />
          ))}
        </Space>
        <br />
        <a href="/help/products/create/coreproduct#difference_product_types" className="help-link" target="_blank">
          <span>
            <FormattedMessage id="pages.products.newProductSelectType.question" />
          </span>{' '}
          <QuestionCircleOutlined />
        </a>
      </div>
    </OModal>
  );
};

export default NewProductSelectTypeModal;
