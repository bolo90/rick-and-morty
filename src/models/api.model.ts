import { Gender, Status } from './types.model';

export interface ApiModel<T> {
  info: InfoApiModel;
  results: T;
}

export interface InfoApiModel {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface FilterParams {
  status?: Status;
  gender?: Gender;
  name?: string;
  page?: string;
}