import React, { useEffect, useState } from 'react'
import Card from '@/components/Card';
import Button from '@/components/Button';
import dynamic from 'next/dynamic';
import StyledTreeNode from './components/StyledTreeNode';
import { IconDownload, IconPrint, IconSettings } from '@/components/Icons';
import Drawer from '@/components/Drawer';
import {printDiv} from '@/utils/utility';
const Tree = dynamic(() => import('react-organizational-chart').then(mod => mod.Tree), { ssr: false });
const TreeNode = dynamic(() => import('react-organizational-chart').then(mod => mod.TreeNode), { ssr: false });

interface TreeNodeData {
  id: number;
  name: string;
  position: string;
  children?: TreeNodeData[];
}

const OrgChartPage: React.FC = () => {
  useEffect(() => {
    window.onafterprint = function () {
      // Reload the page after print
      window.location.reload();
    };
  }, [])
  // Organize data with type-safe structure
  const [orgData, setOrgData] = useState<TreeNodeData[]>([
    {
      id: 1, name: 'Bing Tan', position: 'CEO', children: [

        { id: 2, name: 'Laarni Manlangit', position: 'Human Resource' },
        {
          id: 5, name: 'Fervi', position: 'Project Manager', children: [
            { id: 5.1, name: 'Tonio', position: 'Senior Software Engr.' },
            { id: 5.2, name: 'Nathan', position: 'Senior Software Engr.' },
            { id: 5.2, name: 'Jan', position: 'Junior Software Engr.' },
          ]

        },
        { id: 3, name: 'Dhom', position: 'Project Manager' },
        { id: 4, name: 'Bon', position: 'Project Manager' },
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
    alert("download")
  }

  const extraButton = (
    <div className='flex'>
      <Drawer className="mr-5" />
      <Button type='dropdown' label={<IconSettings />}>
        <li onClick={() => printDiv("orgchart")}><a><IconPrint /> Print</a></li>
        <li onClick={download}><a><IconDownload />Download</a></li>
      </Button>

    </div >
  );

  return (
    <Card
      title="Organizational Chart"
      extraButton={
        extraButton
      }
    >
      <div id="orgchart">
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
      </div>
    </Card>
  )
}
export default OrgChartPage;



