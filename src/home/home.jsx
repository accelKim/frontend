import React from "react";
import "./home.css";

 const Home = () => {
  document.querySelectorAll(".punding-scroll").forEach(el => {
    el.addEventListener("wheel", e => {
      // 스크롤이 왼쪽 또는 오른쪽 끝에 도달했는지 확인
      const atLeftEnd = (el.scrollLeft === 0);
      
      // 논리상으로는 ===로 하는 게 맞겠지만, 브라우저에 따라 클 수도 있다고 하니 이렇게 둔다.
      const atRightEnd = (el.scrollLeft + el.offsetWidth >= el.scrollWidth);
  
      // 휠 이벤트가 위로 가는 것인지 아래로 가는 것인지 확인
      const scrollingUp = (e.deltaY < 0);
      const scrollingDown = (e.deltaY > 0);
  
      if ((atLeftEnd && scrollingUp) || (atRightEnd && scrollingDown)) {
        // 스크롤이 양 끝에 있고 사용자가 해당 방향으로 계속 스크롤하려고 하면,
        // 이벤트의 기본 동작을 수행하여 수직 스크론을 허용합니다.
        return;
      }
  
      // 그렇지 않으면, 가로 스크롤을 진행합니다.
      e.preventDefault();
      // noinspection JSSuspiciousNameCombination
      el.scrollLeft += e.deltaY * 2;
    })
  });
  return (
    <div className="home">
      <img
        className="element"
        alt="Element"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/656fffff39fbdde4fdb84a78/img/--2-1.png"
      />
      <div className="group">
        <div className="overlap-group">
          <div className="rectangle-wrapper">
            <div className="rectangle" />
          </div>
          <div className="text-wrapper">공지</div>
        </div>
      </div>
      <p className="notice">[점검안내] 지도 서비스 DB작업으로 인한 저장 기능 이용제한 안내 (11/28)</p>
      <p className="move-notice-detail">
        <span className="span">공지 전체보기 </span>
        <span className="text-wrapper-2">&gt;</span>
      </p>
      <img
        className="line"
        alt="Line"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/line-28.png"
      />
      <div className="frame">
        <div className="cover" />
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
      <div className="mission-frame">
      <div className="mission-box">
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/sFe7NuY1/img/--------8@2x.png"
        />
        <div className="text-wrapper">쓰레기줍기</div>
      </div>
      <div className="mission-box">
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/sFe7NuY1/img/--------6@2x.png"
        />
        <div className="text-wrapper">쓰레기줍기</div>
      </div>
      <div className="mission-box">
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/sFe7NuY1/img/--------7@2x.png"
        />
        <div className="text-wrapper">쓰레기줍기</div>
      </div>
      <div className="mission-box">
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/sFe7NuY1/img/--------3@2x.png"
        />
        <div className="text-wrapper">쓰레기줍기</div>
      </div>
      <div className="mission-box">
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/sFe7NuY1/img/--------4@2x.png"
        />
        <div className="text-wrapper">쓰레기줍기</div>
      </div>
      <div className="mission-box">
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/sFe7NuY1/img/--------2@2x.png"
        />
        <div className="text-wrapper">쓰레기줍기</div>
      </div>
      <div className="mission-box">
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/sFe7NuY1/img/--------1@2x.png"
        />
        <div className="text-wrapper">쓰레기줍기</div>
      </div>
      <div className="mission-box">
        <img
          className="element"
          alt="Element"
          src="https://c.animaapp.com/sFe7NuY1/img/--------5@2x.png"
        />
        <div className="text-wrapper">쓰레기줍기</div>
      </div>
    </div>
      <div className="frame-2">
        <img
          className="nature"
          alt="Nature"
          src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/nature-3289812-1920-2-1.png"
        />
        <div className="cover-2" />
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
      <img
        className="group-4"
        alt="Group"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/group-273.png"
      />
      <img
        className="group-4"
        alt="Group"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/group-278.png"
      />
      <img
        className="group-4"
        alt="Group"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/group-275.png"
      />
      <img
        className="group-4"
        alt="Group"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/group-279.png"
      />
      <img
        className="group-4"
        alt="Group"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/group-277.png"
      />
      <img
        className="group-4"
        alt="Group"
        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/group-280.png"
      />
      <div className="group-wrapper">
        <div className="group-5" />
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
      <div className="punding-scroll">
        <div className="NFT-grid">
          <div className="NFT-card">
            <div className="overlap-10">
              <img
                className="element-3"
                alt="Element"
                src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/------1.png"
              />
              <button className="btn">
                <div className="div-wrapper">
                  <div className="text-wrapper-18">후원하기</div>
                </div>
              </button>
              <div className="info">
                <div className="text-wrapper-19">3d 1h 50m</div>
                <div className="text-wrapper-20">9900원</div>
              </div>
              <div className="info-2">
                <div className="match-value">
                  <div className="text-wrapper-21">85% 달성</div>
                </div>
                <p className="text-wrapper-22">깨물어주고 싶은 상큼함 초록빛 상큼한 디저트</p>
              </div>
              <div className="text-wrapper-23">초록매실</div>
            </div>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap-10">
            <img
              className="element-3"
              alt="Element"
              src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/-----2.png"
            />
            <button className="btn">
              <div className="div-wrapper">
                <div className="text-wrapper-18">후원하기</div>
              </div>
            </button>
            <div className="info">
              <div className="text-wrapper-19">3d 1h 50m</div>
              <div className="text-wrapper-20">9900원</div>
            </div>
            <div className="info-2">
              <div className="match-value">
                <div className="text-wrapper-21">85% 달성</div>
              </div>
              <p className="text-wrapper-22">깨물어주고 싶은 상큼함 초록빛 상큼한 디저트</p>
            </div>
            <div className="text-wrapper-23">초록매실</div>
          </div>
        </div>
        <div className="NFT-card-2">
          <div className="overlap-10">
            <img
              className="element-3"
              alt="Element"
              src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/-----10.png"
            />
            <button className="btn">
              <div className="div-wrapper">
                <div className="text-wrapper-18">후원하기</div>
              </div>
            </button>
            <div className="info">
              <div className="text-wrapper-19">3d 1h 50m</div>
              <div className="text-wrapper-20">9900원</div>
            </div>
            <div className="info-2">
              <div className="match-value">
                <div className="text-wrapper-21">85% 달성</div>
              </div>
              <p className="text-wrapper-22">깨물어주고 싶은 상큼함 초록빛 상큼한 디저트</p>
            </div>
            <div className="text-wrapper-23">초록매실</div>
          </div>
        </div>
        <div className="NFT-card-3">
          <div className="overlap-11">
            <div className="card" />
            <img
              className="element-4"
              alt="Element"
              src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/-----3.png"
            />
            <button className="button">
              <div className="div-wrapper">
                <div className="text-wrapper-18">후원하기</div>
              </div>
            </button>
            <div className="info-3">
              <div className="text-wrapper-19">3d 1h 50m</div>
              <div className="text-wrapper-20">9900원</div>
            </div>
            <div className="info-4">
              <div className="match-value">
                <div className="text-wrapper-21">85% 달성</div>
              </div>
              <p className="text-wrapper-22">깨물어주고 싶은 상큼함 초록빛 상큼한 디저트</p>
            </div>
            <div className="text-wrapper-24">초록매실</div>
          </div>
        </div>
        <div className="NFT-card-wrapper">
          <div className="NFT-card">
            <div className="overlap-10">
              <img
                className="element-3"
                alt="Element"
                src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/-----7.png"
              />
              <button className="btn">
                <div className="div-wrapper">
                  <div className="text-wrapper-18">후원하기</div>
                </div>
              </button>
              <div className="info">
                <div className="text-wrapper-19">3d 1h 50m</div>
                <div className="text-wrapper-20">9900원</div>
              </div>
              <div className="info-2">
                <div className="match-value">
                  <div className="text-wrapper-21">85% 달성</div>
                </div>
                <p className="text-wrapper-22">깨물어주고 싶은 상큼함 초록빛 상큼한 디저트</p>
              </div>
              <div className="text-wrapper-23">초록매실</div>
            </div>
          </div>
        </div>
        <div className="NFT-card-4">
          <div className="overlap-10">
            <img
              className="nature-2"
              alt="Nature"
              src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/657012a3157386e1edbc12b0/img/nature-3289812-1920-1@2x.png"
            />
            <button className="btn">
              <div className="div-wrapper">
                <div className="text-wrapper-18">후원하기</div>
              </div>
            </button>
            <div className="info">
              <div className="text-wrapper-19">3d 1h 50m</div>
              <div className="text-wrapper-20">9900원</div>
            </div>
            <div className="info-2">
              <div className="match-value">
                <div className="text-wrapper-21">85% 달성</div>
              </div>
              <p className="text-wrapper-22">깨물어주고 싶은 상큼함 초록빛 상큼한 디저트</p>
            </div>
            <div className="text-wrapper-23">초록매실</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;