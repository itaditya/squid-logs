import { useSearchParams } from 'react-router-dom';
import * as Tabs from '@radix-ui/react-tabs';
import { EmailLogin } from './EmailLogin/EmailLogin';
import { loginViewClass, tabsListClass, tabTriggerClass } from './LoginView.css';

const loginTypes = {
  email: 'email',
  phone: 'phone',
};

export function LoginView() {
  let [searchParams, setSearchParams] = useSearchParams();

  function handleTabChange(newVal: string) {
    setSearchParams({ login_type: newVal });
  }

  function getActiveTabValue() {
    const loginTypeParam = searchParams.get('login_type');

    const possibleLoginType = Object.values(loginTypes).find(
      (loginType) => loginType === loginTypeParam,
    );

    if (!possibleLoginType) {
      return loginTypes.email;
    }

    return possibleLoginType;
  }

  const activeTabValue = getActiveTabValue();

  return (
    <div className={loginViewClass}>
      <Tabs.Root value={activeTabValue} onValueChange={handleTabChange}>
        <Tabs.List className={tabsListClass}>
          <Tabs.Trigger className={tabTriggerClass} value={loginTypes.email}>
            Email Login
          </Tabs.Trigger>
          <Tabs.Trigger className={tabTriggerClass} value={loginTypes.phone}>
            Phone Login
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value={loginTypes.email}>
          <EmailLogin />
        </Tabs.Content>
        <Tabs.Content value={loginTypes.phone}>
          <p>There</p>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
