export const getParticipantsList = `
  SELECT * from participants;
`;

export const getParticipantById = `
  SELECT * from participants
  WHERE id = ?;
`;
