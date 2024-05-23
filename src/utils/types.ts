export interface ISocialLink {
  name: string;
  url: string;
}

export interface IEmployee {
  id: number;
  name: string;
  position: string;
  mobilePhoneNumber: string;
  phoneNumbers: string[];
  photos: string[];
  email: string;
  privateSite: string;
  address: string;
  birthDate: Date;
  rank: string;
  companyId: number;
  socialLinks: ISocialLink[];
}

export interface ICompany {
  id: number;
  name: string;
  description: string;
  logoImage: string;
  phoneNumber: string;
  email: string;
  privateSite: string;
  address: string;
  foundedDate: Date;
  clients: string[];
  fax: string;
  socialLinks: ISocialLink[];
}

export interface IIconProps {
  isSocial: boolean;
  iconName: string;
  className?: string;
}
