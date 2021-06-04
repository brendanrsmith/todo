import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { SettingsContext } from '../../context/site';

function ListSettings(props) {
  const context = useContext(SettingsContext);

  return (
    <section className="settings">
      <h4>Settings</h4>
      <div>
        <Button variant="outline-dark" onClick={() => context.toggleShowCompleted()}>Toggle show completed</Button>
      </div>
      <div>
        <label htmlFor="sortby">sort by:</label>
        <select name="sortby" onChange={e => context.setSortField(e.target.value)}>
          <option value="name" >name</option>
          <option value="difficulty" >difficulty</option>
          <option value="task" >task</option>
        </select>
      </div>
      <div>
        <label htmlFor="displayNum">display:</label>
        <select name="displayNum" onChange={e => context.setDisplayCount(e.target.value)}>
          <option value="5" >5</option>
          <option value="10" >10</option>
          <option value="20" >20</option>
        </select>
      </div>
    </section>
  )
}
export default ListSettings;