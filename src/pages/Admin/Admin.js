import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DataGrid } from '@material-ui/data-grid';

import * as usersApi from '../../api/usersApi';
import { setAllUsers } from '../../store/reducers/users';

import useStyles from './Admin.style';

const columns = [
  {
    field: 'roleId',
    headerName: 'Role ID',
    width: 100,
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
    valueGetter: (params) => `
        ${params.getValue('firstName') || ''}
        ${params.getValue('lastName') || ''}
      `,
  },
  {
    field: 'createdAt',
    headerName: 'Registration date',
    width: 250,
  },
];

function Admin() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const rows = useSelector((state) => state.users.allUsers);

  const handleRowDblClick = async (evt) => {
    const newUsers = rows.filter((user) => user.id !== evt.id);

    dispatch(setAllUsers(newUsers));

    await usersApi.removeUser(evt.id);
  };

  const handleRoleIdCellClick = (evt) => {
    if (evt.field === 'roleId') {
      console.log(evt);
    }
  };

  const getAllUsers = async () => {
    try {
      const allUsers = await usersApi.getAllUsers();

      dispatch(setAllUsers(allUsers.data));
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  React.useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Container className={classes.main} component="main" maxWidth="md">
      <Container component="section" disableGutters>
        <Typography className={classes.title} component="h1" variant="h2">
          Users
        </Typography>

        <div className={classes.container}>
          <DataGrid
            columns={columns}
            rows={rows}
            pageSize={5}
            onCellClick={handleRoleIdCellClick}
            onRowDoubleClick={handleRowDblClick}
            autoHeight
          />
        </div>
      </Container>
    </Container>
  );
}

export default Admin;
