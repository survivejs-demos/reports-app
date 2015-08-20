import React from 'react';
import api from './api';
import ReportsTable from './reports_table.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: [
        {
          name: 'Date',
          data: 'timestamp'
        },
        {
          name: 'Bytes',
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
      ],
      reports: api.getReports()
    };

    this.headerClicked = this.headerClicked.bind(this);
  }
  render() {
    const headers = this.state.headers;
    const reports = this.state.reports;

    return (
      <div className='pure-g'>
        <header className='pure-u-1'>
          <h1>Reports Application</h1>

          <div className='description'>
            The most awesome reporting application ever
          </div>
        </header>
        <article className='pure-u-1'>
          <section className='app'>
            <ReportsTable
              headerClicked={this.headerClicked}
              headers={headers}
              reports={reports} />
          </section>
        </article>
      </div>
    );
  }
  headerClicked(data) {
    const reports = this.state.reports;

    reports.sort(function(a, b) {
      return a[data] < b[data] ? 1 : -1;
    });

    this.setState({
      reports: reports
    });
  }
};
