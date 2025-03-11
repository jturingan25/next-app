import React from 'react'
import Table from '@/components/Table';
import Card from '@/components/Card';
import TABLE_COLUMNS from './config/user-table';

export default function UserList() {
  const data = [
    {
      "username": "john_doe",
      "last_login": "2019-08-01T12:34:56.789Z",
      "email": "john_doe@example.com"
    },
    {
      "username": "jane_smith",
      "last_login": "2020-05-12T08:21:35.654Z",
      "email": "jane_smith@example.com"
    },
    {
      "username": "alex_jones",
      "last_login": "2017-11-23T14:45:29.112Z",
      "email": "alex_jones@example.com"
    },
    {
      "username": "mary_johnson",
      "last_login": "2021-02-19T09:11:07.839Z",
      "email": "mary_johnson@example.com"
    },
    {
      "username": "mike_brown",
      "last_login": "2018-10-15T18:27:46.234Z",
      "email": "mike_brown@example.com"
    }
  ]
  
  return (
    <Card title="Users">
      <Table data={data} columns={TABLE_COLUMNS} />
    </Card>
  )
}
