import React from 'react';
import api from './api';
import ReportsTable from './reports_table.jsx';

export default class App extends React.Component {
  render() {
    const headers = [
      {
        name: 'Date',
        data: 'timestamp'
      },
      {
        name: 'Size',
        data: 'size'
      },
      {
        name: 'Hit total',
        data: 'hit'
      },
      {
        name: 'Cache hit',
        data: 'cacheHit'
      },
      {
        name: 'Cache missed',
        data: 'noncacheHit'
      }
    ];

    return (
      <div className='pure-g'>
        <header className='pure-u-1'>
          <h1>Reports application</h1>

          <div className='description'>
            The most awesome reporting application ever
          </div>
        </header>
        <article className='pure-u-1'>
          <section className='app'>
            <ReportsTable
              headerClicked={this.headerClicked}
              headers={headers}
              reports={api.getReports()} />
          </section>
        </article>
      </div>
    );
  }
  headerClicked(data) {
    console.log('header clicked', data);
  }
};
