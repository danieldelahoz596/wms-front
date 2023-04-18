import { useCallback, useState } from 'react';
import httpClient from '@/utils/http-client';
import type IChannel from '@/interfaces/IChannel';

export default () => {
  const [channelList, setChannelList] = useState<IChannel[]>([]);

  const getChannels = useCallback(() => {
    httpClient
      .get('/api/channels')
      .then(({ data }) => {
        setChannelList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    channelList,
    getChannels,
  };
};
