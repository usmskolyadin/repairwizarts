import React, {useState} from 'react';
import Dropdown from "react-multilevel-dropdown";
import arrowDown from "../../../../img/header/icons/arrow-down-icon.svg";
import styles from './ServiceDropdown.module.scss';
import { Link } from 'react-router-dom';

const ServiceDropdown = () => {
  const menu: string[] = ['Ремонт телефонов', 'Ремонт планшетов', 'Ремонт ноутбуков', 'Ремонт компьютеров', 'Ремонт часов', 'Аксессуары'];
  const submenuData: string[] = ['Ремонт iPhone', 'Ремонт iPad', 'Ремонт MacBook'];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      title={
        <>
          <span>Услуги</span>
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
      isActive={isOpen}
      menuClassName={styles.serviceDropdown}
      wrapperClassName={styles.serviceDropdown_wrapper}
      buttonClassName={styles.serviceDropdown_button}
      onClick={() => setIsOpen(!isOpen)}
      position="left"
      // openOnHover = {true}
    >

  {/* 1 lvl */}
  <div className={styles.serviceDropdown_lvl1}>
    {/* <div className={styles.lvl1_row}>
      <img src="/img/microshema.png" alt="" />
      <p>электроника</p>
    </div> */}
    <Dropdown.Item className={` ${styles.serviceDropdown_item_lvl1}`}>
    <span className={styles.serviceDropdown_lvl1__span}>
      <img src="/img/microshema.png" alt="" />
      <p>электроника</p>
    </span>
      {/* 2lvl */}
      <Dropdown.Submenu position="right-top" className={styles.Submenu_submenu}>
        {menu.map((menu, index) => (
          <Dropdown.Item className={styles.serviceDropdown_item} key={index}>
            <span className={styles.serviceDropdown_item_menu}>{menu}</span>

            {/* 3lvl */}
            <Dropdown.Submenu position="right-top" className={styles.Submenu_submenu_lvl3}>
              {submenuData.map((submenu, index) => (
                <Dropdown.Item className={`${styles.serviceDropdown_item} ${styles.serviceDropdown_item_lvl3}`} key={index}>
                  <Link to="/devices/1"><span>{submenu}</span></Link>
                  
                </Dropdown.Item>
              ))}
            </Dropdown.Submenu>

          </Dropdown.Item>
        ))}
      </Dropdown.Submenu>
  </Dropdown.Item>

    <div className={styles.lvl1_row}>
      <p>Мастера по ремонту</p>
    </div>
  </div>
</Dropdown>


  );
};

export default ServiceDropdown;