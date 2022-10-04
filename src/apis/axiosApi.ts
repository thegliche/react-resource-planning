/* eslint-disable @typescript-eslint/no-explicit-any */
import AxiosHttp from '@/apis/axiosHttp';

const readList = (endpoint: string) => {
  return AxiosHttp.get<Array<any>>(endpoint);
};

const readById = (endpoint: string, id: any) => {
  return AxiosHttp.get<any>(`${endpoint}/${id}`);
};

const create = (endpoint: string, data: any) => {
  return AxiosHttp.post<any>(endpoint, data);
};

const update = (endpoint: string, id: any, data: any) => {
  return AxiosHttp.put<any>(`${endpoint}/${id}`, data);
};

const removeById = (endpoint: string, id: any) => {
  return AxiosHttp.delete<any>(`${endpoint}/${id}`);
};

const removeAll = (endpoint: string) => {
  return AxiosHttp.delete<any>(endpoint);
};

const findWithParams = (endpointWithParams: string) => {
  return AxiosHttp.get<any>(endpointWithParams);
};

const axiosApi = {
  readList,
  readById,
  create,
  update,
  removeById,
  removeAll,
  findWithParams,
};
export default axiosApi;
