import type { Organiser } from '../../server/models/organiser';

type OrganiserData = Omit<Organiser, 'password'>;

type OrganiserDataList = Array<OrganiserData>;

export type GetListOrganisers = {
  data: OrganiserDataList;
};
