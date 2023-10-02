import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useCollapse } from "react-collapsed";
import { ToastContainer, toast } from "react-toastify";

import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'react-toastify/dist/ReactToastify.css'

import { Pagination } from "swiper/modules";

import introPhoto from './images/intro/intro.jpeg';
import greetingsPhoto from './images/greetings/greetings.jpeg';
import pic1 from './images/gallery/pic1.jpeg';
import pic2 from './images/gallery/pic2.jpeg';
import pic3 from './images/gallery/pic3.jpeg';
import pic4 from './images/gallery/pic4.jpeg';
import pic5 from './images/gallery/pic5.jpeg';
import googleMap from './images/location/google-map.png';
import naverMap from './images/location/naver-map.png';
import kakaoMap from './images/location/kakao-map.png';
import kakaoPay from './images/account/kakaoPay.png'
import isActive = toast.isActive;
import * as url from "url";

function App() {
    const images = [pic1, pic2, pic3, pic4, pic5];

    return (
        <div className="App">
            <div className="card">
                <Intro/>
                <Greetings/>
                <Members />
                <HonJus />
                <Gallery images={images} />
                <Location />
                <Account />
            </div>
        </div>
    );
}

function Intro() {
    return (
        <div className="intro-wrap">
            <div className="intro-title">
                <div className="intro-title-groom">
                    <p>이승언</p>
                </div>
                <div className="intro-title-date">
                    <div className="month">10</div>
                    <div className="divider-wrap">
                        <div className="divider"></div>
                    </div>
                    <div className="day">21</div>
                </div>
                <div className="intro-title-bride">
                    <p>김수연</p>
                </div>
            </div>
            <div className="intro-photo">
                <div className="blur top"></div>
                <img src={introPhoto} alt="intro" className="photo"/>
                <div className="intro-blend-video">
                    <video src="https://mcard.fromtoday.co.kr/mcard/assets/flower_00.mp4" autoPlay loop muted
                           playsInline></video>
                </div>
                <div className="blur bottom"></div>
            </div>
            <div className="intro-description">
                2023년 10월 21일 토요일 낮 12시 30분
                <br/>
                더 청담 / 노블레스홀
            </div>
        </div>
    )
}

function Greetings() {
    return (
        <div className="greetings-wrap">
            <div className="date fade-in">
                2023.10.21
            </div>
            <div className="title fade-in">
                초대합니다
            </div>
            <div className="comment fade-in">
                저희 둘 소중한 만남으로
                <br/>
                축복 속에서 하나가 되려 합니다.
                <br/>
                서로 존중하고 신뢰를 쌓으며
                <br/>
                사랑을 키워나갈 수 있도록
                <br/>
                오셔서 자리를 빛내주시면 감사하겠습니다.
            </div>
            <div className="photo fade-in">
                <img src={greetingsPhoto} alt="greetings" className="photo"/>
            </div>
        </div>
    )
}

function Members() {
    return (
        <div className="members-wrap">
            <Member father="이대희" mother="송경애" relation="아들" name="승언" phoneNumber="010-9910-0433" />
            <Member father="김진우" mother="황정순" relation="딸" name="수연" phoneNumber="010-8780-7290" />
        </div>
    )
}

function HonJus() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="honju-wrap">
            <div className="contact-box" onClick={() => setDialogOpen(true)}>
                <p>혼주에게 연락하기</p>
            </div>
            {dialogOpen && <HonJuDialog onClose={() => setDialogOpen(false)} />}
        </div>
    )
}

interface GalleryProps {
    images: string[];
}

