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
   CFormSelect,
   CFormTextarea
 } from '@coreui/react'
import React from 'react'
import { useState } from 'react'


const UserModify =  () => {
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
      <CInputGroup className="mb-3">
  <CInputGroupText id="basic-addon1">이름</CInputGroupText>
  <CFormInput aria-label="Username" aria-describedby="basic-addon1"/>
</CInputGroup>

<CInputGroup className="mb-3">
  <CFormInput  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <CInputGroupText id="basic-addon2">주소</CInputGroupText>
</CInputGroup>

<CInputGroup className="mb-3">
  <CFormInput placeholder="이메일" aria-label="Username"/>
  <CInputGroupText>@</CInputGroupText>
  <CFormInput placeholder="주소" aria-label="Server"/>
</CInputGroup>

<CFormSelect 
  aria-label="Role"
  options={[
    '-',
    { label: '유저', value: 'user' },
    { label: '관리자', value: 'admin' },
  ]}
/>
<br></br>
<CInputGroup className="mb-3">
  <CInputGroupText>포인트</CInputGroupText>
  <CFormInput aria-label="Amount (to the nearest dollar)"/>
</CInputGroup>

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

export default UserModify;