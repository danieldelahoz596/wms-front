import { OTable } from "@/components/Globals/OTable";
import NewUserModal from "@/components/Modals/Settings/UserAdministration/NewUserModal";
import { renderSearchQuery } from "@/utils/common";
import { modalType } from "@/utils/helpers/types";
import { useModel } from "@umijs/max";
import { Button } from "antd";
import { useEffect, useState } from "react";

export default function () {

  const vendorList = [
    {
      "id": 1,
      "name": "Support",
      "phonenumber": "1234567890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 2,
      "name": "Arnaud Bouliann",
      "phonenumber": "98765443210",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 3,
      "name": "Chad Rubin",
      "phonenumber": "6543219870",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 4,
      "name": "Abdullah Wali",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 5,
      "name": "Arnaud Bouliann",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 6,
      "name": "Cindy Yuk",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 7,
      "name": "Emily Garcia",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 8,
      "name": "Sand",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 9,
      "name": "Alex Mcvarish",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 10,
      "name": "Jennifer Malise",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 11,
      "name": "Samantha Potter",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 12,
      "name": "Gareth Roberts",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 13,
      "name": "Gina Tirelli",
      "phonenumber": "7564532890",
      "status": 1,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 14,
      "name": "Gina Tirelli",
      "phonenumber": "7564532890",
      "status": 0,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
    {
      "id": 15,
      "name": "Gina Tirelli",
      "phonenumber": "7564532890",
      "status": 0,
      "created": "03/24/2015",
      "lastlogin": "04/12/2018"
    },
  ];

  const [modalOpen, setModal] = useState('');

  const {
    getVendorList,
    setSelectedVendor,
    setEditableVendor,
    deleteVendor,
    setVendorList,
  } = useModel('vendor');
  
  const vendorListRows = vendorList
    ?.filter((_item) => _item.status == !showInactive)
    .map((_item) => ({
      key: _item.id,
      name: <div style={{ width: '10rem' }}>{_item.name.toUpperCase()}</div>,
      phonenumber: _item.phonenumber,
      status: _item.status ? 'ACTIVE' : 'INACTIVE',
      created: _item.created,
      lastlogin: _item.lastlogin,
    }));

  const [showInactive, setShowInactive] = useState(false);

  useEffect(() => {
    const queryString = renderSearchQuery({
      status: showInactive ? false : true,
    });

    getVendorList(queryString);
  }, [showInactive, getVendorList]);

  return (
    <>
      <div className="w-full flex flex-column h-screen">
        <div className="horizon-content">
          <Button
            onClick={() => {
              setModal(modalType.New)
            }}
          >
            New User
          </Button>
          <Button>
            Edit User
          </Button>
          <Button>
            Deactivate / Activate
          </Button>
          <Button>
            History
          </Button>
          <Button
            onClick={() => {
              setShowInactive((prev) => !prev);
              setSelectedVendor(null);
              setVendorList([]);
            }}
          >
            {showInactive ? 'SHOW ACTIVE' : 'SHOW INACTIVE'}
          </Button>
          <OTable
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
              },
              {
                title: 'Phone Number',
                dataIndex: 'phonenumber',
                key: 'phonenumber',
              },
              {
                title: 'Status',
                dataIndex: 'status',
                key: 'status',
              },
              {
                title: 'Created',
                dataIndex: 'created',
                key: 'created',
              },
              {
                title: 'Last Login',
                dataIndex: 'lastlogin',
                key: 'lastlogin',
              },
            ]} 
            rows={vendorListRows}>

          </OTable>
        </div>
      </div>

      {/* Modals */}
      <NewUserModal
        isOpen={modalOpen === modalType.New}
        onSave={() => setModal(modalType.Close)}
        onClose={() => setModal(modalType.Close)}
      />
    </>
  );
}