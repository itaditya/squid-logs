import type { Pool } from 'mysql2';

type Participant = {
  id: number;
  name: string;
  avatar_url: string;
};

type ParticipantList = Array<Participant>;

const getParticipantsListQuery = `
  SELECT * from participants;
`;

export async function getParticipantsList(conn: Pool): Promise<ParticipantList> {
  const response = await conn.execute(getParticipantsListQuery);
  const participants = response[0];
  return participants;
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
  const results = response[0];
  // TODO: Handle case where results is empty array;
  const participant = results[0];
  return participant;
}
