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
    CFormTextarea
  } from '@coreui/react'
 import React from 'react'
 import { useState } from 'react'
 
 
 const MissionModify =  () => {
     const [visible, setVisible] = useState(false)
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

      
  <CFormInput type="file" id="formFile" label="이미지" accept='image/*' />
  <br></br>

       <CInputGroup className="mb-3">
   <CInputGroupText id="basic-addon1">제목</CInputGroupText>
   <CFormInput aria-label="title" aria-describedby="basic-addon1"/>
        </CInputGroup>
 
    <CInputGroup>
     <CInputGroupText>내용</CInputGroupText>
     <CFormTextarea aria-label="content"></CFormTextarea>
    </CInputGroup>
 <br></br>


 <CInputGroup className="mb-3">
   <CInputGroupText>제공 포인트</CInputGroupText>
   <CFormInput aria-label="Amount (to the nearest dollar)"/>
 </CInputGroup>

 <CFormSwitch size="xl" label="미션 활성화" id="mission_status"/>
 
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
 
 export default MissionModify;