import React from 'react';
import api from './api';
import ReportsTable from './reports_table.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className='pure-g'>
        <header className='pure-u-1'>
          <h1>Reports application</h1>

          <div className='description'>
            The most awesome reporting application ever
          </div>
        </header>
        <article className='pure-u-1'>
          <ReportsTable reports={api.getReports()} />
        </article>
      </div>
    );
  }
};