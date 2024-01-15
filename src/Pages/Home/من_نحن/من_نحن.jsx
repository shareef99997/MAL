import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './من_نحن.css';

function AboutHome() {
  return (
    <div className="AboutHome" id='AboutHome'> 
          <h2>من نحن</h2>
          <img className='Sliderimg HomeSliderimg' src={require('../../../Assets/Slider/Slider2.jpeg')} alt="Slide2" />
    </div>
    
  );
}

export default AboutHome;
