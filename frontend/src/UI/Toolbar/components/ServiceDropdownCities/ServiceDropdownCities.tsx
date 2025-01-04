import React, {useState} from 'react';
import Dropdown from "react-multilevel-dropdown";
import arrowDown from "../../../../img/header/icons/arrow-down-icon.svg";
import styles from './ServiceDropdown.module.scss';


const ServiceDropdownCities = () => {
  const menu = [['Москва', "и Московская область"], ['Санкт-Петербург', "и Ленинградская область"]];
  
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      title={
        <>
          <span style={{fontWeight: 400}}>Город</span>
          <img
            src={arrowDown}
            alt=""
            style={{
              transform: isOpen ? 'rotate(-90deg)' : 'rotate(0deg)',
              transition: 'transform 1s ease',
              marginLeft: '5px',
            }}
          />
        </>
      }
      wrapperClassName={styles.test}
      isActive={isOpen}
      buttonClassName={styles.serviceDropdown_button}
      onClick={() => setIsOpen(!isOpen)}
      // openOnHover
    >

      <div className={styles.menu_cities}>
        <input type="text" name="" value={search} onChange={(event) => setSearch(event.target.value)} id="" placeholder='выберите регион или город' />

        {menu.map((menu, index) => (
            <div key={index} className={styles.sity}>{menu[0]}<span className={styles.small}>{menu[1]}</span></div>
        ))}
      </div>

    </Dropdown>
  );
};

export default ServiceDropdownCities;