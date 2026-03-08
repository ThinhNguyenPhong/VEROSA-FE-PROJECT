import api from '../../config/api';

export const login = async (data) => {
  // data: { usernameOrEmail, password }
  return api.post('/api/v1/auths/logins', data);
}; 