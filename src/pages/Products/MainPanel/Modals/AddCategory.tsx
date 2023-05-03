import { OModal } from '@/components/Globals/OModal';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Input, Form, Upload, message } from 'antd';
import { useState } from 'react';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

interface IAddCategoryModal {
  isOpen: boolean;
  title: string;
  items: any[];
  setItems: (value: any) => void;
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

const AddCategoryModal: React.FC<IAddCategoryModal> = ({ isOpen, title, items, setItems, onClose, onSave }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const authData = JSON.parse(localStorage.getItem('authdata'));

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  // const handleAdd = () => {
  //   setItems((prev) => [...prev, { id: uuidv4(), name }]);
  //   setName(null);
  // };

  // const handleDelete = (id) => {
  //   setItems((prev) => prev.filter((item) => item.id !== id));
  // };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

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
          onClick: onSave,
        },
      ]}
    >
      <>
        {/* <Input
          placeholder="Enter a valid name"
          addonAfter={<OButton btnText="Add" style={{ height: 30 }} onClick={() => handleAdd()} />}
          value={name}
          onChange={(e) => setName(e.target.value)}
          onPressEnter={() => handleAdd()}
        /> */}
        <Form layout="horizontal" labelCol={{ span: 6 }} labelAlign="left">
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Image">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action={`${BACKEND_URL}/api/products/upload-image`}
              headers={{ Authorization: `Bearer ${authData?.access_token}` }}
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
          </Form.Item>
        </Form>
        {/* <List
          dataSource={items}
          renderItem={(item) => (
            <List.Item
              actions={[<CloseOutlined key="list-edit" onClick={() => handleDelete(item.id)} style={{ color: 'blue' }} />]}
            >
              <List.Item.Meta title={<>{item.name}</>} />
            </List.Item>
          )}
          style={{
            height: 400,
            overflow: 'auto',
            padding: '0 16px',
            border: '1px solid rgba(140, 140, 140, 0.35)',
          }}
        /> */}
      </>
    </OModal>
  );
};

export default AddCategoryModal;
