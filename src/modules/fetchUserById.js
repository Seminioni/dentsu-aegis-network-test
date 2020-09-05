import { api } from '@/modules';

export const fetchUserById = id => {
  return api(`/users/${id}`);
}
