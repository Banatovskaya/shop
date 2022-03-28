import { useState } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import video from '../../assets/video.mp4';
import './carusel.css';

const imgArrForCarusel = [{src:img1, type:'img'}, {src:img2, type:'img'}, {src:video, type:'video'}] 

    const Carusel = () => {
        const[currentImgId, setCurrentImgId] = useState(0);
        const nextSlide = () => {
            if (currentImgId === 2){
                setCurrentImgId(0)
            } else setCurrentImgId(currentImgId + 1);
        };

    const prevSlide = () => {
        if (currentImgId === 0){
            setCurrentImgId(2)
        } else setCurrentImgId(currentImgId - 1);
    };

    const defineImgOrVideo = () => {
        if (imgArrForCarusel[currentImgId].type==='video'){
            return (
                <div className="video nonevideo">
                <video controls autoPlay muted >
                <source src={imgArrForCarusel[currentImgId].src} type="video/mp4"></source>
                </video> 
                </div>
            )
        } else {
            return (
                <img src={imgArrForCarusel[currentImgId].src} alt="img" />
            )
        }
    }
    const caruselItem = defineImgOrVideo()

    return (
        <div className="carusel">
            <div className="icon_wrap">
                <i className="pi pi-angle-left" style={{'fontSize': '5em', color:'#326fd1'}}
                onClick={()=>prevSlide()}></i>
            </div>
            <div className="caruselItem">
                {caruselItem}  
            </div>
            <div className="icon_wrap">
            <i className="pi pi-angle-right" style={{'fontSize': '5em', color:'#326fd1'}}
            onClick={()=>nextSlide()}
            ></i>
            </div>
        </div>
    )
}

export default Carusel;