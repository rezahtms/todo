
// Creating LocalStorage Custom Hook
export const useLocalStorage = (key: string) => {
  const isClient = typeof window !== 'undefined';

  const getItems = () => {
    try {
      if (isClient) {
        const getItem = window.localStorage.getItem(key);
        return getItem ? JSON.parse(getItem) : [];
      }
    } catch (error) {
      console.error(error);
    }
  };

  const setItems = (value: any) => {
    try {
      if (isClient) {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { getItems, setItems };
};
