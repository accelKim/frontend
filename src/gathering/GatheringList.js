import React from "react";
import "../gathering/GatheringList.css";
import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function GatheringList() {
    const [gatherings, setGathering] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/content');
          const fetchGathering = response.data;
  
          // 최대 8개의 미션만 가져오도록 수정
          const limitedGathering = fetchGathering.slice(0, 8);
  
          setGathering(limitedGathering);
        } catch (error) {
          console.error('모임 데이터를 불러오는 중 오류 발생:', error);
        }
      };
  
      fetchData();
    }, []);
  

    //네브바

    return (
        <div className="gathering-index">
            <div className="div">
                <div className="main-banner">
                    <div className="main-banner-big-text-wrapper">
                        <p className="main-banner-big-text">
                            똑같은 봉사라도 더 다채롭게 <br />
                            만들어 줄 원데이 취향 모임
                        </p>
                    </div>
                    <div className="card-info-text-small">
                        <p className="card-info-text-small-2">
                            누구나 열고 참여할 수 있는 원데이모임, 소셜링으로 가볍고 즐겁게 만나보세요!
                        </p>
                    </div>
                </div>
            </div>
            <div className="middle-menu-wrap">
            <nav class="tabs">
    <div class="selector"></div>
    <a href="#" class="active"><i class="fab fa-superpowers"></i>Avengers</a>
    <a href="#"><i class="fas fa-hand-rock"></i>Hulk</a>
    <a href="#"><i class="fas fa-bolt"></i>Thor</a>
    <a href="#"><i class="fas fa-burn"></i>Marvel</a>
  </nav>

                {/* <div className="middle-menu-blank" /> */}
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
                        <option value="OPEN">모집중</option>
                        <option value="CLOSED">모집 마감</option> 
                    </select>
                </div>
                 
            </div>
            <div className="gathering-list-wrap">
                {gatherings.map((gathering, index) => (
                    <div className="gathering-list" key={index}>
                        <div className="gathering-list-2">
                            <Link to={`/${gathering.gatheringId}`}><div className="gathering-list-image" style={{ backgroundImage: `url(${gathering.image})` }} /></Link>
                            <div className="gathering-list-info">
                                <div className="gathering-list-title">
                                    <Link to={`/${gathering.gatheringId}`}><div className="gathering-list-title-2">{gathering.title}</div></Link>
                                </div>
                                <div className="gathering-list-sum"><Link to={`/${gathering.gatheringId}`}>{gathering.intro}</Link></div>
                                <div className="gathering-list-3">
                                    <img
                                        className="gathering-list-4"
                                        alt="Gathering list"
                                        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656753efcb8de04689f6bb1b/img/frame-427318306.svg"
                                    />
                                    <div className="gathering-list-5">
                                        <img
                                            className="gathering-list-6"
                                            alt="Gathering list"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656753efcb8de04689f6bb1b/img/group@2x.png"
                                        />
                                        <div className="gathering-list-7">
                                            <div className="text-wrapper-3">{gathering.count}/{gathering.capacity}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="gathering-list-8">
                <div className="register-button-wrap">
                    <div className="register-button">
                        <div className="register-text"><Link to="/gathering/add" className="register-button">작성</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GatheringList;