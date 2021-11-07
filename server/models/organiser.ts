export type Organiser = {
  id: number;
  email: string;
  emailVerified: boolean;
  role: 'frontman' | 'manager' | 'soldier' | 'worker';
  name: string;
  phoneCode: string;
  phoneNumber: string;
  password: string;
  moneyAmount: bigint;
  moneyCurrency: string;
};

export type OrganiserList = Array<Organiser>;
