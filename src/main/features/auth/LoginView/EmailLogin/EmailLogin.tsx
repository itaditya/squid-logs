import type { FormEvent } from 'react';
import { useId } from '@radix-ui/react-id';
import {
  formClass,
  formDescriptionClass,
  fieldClass,
  labelClass,
  inputClass,
  actionsClass,
  submitActionClass,
} from './EmailLogin.css';

export function EmailLogin() {
  const emailInputId = useId();
  const passwordInputId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`event`, event); // aditodo remove this
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
          placeholder="Eg- frontman@squidcorp.com"
        />
      </div>
      <div className={actionsClass}>
        <button className={submitActionClass} type="submit">
          Login
        </button>
      </div>
    </form>
  );
}
