import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
// import useStyles from './Admin.style';

const columns = [
  { field: 'roleId', headerName: 'Role ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter:
      (params) => `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
  {
    field: 'createdAt',
    headerName: 'Registration date',
    width: 200,
  },
];

const rows = [
  {
    id: 1,
    roleId: 1,
    firstName: 'Roman',
    lastName: 'Andrukhanenko',
    createdAt: '11.05.98',
  },
  {
    id: 2,
    roleId: 0,
    firstName: 'Albert',
    lastName: 'Einstein',
    createdAt: '11.05.05',
  },
];

function Admin() {
  // const classes = useStyles();

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGrid columns={columns} rows={rows} pageSize={5} />
    </div>
  );
}

export default Admin;
