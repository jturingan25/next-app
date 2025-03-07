import React from 'react'

interface TreeNodeData {
  id: number;
  name: string;
  position: string;
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
      className='inline-block card w-auto bg-transparent p-1 cursor-grab'
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, node)}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)} // Typing event explicitly
      onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, node)} // Typing event explicitly
      draggable
    >
      <div className="avatar mb-2">
        <div className="w-19 rounded-full border-2 border-green-500 p-1">
          <img className='w-14 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className='text-green-900 text-base font-semibold uppercase' >
        {node.name}
      </div>
      <div className='text-purple-400 text-xs font-semibold uppercase' >
        {node.position}
      </div>
    </div>
  )
}

export default StyleTreeNode
