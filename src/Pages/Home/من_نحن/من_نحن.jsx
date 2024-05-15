import React, { useEffect, useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './من_نحن.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Stars } from '../LoadingScreen/LoadingScreen';

function AboutHome() {

  ////////////////// Slider ////////////////////////////
  const progressCircle = useRef(null);

  // Update progress circle during autoplay
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
  };

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Handle slide change
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  // Handle transition end to reset visibility
  const handleTransitionEnd = () => {
  };

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
      image: require('../../../Assets/Slider/Slider4.jpg'),
      title: 'شركة مال للأستثمار',
    },
    {
      image: require('../../../Assets/Slider/Slider5.jpg'),
      title: 'شركة مال للأستثمار',
    },
  ];

  ////////////////// Slider ////////////////////////////


  return (
    <div className="AboutHome" id='AboutHome'> 

      <section className={'about-us'}>
        {/* <section className='numbers'>
            <div className='last-text'>
              <div className='text-client'>
                <h3>500+</h3>
                <h5> عميل </h5>
              </div>

              <div className='text-project'>
                <h3>5+</h3>
                <h5> مشروع سكني</h5>
              </div>

              <div className='text-building'>
                <h3>225+</h3>
                <h5> بناية</h5>
              </div>

              <div className='text-meter'>
                <h3>500000+</h3>
                <h5> متر مربع </h5>
              </div>
            </div>
            <div className='blank'></div>
        </section> */}

        <div className='about-img-text'>
          
          <div className='main-img'>
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
          </div>

          <div className={`about-us-content` }>
            <div>
              <h1>منظومة إستثمارية متكاملة </h1>
              <hr />
              <p > 
                شركة مال للاستثمار منظومة إستثمارية متكاملة بدءاً من دراسة المشاريع مرورا
                بالتخطيط و الهندسة و التنفيذ بإدارة مهنية احترافية وصولا إلى تسليم مشاريع
                ذات جودة عاليه متوافقه مع رؤية المملكة العربية السعودية ٢٠٣٠
              </p>
            </div>

            <div className='ab-button'>
              <a href="">      
              <h2> نبذة عننا  &nbsp;  <span>&#62;</span></h2>
              </a>
            </div>


          </div>
        </div>
        

        {/* <section className='goals-section'>

                <div className='goal vision'>
                <div className='gh2'>
                    <img src={require('../../../Assets/Icons/vision.png')} alt="" />
                    <h2> رؤيتنا </h2>
                </div>
                  <p>أن نكون الشريك الاستراتيجي المفضل
                  لتقديم منتجات استثمارية و خدمات
                  .مميزة تساهم في رضا العملاء</p>
                </div>
                  
                <div className='goal message'>
                  <div className='gh2'>
                      <img src={require('../../../Assets/Icons/message.png')} alt="" />
                    <h2> رسالتنا </h2>
                  </div>
                  <p>اتخذت شركة مال من اسمها رسالة
                  و من نشاطها تفرداً و من تجربتها تميزا
                  .تطور بابتكار ,تنفذ بولاء, تستثمر بجدوى</p>
                </div>

                <div className='goal value'>
                  <div className='gh2'>
                    <img src={require('../../../Assets/Icons/values.png')} alt="" />
                    <h2> قيمنا </h2>
                  </div>
                  <p>الريادة . الجودة . المصداقية
                  اللإبداع . الولاء . الحوكمة</p>
                </div>
        </section> */}

      </section>

          
      <section className='company'>

        <div className={'company-items '}>
          <h1> شركاء النجاح </h1>
          <div className='Partners'>
            <img src={require('../../../Assets/partners/grohe.png')} alt="" />
            <img src={require('../../../Assets/partners/ivuc99yw.png')} alt="" />
            <img src={require('../../../Assets/partners/الدار.png')} alt="" />
            <img src={require('../../../Assets/partners/الشيخ-زايد.png')} alt="" />
            <img src={require('../../../Assets/partners/الفنار.png')} alt="" />
            <img src={require('../../../Assets/partners/المالية.jpg')} alt="" />
            <img src={require('../../../Assets/partners/النابودة.jpg')} alt="" />
            <img src={require('../../../Assets/partners/جوتان.png')} alt="" />
            <img src={require('../../../Assets/partners/سابك.png')} alt="" />
            <img src={require('../../../Assets/partners/شركة-أبوظبي-التجاري-للخدمات-الهندسية.png')} alt="" />
            <img src={require('../../../Assets/partners/ملاك.png')} alt="" />
            <img src={require('../../../Assets/partners/وزارة-الطاقة.png')} alt="" />
          </div>
        </div>
      
      </section>

      
    </div>
    
  );
}

export default AboutHome;
