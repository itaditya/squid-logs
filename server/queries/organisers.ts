export const getOrganiserByEmail = `
  SELECT id, password from organisers
  WHERE email = ?;
`;
