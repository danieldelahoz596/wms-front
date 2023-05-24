import { OButton } from '@/components/Globals/OButton';
import { OInput } from '@/components/Globals/OInput';
import httpClient from '@/utils/http-client';
import { FormattedMessage, useModel } from '@umijs/max';
import { Card, Space } from 'antd';
import qs from 'qs';
import { useState, useMemo } from 'react';

const initailState = {
  phone_number: '',
  name: '',
  city: '',
  state: '',
};

export default function SidePanel() {
  const [searchQuery, setSearchQuery] = useState(initailState);
  const { setCustomerList, setSelectedCustomer } = useModel('customer');
  const { stateList } = useModel('states');
  const [cityOptions, setCityOptions] = useState<{ text: string; value: string | number }[]>([]);

  const stateOptions = useMemo(() => stateList.map((state) => ({ value: state.id, text: state.name })), [stateList]);

  const handleSearchQueryChange = (name: string, value: string) => {
    if (name === 'state') {
      if (parseInt(value) === 0) setCityOptions([]);
      else
        setCityOptions(
          stateList.find((item) => item.id === parseInt(value)).cities.map((city) => ({ text: city.name, value: city.id })),
        );
    }
    setSearchQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  const inputFields = useMemo(
    () => [
      {
        type: 'text',
        name: 'phone_number',
        label: <FormattedMessage id="component.form.label.phoneNumber" />,
      },
      {
        type: 'text',
        name: 'name',
        label: <FormattedMessage id="component.form.label.name" />,
      },
      {
        type: 'select',
        name: 'state',
        options: stateOptions,
        label: <FormattedMessage id="component.form.label.stateProvince" />,
      },
      {
        type: 'select',
        name: 'city',
        label: <FormattedMessage id="component.form.label.city" />,
        options: cityOptions,
      },
    ],
    [cityOptions, stateOptions],
  );

  const onSearch = (query) => {
    httpClient
      .get('/api/customers?' + qs.stringify(query))
      .then((response) => {
        setSelectedCustomer(null);
        setCustomerList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearSearchQuery = () => {
    setSearchQuery(initailState);
    onSearch(initailState);
  };

  return (
    <div className="left-panel">
      <div className="title-row">
        <h1>
          <FormattedMessage id="pages.customers.leftPanel.title" />
        </h1>
      </div>
      <Card>
        <Space direction="vertical" size={VERTICAL_SPACE_SIZE} style={{ display: 'flex' }}>
          {inputFields.map((_inputField, _index) => (
            <div key={_index}>
              <span>{_inputField.label}:</span>
              <OInput
                type={_inputField.type}
                name={_inputField.name}
                value={searchQuery[_inputField.name]}
                options={_inputField.options}
                onChange={handleSearchQueryChange}
              />
            </div>
          ))}
        </Space>
        <div className="search-button-row space-between">
          <OButton btnText={<FormattedMessage id="component.button.clear" />} onClick={clearSearchQuery} />
          <OButton btnText={<FormattedMessage id="component.button.search" />} onClick={() => onSearch(searchQuery)} />
        </div>
      </Card>
    </div>
  );
}
