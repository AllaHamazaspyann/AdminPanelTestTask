import React from 'react';
import { useDispatch } from 'react-redux';
import { Table } from 'antd';

import { getAllUsers } from '../Containers/AllUsers/actions';

const TableCustom = (props) => {
  const { data, columns } = props;
  const dispatch = useDispatch();
  return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ 
             defaultPageSize: 10,
             total: 100,
             showSizeChanger: true,  
             onChange(current){dispatch(getAllUsers(current-1))}
        }
            }
      />
  );
};

export default TableCustom;