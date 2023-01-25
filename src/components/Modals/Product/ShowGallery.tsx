import React from 'react';
import { Image } from 'antd';
import { OModal } from '@/components/Globals/OModal';

interface IShowGalleryModal {
  isOpen: boolean;
  onClose: () => void;
}

const ShowGalleryModal: React.FC<IShowGalleryModal> = ({ isOpen, onClose }) => {
  return (
    <OModal
      title="Product Gallery"
      width={1000}
      className="OModal"
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'CLOSE',
          onClick: onClose,
        },
      ]}
    >
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </OModal>
  );
};

export default ShowGalleryModal;
