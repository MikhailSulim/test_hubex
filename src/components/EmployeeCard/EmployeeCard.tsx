import React, { memo, useState } from 'react';
import './EmployeeCard.scss';
import Icon from '../Icon/Icon';
import { employee, company } from '../../utils/data';
import Button from '../Button/Button';
import InfoItem from '../InfoItem/InfoItem';
import Slider from '../Slider/Slider';

const EmployeeCard = memo(() => {
  const [isEmployeeSide, setIsEmployeeSide] = useState(true);

  const handleToggleCard = () => {
    setIsEmployeeSide(!isEmployeeSide);
  };

  return (
    <div className="card">
      <div className="card__navigation">
        <button
          type="button"
          disabled={isEmployeeSide}
          className={`card__navigation-item card__navigation-item_left ${
            isEmployeeSide ? 'card__navigation-item_active' : ''
          }`}
          onClick={handleToggleCard}
        >
          <Icon iconName="arrow" /> о сотруднике
        </button>
        <button
          type="button"
          disabled={!isEmployeeSide}
          className={`card__navigation-item card__navigation-item_right ${
            isEmployeeSide ? '' : 'card__navigation-item_active'
          }`}
          onClick={handleToggleCard}
        >
          о компании <Icon iconName="arrow" />
        </button>
      </div>

      <div className="card__container">
        {isEmployeeSide && (
          <div className="card__employee">
            <div className="card__employee-content">
              <div className="card__left-side">
                <Slider photos={employee.photos} />
                <Button isDark handleClick={() => {}}>
                  добавить в контакты
                </Button>
              </div>
              <div className="card__right-side">
                <div className="card__logo">
                  <img src={company.logoImage} alt="логотип" />
                </div>
                <h2 className="card__title">{employee.name}</h2>
                <p className="card__position">{employee.position}</p>
                <ul className="card__contacts">
                  <InfoItem iconName="mobile">
                    {employee.mobilePhoneNumber}
                  </InfoItem>
                  {employee.phoneNumbers.map((number, index) => (
                    <InfoItem key={index} iconName="phone">
                      {number}
                    </InfoItem>
                  ))}
                  <InfoItem iconName="email">{employee.email}</InfoItem>
                  <InfoItem iconName="link">{employee.privateSite}</InfoItem>
                  <InfoItem iconName="address">{employee.address}</InfoItem>
                  <InfoItem iconName="date">
                    {employee.birthDate.toISOString().split('T')[0]}
                  </InfoItem>
                  <InfoItem iconName="user">{employee.rank}</InfoItem>
                </ul>
              </div>
            </div>
            <div className="card__social">
              {employee.socialLinks.map((link, index) => (
                <Icon key={index} isSocial={true} iconName={link.name} />
              ))}
            </div>
          </div>
        )}

        {!isEmployeeSide && (
          <div className="card__company">
            <div className="card__company-content">
              <div className="card__left-side">
                <img src={company.logoImage} alt="логотип" />

                <h2 className="card__company-name">{company.name}</h2>
                <p className="card__company-description">{company.description}</p>
              </div>
              <div className="card__right-side">
                <ul className="card__contacts">
                  <InfoItem iconName="phone">{company.phoneNumber}</InfoItem>
                  <InfoItem iconName="email">{company.email}</InfoItem>
                  <InfoItem iconName="link">{company.privateSite}</InfoItem>
                  <InfoItem iconName="address">{company.address}</InfoItem>
                  <InfoItem iconName="date">
                    {company.foundedDate.toISOString().split('T')[0]}
                  </InfoItem>
                  <InfoItem iconName="user">
                    {company.clients.join(' ')}
                  </InfoItem>
                  <InfoItem iconName="fax">{company.fax}</InfoItem>
                </ul>
              </div>
            </div>
            <div className="card__social">
              {company.socialLinks.map((link, index) => (
                <Icon key={index} isSocial={true} iconName={link.name} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default EmployeeCard;
