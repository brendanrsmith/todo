import React, { useContext } from 'react';
import { SettingsContext } from '../../context/site';

function ListSettings(props) {
  const context = useContext(SettingsContext);

  return (
    <section>
      <h4>Settings:</h4>
      <div>
        <button onClick={() => context.toggleShowCompleted()}>set show completed: True</button>
      </div>
      <div>
        <label htmlFor="sortby">sort by</label>
        <select name="sortby" onChange={e => context.setSortField(e.target.value)}>
          <option value="name" >name</option>
          <option value="difficulty" >difficulty</option>
          <option value="task" >task</option>
        </select>
      </div>
      <div>
        <label htmlFor="displayNum">display count</label>
        <select name="displayNum" onChange={e => context.setDisplayCount(e.target.value)}>
          <option value="5" >5</option>
          <option value="10" >10</option>
          <option value="20" >20</option>
        </select>
      </div>
      <h4>current global context:</h4>
      <div>hide completed: {context.completed === true ? 'True' : 'False'} </div>
      <div>sort by: {context.sortField}</div>
      <div>display count: {context.displayCount}</div>
    </section>
  )
}
export default ListSettings;