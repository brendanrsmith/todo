import React, { useContext } from 'react';
import { SettingsContext } from '../../context/site';

function ListSettings(props) {
  const context = useContext(SettingsContext);

  return (
    <section>
      <p>Settings go here:</p>
      <div>hide completed: {context.completed ? 'True' : 'False'} </div>
      <div>sort by: {context.sortField}</div>
      <div>display count: {context.displayCount}</div>
    </section>
  )
}
export default ListSettings;