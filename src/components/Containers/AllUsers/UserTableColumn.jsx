import React from "react";
import moment from "moment";
import {
    MailFilled,
    DeleteFilled,
    EditFilled
} from '@ant-design/icons';

import { deleteUser } from './actions';
import * as S from "./styles";

export const columns = (history,dispatch) => {
    const format2 = "YYYY.MM.DD";

    return [
        {
            title: 'Photo',
            dataIndex: 'photo',
            render: imgSrc => <img style={S.img} src={imgSrc} alt=""/>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Location',
            dataIndex: 'location',
        },
        {
            title: 'Registered date',
            dataIndex: 'registeredDate',
            render: date => <span>{moment(date).format(format2)}</span>
        },
        {
            title: 'Last active date',
            dataIndex: 'lastActiveDate',
            render: date => <span>{moment(date).format(format2)}</span>
        },
        {
            title: 'Email',
            dataIndex: 'email',
            render: email => <a href="#"><MailFilled style={{ color: "#808080" }} /></a>
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            render: (status) => {
                return status && status.map((item) => {
                    return (
                        <span>
              <EditFilled
                  onClick={() => {
                      history.push({pathname: '/editUser', userId: item.id})
                  }}
                  style={S.editIcon} />
              <DeleteFilled
                  onClick={() => dispatch(deleteUser(item.id))}
                  style={S.deleteIcon} />
            </span>
                    )
                })

            }
        },
    ];
}