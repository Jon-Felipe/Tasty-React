type StorageType = {
  key: string;
  value: string;
};

export const setToLocalStorage = ({ key, value }: StorageType) => {
  localStorage.setItem(key, value);
};
