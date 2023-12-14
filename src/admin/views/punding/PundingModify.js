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
 import { useState } from 'react'
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";

 
 
 const PundingModify =  () => {
     const [visible, setVisible] = useState(false)
     const [startDate, setStartDate] = useState(new Date());
     const [endDate, setEndDate] = useState(new Date());
     
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

      
  <CFormInput type="file" id="mainImage" label="메인이미지" accept='image/*' />
  <br></br>

       <CInputGroup className="mb-3">
   <CInputGroupText id="basic-addon1">제목</CInputGroupText>
   <CFormInput aria-label="title" aria-describedby="basic-addon1"/>
        </CInputGroup>
 
        <CFormInput type="file" id="subIamge" label="내용사진" accept='image/*' />
        <br></br>
    <CInputGroup>
     <CInputGroupText>내용</CInputGroupText>
     <CFormTextarea aria-label="content"></CFormTextarea>
    </CInputGroup>
 <br></br>
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>

 <br></br>
 <br></br>
 <DatePicker selected={endDate} onChange={(date) => setEndDate(date)}/>
 <br></br>
 <br></br>
 
 <CFormSwitch size="xl" label="펀딩 상태" id="mission_status"/>
 <br></br>
 <CFormSelect 
  aria-label="Default select example"
  options={[
    '카테고리',
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3', disabled: true }
  ]}
/>
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
         <CButton color="primary">저장</CButton>
       </CModalFooter>
     </CModal>
   </>
     );
 }
 
 export default PundingModify;