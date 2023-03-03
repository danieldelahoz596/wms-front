import { useState } from 'react';

export default () => {
  const [searchType, setSearchType] = useState(null);

  return { searchType, setSearchType };
};
