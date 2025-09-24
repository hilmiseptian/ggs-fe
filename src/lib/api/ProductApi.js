import axios from "axios";

export const productLists = async (token, { page = 1 } = {}) => {
  return await axios.get(`${import.meta.env.VITE_API_PATH}/products`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
    params: {
      page, // Laravel pagination param
    },
  });
};

export const productDetail = async (token, { id }) => {
  return await axios.get(`${import.meta.env.VITE_API_PATH}/products/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  });
};

export const productCreate = async (token, formData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_PATH}/products`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    }
  );
};


export const productUpdate = async (token, id, formData) => {
  return await axios.post(
    `${import.meta.env.VITE_API_PATH}/products/${id}`,
    formData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }
  );
};


export const productDelete = async (token, { id }) => {
  return await axios.delete(`${import.meta.env.VITE_API_PATH}/products/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};

