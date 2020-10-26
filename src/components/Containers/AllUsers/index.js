import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { getAllUsers } from './actions';
import TableCustom from '../../Table';
import { columns } from "./UserTableColumn";

const AllUsers = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userColumn = columns(history,dispatch)

  const allUsersState = useSelector(state => state.allUsersState);
  useEffect(() => {
    dispatch(getAllUsers(0))
  }, []);
  const { allUsers } = allUsersState;
  const users = allUsers.map((item) => {
    return {
      ...item,
      action: [
        {
          delete: "delete",
          edit: "edit",
          id: item.id
        }
      ]
    }
  })
  return (
      <TableCustom data={users} columns={userColumn} />
  )
}

export default AllUsers;