import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [completed, setCompleted] = useState(true);
  const [displayCount, setDisplayCount] = useState(5);
  const [sortField, setSortField] = useState('name');
  const [totalTasks, setTotalTasks] = useState(0);
  
  const toggleShowCompleted = () => setCompleted(prevCompleted => !prevCompleted);
  
  const state = {
    completed,
    displayCount,
    sortField,
    totalTasks,
    toggleShowCompleted,
    setDisplayCount,
    setSortField,
    setTotalTasks
  }


  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}
export default SettingsProvider;