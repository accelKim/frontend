import React, {useState} from "react";
import "./login.css"


function Login() {
    return(
        <div className="index">
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="the-interior-has-a" />
                    <div className="element">
                        <div className="overlap-group">
                            <img
                                className="icon-leaf"
                                alt="Icon leaf"
                                src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/6566e95b57800fdfcb79eaeb/img/---icon--leaf-@2x.png"
                            />
                        </div>
                        <div className="ECO-CONNECT">
                            ECO <br />
                            CONNECT
                        </div>
                    </div>
                    <div className="group">
                        <div className="div">
                            <div className="medium-narrow-kr">
                                <div className="text-wrapper">카카오 로그인</div>
                                <img
                                    className="image"
                                    alt="Image"
                                    src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/6566e9e07701c048f8af4ab9/img/------.svg"
                                />
                            </div>
                            <div className="green-kr">
                                <img
                                    className="img"
                                    alt="Image"
                                    src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/6566e95b57800fdfcb79eaeb/img/-------3.svg"
                                />
                                <div className="text-wrapper-2">네이버 로그인</div>
                            </div>
                            <div className="overlap-2">
                                <div className="group-2">
                                    <p className="welcome-to-econnect">
                                        <span className="span">Welcome to </span>
                                        <span className="text-wrapper-3">Econnect</span>
                                    </p>
                                    <p className="p">
                    <span className="text-wrapper-4">
                      게정이 없으신가요?
                      <br />
                    </span>
                                        <span className="text-wrapper-5">회원가입</span>
                                    </p>
                                </div>
                                <div className="text-wrapper-6">로그인</div>
                            </div>
                            <div className="group-3">
                                <div className="text-wrapper-7">이메일</div>
                                <input className={"div-wrapper"}
                                       type={"email"}
                                       placeholder={"Enter email"}
                                       name={"input_email"}
                                />
                            </div>
                            <div className="group-4">
                                <div className="text-wrapper-7">비밀번호</div>
                                <input
                                    type={"password"}
                                    className={"overlap-3"}
                                    placeholder={"Enter password"}
                                    name={"input_pw"}
                                />
                            </div>
                            <div className="text-wrapper-9">비밀번호를 잊으셨나요?</div>
                            <div className="overlap-group-wrapper">
                                <button type={"button"} className={"overlap-4"} >
                                    로그인
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="group-5">
                        <div className="group-6">
                            <div className="text-wrapper-11">로그인</div>
                            <div className="text-wrapper-12">Lorem Ipsum is simply</div>
                        </div>
                        <p className="lorem-ipsum-is">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry&#39;s standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    <img
                        className="pngegg"
                        alt="Pngegg"
                        src="https://cdn.animaapp.com/projects/6566e67221a5f8ac6355e523/releases/6566e95b57800fdfcb79eaeb/img/pngegg--3--1@2x.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Login;