import { Link } from 'react-router-dom';
import { loginViewClass, inputClass } from './LoginView.css';

export function LoginView() {
  return <div className={loginViewClass}>
    <div>
      Login with email
    </div>
    <input className={inputClass} />
  </div>;
}
