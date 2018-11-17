export const getList = async () => {
  try {
    const response = await fetch("http://challenge.getmore.com.br/stores/");
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getStore = async id => {
  try {
    const response = await fetch(
      `http://challenge.getmore.com.br/stores/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return {};
  }
};
