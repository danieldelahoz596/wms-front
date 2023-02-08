import type { IOButton } from '@/components/Globals/OButton';
import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import { Card } from 'antd';
import type { FC } from 'react';

const Method: FC = () => {
  const fulfillmentOptions = [
    {
      text: 'Direct/In-House',
      value: 'directInHouse',
    },
  ];
  const sourceOptions = [
    {
      text: 'Office',
      value: 'office',
    },
  ];

  const actionButtons: IOButton[] = [
    {
      btnText: 'Rate',
      type: 'primary',
      onClick: () => {},
    },
    {
      btnText: 'Save',
      type: 'primary',
      onClick: () => {},
    },
    {
      btnText: 'Queue',
      type: 'primary',
      onClick: () => {},
    },
    {
      btnText: 'Ship',
      type: 'primary',
      onClick: () => {},
    },
  ];

  const shippingInputFields = [
    {
      type: 'text',
      name: 'requrestProvider',
      defaultValue: 'UPS',
      onChange: () => {},
    },
    {
      type: 'text',
      name: 'service',
      onChange: () => {},
    },
    {
      type: 'text',
      name: 'package',
      onChange: () => {},
    },
    {
      type: 'text',
      name: 'confirmation',
      defaultValue: 'No Confirmation',
      onChange: () => {},
    },
    {
      type: 'text',
      name: 'insurance',
      defaultValue: 'No insureance provider',
      onChange: () => {},
    },
    {
      type: 'text',
      name: 'insuredValue',
      onChange: () => {},
    },
  ];

  return (
    <>
      <div style={{ borderBottom: '1px dashed #ccc', display: 'flex', gap: '0.1rem' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
          }}
        >
          <div>Fulfillment: </div>
          <div>Source: </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          <OInput
            type="select"
            name="fulfillment"
            defaultValue={'directInHouse'}
            options={fulfillmentOptions}
            onChange={() => {}}
            style={{ display: 'block', margin: '0.5rem 0' }}
          />
          <OInput
            type="select"
            name="source"
            defaultValue={'office'}
            options={sourceOptions}
            onChange={() => {}}
            style={{ display: 'block', margin: '0.5rem 0' }}
          />
        </div>
      </div>
      <div style={{ padding: '0.5rem 0' }}>
        {actionButtons.map((btn, index) => (
          <OButton key={index} {...btn} style={{ padding: '0.4rem 0.5rem' }} />
        ))}
        <div className="OModal" style={{ marginTop: '1rem' }}>
          <Card title="Shipping" style={{ marginRight: '.5rem' }}>
            <div style={{ borderBottom: '1px dashed #ccc', display: 'flex', gap: '0.1rem' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
              >
                <div>
                  Request
                  <br />
                  Provider:{' '}
                </div>
                <div>Service: </div>
                <div>Package: </div>
                <div>Confirm: </div>
                <div>Insurance: </div>
                <div>Insured Value: </div>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}
              >
                {shippingInputFields.map((item, index) => (
                  <OInput key={index} style={{ display: 'block', margin: '0.5rem 0' }} {...item} />
                ))}
              </div>
            </div>
          </Card>
        </div>
        <div className="OModal" style={{ marginTop: '1rem' }}>
          <Card title="Measurements" style={{ marginRight: '.5rem' }}>
            <div>
              <div>Weight:</div>
              <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
                <OInput type="number" name="" onChange={() => {}} />
                <span>lbs.</span>
                <OInput type="number" name="" onChange={() => {}} />
                <span>oz.</span>
              </div>
            </div>
            <div>
              <div>Dimensions(inches):</div>
              <div style={{ display: 'flex', gap: '0.2rem', alignItems: 'center' }}>
                <OInput type="number" name="" onChange={() => {}} />
                <span>X</span>
                <OInput type="number" name="" onChange={() => {}} />
                <span>X</span>
                <OInput type="number" name="" onChange={() => {}} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Method;
