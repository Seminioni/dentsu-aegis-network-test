import { api, FetchUsersError } from '@/modules';
import { User } from '@/entities/User.js';

export const fetchUsers = async () => {
  try {
    const response = await api(`/users`);

    return response.data.map((item) => {
      return new User(item);
    });
  } catch (e) {
    throw new FetchUsersError();
  }
};
