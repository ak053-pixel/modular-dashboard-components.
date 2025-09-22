import React from 'react';

interface MetricProps {
  title: string;
  value: string | number;
}

export const MetricCard: React.FC<MetricProps> = ({ title, value }) => (
  <div style={{ padding: '1.25rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
    <h3 style={{ fontSize: '0.875rem', color: '#64748b' }}>{title}</h3>
    <p style={{ fontSize: '1.5rem', fontWeight: 600 }}>{value}</p>
  </div>
);
