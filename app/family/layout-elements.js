import { m } from 'framer-motion';
import { MarkerType, Position } from 'reactflow';

const nodeWidth = 220;  // Match CustomNode width
const nodeHeight = 50;
const levelSpacing = 120;  // Increased vertical spacing
const nodeSpacing = 180;   // Increased horizontal spacing

export const layoutElements = (tree, rootId, direction = 'TB') => {
  const nodes = [];
  const edges = [];
  const isHorizontal = direction === 'LR';
  const levels = {};
  
  // First pass: assign levels to nodes
  const assignLevels = (nodeId, level = 0) => {
    if (!tree[nodeId]) return;
    
    levels[level] = levels[level] || [];
    levels[level].push(nodeId);
    
    const node = tree[nodeId];
    if (node.children && node.children.length > 0 && node.isExpanded) {
      node.children.forEach(childId => assignLevels(childId, level + 1));
    }
  };
  
  assignLevels(rootId);
  
  // Second pass: create nodes with positions
  Object.entries(levels).forEach(([level, nodeIds]) => {
    const numNodesInLevel = nodeIds.length;
    
    nodeIds.forEach((nodeId, index) => {
      const node = tree[nodeId];
      if (!node) {
        console.error('Missing node:', nodeId);
        return;
      }
      
      // Calculate position
      let x, y;
      if (isHorizontal) {
        x = parseInt(level) * (nodeWidth + levelSpacing);
        y = (index - (numNodesInLevel - 1) / 2) * (nodeHeight + nodeSpacing);
      } else {
        x = (index - (numNodesInLevel - 1) / 2) * (nodeWidth + nodeSpacing);
        y = parseInt(level) * (nodeHeight + levelSpacing);
      }
      
      // Create node
      nodes.push({
        id: nodeId,
        type: 'custom',
        position: { x, y },
        data: {
          id: nodeId,
          label: node.name,
          isRoot: nodeId === rootId,
          isExpanded: node.isExpanded || false,
          childrenCount: node.children ? node.children.length : 0,
          onExpand: null,
        },
        sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
        targetPosition: isHorizontal ? Position.Left : Position.Top,
      });
      
      // Create edges to children
      if (node.children && node.children.length > 0 && node.isExpanded) {
        node.children.forEach(childId => {
          if (!tree[childId]) {
            console.error('Missing child node:', childId);
            return;
          }
          edges.push({
            id: `e${nodeId}-${childId}`,
            source: nodeId,
            target: childId,
            type: 'smoothstep',
            animated: false,
            style: { stroke: '#94A3B8', strokeWidth: 2 },  // Matching handle color
          });
        });
      }
    });
  });
  
  return { nodes, edges };
};
