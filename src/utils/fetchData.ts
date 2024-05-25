import { company, employee } from './data';

export function fetchEmployee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(employee);
    }, 300);
  });
}

export function fetchCompany() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(company);
    }, 900);
  });
}
