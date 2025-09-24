import axios from 'axios';

export const userRegister = async ({ name, email, password }) => {
  return await axios.post(
    `${import.meta.env.VITE_API_PATH}/register`,
    { name, email, password },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );
};

export const userLogin = async ({ email, password }) => {
  return await axios.post(
    `${import.meta.env.VITE_API_PATH}/login`,
    { email, password },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  );
};

export const userLogout = async (token) => {
  return await axios.delete(
    `${import.meta.env.VITE_API_PATH}/logout`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
