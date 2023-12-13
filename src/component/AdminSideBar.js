import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./AdminSubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import './sidebar.css'

class AdminSideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>Eco Connect</h3>
        </div>

        <Nav className="flex-column pt-2">
          <p className="ml-3">관리자</p>

          <Nav.Item className="active">
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              회원 관리
            </Nav.Link>
          </Nav.Item>

      
          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              환경 보호 미션 관리
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              봉사모임 관리
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              펀딩 관리
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="#">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              공지사항 관리
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default AdminSideBar;