import { OModal } from '@/components/Globals/OModal';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Form, Upload, message } from 'antd';
import { useState, useEffect } from 'react';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { useModel } from '@umijs/max';
import type { INewItemModalData } from './Tabs/BasicInfo';

interface IAddCategoryModal extends INewItemModalData {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const AddCategoryModal: React.FC<IAddCategoryModal> = ({ isOpen, title, item, onClose, onSave }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [url, setUrl] = useState();
  const [form] = Form.useForm();
  const { createCategory, updateCategory } = useModel('category');
  const authData = JSON.parse(localStorage.getItem('authdata'));

  useEffect(() => {
    if (isOpen) {
      if (item) {
        form.setFieldsValue(item);
        setImageUrl(item.image_url);
        setUrl(item.image_url);
      } else {
        form.resetFields();
        setImageUrl(null);
        setUrl(null);
      }
    }
  }, [isOpen, form, item]);

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (imageData) => {
        setLoading(false);
        setImageUrl(imageData);
        setUrl(info.file.response);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleSave = () => {
    form.validateFields().then((values) => {
      const createData = imageUrl ? { ...values, image: url } : { ...values };
      if (item) {
        updateCategory({ ...item, ...createData }).then(() => {
          message.success('Successful to update a category');
          onSave();
        });
      } else {
        createCategory(createData).then(() => {
          message.success('Successful to create a category');
          onSave();
        });
      }
    });
  };

  return (
    <OModal
      title={title}
      helpLink=""
      width={600}
      centered
      isOpen={isOpen}
      handleCancel={onClose}
      buttons={[
        {
          key: 'back',
          type: 'default',
          btnLabel: 'Close',
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
      <>
        <Form layout="horizontal" labelCol={{ span: 6 }} labelAlign="left" form={form}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the cateogry name' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Image">
            <Upload
              name="file"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action={`${BACKEND_URL}/api/images`}
              headers={{ Authorization: `Bearer ${authData?.access_token}` }}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
      </>
    </OModal>
  );
};

export default AddCategoryModal;
