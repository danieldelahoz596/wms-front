import { OModal } from '@/components/Globals/OModal';
import { fileUploadProps } from '@/utils/helpers/base';
import { modalType } from '@/utils/helpers/types';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Select, Upload } from 'antd';
import { useModel } from 'umi';
const { Option } = Select;

interface IImportVendorProductsByVendor {
  isOpen: boolean;
  onClose: () => void;
  onSave: (value: any) => void;
}

const ImportVendorProductsByVendor: React.FC<IImportVendorProductsByVendor> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  const { initialState } = useModel('@@initialState');

  return (
    <OModal
      title={'Vendor Product Import By Vendor'}
      width={550}
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
          btnLabel: 'Continue',
          onClick: () => onSave(modalType.ImportVendorProductsSummary),
        },
      ]}
    >
      <>
        <p>
          Batch import of Vendor products is done through the Microsoft Excel spreadsheet format.
        </p>
        <a
          className="download-link"
          href={`${BACKEND_URL}/template/template_for_vendor_product_import_by_vendor.xlsx`}
        >
          <u>Download the Excel Template for Vendor Product Import By Vendor</u>
        </a>
        <p>
          To associate your product Master SKUs with Vendor SKUs, simply use the provided template
          and upload the data for each vendor.
        </p>
        <p>
          <b>
            Vendor SKUs, are <i>not</i> case sensitive.
          </b>{' '}
          For example, <i>'sku123' </i>
          <b>is regarded the same as</b> <i>'SKU123'</i> by the system. The same applies for
          product's Master SKU's.
        </p>

        <Row style={{ display: 'flex', alignItems: 'center' }}>
          <Col span={12}>
            <Card title="Vendor">
              <Select
                placeholder="Select..."
                size="small"
                options={initialState?.initialData?.vendors.map((_item) => ({
                  value: _item.id,
                  label: _item.name,
                }))}
                style={{ width: '100%', marginBottom: 5 }}
              />
            </Card>
          </Col>
          <Col offset={4} span={8} style={{ textAlign: 'right' }}>
            <span>Excel File:</span>&nbsp;&nbsp;
            <Upload {...fileUploadProps}>
              <Button icon={<UploadOutlined />}>Select...</Button>
            </Upload>
          </Col>
        </Row>
        <div style={{ textAlign: 'right' }}>
          <span>Update existing SKUs if changes found in the Excel file? &nbsp;</span>
          <Select
            placeholder="Yes - Update existing SKUs and import new"
            defaultValue="update"
            size="small"
            options={[
              { value: 'update', label: 'Yes - Update existing SKUs and import new.' },
              { value: 'ignore', label: 'No - Ignore exisiting SKUs only import new.' },
            ]}
            style={{ marginTop: 10, width: 250, textAlign: 'left' }}
          />
        </div>
      </>
    </OModal>
  );
};

export default ImportVendorProductsByVendor;
