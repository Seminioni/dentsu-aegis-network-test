import { api } from '@/modules/api.js';

export const fetchUserById = id => {
  return api(`/users/${id}`);
}
