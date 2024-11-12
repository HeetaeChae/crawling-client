type ItemKey = 'token' | 'theme';

export const getLocalStorageItem = (itemKey: ItemKey) => {
  return window.localStorage.getItem(itemKey);
};

export const setLocalStorageItem = (itemKey: ItemKey, itemValue: string) => {
  window.localStorage.setItem(itemKey, itemValue);
};

export const removeLocalStorageItem = (itemKey: ItemKey) => {
  window.localStorage.removeItem(itemKey);
};
