export const getSessionById = `
  SELECT * FROM sessions
  WHERE session_id = ?;
`;

export const createSession = `
  INSERT INTO sessions (session_id, user_id)
  VALUES (?, ?);
`;

export const deleteSession = `
  DELETE FROM sessions
  WHERE session_id = ?;
`;
