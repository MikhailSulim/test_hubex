import React, { memo, useState } from 'react';
import './EmployeeCard.scss';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import InfoItem from '../InfoItem/InfoItem';
import Slider from '../Slider/Slider';
import { IEmployeeCardProps } from '../../utils/types';

const EmployeeCard: React.FC<IEmployeeCardProps> = memo(
  ({ employee, company }) => {
    const [isEmployeeSide, setIsEmployeeSide] = useState(true);

    const handleToggleCard = () => {
      setIsEmployeeSide(!isEmployeeSide);
    };

    const handleSaveContact = () => {
      const vCard = `BEGIN:VCARD\nVERSION:3.0\nN:${employee.name}\nTEL:${[
        employee.mobilePhoneNumber,
        employee.phoneNumbers,
      ].flat(2)}\nEND:VCARD`;

      const blob = new Blob([vCard], { type: 'text/vcard' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${employee.name}.vcf`;
      link.click();

      URL.revokeObjectURL(url);
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
                  <Button isDark handleClick={handleSaveContact}>
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
                      {
                        <a
                          href={`tel:${employee.mobilePhoneNumber
                            .match(/[+]?\d+/gi)
                            ?.join('')}`}
                        >
                          {employee.mobilePhoneNumber}
                        </a>
                      }
                    </InfoItem>
                    {employee.phoneNumbers.map((number, index) => (
                      <InfoItem key={index} iconName="phone">
                        {
                          <a
                            href={`tel:${number.match(/[+]?\d+/gi)?.join('')}`}
                          >
                            {number}
                          </a>
                        }
                      </InfoItem>
                    ))}
                    <InfoItem iconName="email">
                      {
                        <a href={`mailto:${employee.email}`}>
                          {employee.email}
                        </a>
                      }
                    </InfoItem>
                    <InfoItem iconName="link">
                      {
                        <a
                          href={employee.privateSite}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {employee.privateSite}
                        </a>
                      }
                    </InfoItem>
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
                  <a className="card__social-link" key={index} href={link.url}>
                    <Icon isSocial={true} iconName={link.name} />
                  </a>
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
                  <p className="card__company-description">
                    {company.description}
                  </p>
                </div>
                <div className="card__right-side">
                  <ul className="card__contacts">
                    <InfoItem iconName="phone">
                      {
                        <a
                          href={`tel:${company.phoneNumber
                            .match(/[+]?\d+/gi)
                            ?.join('')}`}
                        >
                          {company.phoneNumber}
                        </a>
                      }
                    </InfoItem>
                    <InfoItem iconName="email">
                      {<a href={`mailto:${company.email}`}>{company.email}</a>}
                    </InfoItem>
                    <InfoItem iconName="link">
                      {
                        <a
                          href={company.privateSite}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {company.privateSite}
                        </a>
                      }
                    </InfoItem>
                    <InfoItem iconName="address">{company.address}</InfoItem>
                    <InfoItem iconName="date">
                      {company.foundedDate.toISOString().split('T')[0]}
                    </InfoItem>
                    <InfoItem iconName="user">
                      {company.clients.join(' ')}
                    </InfoItem>
                    <InfoItem iconName="fax">
                      {
                        <a
                          href={`tel:${company.fax
                            .match(/[+]?\d+/gi)
                            ?.join('')}`}
                        >
                          {company.fax}
                        </a>
                      }
                    </InfoItem>
                  </ul>
                </div>
              </div>
              <div className="card__social">
                {company.socialLinks.map((link, index) => (
                  <a className="card__social-link" key={index} href={link.url}>
                    <Icon isSocial={true} iconName={link.name} />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default EmployeeCard;
