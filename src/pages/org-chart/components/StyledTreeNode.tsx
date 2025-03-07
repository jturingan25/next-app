import React from 'react'

interface TreeNodeData {
  id: number;
  label: string;
  children?: TreeNodeData[];
}

interface Props {
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, node: TreeNodeData) => void,
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void,
  handleDrop: (e: React.DragEvent<HTMLDivElement>, node: TreeNodeData) => void,
  node: TreeNodeData
}


const StyleTreeNode: React.FC<Props> = ({ handleDragStart, handleDragOver, handleDrop, node }) => {
  return (
    <div
      className='p-5 inline-block border w-50 rounded-md'
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, node)}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)} // Typing event explicitly
      onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, node)} // Typing event explicitly
      draggable
    >
      {node.label}
    </div>
  )
}

export default StyleTreeNode
