import React, { useState, forwardRef, useImperativeHandle } from 'react'
import data from '../../employee/config/data';

interface TreeNodeData {
  id: number;
  name: string;
  position: string;
  children?: TreeNodeData[];
}

interface Employees {
  id: number;
  name: string;
  position: string;
  children: Employees[];
}

const Employees = forwardRef((props, ref) => {
  const [employees, setEmployees] = useState<Employees[]>(data);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, node: TreeNodeData) => {
    e.dataTransfer.setData('node', JSON.stringify(node)); // Store dragged node's data
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const removeEmployee = (id: number) => {
    const tmp = employees.filter(x => x.id !== id);
    setEmployees(tmp)
    return
  };

  // Expose a function to the parent via ref
  useImperativeHandle(ref, () => ({
    removeEmployee: (id: number) => removeEmployee(id),
  }));

  return (
    <div className='fixed overflow-y-auto visibility-hidden max-h-[72%]'>
      <h2 className="text-lg font-bold">Employee List</h2>
      {employees.map((emp, index) => (
        <div
          key={index}
          onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, emp)}
          onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)} // Typing event explicitly
          draggable
          className="flex space-x-3 pt-2 pb-2 items-center justify-center cursor-grab">
          <div className='w-[18%] '>
            <img className='w-50 rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
          <div className='w-[82%]'>
            <div className='text-md font-bold uppercase'>{emp.name}</div>
            <div>{emp.position}</div>
          </div>
        </div>
      ))}

    </div>
  )
});

export default Employees
