import { Line } from '@ant-design/charts';
import { MenuOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Col, Dropdown, Row, Space, Select } from 'antd';
import { useRef, useState, useMemo } from 'react';
import { useReactToPrint } from 'react-to-print';

interface IYearOverYear {
  height: number;
}

const YearOverYear: React.FC<IYearOverYear> = ({ height }) => {
  const [yoyChartInstance, setYOYChartInstance] = useState(null);
  const [days, setDays] = useState(7);
  const yoyChartRef = useRef(null);
  const { editableProduct } = useModel('product');

  const yoyChartData = useMemo(() => {
    if (editableProduct) {
      const endDate = new Date();
      const startDate = new Date(endDate.getTime() - (days - 1) * 24 * 60 * 60 * 1000);
      let index = 0;

      while (
        index < editableProduct.orders.length &&
        startDate > new Date(Date.parse(editableProduct.orders[index].order.order_date))
      ) {
        index = index + 1;
      }

      const chartData = [];
      for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        let count = 0;
        while (
          index < editableProduct.orders.length &&
          d.toDateString() === new Date(Date.parse(editableProduct.orders[index].order.order_date)).toDateString()
        ) {
          count = count + 1;
          index = index + 1;
        }

        chartData.push({
          date: `${d.getMonth() + 1}/${d.getDate()}`,
          value: count,
        });
      }

      return chartData;
    }

    return [];
  }, [days, editableProduct]);

  const handleYOYChartPrint = useReactToPrint({
    content: () => yoyChartRef.current,
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Space>
          <Select
            options={[
              { value: 7, label: '1 week' },
              { value: 30, label: '30 Days' },
              { value: 60, label: '60 Days' },
            ]}
            style={{ width: '150px' }}
            size="small"
            value={days}
            onChange={(value) => setDays(value)}
          />
        </Space>
      </div>
      <Row justify="end" style={{ marginTop: 10 }}>
        <Col>
          <Dropdown.Button
            menu={{
              items: [
                {
                  key: 'print_chart',
                  label: 'Print Chart',
                  disabled: !yoyChartInstance,
                  onClick: () => handleYOYChartPrint(),
                },
                {
                  type: 'divider',
                },
                {
                  key: 'download_png',
                  label: 'Download PNG image',
                  disabled: !yoyChartInstance,
                  onClick: () => yoyChartInstance.downloadImage('Year-Over-Year-chart', 'image/png'),
                },
                {
                  key: 'download_jpeg',
                  label: 'Download JPEG image',
                  disabled: !yoyChartInstance,
                  onClick: () => yoyChartInstance.downloadImage('Year-Over-Year-chart', 'image/jpeg'),
                },
                {
                  key: 'download_pdf',
                  label: 'Download PDF document',
                  disabled: true,
                },
                {
                  key: 'download_svg',
                  label: 'Download SVG Vector image',
                  disabled: true,
                },
              ],
            }}
            placement="bottomRight"
            icon={<MenuOutlined />}
          />
        </Col>
      </Row>
      <div ref={yoyChartRef}>
        <Line
          data={yoyChartData}
          xField="date"
          yField="value"
          yAxis={{
            title: {
              text: 'Quantity',
              position: 'center',
            },
            min: -1,
            tickInterval: 1,
          }}
          interactions={[
            {
              type: 'element-selected',
            },
            {
              type: 'element-active',
            },
          ]}
          legend={{
            position: 'bottom',
          }}
          point={{
            shape: 'circle',
          }}
          height={height - 100}
          onReady={(chartInstance) => setYOYChartInstance(chartInstance)}
        />
      </div>
    </>
  );
};

export default YearOverYear;
