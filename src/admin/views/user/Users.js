import React from "react";

import { useState , useEffect} from "react";
import { CSmartTable } from "@coreui/react-pro";
import { CAvatar, CBadge, CButton,CCollapse, CCardBody} from "@coreui/react-pro";
import UserModify from "./UserModify";


const Users = () => {
    const [details, setDetails] = useState([])
    const [visible, setVisible] = useState(false)
    const columns = [
      {
        key: 'avatar',
        label: '',
        filter: false,
        sorter: false,
      },
      {
        key: 'name',
        _style: { width: '20%' },
      },
      {
        key: 'address',
        label: 'Address',
        _style: { width: '20%' },
      },
      {
        key : 'email'
      },
      { 
        key: 'role',
        _style: { width: '20%' }
      },
      {
        key: 'point',
        label: 'Point',
        _style: { width: '20%' },
      },
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        filter: false,
        sorter: false,
      },
    ]
    const usersData = [
      {
        id: 1,
        name: 'Samppa Nori',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        address : '경기도 용인시 기흥구 마북동',
        role: 'Member',
        status: 'Active',
        email : 'asd@naver.com',
        point : 1000,
      },
      {
        id: 2,
        name: 'Estavan Lykos',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '경기도 용인시 기흥구 마북동',
        role: 'Staff',
        status: 'Banned',
        email : 'asd@naver.com',
        point : 100,
      },
      {
        id: 3,
        name: 'Chetan Mohamed',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '경기도 용인시 기흥구 마북동',
        role: 'Admin',
        email : 'asd@naver.com',
        status: 'Inactive',
        point : 100,
       
      },
      {
        id: 4,
        name: 'Derick Maximinus',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '경기도 용인시 기흥구 마북동',
        role: 'Member',
        email : 'asd@naver.com',
        status: 'Pending',
        point : 1000,
      },
      {
        id: 5,
        name: 'Friderik Dávid',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        address : '경기도 용인시 기흥구 마북동',
        role: 'Staff',
        email : 'asd@naver.com',
        status: 'Active',
        point : 90000,
      },
      { 
        id: 6,
        name: 'Yiorgos Avraamu',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        address : '경상북도',
        role: 'Member',
        email : 'asd@naver.com',
        status: 'Active',
        point : 19000,
      },
      {
        id: 7,
        name: 'Avram Tarasios',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '전라남도 광주',
        role: 'Staff',
        email : 'asd@naver.com', 
        point : 10900,
      },
      {
        id: 8,
        name: 'Quintin Ed',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '경기도 용인시 기흥구 마북동',
        role: 'Admin',
        email : 'asd@naver.com',
        status: 'Inactive',
        point : 10090,
      },
      { 
        id: 9,
        name: 'Enéas Kwadwo',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '경기도 용인시 기흥구 마북동',
        role: 'Member',
        email : 'asd@naver.com',
        status: 'Pending',
        point : 10009,
      },
      { 
        id: 10,
        name: 'Agapetus Tadeáš',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        address : '인천 부평',
        role: 'Staff',
        email : 'asd@naver.com',
        status: 'Active',
        point : 10000,
      },
      { 
        id: 11,
        name: 'Carwyn Fachtna',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        address : '경기도 용인시 기흥구 마북동',
        role: 'Member',
        email : 'asd@naver.com',
        status: 'Active',
        point : 10000,
      },
      {
        id: 12,
        name: 'Nehemiah Tatius',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '부산시 광안리',
        role: 'Staff',
        email : 'asd@naver.com',
        status: 'Banned',
        point : 10000,
      },
      {
        id: 13,
        name: 'Ebbe Gemariah',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '강원도 철원',
        role: 'Admin',
        email : 'asd@naver.com',
        status: 'Inactive',
        point : 10000,
      },
      {
        id: 14,
        name: 'Eustorgios Amulius',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       address : '경기도 용인시 기흥구 마북동',
        role: 'Member',
        email : 'asd@naver.com',
        status: 'Pending',
        point : 10000,
      },
      {
        id: 15,
        name: '김원호',
        avatar: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        address : '서울시 강남구',
        role: 'Staff',
        email : 'asd@naver.com',
        status: 'Active',
        point : 10000,
      },
    ]
    const getBadge = (status) => {
      switch (status) {
        case 'Active':
          return 'success'
        case 'Inactive':
          return 'secondary'
        case 'Pending':
          return 'warning'
        case 'Banned':
          return 'danger'
        default:
          return 'primary'
      }
    }
    const toggleDetails = (index) => {
      const position = details.indexOf(index)
      let newDetails = details.slice()
      if (position !== -1) {
        newDetails.splice(position, 1)
      } else {
        newDetails = [...details, index]
      }
      setDetails(newDetails)
    }
    return (
      <CSmartTable
        activePage={2}
        cleaner
        clickableRows
        columns={columns}
        columnFilter
        columnSorter
        footer
        items={usersData}
        itemsPerPageSelect
        itemsPerPage={5}
        
        pagination
        onFilteredItemsChange={(items) => {
          console.log(items)
        }}
        onSelectedItemsChange={(items) => {
          console.log(items)
        }}
        scopedColumns={{
          address: (item) => (
            <td>
              {item.address.length > 7 ? `${item.address.substring(0, 7)}...` : item.address}
            </td>
          ),
          avatar: (item) => (
            <td>
              <CAvatar src={item.avatar}></CAvatar>
            </td>
          ),
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
            </td>
          ),
          show_details: (item) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(item.id)
                  }}
                >
                  {details.includes(item.id) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.id)}>
                <CCardBody className="p-3">
                  <h4>{item.name}</h4>
                  <p className="text-muted">주소 : {item.address}</p>
                  <UserModify />
                  <CButton size="sm" color="danger" className="ml-1" style={{color:'white'}}>
                    삭제
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          },
        }}
        selectable
        sorterValue={{ column: 'status', state: 'asc' }}
        tableFilter
        tableProps={{
          className: 'add-this-class',
          responsive: true,
          striped: true,
          hover: true,
        }}
        tableBodyProps={{
          className: 'align-middle'
        }}
      />
    );
}

export default Users;