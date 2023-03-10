import "./slider.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Slider() {
  const images = [
    "https://pub-ebc3292441104a07b54e254192a1b246.r2.dev/sliderOne.jpg",
    "https://pub-ebc3292441104a07b54e254192a1b246.r2.dev/sliderTwo.jpg",
    "https://pub-ebc3292441104a07b54e254192a1b246.r2.dev/sliderThree.jpg",
  ];
  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span>The Best Books!</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span>The Best Price!</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span>The Best Quality!</span>
        </div>
      </div>
    </Slide>
  );
}
