'use client';

import React from 'react'
import Table from '@/components/Table';
import Card from '@/components/Card';
import TABLE_COLUMNS from './config/department-table';

export default function DepartmentList() {
  const data = [
    { "id": 1, "department_name": "HR", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 2, "department_name": "Engineering", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 3, "department_name": "Marketing", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 4, "department_name": "Sales", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 5, "department_name": "Finance", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 6, "department_name": "IT", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 7, "department_name": "Customer Support", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 8, "department_name": "Legal", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 9, "department_name": "Product Management", "created_at": "2025-03-11T14:25:00.000Z" },
    { "id": 10, "department_name": "R&D", "created_at": "2025-03-11T14:25:00.000Z" }
  ]
  

  return (
    <Card title="Departments">
      <Table columns={TABLE_COLUMNS} data={data} />
    </Card>
  )
}
