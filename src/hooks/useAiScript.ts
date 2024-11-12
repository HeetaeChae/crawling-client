import { useMutation } from '@tanstack/react-query';
import { aiScriptApi } from 'apis/aiScriptApi';
import { AiScriptReq, AiScriptRes } from 'types/aiScript';

export function useAiScript() {
  const mutation = useMutation<AiScriptRes, Error, AiScriptReq>({
    mutationFn: aiScriptApi,
  });

  return { aiScriptMitation: mutation };
}
