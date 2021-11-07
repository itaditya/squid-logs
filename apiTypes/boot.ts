import type { Organiser } from '../server/models/organiser';
import type { ParticipantList } from '../server/models/participant';

type OrganiserData = Omit<Organiser, 'password'>;

export type GetBootData = {
  data: {
    participants: ParticipantList,
    currentOrganiser: OrganiserData
  };
};
