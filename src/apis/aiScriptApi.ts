import { axiosTokenInstance } from 'network/axiosTokenInstance';
import { AiScriptReq, AiScriptRes } from 'types/aiScript';

export const aiScriptApi = async ({
  marketingCategory,
  prompt,
}: AiScriptReq): Promise<AiScriptRes> => {
  const response = await axiosTokenInstance.post(
    `/api/${marketingCategory}/ai-script`,
    {
      prompt,
    },
  );
  return response.data;
};
