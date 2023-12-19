import "../gathering/GatheringAdd.css";
import React from "react";
import { useState, useRef} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Post from "./Post/Post";

function GatheringAdd() {

    // const [title, setTitle] = useState("");
    // const [intro, setIntro] = useState("");
    // const [image, setImage] = useState(null);
    // const [location, setLocation] = useState("");
    // const [addressObj, setAddressObj] = useState({
    //     zoneCode: "",
    //     fullAddress: "",
    //     subAddress: "",
    // });
    // const [capacity, setCapacity] = useState("");
    // const [etc, setEtc] = useState("");
    // const now = new Date();
    // const localDateTime = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    // const [deadline, setDeadline] = useState(localDateTime);
    // const [startAt, setStartAt] = useState(localDateTime)

    // const navigate = useNavigate();

    // const imageInputRef = useRef();
    // const imageRef = useRef();

    // const config = {
    //     headers:
    //         {
    //             "Content-Type": "multipart/form-data",
    //         }
    // };
    // const handleTitleChange = (e) => {
    //     setTitle(e.target.value);
    // }

    // const handleIntroChange = (e) => {
    //     setIntro(e.target.value);
    // }
    // const handleImgChange = (e) => {
    //     const file = e.target.files[0];
    //     setImage(file);
    //     if (file && file.type.substr(0, 5) === 'image') {
    //         imageRef.current.src = URL.createObjectURL(file);
    //     } else {
    //         imageRef.current.src = '';
    //     }
    // }

    // const handleLocationChange = (e) => {
    //     setLocation(e.target.value);
    // }

    // const handleCapacityChange = (e) => {
    //     setCapacity(e.target.value)
    // }

    // const handleDeadlineChange = (e) => {
    //     setDeadline(e.target.value);
    // }

    // const handleStartAtChange = (e) => {
    //     setStartAt(e.target.value);
    // }

    // const handleEtcChange = (e) => {
    //     setEtc(e.target.value);
    // }

    // const handleSubmit = async () => {
    //     const formData = new FormData();
    //     formData.append("title", title);
    //     formData.append("intro", intro);
    //     formData.append("image", image);
    //     // formData.append("location", location);
    //     formData.append("zoneCode", addressObj.zoneCode);
    //     formData.append("fullAddress", addressObj.fullAddress);
    //     formData.append("subAddress", addressObj.subAddress);
    //     formData.append("capacity", capacity);
    //     formData.append("deadline", deadline);
    //     formData.append("startAt", startAt);
    //     formData.append("etc", etc);

    //     const response = await axios.post('http://localhost:8080/api/gathering', formData, config)
    //         .then((response) => {
    //             console.log("success");
    //             console.log(response);
    //             navigate('/gathering');
    //         })
    //         .catch((error) => {
    //             console.log("fail");
    //             console.log(error);
    //         })


    // }

    return (
        <div className="gathering-add-index">
            <div className="add-wrap-wrapper">
                <div className="add-wrap">
                    <div className="gathering-add-form-wrap">
                        <div className="gathering-add-text">봉사모임 작성</div>
                        <form className="gathering-add-form" method="post">
                            <div className="form-title">모임제목</div>
                            <input type="text" className="title"  />
                            <div className="text-wrapper-2">모임소개</div>
                            <input type="text" className="intro" />
                            <div className="text-wrapper-2">사진등록</div>
                            <input type="file" className="img" />
                            <img  alt="preview" className="img-preview" />
                           
                            <div className="text-wrapper-2">모임 위치</div>
                            <div className="zipcode-button-wrap">
                                <input type="text" className="zonecode"  placeholder="우편번호" readOnly />
                                <Post />    
                            </div>
                            {/* <input type="text" className="location" onChange={handleLocationChange}/> */}
                            <input type="text" className="full-address" />
                            <input type="text" className="extra-address" />
                            <div className="text-wrapper-2">정원</div>
                            <input type="text" className="capacity" />
                            <div className="text-wrapper-2">모집 마감일</div>
                            <input type="datetime-local" className="deadline"/>
                            <div className="text-wrapper-2">모임 일시</div>
                            <input type="datetime-local" className="startAt" />
                            <div className="text-wrapper-2">기타안내사항</div>
                            <input type="text" className="etc" />
                        </form>
                    </div>
                    <div className="add-button-wrap">
                        <div className="add-button">
                            <button className="add-button-text" >작성</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GatheringAdd;
