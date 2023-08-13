import logo from '../../logo.svg';


export default function AppHeader(props) {
    return (
    <div className='app-header'>
      <div className='header'>
          <div className='marquee-text'>
            <marquee behavior='scroll' direction='left'>
              Welcome to Our Store! Amazing Deals - Limited Time Only! Hurry Up and Shop Now!
            </marquee>
          </div>
        </div>
      <div>
      <header className="header-banner slide-up d-none js-show py-3">
      <div className='marquee-text'>
            <marquee behavior='scroll' direction='left'>
            FREE SHIPPING on orders over CAD 150 (some exceptions apply)
            </marquee>
          </div>
        </header>
      </div>
      <a href="http://localhost:3000">
      <img src={logo} alt='logo' className='applogo' ></img>
      </a>
      
      </div>
    );
  }