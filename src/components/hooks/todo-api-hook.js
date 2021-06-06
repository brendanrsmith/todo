import { useEffect } from 'react';
import useAjax from './ajax-hook'
const BASE_URL = 'https://brsmith-api-server.herokuapp.com/todos';

const useTodoApi = () => {
  const [isLoading, list,  , request] = useAjax();
  const [ , updateResponse, updateError, updateRequest] = useAjax();

  
  const getTodoItems = () => {
    request(BASE_URL, 'GET')
  }
  
  const addItem = (item) => {
    updateRequest(BASE_URL, 'POST', item);
  }
  
  const deleteItem = (id) => {
    const url = `${BASE_URL}/${id}`;
    updateRequest(url, 'DELETE');
  }
  
  const toggleComplete = (item) => {
    item.complete = !item.complete;
    const id = item._id;
    const url = `${BASE_URL}/${id}`;
    updateRequest(url, 'PUT', item);
  }
  
  useEffect(getTodoItems, [updateResponse, updateError]);

  return [isLoading, list === null ? [] : list, getTodoItems, addItem, deleteItem, toggleComplete];
}

export default useTodoApi;
