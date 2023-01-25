import { renderSearchQuery } from '@/utils/common';
import httpClient from '@/utils/http-client';
import { useCallback, useState, useEffect } from 'react';

export default () => {
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showInactive, setShowInactive] = useState(true);

  const getUsers = useCallback((_query) => {
    const query = renderSearchQuery(_query);
    httpClient
      .get('/api/users' + query)
      .then((response) => setUserList(response.data))
      .catch((err) => console.log(err));
  }, []);

  const createUser = (data) => {
    return httpClient.post('/api/users', data).then((response) => {
      if (showInactive === response.data.is_active) setUserList((prev) => [...prev, response.data]);
    });
  };

  const updateUser = (_user) => {
    return httpClient.put('/api/users/' + _user.id, _user).then((response) => {
      if (showInactive === !!response.data.is_active) {
        setUserList(
          userList.map((_item) => (_item.id === response.data.id ? response.data : _item)),
        );
      } else {
        setUserList(userList.filter((_item) => _item.id !== response.data.id));
      }
      setSelectedUser(null);
    });
  };

  useEffect(() => {
    getUsers({ is_active: showInactive });
  }, [getUsers, showInactive]);

  return {
    userList,
    selectedUser,
    showInactive,
    setSelectedUser,
    setShowInactive,
    getUsers,
    createUser,
    updateUser,
  };
};
