import React from "react";

import { useState , useEffect} from "react";
import { CSmartTable } from "@coreui/react-pro";
import { CAvatar, CBadge, CButton,CCollapse, CCardBody } from "@coreui/react-pro";


const Missions = () => {
    const [details, setDetails] = useState([])
    const columns = [
      {
        key: 'image',
        label: '',
        filter: false,
        sorter: false,
      },
      {
        key: 'title',
        _style: { width: '20%' },
      },
      {
        key: 'content',
        label: 'content',
        _style: { width: '20%' },
      },
      {
        key : 'create_at',
        _style: { width: '20%' }
      },
      { 
        key: 'modify_at',
        _style: { width: '20%' }
      },
      {
        key: 'get_point',
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
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 1000,
      },
      {
        id: 2,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 100,
      },
      {
        id: 3,
        title: '쓰레기 줍기',
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 100,
       
      },
      {
        id: 4,
        title: '쓰레기 줍기',
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 1000,
      },
      {
        id: 5,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 90000,
      },
      { 
        id: 6,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        content : '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체', 
              create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 19000,
      },
      {
        id: 7,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       content : '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13', 
        modify_at: '2023-12-13',
        get_point : 10900,
      },
      {
        id: 8,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 10090,
      },
      { 
        id: 9,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 10009,
      },
      { 
        id: 10,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        content : '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 10000,
      },
      { 
        id: 11,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 10000,
      },
      {
        id: 12,
        title: '쓰레기 줍기',
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 10000,
      },
      {
        id: 13,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 10000,
      },
      {
        id: 14,
        title: '쓰레기 줍기', 
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
       content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 10000,
      },
      {
        id: 15,
        title: '쓰레기 줍기',
        image: 'https://i.postimg.cc/mgh0tq1x/mococo.jpg',
        content :  '쓰레기를 줏어서 쓰레기통에 버려주세요! 흭득가능 포인트 : 10 P 개최자: 성남시청 미션장소: 성남시 전체',
        create_at: '2023-12-13',
        modify_at: '2023-12-13',
        get_point : 10000,
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
          content : (item) => (
            <td>
              {item.content.length > 7 ? `${item.content.substring(0, 7)}...` : item.content}
            </td>
          ),
          image: (item) => (
            <td>
              <CAvatar src={item.image}></CAvatar>
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
                  <h4>{item.title}</h4>
                  <p className="text-muted">내용 : {item.content}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
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

export default Missions;