'use client';
import React, { useEffect, useState, useRef } from 'react'
import Card from '@/components/Card';
import Button from '@/components/Button';
import dynamic from 'next/dynamic';
import StyledTreeNode from './components/StyledTreeNode';
import Icon from '@/components/Icons';
import { downloadImage, printDiv } from '@/utils/utility';
import Employees from './components/Employees';
const Tree = dynamic(() => import('react-organizational-chart').then(mod => mod.Tree), { ssr: false });
const TreeNode = dynamic(() => import('react-organizational-chart').then(mod => mod.TreeNode), { ssr: false });

interface TreeNodeData {
  id: number;
  name: string;
  position: string;
  children?: TreeNodeData[];
}

const OrgChartPage: React.FC = () => {
  const captureRef = useRef<HTMLDivElement>(null);
  const employeesRef = useRef(null);

  useEffect(() => {
    window.onafterprint = function () {
      // Reload the page after print
      window.location.reload();
    };
  }, []);

  const [orgData, setOrgData] = useState<TreeNodeData[]>([]);

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
    if (targetNode.id !== draggedNode.id) {
      const finalOrgData = updateTree(updatedOrgData, draggedNode, targetNode);
      setOrgData(finalOrgData);
      if (employeesRef.current) {
        employeesRef.current.removeEmployee(draggedNode.id)
      }
    }
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
          <StyledTreeNode
            handleDragStart={handleDragStart}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            node={node}
          />
        }
      >
        {node.children && renderTreeNodes(node.children)}
      </TreeNode>
    ));
  };


  const download = () => {
    downloadImage("orgchart")
  }

  const extraButton = (
    <div className='flex'>
      <Button type='dropdown' label={<Icon.Settings />}>
        <li onClick={() => printDiv("orgchart")}><a><Icon.Print /> Print</a></li>
        <li onClick={download}><a><Icon.Download />Download</a></li>
      </Button>
    </div >
  );

  const handleParentDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const draggedNode: TreeNodeData = JSON.parse(e.dataTransfer.getData('node'));
    if (orgData.length === 0) {
      setOrgData([draggedNode]);
      if (employeesRef.current) {
        employeesRef.current.removeEmployee(draggedNode.id)
      }
    }
  };
  return (
    <Card
      title="Organizational Chart"
      extraButton={
        extraButton
      }
    >
      <div className="flex space-x-1">
        <div className="w-[85%] over-flow-auto">
          <div
            id="orgchart"
            ref={captureRef}
            className='m-w-200 h-[calc(100vh-200px)]'
            onDrop={(e: React.DragEvent<HTMLDivElement>) => handleParentDrop(e)}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
          >
            {orgData.length > 0 &&
              <Tree
                label={
                  <StyledTreeNode
                    handleDragStart={handleDragStart}
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                    node={orgData[0]}
                  />
                }
              >
                {renderTreeNodes(orgData[0].children!)}
              </Tree>
            }
          </div>
        </div>
        <div className="w-[15%] bg-base-200 p-3">
          <Employees ref={employeesRef} />
        </div>
      </div>

    </Card>
  )
}
export default OrgChartPage;



