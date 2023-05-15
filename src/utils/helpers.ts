type StorageType = {
  key: string;
  value: string;
};

export const setToLocalStorage = ({ key, value }: StorageType) => {
  localStorage.setItem(key, value);
};

export const getFromLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item!);
};

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
