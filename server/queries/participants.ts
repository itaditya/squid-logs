import type { Pool } from 'mysql2';
import { Participant, ParticipantList } from '../models/participant';

type ParticipantData = {
  id: number;
  name: string;
  avatar_url: string;
};

type ParticipantDataList = Array<ParticipantData>;

function transformParticipantData(participantData: ParticipantData): Participant {
  const participant: Participant = {
    id: participantData.id,
    name: participantData.name,
    avatarUrl: participantData.avatar_url,
  };

  return participant;
}

function transformParticipantListData(participantDataList: ParticipantDataList): ParticipantList {
  const participantsList: ParticipantList = participantDataList.map(transformParticipantData);
  return participantsList;
}

const getParticipantsListQuery = `
  SELECT * from participants;
`;

export async function getParticipantsList(conn: Pool): Promise<ParticipantList> {
  const response = await conn.execute(getParticipantsListQuery);
  const participantDataList: ParticipantDataList = response[0];

  const participantsList = transformParticipantListData(participantDataList);
  return participantsList;
}

const getParticipantByIdQuery = `
  SELECT * from participants
  WHERE id = ?;
`;

type getParticipantByIdArgs = {
  participantId: Participant['id'];
};
export async function getParticipantById(
  conn: Pool,
  { participantId }: getParticipantByIdArgs,
): Promise<Participant> {
  const response = await conn.execute(getParticipantByIdQuery, [participantId]);
  // TODO: Handle case where results is empty array;
  const results = response[0];

  const participantData: ParticipantData = results[0];
  const participant = transformParticipantData(participantData);
  return participant;
}
