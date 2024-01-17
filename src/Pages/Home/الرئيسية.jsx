import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './الرئيسية.css';
import Header from './Header/Header';
import ServisesHome from './خدماتنا/خدماتنا';
import AboutHome from './من_نحن/من_نحن';
import ProjectsHome from './مشاريعنا/مشاريعنا';
import FooterHome from './Footer/Footer';
import LoadingScreen from './LoadingScreen/LoadingScreen';


function Home() {
  return (
    <div className="Home">
      <LoadingScreen />
       <a className="whatsappa" href="https://api.whatsapp.com/send?phone=966570555017" target="_blank" rel="noopener noreferrer">
      <nav className="whatsapp-button">
       
          <div>
          <img src={require('../../Assets/Icons/whatsapp.png')} alt="WhatsApp" />
          </div>
          
        <h3>تواصل معنا</h3>
     </nav></a>   
      <Header />
      <AboutHome />
      <ServisesHome/>
      <ProjectsHome />
      <FooterHome />
    </div>
  );
}

export default Home;
