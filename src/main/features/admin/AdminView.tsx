import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import {
  organisersDataSelectors,
  fetchOrganisersListAction,
  verifyEmailToggleAction,
} from './adminSlice';
import { adminViewClass, sectionClass, gridClass, rowClass } from './AdminView.css';

export function AdminView() {
  const organisers = useAppSelector(organisersDataSelectors.selectAll);
  const emailVerificationStatusById = useAppSelector(
    (state) => state.admin.organisers.apiStatus.verifyEmail.byId,
  );
  const dispatch = useAppDispatch();

  function handleEmailVerifyToggle(organiserId) {
    dispatch(verifyEmailToggleAction(organiserId));
  }

  useEffect(() => {
    dispatch(fetchOrganisersListAction());
  });

  return (
    <div className={adminViewClass}>
      <h1>To simulate real-world behavior, I've exposed this page</h1>
      <section className={sectionClass}>
        <h3>Organiser Details</h3>
        <div className={gridClass}>
          {organisers.map((organiser) => {
            const organiserId = organiser.id;
            const emailVerificationStatus = emailVerificationStatusById[organiserId];
            return (
              <div className={rowClass} key={organiserId}>
                <div>{organiser.name}</div>
                <div>{organiser.email}</div>
                <div>{organiser.email_verified ? 'Verified' : 'Unverified'}</div>
                <div>
                  <button onClick={() => handleEmailVerifyToggle(organiserId)}>
                    {emailVerificationStatus === 'pending' ? 'Toggling' : 'Email Verify Toggle'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h3>Phone Verification</h3>
        <p>
          Use OTP code- <strong>1010</strong>
        </p>
      </section>
    </div>
  );
}
