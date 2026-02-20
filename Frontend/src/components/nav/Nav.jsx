import styles from "./Nav.module.css";
import homeIcon from "../../assets/home.png";
import alumini from "../../assets/alumini.png";
import chat from "../../assets/chat.png";
import jobs from "../../assets/jobs.png";
import notifications from "../../assets/notifications.png";
import opSrcPro from "../../assets/op-src-pro.png";
import profile from "../../assets/profile.png";
import refralls from "../../assets/refralls.png";
import menuBar from "../../assets/menuBar.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { name: "Home", path: "/", icon: homeIcon },
  { name: "Alumni", path: "/alumni", icon: alumini },
  { name: "Op-Src-Pro", path: "/op-src-pro", icon: opSrcPro },
  { name: "Jobs", path: "/jobs", icon: jobs },
  { name: "Referrals", path: "/referrals", icon: refralls },
];

  return (
    <nav className={styles.navbar}>
      

      <div className={styles.logo}>
        <span className={styles.logoU}>U</span>
        <span>nixa</span>
      </div>

          {/* Desktop Menu */}
      <div className={styles.menu}>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? `${styles.item} ${styles.active}`
                : styles.item
            }
          >
            <img
              src={item.icon}
              alt={item.name}
              className={styles.iconImg}
               width="18" height="18" 
            />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>


         <div className={styles.right}>
              <NavLink to="/chat">
          <img src={chat} alt="chat" className={styles.logoImg} width="30" height="30"  />
        </NavLink>

        <NavLink to="/notifications">
          <img
            src={notifications}
            alt="notifications"
            className={styles.logoImg}
              width="30" height="30" 
          />
        </NavLink>

        <NavLink to="/profile">
          <img src={profile} alt="profile" width="30" height="30"  className={styles.logoImg} />
        </NavLink>
           <div className={styles.menuIcon}  onClick={() => setIsOpen(!isOpen)}>
    <img src={menuBar} alt="menu" width="30" height="30"  className={styles.logoImg} />
  </div>
     </div>
  
      
        {isOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={styles.mobileItem}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
    
  );
};

export default Navbar;
