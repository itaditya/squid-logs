import type { Organiser } from '../models/organiser';

type GetFormattedOrganiserReturn = Omit<Organiser, 'password'>;
export function getFormattedOrganiser(organiser: Organiser): GetFormattedOrganiserReturn {
  // const disallowedKeys = ['password'];

  const formattedOrganiser = {
    ...organiser,
  };

  delete formattedOrganiser.password;

  return formattedOrganiser;
}
