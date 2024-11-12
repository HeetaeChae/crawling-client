import { axiosTokenInstance } from 'network/axiosTokenInstance';
import { ProductInfoReq, ProductInfoRes } from 'types/productInfo';

export const productInfoApi = async ({
  marketingCategory,
  keyword,
}: ProductInfoReq): Promise<ProductInfoRes> => {
  const response = await axiosTokenInstance.post(
    `/api/${marketingCategory}/product-info`,
    { keyword },
  );
  return response.data;
};
