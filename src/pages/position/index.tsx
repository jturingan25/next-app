import React from 'react'
import Table from '@/components/Table';
import Card from '@/components/Card';
import TABLE_COLUMNS from './config/position-table';

export default function PositionList() {
  const data = [
    {
      "position_name": "Software Engineer",
      "created_at": "2016-02-29T14:23:12.667Z",
      "department": "Engineering"
    },
    {
      "position_name": "Product Manager",
      "created_at": "2019-11-12T06:40:38.125Z",
      "department": "Product"
    },
    {
      "position_name": "Data Scientist",
      "created_at": "2021-08-15T21:13:47.564Z",
      "department": "Data"
    },
    {
      "position_name": "UX Designer",
      "created_at": "2017-04-10T17:25:04.778Z",
      "department": "Design"
    },
    {
      "position_name": "HR Specialist",
      "created_at": "2019-02-04T09:14:20.970Z",
      "department": "HR"
    },
    {
      "position_name": "Project Manager",
      "created_at": "2022-03-11T22:02:03.890Z",
      "department": "Project Management"
    },
    {
      "position_name": "Marketing Lead",
      "created_at": "2020-01-05T11:32:57.216Z",
      "department": "Marketing"
    },
    {
      "position_name": "Sales Associate",
      "created_at": "2021-05-13T18:09:37.542Z",
      "department": "Sales"
    },
    {
      "position_name": "Business Analyst",
      "created_at": "2018-10-23T05:45:14.843Z",
      "department": "Business Operations"
    },
    {
      "position_name": "Customer Support",
      "created_at": "2017-07-08T23:54:56.128Z",
      "department": "Customer Service"
    }
  ]
  
  return (
    <Card title="Positions">
      <Table columns={TABLE_COLUMNS} data={data} />
    </Card>
  )
}
