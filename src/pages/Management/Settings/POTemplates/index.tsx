import { OTable } from "@/components/Globals/OTable"
import { Button } from "antd"

export default function() {

  const potemplateList = [
    {
      "id": 1,
      "name": "Default Template",
      "status": 1,
      "created": "05/15/2015",
      "modified": "05/15/2017"
    },
    {
      "id": 2,
      "name": "Sandi Test Received PO Quantity",
      "status": 1,
      "created": "06/08/2017",
      "modified": "03/03/2020"
    },
    {
      "id": 1,
      "name": "Sam's New Po Template",
      "status": 1,
      "created": "06/25/2017",
      "modified": "09/11/2019"
    },
    {
      "id": 1,
      "name": "Mecca Sample",
      "status": 1,
      "created": "08/23/2017",
      "modified": "09/10/2020"
    },
    {
      "id": 1,
      "name": "Default Template",
      "status": 1,
      "created": "08/23/2017",
      "modified": "08/23/2017"
    },
    {
      "id": 1,
      "name": "Default PO Template",
      "status": 1,
      "created": "01/07/2018",
      "modified": "01/07/2018"
    }
  ];

  return (
    <>
      <div className="w-full flex flex-column h-screen">
        <div className="horizon-content">
          <Button>
            New Template
          </Button>
          <Button>
            Edit
          </Button>
          <Button>
            Copy
          </Button>
          <Button>
            Delete
          </Button>

          <OTable
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Created',
                dataIndex: 'created',
                key: 'created',
              },
              {
                title: 'Modified',
                dataIndex: 'modified',
                key: 'modified',
              },
            ]} 
            rows={potemplateList}>
          </OTable>
        </div>
      </div>
    </>
  )
}