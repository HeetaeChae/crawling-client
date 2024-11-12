import { useMutation } from '@tanstack/react-query';
import { productInfoApi } from 'apis/productInfoApi';
import { ProductInfoReq, ProductInfoRes } from 'types/productInfo';

function useProductInfo() {
  const mutation = useMutation<ProductInfoRes, Error, ProductInfoReq>({
    mutationFn: productInfoApi,
  });

  return { productInfoMutation: mutation };
}

export default useProductInfo;
