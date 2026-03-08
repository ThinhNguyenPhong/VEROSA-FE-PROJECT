
import api from '../../config/api';

export const setPassword = async ({ token, newPassword, confirmPassword }) => {
  return api.post('/api/v1/auths/set-passwords', {
    token,
    newPassword,
    confirmPassword
  });
};
