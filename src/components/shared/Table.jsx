/**
 * Reusable Table component.
 *
 * @param {Object} props
 * @param {Array} props.data - Table data
 * @param {Array} props.columns - Table columns
 * @param {Function} props.renderRow - Render row callback
 * @param {Function} props.renderCell - Render cell callback
 * @param {String} props.caption - Table caption
 * @param {Boolean} props.isSortable - Whether table is sortable
 * @param {Boolean} props.isLoading - Whether table is loading
 * @param {String} props.className - Additional class name
 * @param {Object} props.styles - Additional styles
 */

import React from 'react';

const Table = ({
  data,
  columns,
  renderRow,
  renderCell,
  caption,
  isSortable,
  isLoading,
  className,
  styles,
}) => {
  const tableStyles = {
    borderCollapse: 'collapse',
    borderSpacing: 0,
    width: '100%',
    ...styles,
  };

  const captionStyles = {
    textAlign: 'left',
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.0125em',
    padding: '16px 0',
  };

  const headerRowStyles = {
    backgroundColor: '#F3E5F5',
    color: '#000',
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    letterSpacing: '0.01071em',
  };

  const headerCellStyles = {
    padding: '16px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  const rowStyles = {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.01071em',
  };

  const cellStyles = {
    padding: '16px',
    border: '1px solid #ddd',
    textAlign: 'left',
  };

  return (
    <div className={`table-container ${className}`} style={tableStyles}>
      {caption && (
        <caption style={captionStyles}>
          {caption}
        </caption>
      )}
      <table>
        <thead>
          <tr style={headerRowStyles}>
            {columns.map((column, index) => (
              <th
                key={index}
                style={headerCellStyles}
                scope="col"
                aria-sort={isSortable ? 'ascending' : undefined}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan={columns.length} style={cellStyles}>
                Loading...
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr key={index} style={rowStyles}>
                {columns.map((column, cellIndex) => (
                  <td
                    key={cellIndex}
                    style={cellStyles}
                    aria-label={column.label}
                  >
                    {renderCell ? renderCell(row, column) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;