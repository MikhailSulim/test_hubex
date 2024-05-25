import React, { useEffect, useState } from 'react';
import './App.scss';
import EmployeeCard from '../components/EmployeeCard/EmployeeCard';
import { ICompany, IEmployee } from '../utils/types';
import { fetchCompany, fetchEmployee } from '../utils/fetchData';
import Preloader from '../components/Preloader/Preloader';

function App() {
  const [data, setData] = useState<[IEmployee, ICompany] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const [employee, company] = await Promise.all([
          fetchEmployee(),
          fetchCompany(),
        ]);
        return [employee as IEmployee, company as ICompany];
      } catch (error) {
        console.error('Возникла ошибка:', error);
        return null;
      }
    }
    setIsLoading(true);
    getData()
      .then((result) => {
        if (result) {
          const [employee, company] = result;
          setData([employee as IEmployee, company as ICompany]);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      {isLoading && <Preloader />}
      {data && <EmployeeCard employee={data[0]} company={data[1]} />}
    </div>
  );
}

export default App;
