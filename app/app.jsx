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

    return <span>The data should go here.</span>;
  }
};
