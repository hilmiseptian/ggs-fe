import { useEffectOnce } from 'react-use';
import { useNavigate } from 'react-router-dom';
import { userLogout } from '../../lib/api/UserApi';
import { alertError, alertSuccess } from '../../lib/util/alert';
import { useAuth } from '../../lib/context/AuthContext';

export default function UserLogout() {
  const { token, setToken, setUserId, setUserName } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await userLogout(token);
      setToken('');
      await alertSuccess('Logged out successfully');
      navigate('/login');
    } catch (err) {
      await alertError(err.response?.data?.message || err.message);
    }
  }

  useEffectOnce(() => {
    handleLogout();
  });

  return null;
}
