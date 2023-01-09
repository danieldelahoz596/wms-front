import type { RcFile, UploadProps } from 'antd/es/upload';
import {
  Button,
  Drawer,
  Input,
  message,
  Space,
  Switch,
  Table,
  Card,
  Row,
  Col,
  Dropdown,
  MenuProps,
  Menu,
  Modal,
  Select,
} from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';

const { Option } = Select;

export const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const fileUploadProps: UploadProps = {
  accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      console.log(info);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const _children: any[] = [];
for (let i = 10; i < 36; i++) {
  _children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

export const mselectChildren = _children;

export const productSelectOptions = [];
for (let i = 10; i < 36; i++) {
  productSelectOptions.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

export const sampleImages: UploadFile[] = [
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-3',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-4',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];
