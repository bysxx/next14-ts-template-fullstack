import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import defaultAxios from 'axios';
import { useEffect, useState } from 'react';

interface AxiosOptions {
  url: string;
  config?: AxiosRequestConfig;
}

interface Data {
  status: number;
  statusText: string;
  data: AxiosResponse<any>; // fetch되는 data property들이 너무 많고 현재 useAxiosComp에서 사용되지 않으므로 any 처리
}

interface State {
  loading: boolean;
  error: AxiosError | null;
  data: Data | null;
}

const useAxios = (options: AxiosOptions, axiosInstance = defaultAxios) => {
  const [state, setState] = useState<State>({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    if (!options.url) {
      return;
    }
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({ ...state, loading: false, error });
      });
  }, [axiosInstance, options, state, trigger]);
  return { ...state, refetch };
};

export default useAxios;
