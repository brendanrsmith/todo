import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [completed, setCompleted] = useState(true);
  const [displayCount, setDisplayCount] = useState(5);
  const [sortField, setSortField] = useState('name');
  
  const toggleShowCompleted = () => setCompleted(prevCompleted => !prevCompleted);
  
  const state = {
    completed,
    displayCount,
    sortField,
    toggleShowCompleted,
    setDisplayCount,
    setSortField
  }


  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}
export default SettingsProvider;