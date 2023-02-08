import { Card, List, Select } from 'antd';
import { useState } from 'react';
import { DropTarget } from 'react-drag-drop-container-typescript';

export default function MergeCustomer() {
  const [mergeData, setMergeData] = useState<string[]>([]);

  const onDrop = (data: any) => {
    const customer_name: string = data?.detail?.dragData;
    setMergeData([...mergeData, customer_name]);
  };

  return (
    <Card size="small" title="Merge Customer">
      <p>Master Customer</p>
      <Select
        showSearch
        placeholder="Select a person"
        size="small"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'tom', label: 'Tom' },
        ]}
      />
      <p>Child Customer</p>
      <DropTarget targetKey="merge" onDragEnter={onDrop}>
        <List
          bordered
          dataSource={mergeData}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </DropTarget>
    </Card>
  );
}
