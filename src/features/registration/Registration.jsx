import Logo from './../../assets/images/logo.png';
import FacebookIcon from './../../assets/icons/FacebookIcon.png'
import GoogleIcon from './../../assets/icons/GoogleIcon.png'
import TwitterIcon from './../../assets/icons/TwitterIcon.png'
import { RegForm } from '../../components/reg-form';
import './reg.css'

export function Registration() {
  return (
    <>
      <div className="logo">
        <img src={Logo} />
        <h1>Foodi</h1>
        <p>Grab your favourite food</p>
      </div>
      <RegForm />
      <div className="footer">
        <div className="links">
            <a href="#"><img src={FacebookIcon} /></a>
            <a href="#"><img src={TwitterIcon} /></a>
            <a href="#"><img src={GoogleIcon} /></a>
        </div>
        <p>Don’t have account? Sign up now.</p>
      </div>
    </>
  );
}
