import React from 'react';

export const DataTable = ({ columns, data }: { columns: string[]; data: any[] }) => (
  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
    <thead>
      <tr>{columns.map(col => <th key={col} style={{ textAlign: 'left', padding: '8px' }}>{col}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>{columns.map(col => <td key={col} style={{ padding: '8px' }}>{row[col]}</td>)}</tr>
      ))}
    </tbody>
  </table>
);
