import { useState, useRef, useEffect } from "react";
import React  from "react";
import axios from "axios";
import Nav from 'react-bootstrap/Nav';
import "./home.css";
import MissionComponent from "./missionComponent";
import GatheringComponent from "./gatheringComponent";
import PundingComponent from "./pundingComponent";

 const Home = () => {
  const scrollRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e) => {
    if (isDrag) {
     scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };
  const throttle = (func, ms) => {
    let throttled = false;
    return (...args) => {
      if (!throttled) {
        throttled = true;
        setTimeout(() => {
          func(...args);
          throttled = false;
        }, ms);
      }
    };
  };

  const delay = 100;
  const onThrottleDragMove = throttle(onDragMove, delay);

  const [notices, setNotice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/notice'); // 서버 주소에 맞게 수정
        setNotice(response.data);
      } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="home">
      <img
        className="main-banner"
        alt="main-banner"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/--2-1.png"
      />
      <div className="notice">
        <div className="overlap-notice">
          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>
          <div className="notice-title">공지</div>
        </div>
      </div>
      {notices.map((notice, index) => (
      <p className="notice-text" key={index}>{notice.title}</p>
      ))}
      <p className="move-notice-detail">
        <span className="move-notice-detail-text">공지 전체보기 &gt; </span>
      </p>
      <img
        className="line"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-28.png"
      />
      <div className="banner">
        <div className="banner-cover" />
      </div>
      <div className="misson-title">진행중인 미션</div>
        <Nav variant="phills" defaultActiveKey="#" className="nav-wrap">
           <Nav.Item className="nav-box" >
             <Nav.Link href="#" className="nav-text">전체</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
             <Nav.Link eventKey="link-1" href="#"className="nav-text">참여형</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-2" href="#"className="nav-text">도전형</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-3" href="#"className="nav-text">활동형</Nav.Link>
           </Nav.Item>
         </Nav>
      <img
        className="img"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-18.png"
      />
      <MissionComponent />
      <div className="frame-2">
      <div className="banner-2">
        <div className="banner-cover-2" />
      </div>
      </div>
      <div className="gathering-title">봉사모임</div>
           <Nav variant="phills" defaultActiveKey="#" className="nav-wrap">
           <Nav.Item className="nav-box" >
             <Nav.Link href="#" className="nav-text">전체</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
             <Nav.Link eventKey="link-1" href="#"className="nav-text">환경미화</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-2" href="#"className="nav-text">재능기부</Nav.Link>
           </Nav.Item>
           <Nav.Item className="nav-box">
           <Nav.Link eventKey="link-3" href="#"className="nav-text">후원</Nav.Link>
           </Nav.Item>
         </Nav>
      <img
        className="img"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-18.png"
      />
  
    <GatheringComponent />

      <div className="banner-3">
        <div className="banner-cover-3" />
      </div>
      <div className="text-wrapper-10">인기 펀딩 상품</div>
      <div className="group-6">
        <div className="overlap-3">
          <img
            className="free-icon-cube"
            alt="Free icon cube"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-cube-359399-1.png"
          />
          <div className="text-wrapper-11">전체</div>
        </div>
        <div className="overlap-4">
          <div className="text-wrapper-12">Best</div>
          <img
            className="free-icon-badge"
            alt="Free icon badge"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-badge-5629363-1.png"
          />
        </div>
        <div className="overlap-5">
          <div className="rectangle-2" />
          <div className="text-wrapper-13">패션 잡화</div>
          <img
            className="free-icon-fashion"
            alt="Free icon fashion"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-fashion-1198307-1.png"
          />
        </div>
        <div className="overlap-6">
          <img
            className="free-icon-electric"
            alt="Free icon electric"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-electric-appliance-3362661-1.png"
          />
          <div className="text-wrapper-14">테크 가전</div>
        </div>
        <div className="overlap-7">
          <img
            className="icons"
            alt="Icons"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/icons8--------64-1.png"
          />
          <div className="text-wrapper-15">푸드</div>
        </div>
        <div className="overlap-8">
          <img
            className="icons-2"
            alt="Icons"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/icons8---64-1.png"
          />
          <div className="text-wrapper-16">기타</div>
        </div>
        <div className="overlap-9">
          <img
            className="free-icon-makeup"
            alt="Free icon makeup"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-makeup-6106906-1.png"
          />
          <div className="text-wrapper-17">뷰티</div>
        </div>
      </div>
      <img
        className="line-2"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-17.png"
      />
      <div className="punding-scroll"
      onMouseDown={onDragStart}
      onMouseMove={isDrag ? onThrottleDragMove : null}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      ref={scrollRef}>
          <PundingComponent />
      </div>
    </div>
  );
};

export default Home;