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
 
 
 const GatheringModify =  () => {
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


 

 <CFormSwitch size="xl" label="모임 일시정지" id="mission_status" defaultChecked/>
 
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
 
 export default GatheringModify;