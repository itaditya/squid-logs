import type { FormEvent } from 'react';
import { useId } from '@radix-ui/react-id';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { loginAction } from '../../actions';
import {
  formClass,
  formDescriptionClass,
  fieldClass,
  labelClass,
  inputClass,
  actionsClass,
  submitActionClass,
} from './EmailLogin.css';

function getFormData(formElem: HTMLFormElement) {
  const instance = new FormData(formElem);
  const formData = Object.fromEntries(instance.entries());

  return formData;
}

export function EmailLogin() {
  const loginStatus = useAppSelector((state) => state.auth.loginStatus);
  const dispatch = useAppDispatch();
  const emailInputId = useId();
  const passwordInputId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const credentials = getFormData(event.currentTarget);

    if (!credentials.email || !credentials.password || loginStatus === 'pending') {
      return;
    }
    const result = await dispatch(loginAction(credentials));
    console.log(`result`, result); // aditodo remove this
  }

  return (
    <form className={formClass} name="loginForm" onSubmit={handleSubmit}>
      <p className={formDescriptionClass}>You can login to Squid Logs by filling this form</p>
      <div className={fieldClass}>
        <label className={labelClass} htmlFor={emailInputId}>
          E-mail Id
        </label>
        <input
          className={inputClass}
          id={emailInputId}
          type="email"
          name="email"
          required
          placeholder="Eg- frontman@squidcorp.com"
        />
      </div>
      <div className={fieldClass}>
        <label className={labelClass} htmlFor={passwordInputId}>
          Password
        </label>
        <input
          className={inputClass}
          id={passwordInputId}
          type="password"
          name="password"
          required
          placeholder="Eg- paymemoney"
        />
      </div>
      <div className={actionsClass}>
        <button
          className={submitActionClass}
          aria-disabled={loginStatus === 'pending'}
          type="submit"
        >
          {loginStatus === 'pending' ? 'Logging In...' : 'Login'}
        </button>
      </div>
    </form>
  );
}
