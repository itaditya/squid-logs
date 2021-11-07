import type { Pool } from 'mysql2';
import type { Organiser, OrganiserList } from '../models/organiser';

type OrganiserData = {
  id: number;
  name: string;
  email: string;
  email_verified: 0 | 1;
  phone_code: string;
  phone_number: string;
  role: Organiser['role'];
  password: string;
  money_amount: bigint;
  money_currency: string;
};

type OrganiserDataList = Array<OrganiserData>;

const getOrganisersListQuery = `
  SELECT * from organisers;
`;

function transformOrganiserData(organiserData: OrganiserData): Organiser {
  const organiser: Organiser = {
    id: organiserData.id,
    name: organiserData.name,
    email: organiserData.email,
    password: organiserData.password,
    role: organiserData.role,
    emailVerified: Boolean(organiserData.email_verified),
    phoneCode: organiserData.phone_code,
    phoneNumber: organiserData.phone_number,
    moneyAmount: organiserData.money_amount,
    moneyCurrency: organiserData.money_currency,
  };

  return organiser;
}

function transformOrganiserListData(organiserDataList: OrganiserDataList): OrganiserList {
  const organisersList: OrganiserList = organiserDataList.map(transformOrganiserData);
  return organisersList;
}

export async function getOrganisersList(conn: Pool): Promise<OrganiserList> {
  const response = await conn.execute(getOrganisersListQuery);
  const organisersDataList: OrganiserDataList = response[0];

  const organisersList = transformOrganiserListData(organisersDataList);
  return organisersList;
}

export const getOrganiserByEmail = `
  SELECT id, password from organisers
  WHERE email = ?;
`;

const getOrganiserByIdQuery = `
  SELECT * from organisers
  WHERE id = ?;
`;

type getOrganiserByIdArgs = {
  organiserId: Organiser['id'];
};
export async function getOrganiserById(
  conn: Pool,
  { organiserId }: getOrganiserByIdArgs,
): Promise<Organiser> {
  const response = await conn.execute(getOrganiserByIdQuery, [organiserId]);
  // TODO: Handle case where results is empty array;
  const results = response[0];

  const organiserData: OrganiserData = results[0];
  const organiser = transformOrganiserData(organiserData);
  return organiser;
}

export const updateEmailVerifyStatus = `
  UPDATE organisers
  SET email_verified = ?
  WHERE id = ?;
`;
