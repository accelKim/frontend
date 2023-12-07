import { useState, useRef, useEffect } from "react";
import React  from "react";
import axios from "axios";
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
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="mission-category">
            전체&nbsp;&nbsp;&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;활동형&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;참여형&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            도전형
          </div>
          <img
            className="free-icon-heart"
            alt="Free icon heart"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-heart-activity-11746818-1.png"
          />
          <img
            className="free-icon-employee"
            alt="Free icon employee"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-employee-engagement-12693665-1.png"
          />
          <img
            className="free-icon-goal"
            alt="Free icon goal"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-goal-3310109-1.png"
          />
        </div>
      </div>
      <MissionComponent />
      <div className="frame-2">
      <div className="banner-2">
        <div className="banner-cover-2" />
      </div>
      </div>
      <div className="gathering-title">봉사모임</div>
      <div className="group-3">
        <img
          className="free-icon-volunteer"
          alt="Free icon volunteer"
          src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-volunteer-4742664-1.png"
        />
        <div className="gathering-category-1">전체&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |</div>
        <img
          className="free-icon-waste"
          alt="Free icon waste"
          src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-waste-7867450-1.png"
        />
        <div className="gathering-category-2">환경미화&nbsp;&nbsp; |</div>
        <div className="gathering-category-3">재능기부&nbsp;&nbsp; |</div>
        <div className="overlap-2">
          <img
            className="free-icon-volunteer-2"
            alt="Free icon volunteer"
            src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/free-icon-volunteer-779917-1.png"
          />
          <div className="gathering-category-4 ">기부모임</div>
        </div>
      </div>
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