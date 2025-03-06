'use client'
import React, { useEffect, useState } from 'react'
import Card from '@/components/Card';
import dynamic from 'next/dynamic';

const Tree = dynamic(() => import('react-organizational-chart').then(mod => mod.Tree), { ssr: false });
const TreeNode = dynamic(() => import('react-organizational-chart').then(mod => mod.TreeNode), { ssr: false });

interface TreeNodeData {
  id: number;
  label: string;
  children?: TreeNodeData[];
}

const OrgChartPage: React.FC = () => {
  // Organize data with type-safe structure
  const [orgData, setOrgData] = useState<TreeNodeData[]>([
    {
      id: 1, label: 'CEO', children: [
        {
          id: 2, label: 'CTO', children: [
            { id: 3, label: 'Dev Team 1' },
            { id: 4, label: 'Dev Team 2' }
          ]
        },
        { id: 5, label: 'CFO', children: [{ id: 6, label: 'Finance Team' }] }
      ]
    }
  ]);

  // Handle drag start, storing the dragged node's data
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, node: TreeNodeData) => {
    e.dataTransfer.setData('node', JSON.stringify(node)); // Store dragged node's data
    e.dataTransfer.effectAllowed = 'move';
  };

  // Prevent the default behavior to allow drop
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  // Handle drop event and update the tree structure
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetNode: TreeNodeData) => {
    const draggedNode: TreeNodeData = JSON.parse(e.dataTransfer.getData('node'));
    // First, remove the dragged node from its original position
    const updatedOrgData = removeNode(orgData, draggedNode);
    // Then, add the node to the new target node
    const finalOrgData = updateTree(updatedOrgData, draggedNode, targetNode);

    setOrgData(finalOrgData);
  };
  const removeNode = (tree: TreeNodeData[], nodeToRemove: TreeNodeData): TreeNodeData[] => {
    return tree
      .map(node => {
        if (node.children) {
          // Remove the node from the children if it's found
          node.children = node.children.filter(child => child.id !== nodeToRemove.id);
          node.children = removeNode(node.children, nodeToRemove); // Recursively remove the node
        }
        return node;
      })
      .filter(node => node.id !== nodeToRemove.id); // Ensure we remove the node itself
  };

  // Recursive function to update the tree structure with dragged node
  const updateTree = (tree: TreeNodeData[], draggedNode: TreeNodeData, targetNode: TreeNodeData): TreeNodeData[] => {
    return tree.map(node => {
      if (node.id === targetNode.id) {
        // Add the dragged node as a child of the target node
        return { ...node, children: [...(node.children || []), draggedNode] };
      }
      if (node.children) {
        node.children = updateTree(node.children, draggedNode, targetNode);
      }
      return node;
    });
  };

  // Recursive function to render tree nodes
  const renderTreeNodes = (nodes: TreeNodeData[]) => {
    return nodes.map((node) => (
      <TreeNode
        key={node.id}
        label={
          <div
            onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, node)}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)} // Typing event explicitly
            onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, node)} // Typing event explicitly
            draggable
          >
            {node.label}
          </div>
        }
      >
        {node.children && renderTreeNodes(node.children)}
      </TreeNode>
    ));
  };

  return (
    <Card withAction={false} title="Organizational Chart" className="card-lg">
      <Tree label={orgData[0].label}>
        {renderTreeNodes(orgData[0].children!)}
      </Tree>
    </Card>
  )
}
export default OrgChartPage;
