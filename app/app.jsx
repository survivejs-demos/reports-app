import React from 'react';
import api from './api';

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
          <section className='app'>
            {this.renderReports(api.getReports())}
          </section>
        </article>
      </div>
    );
  }
  renderReports(reports) {
    return (
      <table className='pure-table'>
        <thead>
          <tr>
            <td>Date</td>
            <td>Size</td>
            <td>Hit total</td>
            <td>Cache hit</td>
            <td>Cache missed</td>
          </tr>
        </thead>
        <tbody>
          {reports.map(this.renderReport)}
        </tbody>
      </table>
    );
  }
  renderReport(report, i) {
    const formatDate = (d) => {
      return d.toISOString().split('T')[0];
    }

    const formatNumber = (n) => {
      return n.toLocaleString('en-US');
    }

    return (
      <tr key={`report-${i}`}>
        <td>{formatDate(report.timestamp)}</td>
        <td>{formatNumber(report.size)}</td>
        <td>{formatNumber(report.hit)}</td>
        <td>{formatNumber(report.cacheHit)}</td>
        <td>{formatNumber(report.noncacheHit)}</td>
      </tr>
    );
  }
};
