import http from '../http'

export const getNotifications = async (userId: string) => {
  const response = await http
    .get('/notification/' + userId, {
      withCredentials: true
    });
  return response;
}
