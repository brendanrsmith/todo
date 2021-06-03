import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {
  const [completed, setCompleted] = useState(false);
  const [displayCount, setDisplayCount] = useState(5);
  const [sortField, setSortField] = useState('difficulty');

  const state = {
    completed,
    displayCount,
    sortField,
    setCompleted,
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