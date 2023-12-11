import "./MissionList.css";
import React from "react";
import Nav from 'react-bootstrap/Nav';

function MissionList() {

    return (
        <div className="mission-list-index">
      <div className="mission-list-wrap-wrapper">
        <div className="mission-list-wrap">
          <div className="header-login">
            <div className="header-wrap">
              <div className="eco-connect-logo">
                <img
                  className="img"
                  alt="Eco connect logo"
                  src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656f39b816e4b95e9e1c32c1/img/eco-connect-logo.png"
                />
              </div>
              <div className="header-menu-wrap">
                <div className="header-menu">
                  <div className="text-wrapper">봉사미션</div>
                  <div className="text-wrapper">봉사모임</div>
                  <div className="text-wrapper">리워드</div>
                  <div className="text-wrapper">펀딩</div>
                  <div className="text-wrapper">고객지원</div>
                </div>
              </div>
              <img
                className="header-icons"
                alt="Header icons"
                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/header-icons.svg"
              />
            </div>
          </div>
          <div className="mission-image-wrap">
            <img
              className="mission-image"
              alt="Mission image"
              src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image.png"
            />
          </div>
          <div className="mission-middle-menu">
          <Nav variant="phills" defaultActiveKey="#">
      <Nav.Item >
        <Nav.Link href="#" className="nav-text">전체</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="#"className="nav-text">참여형</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-2" href="#"className="nav-text">도전형</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="link-3" href="#"className="nav-text">활동형</Nav.Link>
      </Nav.Item>
    </Nav>

               <div className="middle-menu-search">
                    <img
                            className="search-icon"
                            alt="Search icon"
                            src="https://ifh.cc/g/mWbmjO.png"
                        />
                    <input className="search-box" type="text" placeholder="검색">
                        
                    </input>
                </div>
                <div className="select-wrap">
                    <select 
                    >
                        <option value="">-- 선택하세요 --</option>
                        <option value="OPEN">진행중 미션</option>
                        <option value="CLOSED">종료된 미션</option> 
                    </select>
                </div>
          </div>
         
          
        
          <div className="main-wrap">
            <div className="main-info">
              <div className="div-6">
                <div className="my-profile-wrap">
                  <div className="my-profile">
                    <div className="my-profile-image">
                      <div className="profile-image">
                        <img
                          className="profile-image-2"
                          alt="Profile image"
                          src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/profile-image@2x.png"
                        />
                      </div>
                    </div>
                    <div className="my-profile-info-wrap">
                      <div className="username-info-wrap">
                        <img
                          className="main-account"
                          alt="Main account"
                          src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/main-account.svg"
                        />
                        <div className="username-info">
                          <div className="div-4">
                            <div className="username">User Name</div>
                          </div>
                          <img
                            className="status-wrap"
                            alt="Status wrap"
                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/status-wrap.svg"
                          />
                        </div>
                      </div>
                      <div className="profile-detail">
                        <div className="profile-nickname">
                          <div className="nickname">Nickname</div>
                        </div>
                        <div className="profile-info-wrap">
                          <div className="profile-info">
                            <div className="profile-grade">서포터</div>
                          </div>
                          <div className="profile-hold">
                            <div className="text-wrapper-2">보유금액</div>
                          </div>
                          <div className="my-holding-wrap">
                            <div className="my-holding">100 WON</div>
                          </div>
                        </div>
                        <div className="div-2">
                          <div className="my-point-blank" />
                          <div className="my-point-text-wrap">
                            <div className="text-wrapper-2">포인트</div>
                          </div>
                          <div className="div-2">
                            <div className="my-point-hold">300 P</div>
                          </div>
                        </div>
                      </div>
                      <div className="my-profile-button">
                        <div className="donation-list-button">
                          <div className="text-wrapper-3">후원목록</div>
                        </div>
                        <div className="mypage-button">
                          <div className="text-wrapper-3">마이페이지</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-new-challenge">
                  <div className="sub-banner-wrap">
                    <img
                      className="sub-banner"
                      alt="Main image"
                      src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/main-image.png"
                    />
                  </div>
                  <div className="image-info-wrap">
                    <div className="div-2">
                      <div className="image-info-text-big">새로운 도전을 시작해보세요</div>
                    </div>
                    <div className="div-2">
                      <p className="image-info-text">
                        개인 후원부터 제품・콘텐츠・서비스 출시, 성장까지 에코커넥트가 함께할게요
                      </p>
                    </div>
                    <div className="div-6">
                      <div className="image-button-wrap">
                        <div className="explore-button">
                          <div className="text-wrapper-4">Explore</div>
                        </div>
                        <button className="create-button">
                          <div className="text-wrapper-4">Create</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mission-list-wrap-2">
              <div className="mission-list">
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-1.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-2.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-3.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-4.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mission-list">
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-5.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-6.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-7.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-8.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mission-list">
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-9.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-10.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-11.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
                <div className="mission-frame-wrapper">
                  <div className="mission-frame">
                    <div className="mission-image-wrapper">
                      <img
                        className="mission-image-2"
                        alt="Mission image"
                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6570992a80abe6b84bdfe96b/img/mission-image-12.svg"
                      />
                    </div>
                    <div className="mission-info">
                      <div className="mission-info-wrap">
                        <div className="div-2">
                          <div className="mission-name-text">쓰레기 줍기</div>
                        </div>
                        <div className="mission-point">
                          <div className="mission-point-text">10 P</div>
                        </div>
                      </div>
                    </div>
                    <div className="challenge-button">
                      <div className="text-wrapper-4">도전하기</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pagination-button">
              <div className="pagination-left-wrap">
                <div className="pagination-left">
                  <img
                    className="img-3"
                    alt="Double left"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/double-left@2x.png"
                  />
                </div>
              </div>
              <div className="pagination">
                <div className="text-wrapper-5">1</div>
              </div>
              <div className="pagination-num">
                <div className="element">2</div>
              </div>
              <div className="pagination">
                <div className="text-wrapper-5">3</div>
              </div>
              <div className="pagination">
                <div className="text-wrapper-5">4</div>
              </div>
              <div className="pagination">
                <div className="text-wrapper-5">5</div>
              </div>
              <div className="pagination-right">
                <div className="double-right-wrapper">
                  <img
                    className="img-3"
                    alt="Double right"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65715de20811290773747d5e/img/double-right@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="footer-wrap">
              <div className="logo-wrap">
                <img
                  className="img"
                  alt="Eco connect logo"
                  src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656f39b816e4b95e9e1c32c1/img/eco-connect-logo.png"
                />
              </div>
              <div className="menu-wrap">
                <div className="text-wrapper-6">미용안내</div>
                <div className="text-wrapper-6">공지사항</div>
                <div className="q-a">Q&amp;A</div>
                <div className="text-wrapper-6">이용약관</div>
                <p className="p">개인정보 수집 및 이용 동의</p>
              </div>
              <div className="inquiry-button-wrap">
                <div className="inquiry">문의하기</div>
                <div className="direct-button">
                  <div className="direct">바로가기</div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
    )
}

export default MissionList;