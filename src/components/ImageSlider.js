import React, {useState} from 'react';

export default function ImageSlider({slides}) {

const [currentIndex,setCurrentIndex]=useState(0);

const sliderStyles={
      height:"100%",
      position: "relative"
    };
  
const slideStyles={
      height:"100%",
      width: "100%",
      borderRadius:"10px",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: `url(${slides[currentIndex].url})`
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };
      const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };

      const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
      };
      
      const dotStyle = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "45px",
        color:"white"
      };

    function goToNext() {
        const newIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(newIndex);
      }

    function goToPrevious() {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        setCurrentIndex(newIndex);
      }
    
    function goToSlide(slideIndex){
        setCurrentIndex(slideIndex);
    }

    return (
        <>
        <div style={sliderStyles}> 
            <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
            <div style={rightArrowStyles} onClick={goToNext}>❱</div>
            <div style={slideStyles} key={slides.url}></div>
        </div>
        <div style={dotsContainerStyles}>
        {
            slides.map((slide,slideIndex)=>(
                <div 
                key={slideIndex}
                style={dotStyle}
                onClick={()=>goToSlide(slideIndex)}
                >●</div>
            ))}
       </div>
       </>
      )
    
    }