export const getAllOrganisers = `
  SELECT id, email, email_verified, phone_code, phone_number, role, name from organisers;
`;

export const getOrganiserByEmail = `
  SELECT id, password from organisers
  WHERE email = ?;
`;

export const getOrganiserById = `
  SELECT id, email, email_verified, phone_code, phone_number, role, name, money_amount, money_currency from organisers
  WHERE id = ?;
`;

export const updateEmailVerifyStatus = `
  UPDATE organisers
  SET email_verified = ?
  WHERE id = ?;
`;
