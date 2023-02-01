import { OInput } from '@/components/Globals/OInput';
import { Card, Form } from 'antd';

interface IRecipient {
  form: any;
}

const Recipient: React.FC<IRecipient> = ({ form }) => {
  const formInputs = [
    {
      type: 'text',
      name: 'name',
      label: 'Name',
      placeholder: 'Required',
    },
    {
      type: 'text',
      name: 'company',
      label: 'Company',
    },
    {
      type: 'text',
      name: 'address',
      label: 'Address',
      placeholder: 'Required',
    },
    {
      type: 'text',
      label: ' ',
      name: 'address2',
      colon: false,
    },
    {
      type: 'text',
      label: ' ',
      name: 'address3',
      colon: false,
    },
    {
      type: 'text',
      name: 'city',
      label: 'City',
      placeholder: 'Required',
    },
    [
      {
        type: 'select',
        label: 'State, Zip',
        name: 'state',
        placeholder: 'Select..',
        options: [
          {
            value: 'lucy',
            label: 'lucky',
          },
        ],
      },
      {
        type: 'text',
        name: 'zip',
        placeholder: 'Required',
      },
    ],
    {
      type: 'select',
      name: 'Country',
      label: 'Country',
      placeholder: 'Select..',
      options: [
        {
          value: 'lucy',
          label: 'lucky',
        },
      ],
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Phone',
    },
    {
      type: 'text',
      name: 'email',
      label: 'E-Mail',
    },
  ];

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <Card title="Recipient">
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        {formInputs.map((item, index) =>
          Array.isArray(item) ? (
            <Form.Item label={item[0]?.label} key={`item-${index}`}>
              {item.map((groupItem, groupIndex) => (
                <Form.Item
                  key={`groupitem-${groupIndex}`}
                  name={groupItem.name}
                  style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
                >
                  <OInput placeholder={groupItem.placeholder} />
                </Form.Item>
              ))}
            </Form.Item>
          ) : (
            <Form.Item
              key={`item-${index}`}
              label={item.label}
              name={item.name}
              style={{ justifyContent: 'flex-end' }}
              colon={item.colon}
            >
              <OInput placeholder={item.placeholder} />
            </Form.Item>
          ),
        )}
      </Form>
    </Card>
  );
};

export default Recipient;
