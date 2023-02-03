import { OModal } from '@/components/Globals/OModal';
import { useModel } from '@umijs/max';
import { Button, Col, Row, Select, Form } from 'antd';
import { useState } from 'react';
import CustomBundleKitExportSettings from './CustomBundleKitExportSettings';

interface ICustomBundleKitExport {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const CustomBundleKitExport: React.FC<ICustomBundleKitExport> = ({ isOpen, onClose, onSave }) => {
  const [showModal, setShowModal] = useState(false);
  const { customBundleKitExportSettings } = useModel('customBundleKitExportSettings');

  return (
    <OModal
      title={'Custom Bundle/Kit Export'}
      width={600}
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
          btnLabel: 'Export Bundles/Kits',
          onClick: () => onSave(),
        },
      ]}
    >
      <>
        <p>
          Skubana allows you to export any of the available product information in CSV, Excel, or
          plain text format.
        </p>
        <p>
          {`To export the selected products, select one of your pre-configured export settings and
          click the 'Export Bundles/Kits' button. If you haven't created any export settings yet,
          clik on the 'Configure Settings' button to set up which product data to export, the
          arrangement of columns and the file format.`}
        </p>
        <Row align="middle" gutter={20} style={{ marginTop: 30 }}>
          <Col offset={4} span={10}>
            <Form>
              <Form.Item label="Export Settings" style={{ marginBottom: 0 }}>
                <Select
                  defaultValue="Select..."
                  style={{ width: '100%' }}
                  size="small"
                  options={customBundleKitExportSettings.map((item) => ({
                    value: item.id,
                    label: item.settingName,
                  }))}
                />
              </Form.Item>
            </Form>
          </Col>
          <Col span={10}>
            <Button style={{ width: '100%' }} onClick={() => setShowModal(true)}>
              Configure Settings
            </Button>
          </Col>
        </Row>

        <CustomBundleKitExportSettings isOpen={showModal} onClose={() => setShowModal(false)} />
      </>
    </OModal>
  );
};

export default CustomBundleKitExport;
