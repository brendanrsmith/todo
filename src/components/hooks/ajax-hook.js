import axios from 'axios';
import { useState } from 'react'

const useAjax = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const request = (url, method, body = {}) => {
    setIsLoading(true);
    axios({
      method: method,
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: body
    })
    .then(axiosResponse => setResponse(axiosResponse.data))
    .catch(axiosError => setError(axiosError))
    .finally(() => setIsLoading(false));
  };

  return [isLoading, response, error, request];
}

export default useAjax;