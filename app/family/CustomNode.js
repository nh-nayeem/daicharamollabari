'use client';

import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

const CustomNode = ({ data }) => {
  const isRoot = data.isRoot || false;
  const hasChildren = data.childrenCount > 0;
  
  const handleExpand = (e) => {
    e.stopPropagation();
    if (data.onExpand && typeof data.onExpand === 'function') {
      data.onExpand(data.id);
    }
  };

  const nodeStyle = {
    minWidth: 220,
    minHeight: 50,
    padding: '10px 16px',
    backgroundColor: isRoot ? '#f5fff8' : '#f5fff8',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: isRoot ? '#24f270' : '#24f270',
    borderRadius: '12px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    transition: 'all 0.2s ease',
    cursor: hasChildren ? 'pointer' : 'default',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  const buttonStyle = {
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    backgroundColor: '#F3F4F6',
    color: '#374151',
    borderRadius: '50%',
    cursor: 'pointer',
    flexShrink: 0,
    border: '1px solid #E5E7EB',
    outline: 'none',
    padding: 0,
    margin: 0,
    transition: 'all 0.2s ease',
    userSelect: 'none',
  };

  const handleStyle = {
    width: '8px',
    height: '8px',
    background: 'green',
    border: '2px solid #FFF',
    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  };

  return (
    <div 
      style={nodeStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        style={handleStyle}
      />
      
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        width: '100%', 
        gap: '12px' 
      }}>
        <span style={{ 
          fontSize: '14px', 
          fontWeight: 500,
          color: '#1F2937',
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          flexGrow: 1 
        }}>
          {data.label}
        </span>
        {hasChildren && (
          <button
            onClick={handleExpand}
            style={buttonStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E5E7EB';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#F3F4F6';
              e.currentTarget.style.transform = 'none';
            }}
          >
            {data.isExpanded ? '−' : '+'}
          </button>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        style={handleStyle}
      />
    </div>
  );
};

export default memo(CustomNode);
