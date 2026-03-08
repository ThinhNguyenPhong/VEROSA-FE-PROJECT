import api from '../../config/api';

export const register = async (data) => {
  // data: { firstName, lastName, phoneNumber, dateOfBirth, username, email }
  return api.post('/api/v1/auths/registers', data);
}; 