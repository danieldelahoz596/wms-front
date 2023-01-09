export const renderSearchQuery = (data = {}) => {
  return (
    '?' +
    Object.entries(data)
      .map((entry) => entry.join('='))
      .join('&')
  );
};

export const moveInArray = (arr, from, to) => {
  if (!Array.isArray(arr)) return arr;

  const item = arr.splice(from, 1);

  if (!item.length) return arr;

  arr.splice(to, 0, item[0]);

  return arr;
};
