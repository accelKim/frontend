import React from "react";
import "./AdminUser.css";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Sidebar from "../component/sidebar";

 const AdminUser = () => {
  return (
    <div className="adim-user-index">
      <div className="div-2">
        {/* 사이드바 자리 */}
        
        <div className="table-wrap">
        <Table responsive='sm' striped bordered hove size="sm">
          
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 7 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 7}).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>4</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>5</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
            
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>6</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>7</td>
          
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>  
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>8</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>9</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
        <tr>
          <td>10</td>
          {Array.from({ length: 7 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
          <td><ButtonGroup size="sm"><Button>수정</Button><Button variant="danger">삭제</Button></ButtonGroup></td>
        </tr>
      </tbody>
    </Table>
    </div>
      </div>
    </div>
  );
};

export default AdminUser;