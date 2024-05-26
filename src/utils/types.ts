import { ReactNode } from 'react';

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
  isSocial?: boolean;
  link?:string;
  iconName: string;
}

export interface IButtonProps {
  isDark?: boolean;
  children?: ReactNode;
  handleClick: () => void;
}

export interface IInfoItemProps {
  iconName: string;
  children: ReactNode;
  handleClick?: () => void;
}

export interface ISliderProps {
  photos: string[];
}

export interface IEmployeeCardProps {
  employee: IEmployee;
  company: ICompany;
}
