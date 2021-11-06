import { fetcher } from '../../../shared/utils/fetcher';

export function fetchOrganisersList() {
  return fetcher('/api/organisers/list');
}

export function mutateEmailVerificationStatus({ organiserId, emailVerified }) {
  const payload = {
    data: {
      organiser_id: organiserId,
      email_verified: emailVerified,
    },
  };

  return fetcher('/api/admin/verify_email', {
    method: 'PATCH',
    payload,
  });
}
