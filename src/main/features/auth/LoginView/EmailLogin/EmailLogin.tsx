import { useId } from '@radix-ui/react-id';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useLogin } from '../../hooks';
import {
  formClass,
  formDescriptionClass,
  fieldClass,
  labelClass,
  inputClass,
  actionsClass,
  submitActionClass,
} from './EmailLogin.css';

type Credentials = {
  email: string;
  password: string;
};

export function EmailLogin() {
  const { startLogin } = useLogin();
  const emailInputId = useId();
  const passwordInputId = useId();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<Credentials>();

  const emailErrorMsg = errors.email?.message;
  const passwordErrorMsg = errors.password?.message;

  const handleFormSubmit: SubmitHandler<Credentials> = async (credentials) => {
    return startLogin(credentials);
  };

  return (
    <form className={formClass} name="loginForm" onSubmit={handleSubmit(handleFormSubmit)}>
      <p className={formDescriptionClass}>You can login to Squid Logs by filling this form</p>
      <div className={fieldClass}>
        <label
          className={labelClass}
          htmlFor={emailInputId}
          data-status={isSubmitting ? 'submitting' : 'idle'}
        >
          E-mail Id
        </label>
        <input
          className={inputClass}
          id={emailInputId}
          type="email"
          aria-invalid={emailErrorMsg ? true : false}
          readOnly={isSubmitting}
          data-status={isSubmitting ? 'submitting' : 'idle'}
          {...register('email', {
            required: {
              value: true,
              message: 'Please provide E-mail Id',
            },
          })}
          placeholder="Eg- frontman@squidcorp.com"
        />
        {emailErrorMsg && <span role="alert">{emailErrorMsg}</span>}
      </div>
      <div className={fieldClass}>
        <label
          className={labelClass}
          htmlFor={passwordInputId}
          data-status={isSubmitting ? 'submitting' : 'idle'}
        >
          Password
        </label>
        <input
          className={inputClass}
          id={passwordInputId}
          type="password"
          aria-invalid={passwordErrorMsg ? true : false}
          readOnly={isSubmitting}
          data-status={isSubmitting ? 'submitting' : 'idle'}
          {...register('password', {
            required: {
              value: true,
              message: 'Please provide password',
            },
          })}
          placeholder="Eg- paymemoney"
        />
        {passwordErrorMsg && <span role="alert">{passwordErrorMsg}</span>}
      </div>
      <div className={actionsClass}>
        <button className={submitActionClass} aria-disabled={isSubmitting} type="submit">
          {isSubmitting ? 'Logging In...' : 'Login'}
        </button>
      </div>
    </form>
  );
}
