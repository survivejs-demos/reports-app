import React from 'react';

class ReportsTable extends React.Component {
  render() {
    const headers = this.props.headers;
    const reports = this.props.reports;
    const headerClicked = this.props.headerClicked;

    return (
      <table className='pure-table'>
        <thead>
          <tr>
            {headers.map(
              this.renderHeader.bind(null, headerClicked)
            )}
          </tr>
        </thead>
        <tbody>
          {reports.map(this.renderReport)}
        </tbody>
      </table>
    );
  }
  renderHeader(headerClicked, header) {
    const data = header.data;

    return (
      <td key={`header-${data}`} onClick={headerClicked.bind(null, data)}>
        {header.name}
      </td>
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
  headers: React.PropTypes.array.isRequired,
  headerClicked: React.PropTypes.func.isRequired,
  reports: React.PropTypes.array.isRequired
};
ReportsTable.defaultProps = {
  headers: [],
  headerClicked: () => {},
  reports: []
};

export default ReportsTable;