import {
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CModalTitle,
    CButton,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CFormSwitch,
    CFormTextarea,
    CFormSelect
  } from '@coreui/react'
  
 import React from 'react'
 import axios from 'axios';
 import { useState, useEffect } from 'react'
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";


 
 
 const PundingModify =  ({pundingId, onUpdate}) => {
     const [visible, setVisible] = useState(false)
     const [startDate, setStartDate] = useState(new Date());
     const [endDate, setEndDate] = useState(new Date());
     const [formData, setFormData] = useState({
      title: '', 
      content: '', 
      image: '',
      image2: '',
      category: '',
      status: '',
      start: '',
      end: '',
 });

 useEffect(() => {
  // 공지사항 데이터를 가져오기
  fetchQnaData();
}, [pundingId]);

const fetchQnaData = async () => {
  try {
    // 서버에서 공지사항 데이터 가져오기
    const response = await axios.get(`http://localhost:8080/api/punding/${pundingId}`);
    // 이전 값으로 초기화
    setFormData({
      title: response.data.title || '',     // 이전 값이 없으면 빈 문자열
      content: response.data.content || '',
      image: response.data.image || '', // 이전 값이 없으면 빈 문자열
      image2: response.data.image2 || '', // 이전 값이 없으면 빈 문자열
      status: response.data.status || '',
      category: response.data.category || '', // 이전 값이 없으면 빈 문자열
      start : response.data.start || '',
      end : response.data.end || '',
    });
  } catch (error) {
    console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
  }
};
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const handleUpdate = async () => {
  try {
    // 수정된 데이터를 서버에 전송
    await axios.put(`http://localhost:8080/api/punding/${pundingId}`, formData);
   
    onUpdate();
    setVisible(false);

  } catch (error) {
    console.error('공지사항 수정 중 오류 발생:', error);
  }
  setVisible(false);
};

     return (
         <>
     <CButton onClick={() => setVisible(!visible)} style={{height:'30px',lineHeight:'5px'}}>수정</CButton>
     <CModal
       backdrop='static'
       alignment="center"
       scrollable
       visible={visible}
       onClose={() => setVisible(false)}
       aria-labelledby="VerticallyCenteredScrollableExample"
       
     >
       <CModalHeader>
         <CModalTitle id="VerticallyCenteredScrollableExample">수정</CModalTitle>
       </CModalHeader>
       <CModalBody>

      
  <CFormInput type="file" id="image" label="메인이미지" accept='image/*' 
      value={formData.file} name='image' onChange={handleInputChange}
  />
  <br></br>

       <CInputGroup className="mb-3">
   <CInputGroupText id="basic-addon1">제목</CInputGroupText>
   <CFormInput aria-label="title" aria-describedby="basic-addon1"
     name='title' onChange={handleInputChange} value={formData.title}
   />
        </CInputGroup>
 
        <CFormInput type="file" id="subImage" label="내용사진" accept='image/*' 
          value={formData.file} name='image2' onChange={handleInputChange}
        />
        <br></br>
    <CInputGroup>
     <CInputGroupText>내용</CInputGroupText>
     <CFormTextarea aria-label="explain"
      value={formData.content} name='content' onChange={handleInputChange}
     ></CFormTextarea>
    </CInputGroup>
 <br></br>
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
    value={formData.date} name='start'
  />

 <br></br>
 <br></br>
 <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}
  value={formData.date} name='end' 
 />
 <br></br>
 <br></br>
 
 <CFormSwitch
  size="xl"
  label="펀딩 상태"
  id="mission_status"
  value={formData.status ? "on" : "off"} // true일 때 "on", false일 때 "off"
  name='status'
  onChange={handleInputChange}
/>
 <br></br>
 <CFormSelect 
  aria-label="Default select example"
  options={[
    '카테고리',
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3', disabled: true }
  ]}
  value={formData.category} name='category' onChange={handleInputChange}/>
<br></br>

<CFormInput
  type="text"
  placeholder="2023/12/14"
  aria-label="readonly input example"
  label="작성일"
  readOnly
/>
<br></br>
<CFormInput
  type="text"
  placeholder="10000000원"
  aria-label="readonly input example"
  label="모금액"
  readOnly
/>




       </CModalBody>
       <CModalFooter>
         <CButton color="secondary" onClick={() => setVisible(false)}>
           Close
         </CButton>
         <CButton color="primary" onClick={handleUpdate}>저장</CButton>
       </CModalFooter>
     </CModal>
   </>
     );
 }
 
 export default PundingModify;