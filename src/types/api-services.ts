export interface IBaseGetList<T> {
  success: boolean;
  message: string;
  data: {
    data: Array<T>;
    count: number;
    total: number;
    page: number;
    pageCount: number;
  };
}

export interface IGetListServiceParams {
  url: string;
}
