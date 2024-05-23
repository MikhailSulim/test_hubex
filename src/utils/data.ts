import { IEmployee, ICompany } from './types';
import photo_01 from '/images/photo_01.png';
import photo_02 from '/images/photo_02.png';
import photo_03 from '/images/photo_03.png';

export const employee: IEmployee = {
  id: 1,
  name: 'Иванов Иван Петрович ',
  position: 'Директор',
  photos: [photo_01, photo_02, photo_03],
  mobilePhoneNumber: '+7 (000) 123-45-67',
  phoneNumbers: ['+7 (812) 212-85-06', '+7 (000) 000-00-00'],
  email: 'director@mail.ru',
  privateSite: 'Личный сайт',
  address: 'Адрес',
  birthDate: new Date('1955-12-02'),
  rank: 'Звание, учёная степень',
  companyId: 1,
  socialLinks: [
    { name: 'Telegram', url: 'http://' },
    { name: 'Whatsapp', url: '' },
    { name: 'Viber', url: '' },
    { name: 'Instagram', url: '' },
    { name: 'VK', url: '' },
    { name: 'Facebook', url: '' },
    { name: 'Youtube', url: '' },
    { name: 'OK', url: '' },
    { name: 'Dzen', url: '' },
    { name: 'TikTok', url: '' },
    { name: 'LinkedIn', url: '' },
    { name: 'ICQ', url: '' },
    { name: 'Twitter', url: '' },
    { name: 'Skype', url: '' },
    { name: 'TenChat', url: '' },
  ],
};

export const company: ICompany = {
  id: 1,
  name: '',
  description: '',
  logoImage: '',
  phoneNumber: '+7 (000) 000-00-00',
  address: 'Адрес',
  email: 'company@mail.ru',
  privateSite: '',
  foundedDate: new Date('2000-01-01'),
  fax: '',
  clients: [
    'Клиент 1',
    'Клиент 2',
    'Клиент 3',
    'Клиент 4',
    'Клиент 5',
    'Клиент 6',
    'Клиент 7',
    'Клиент 8',
    'Клиент 9',
    'Клиент 10',
  ],
  socialLinks: [
    { name: 'Telegram', url: 'http://' },
    { name: 'Whatsapp', url: '' },
    { name: 'Viber', url: '' },
    { name: 'Instagram', url: '' },
    { name: 'VK', url: '' },
    { name: 'Facebook', url: '' },
    { name: 'Youtube', url: '' },
    { name: 'OK', url: '' },
    { name: 'Dzen', url: '' },
    { name: 'TikTok', url: '' },
    { name: 'LinkedIn', url: '' },
    { name: 'ICQ', url: '' },
    { name: 'Twitter', url: '' },
    { name: 'Skype', url: '' },
    { name: 'TenChat', url: '' },
  ],
};
