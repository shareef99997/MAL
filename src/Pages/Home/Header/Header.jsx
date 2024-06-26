/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Stars } from '../LoadingScreen/LoadingScreen';
import Contact from '../../Contact/Contact';

function Header() {
  ////////////////// Slider ////////////////////////////
  const progressCircle = useRef(null);

  // Update progress circle during autoplay
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
  };

  const [isSliderTextVisible, setIsSliderTextVisible] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  // Handle transition end to reset visibility
  const handleTransitionEnd = () => {
    setIsSliderTextVisible(false);
  };

  useEffect(() => {
    // Set initial visibility for the first slide
    setIsSliderTextVisible(true);
  }, []);

  useEffect(() => {
    // Add event listener for the transition end
    progressCircle.current.addEventListener('transitionend', handleTransitionEnd);
    return () => {
      // Remove event listener when component is unmounted
      progressCircle.current.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  const slides = [
    {
      image: require('../../../Assets/Slider/Slider1.jpeg'),
      title: 'شركة مال للأستثمار',
      subtitles: 'تعرف على المزيد',
      href: '#AboutHome',
    },
    {
      image: require('../../../Assets/Slider/Slider2.jpeg'),
      title: 'عش تجربة الرفاهية',
      subtitles: 'خدماتنا',
      href: '#ServicesHome',
    },
    {
      image: require('../../../Assets/Slider/Slider3.jpeg'),
      title: 'مع مشاريع متطورة',
      subtitles: 'مشاريعنا ',
      href: '#ProjectsHome',
    },
  ];

  ////////////////// Slider ////////////////////////////

  ////////////////// Navbar ////////////////////////////
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);

  // Handle burger menu click
  const handleBurgerClick = () => {
    setIsNavMenuVisible(!isNavMenuVisible);
  };

  // Navbar styles
  const [navmenu, setNavmenu] = useState('rgba(0, 0, 0, 0.332)');
  const [navBackground, setNavBackground] = useState('transparent');
  const [navBorder, setNavBorder] = useState('transparent');
  const [navLogo, setNavLogo] = useState(require('../../../Assets/Logos/Gold_Logo.png'));
  const [logoSize, setLogoSize] = useState('150px');
  const [navtext, setNavText] = useState('white');

  useEffect(() => {
    // Handle scroll event to change navbar styles
   
   
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > window.innerHeight / 4) {
        // Scrolled down
        setNavBackground('white');
        setNavmenu('transparent');
        setNavBorder('var(--gold-main) solid ');
        setNavLogo(require('../../../Assets/Logos/Main_Logo.png'));
        setLogoSize('100px');
        setNavText('black');
      } else {
        // Scrolled up
        setNavBackground('transparent');
        setNavmenu('rgba(0, 0, 0, 0.332)');
        setNavBorder('transparent');
        setNavLogo(require('../../../Assets/Logos/Gold_Logo.png'));
        setLogoSize('150px');
        setNavText('white');
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  ////////////////// Navbar ////////////////////////////

  return (
    <div className="Home Header">
      <header>
        <nav style={{ backgroundColor: navBackground , borderBottom: navBorder  }}>
          <div className="nav-content">
            <div className='langg'>
              <a href=""><div className='ع'>ع</div></a>
              <a href=""><div className='E'>E</div></a>
              
              
            </div>
            <div className="logo" style={{width: logoSize}}>
              <a href="/ar">
                <img src={navLogo} alt="Main Logo" />
              </a>
            </div>
            <div className="burger-menu" onClick={handleBurgerClick}>
              <div className={`burger-bar ${isNavMenuVisible ? 'cross' : ''}`} style={{}}></div>
              <div className={`burger-bar ${isNavMenuVisible ? 'cross' : ''}`} style={{}}></div>
              <div className={`burger-bar ${isNavMenuVisible ? 'cross' : ''}`} style={{}}></div>
        </div>

        {/* Navigation menu for smaller screens */}
            <div className={`nav-menu-mobile ${isNavMenuVisible ? 'visible' : ''}`}>
              <div className="nav-menu-box">
                <ul>
                  <li><a href="">الرئيسية</a></li>
                  <li><a href="">من نحن</a></li>
                  <li><a href="">خدماتنا</a></li>
                  <li><a href="">مشاريعنا</a></li>
                  <li><a href="">تواصل معنا</a></li>
                </ul>
              </div>
            </div>
            <ul className="nav-menu" style={{backgroundColor:navmenu}}>
              <li><a style={{color: navtext}} href=''>تواصل معنا</a></li>
              <li ><a style={{color: navtext}} href="">مشاريعنا</a></li>  
              <li ><a style={{color: navtext}} href="">خدماتنا</a></li>       
              <li ><a style={{color: navtext}} href="">من نحن</a></li>
              <li ><a style={{color: navtext}} href="">الرئيسية</a></li>
            </ul>
          </div>
        </nav>

       


        <div className="image-container">
          <Swiper
          className="mySwiper"
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 7500,
            disableOnInteraction: false
          }}
          speed={500}
          effect={'fade'}
          modules={[Autoplay,EffectFade]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChange={handleSlideChange}
          onTransitionEnd={handleTransitionEnd}>
          {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Stars />
            <img src={slide.image} alt={`slider${index + 1}`} loading="lazy" />
            <div className={`slider-text ${activeSlideIndex === index ? 'fade-in' : ''}`}>
              <div className='slider-text-h1-div'><h1>{slide.title}</h1></div>
              <a href={slide.href}><div className='hdiv'>  
                  <h2>{slide.subtitles}&nbsp;  <span>&#62;</span></h2>
              </div></a>
              <div className="overlay-div"></div>
            </div>
          </SwiperSlide>
        ))}
          <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 78 78" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
        </div>
        </Swiper>
        </div>
      </header>
    </div>
  );
}

export default Header;
