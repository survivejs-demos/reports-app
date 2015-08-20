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
    console.log(reports);

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
          <tr>
            <td>date should go here</td>
            <td>size should go here</td>
            <td>hit total should go here</td>
            <td>cache hit should go here</td>
            <td>cache missed should go here</td>
          </tr>
        </tbody>
      </table>
    );
  }
};
