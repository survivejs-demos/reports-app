import React from 'react';

class ReportsTable extends React.Component {
  render() {
    const reports = this.props.reports;

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
ReportsTable.propTypes = {
  reports: React.PropTypes.array.isRequired
};
ReportsTable.defaultProps = {
  reports: []
};

export default ReportsTable;