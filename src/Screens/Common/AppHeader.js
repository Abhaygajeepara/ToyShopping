import logo from '../../logo.svg';


export default function AppHeader(props) {
    return (
    <div className='app-header'>
      <div>
      <header className="header-banner slide-up d-none js-show py-3">
        <p className="ptag"> 
          FREE SHIPPING on orders over CAD 150 (some exceptions apply)
        </p>
        </header>
      </div>
      <a href="http://localhost:3000">
      <img src={logo} alt='logo' className='applogo' ></img>
      </a>
      
      </div>
    );
  }