function Gallery({ images }: GalleryProps) {
    return (
        <div className="gallery-wrap">
            <>
                <div className="title">
                    갤러리
                </div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={ [Pagination] }
                    className="gallery-swiper"
                >
                    <SwiperSlide>
                        <img src={images[0]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images[1]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images[2]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images[3]}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={images[4]}/>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
}

function Location() {
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.358064979668!2d127.04085057621585!3d37.52305587204993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca47772a4ef1f%3A0x5635f97351d1586f!2z642UIOyyreuLtA!5e0!3m2!1sko!2skr!4v1696135354159!5m2!1sko!2skr"

    return (
        <div className="location-wrap">
            <div className="title">
                오시는 길
            </div>
            <div className="venue">
                더 청담 / 노블레스홀
            </div>
            <div className="address">
                서울특별시 강남구 도산대로 434 (청담동 4-10)
            </div>
            <div className="map">
                <iframe src={mapSrc}></iframe>
            </div>
            <div className="navigate">
                <div className="naverMap"
                     onClick={ () => {
                         window.open("https://naver.me/501ecdHe", "_blank");
                     }
                }>
                    <img alt="naver-map" className="map-icon" src={naverMap}/>
                    <span>네이버 지도</span>
                </div>
                <div className="kakaoMap"
                     onClick={ () => {
                         window.open("https://kko.to/A487RE-Aab", "_blank");
                     }
                }>
                    <img alt="kakao-map" className="map-icon" src={kakaoMap}/>
                    <span>카카오맵</span>
                </div>
                <div className="googleMap"
                     onClick={ () => {
                         window.open("https://maps.app.goo.gl/veTW5u4hBB2dqQUo8", "_blank");
                     }
                }>
                    <img alt="google-map" className="map-icon" src={googleMap}/>
                    <span>구글 지도</span>
                </div>
            </div>
            <div className="guide">
                <div className="metro">
                    <div className="title">
                        지하철
                    </div>
                    <div className="content">
                        [3호선 신사역] 1번 출구에서 4212번 버스 이용
                    </div>
                    <div className="content">
                        [7호선 / 분당선 강남구청역] 4번 출구에서 도보 10분
                    </div>
                    <div className="content">
                        [7호선 / 분당선 강남구청역] 4번 출구에서 셔틀버스 운행
                    </div>
                </div>
                <div className="bus">
                    <div className="title">
                        버스
                    </div>
                    <div className="content">
                        [차움검진센터, 더 청담] 4212
                    </div>
                    <div className="content">
                        [청담치안센터] 9607
                    </div>
                    <div className="content">
                        [농협 앞] 343
                    </div>
                    <div className="content">
                        [청담초등학교] 143 (정릉, 고속버스-개포동), 4318
                    </div>
                    <div className="content">
                        [일지아트홀] 145, 301, 440, 472, 9407, 9507
                    </div>
                    <div className="content">
                        [영동고교 앞] 301, 342, 472, 3011, 4312
                    </div>
                </div>
                <div className="car">
                    <div className="title">
                        자가용
                    </div>
                    <div className="content">
                        더 청담 건물 내 주차 (만차 시 외부주차장 이용, 발렛 가능)
                    </div>
                </div>
            </div>
        </div>
    )
}

function Account() {
    const config = {
        duration: 500
    };

    const { getCollapseProps: getCollapseProps1, getToggleProps: getToggleProps1, isExpanded: isExpanded1 } = useCollapse(config);
    const { getCollapseProps: getCollapseProps2, getToggleProps: getToggleProps2, isExpanded: isExpanded2 } = useCollapse(config);

    return (
        <div className="account-wrap">
            <div className="title">
                마음 전하실 곳
            </div>
            <div className="collapsible">
                <div className="header" { ...getToggleProps1() }>
                    신랑측 계좌번호
                </div>
                <div { ...getCollapseProps1() }>
                    <div className="content">
                        <AccountBox bank="카카오뱅크" account="3333-17-8529792" name="이승언" hasKakaoPay={true} kakaoPayUrl="https://qr.kakaopay.com/FDEqghIZp"/>
                        <div className="divider"></div>
                        <AccountBox bank="농협" account="751117-52-098636" name="이대희" hasKakaoPay={false} kakaoPayUrl=""/>
                        <div className="divider"></div>
                        <AccountBox bank="농협" account="751047-52-024839" name="송경애" hasKakaoPay={false} kakaoPayUrl=""/>
                    </div>
                </div>
            </div>
            <div className="collapsible">
                <div className="header" { ...getToggleProps2() }>
                    신부측 계좌번호
                </div>
                <div { ...getCollapseProps2() }>
                    <div className="content">
                        <AccountBox bank="카카오뱅크" account="3333-08-8905713" name="김수연" hasKakaoPay={true} kakaoPayUrl="https://qr.kakaopay.com/FE9i5n6Hy"/>
                        <div className="divider"></div>
                        <AccountBox bank="국민" account="021-24-0108-424" name="김진우" hasKakaoPay={false} kakaoPayUrl=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface AccountBoxProps {
    bank: string
    account: string
    name: string
    hasKakaoPay: boolean
    kakaoPayUrl: string
}

function AccountBox({ bank, account, name, hasKakaoPay, kakaoPayUrl }: AccountBoxProps) {
    const toastId = React.useRef<number | string | null>(null);
    const copyToClipboard = () => {
        navigator.clipboard.writeText(account).then( () => {
            toast("복사되었습니다.", {
                position: "bottom-center",
                autoClose: 500,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark"
            });
        });
    };

    const goKakaoPay = () => {
        window.open(kakaoPayUrl, "_blank");
    };

    return (
        <div className="account-box">
            <div className="account">
                {bank} {account}
                <br/>
                {name}
            </div>
            <div className="actions">
                <div className="copy-button" onClick={copyToClipboard}>복사하기</div>
                <ToastContainer limit={1}/>
                {
                    hasKakaoPay
                        ? <div className="pay-button" onClick={goKakaoPay}><img src={kakaoPay}/></div>
                        : <div className="empty-button"/>
                }
            </div>
        </div>
    )
}

interface HonJuDialogProps {
    onClose: () => void;
}

function HonJuDialog({ onClose }: HonJuDialogProps) {
    return (
        <div className="dialog" onClick={onClose}>
            <div className="dialog-content">
                <div className="title">
                    <p>혼주에게 연락하기</p>
                </div>
                <div className="dialog-honjus">
                    <div className="groom">
                        <HonJu role="신랑 아버지" name="이대희" phoneNumber="010-3504-1491"/>
                        <HonJu role="신랑 어머니" name="송경애" phoneNumber="010-9567-1491"/>
                    </div>
                    <div className="divider"></div>
                    <div className="bride">
                        <HonJu role="신부 아버지" name="김진우" phoneNumber="010-3693-7290"/>
                        <HonJu role="신부 어머니" name="황정순" phoneNumber="010-5097-7290"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface HonJuProps {
    role: string,
    name: string,
    phoneNumber: string
}

function HonJu({ role, name, phoneNumber }: HonJuProps) {
    return (
        <div>
            <div className="role">{role}</div>
            <div className="name">{name}</div>
            <a href={`tel:${phoneNumber}`}>
                <span className="material-icons">call</span>
            </a>
            <a href={`sms:${phoneNumber}`}>
            <span className="material-icons">email</span>
            </a>
        </div>
    )
}

interface MemberProps {
    father: string;
    mother: string;
    relation: string;
    name: string;
    phoneNumber: string;
}
function Member({ father, mother, relation, name, phoneNumber }: MemberProps) {
    return (
        <div>
            <span>{father}</span>
            <span> · </span>
            <span>{mother} </span>
            <span className="relation">의 {relation}</span>
            <span className="lname"> {name}</span>
            <a href={`tel:${phoneNumber}`}>
                <span className="material-icons">call</span>
            </a>
        </div>
    )
}

export default App;