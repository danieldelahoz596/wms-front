import { OModal } from '@/components/Globals/OModal';
import { getBase64, mselectChildren, sampleImages } from '@/utils/helpers/base';
import { modalType } from '@/utils/helpers/types';
import { PlusOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd';
import { Modal } from 'antd';
import { Col, Input, Row, Select, Tabs, Upload } from 'antd';
import type { UploadProps } from 'antd/es/upload';
import type { RcFile } from 'antd/lib/upload';
import { useState } from 'react';
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

interface IEditProduct {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const EditProduct: React.FC<IEditProduct> = ({ isOpen, onClose, onSave }) => {
  const handleSave = () => onSave();
  const [fileList, setFileList] = useState<UploadFile[]>(sampleImages);
  const [previewImage, setPreviewImage] = useState('');
  const [modalOpen, setModal] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }

    setPreviewImage(file.url || (file.preview as string));
    setModal(modalType.Preview);
    setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
  };

  const handleChangeImage: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setFileList(newFileList);

  const handleCancel = () => setModal(modalType.Close);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <OModal
      title={'Edit Product'}
      width={800}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Cancel',
          onClick: onClose,
        },
        {
          key: 'submit',
          type: 'primary',
          btnLabel: 'Save',
          onClick: handleSave,
        },
      ]}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Basic Info" key="1">
          <Row className="pb-3">
            <Col span={4}>Master Sku:</Col>
            <Col span={20}>
              <Input placeholder="Master Sku" />
            </Col>
          </Row>
          <Row className="pb-3">
            <Col span={4}>Name:</Col>
            <Col span={20}>
              <Input placeholder="Name" />
            </Col>
          </Row>
          <Row className="pb-3">
            <Col span={4}>Buy | Band:</Col>
            <Col span={10}>
              <Select defaultValue="lucy" style={{ width: '100%' }}>
                <Option value="lucy">Lucy</Option>
              </Select>
            </Col>
            <Col span={10}>
              <Select defaultValue="lucy" style={{ width: '100%' }}>
                <Option value="lucy">Lucy</Option>
              </Select>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col span={4}>Categories:</Col>
            <Col span={20}>
              <Select mode="tags" placeholder="Please select" style={{ width: '100%' }}>
                {mselectChildren}
              </Select>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col span={4}>Labels:</Col>
            <Col span={20}>
              <Select mode="tags" placeholder="Please select" style={{ width: '100%' }}>
                {mselectChildren}
              </Select>
            </Col>
          </Row>
          <Row className="pb-3">
            <Col span={4}>Description:</Col>
            <Col span={20}>
              <TextArea rows={4} />
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Gallery" key="2">
          <>
            <p>
              Manage images by adding, removing and/or dragging each image to create an ordered
              gallery.
            </p>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChangeImage}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={modalOpen == modalType.Preview}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </>
        </TabPane>
      </Tabs>
    </OModal>
  );
};

export default EditProduct;
