import "../gathering/GatheringUpdate.css";

import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function GatheringUpdate() {

    const [title, setTitle] = useState("");
    const [intro, setIntro] = useState("");
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [location, setLocation] = useState("");
    const [capacity, setCapacity] = useState("");
    const [etc, setEtc] = useState("");
    const path = 'http://localhost:8080/files/';

    let params = useParams();
    let gatheringId = params.gatheringId;
    const navigate = useNavigate();

    const imageInputRef = useRef();
    const imageRef = useRef();

    const fetchGathering = () => {
        console.log(gatheringId);
        axios.get(`http://localhost:8080/api/gathering/${gatheringId}`)
            .then((response) => {
                console.log(response.data);
                const gathering = response.data;
                setTitle(gathering.title);
                setIntro(gathering.intro);
                setLocation(gathering.location);
                setCapacity(gathering.capacity);
                setEtc(gathering.etc);
                setImage(gathering.image);
                console.log(path + gathering.image);
                setImageUrl(path + gathering.image);
            })
    };


    useEffect(() => {
        fetchGathering();

    },[gatheringId])

    const config = {
        headers:
            {
                "Content-Type": "multipart/form-data",
            }
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleIntroChange = (e) => {
        setIntro(e.target.value);
    }
    const handleImgChange = (e) => {

        const file = e.target.files[0];
        setImage(file);
        if (file && file.type.substr(0, 5) === 'image') {
            imageRef.current.src = URL.createObjectURL(file);
        } else {
            imageRef.current.src = '';
        }
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    }

    const handleCapacityChange = (e) => {
        setCapacity(e.target.value)
    }

    const handleEtcChange = (e) => {
        setEtc(e.target.value);
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("intro", intro);
        formData.append("image", image);
        formData.append("location", location);
        formData.append("capacity", capacity);
        formData.append("etc", etc);

        const response = await axios.put(`http://localhost:8080/api/gathering/${gatheringId}`, formData, config)
            .then((response) => {
                console.log("success");
                console.log(response);
                navigate('/');
            })
            .catch((error) => {
                console.log("fail");
                console.log(error);
            })


    }

    return (
        <div className="gathering-update-index">
            <div className="add-wrap-wrapper">
                <div className="add-wrap">
                    <div className="gathering-update-form-wrap">
                        <div className="gathering-update-text">봉사모임 수정</div>
                        <form className="gathering-update-form" method="post">
                            <div className="form-title">모임제목</div>
                            <input type="text" className="title" onChange={handleTitleChange} value={title}/>
                            <div className="text-wrapper-2">모임소개</div>
                            <input type="text" className="intro" onChange={handleIntroChange} value={intro} />
                            <div className="text-wrapper-2">사진등록</div>
                            <input type="file" className="img" onChange={handleImgChange} ref={imageInputRef}/>
                            <img ref={imageRef} alt="preview" className="img-preview" src={imageUrl} />
                            <div className="text-wrapper-2">모임 위치</div>
                            <input type="text" className="location" onChange={handleLocationChange} value={location}/>
                            <div className="text-wrapper-2">정원</div>
                            <input type="text" className="capacity" onChange={handleCapacityChange} value={capacity}/>
                            <div className="text-wrapper-2">기타안내사항</div>
                            <input type="text" className="etc" onChange={handleEtcChange} value={etc}/>
                        </form>
                    </div>
                    <div className="add-button-wrap">
                        <div className="add-button">
                            <button className="add-button-text" onClick={handleSubmit}>작성</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GatheringUpdate;
