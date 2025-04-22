'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  Panel,
  useNodesState,
  useEdgesState,
  Controls,
  MiniMap,
  Background,
} from 'reactflow';

import CustomNode from './CustomNode';
import { initialTree, treeRootId } from './johiruddin';
import { layoutElements } from './layout-elements';

import 'reactflow/dist/style.css';

const nodeTypes = {
  custom: CustomNode,
};

// Create a filtered tree based on expanded nodes
const createFilteredTree = (tree, expandedNodes) => {
  const filteredTree = {};
  
  // First add all expanded nodes and their children
  const addNode = (id) => {
    if (!tree[id]) return;
    
    // Always add the node to filtered tree
    filteredTree[id] = {
      ...tree[id],
      children: tree[id].children || [], // Keep original children array
      isExpanded: expandedNodes.has(id)
    };

    // If node is expanded, process its children
    if (expandedNodes.has(id) && tree[id].children) {
      tree[id].children.forEach(childId => {
        if (!filteredTree[childId]) {
          addNode(childId);
        }
      });
    }
  };

  // Always start with root node
  addNode('1');

  console.log('Filtered tree:', {
    expandedNodes: Array.from(expandedNodes),
    filteredTree
  });
  return filteredTree;
};

// Helper function to get initial nodes and edges
const getInitialElements = () => {
  // Start with just the root node
  const initialExpandedNodes = new Set(['1']); // Use string ID
  const filteredTree = createFilteredTree(initialTree, initialExpandedNodes);
  
  console.log('Initial tree:', filteredTree);
  const { nodes, edges } = layoutElements(filteredTree, '1', 'TB');
  
  return {
    nodes,
    edges,
    expandedNodes: initialExpandedNodes
  };
};

const { nodes: initialNodes, edges: initialEdges, expandedNodes: initialExpandedNodes } = getInitialElements();

const LayoutFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [expandedNodes, setExpandedNodes] = useState(initialExpandedNodes);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          { ...params, type: ConnectionLineType.SmoothStep, animated: false },
          eds,
        ),
      ),
    [],
  );

  const handleExpand = useCallback((nodeId) => {
    console.log('Expanding node:', nodeId);
    
    // Toggle expansion
    const newExpandedNodes = new Set(expandedNodes);
    if (newExpandedNodes.has(nodeId)) {
      // Collapse: remove this node and its descendants
      const removeDescendants = (id) => {
        const node = initialTree[id];
        if (node && node.children) {
          node.children.forEach(childId => {
            newExpandedNodes.delete(childId);
            removeDescendants(childId);
          });
        }
      };
      removeDescendants(nodeId);
      newExpandedNodes.delete(nodeId);
    } else {
      // Expand: add this node
      newExpandedNodes.add(nodeId);
    }

    console.log('New expanded nodes:', Array.from(newExpandedNodes));

    // Create filtered tree based on expanded nodes
    const filteredTree = createFilteredTree(initialTree, newExpandedNodes);
    console.log('Filtered tree:', filteredTree);

    // Get new layout
    const { nodes: layoutedNodes, edges: layoutedEdges } = layoutElements(
      filteredTree,
      '1', // Always use root node as layout root
      'TB'
    );

    // Update state
    setExpandedNodes(newExpandedNodes);
    setNodes(layoutedNodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        onExpand: handleExpand,
        isExpanded: newExpandedNodes.has(node.id)
      }
    })));
    setEdges(layoutedEdges);
  }, [expandedNodes]);

  // Set initial expand handler
  React.useEffect(() => {
    setNodes(nodes => 
      nodes.map(node => ({
        ...node,
        data: {
          ...node.data,
          onExpand: handleExpand,
          isExpanded: expandedNodes.has(node.id)
        },
      }))
    );
  }, [handleExpand, expandedNodes]);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 5,
        backgroundColor: '#166534',
        padding: '8px 24px',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        border: '2px solid #E5E7EB',
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '24px',
          fontWeight: '600',
          color: 'white',
          margin: 0,
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}>
          মোল্লা পরিবার
        </h1>
        <h1> ( + এ ক্লিক করে বংশধারা দেখুন)</h1>
      </div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        nodeTypes={nodeTypes}
        proOptions={{ hideAttribution: true }}
        minZoom={0.1}
        maxZoom={1.5}
        defaultZoom={1}
        nodesDraggable={false}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default LayoutFlow;
