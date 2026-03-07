// import styles from "./Nav.module.css";
// import homeIcon from "../../assets/home.png";
// import alumini from "../../assets/alumini.png";
// import chat from "../../assets/chat.png";
// import jobs from "../../assets/jobs.png";
// import notifications from "../../assets/notifications.png";
// import opSrcPro from "../../assets/op-src-pro.png";
// import profile from "../../assets/profile.png";
// import refralls from "../../assets/refralls.png";
// import menuBar from "../../assets/menuBar.png";
// import { useState, useRef, useEffect } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//   { name: "Home", path: "/", icon: homeIcon },
//   { name: "Alumni", path: "/alumni", icon: alumini },
//   { name: "Op-Src-Pro", path: "/op-src-pro", icon: opSrcPro },
//   { name: "Jobs", path: "/jobs", icon: jobs },
//   { name: "Referrals", path: "/referrals", icon: refralls },
// ];

// const menuRef = useRef(null);

// useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (
//       menuRef.current &&
//       !menuRef.current.contains(event.target)
//     ) {
//       setIsOpen(false);
//     }
//   };

//   document.addEventListener("mousedown", handleClickOutside);

//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//   };
// }, []);

//   return (
//     <nav className={styles.navbar}>
    
//       <div className={styles.logo}>
//         <span className={styles.logoU}>U</span>
//         <span>nixa</span>
//       </div>

//       <div className={styles.menu}>
//         {navItems.map((item) => (
//           <NavLink
//             key={item.name}
//             to={item.path}
//             className={({ isActive }) =>
//               isActive
//                 ? `${styles.item} ${styles.active}`
//                 : styles.item
//             }
//           >
//             <img
//               src={item.icon}
//               alt={item.name}
//               className={styles.iconImg}
//                width="18" height="18" 
//             />
//             <span>{item.name}</span>
//           </NavLink>
//         ))}
//       </div>

//          <div className={styles.right}>
//               <NavLink to="/chat">
//           <img src={chat} alt="chat" className={styles.logoImg} width="30" height="30"  />
//         </NavLink>

//         <NavLink to="/notifications">
//           <img
//             src={notifications}
//             alt="notifications"
//             className={styles.logoImg}
//               width="30" height="30" 
//           />
//         </NavLink>

//         <NavLink to="/profile">
//           <img src={profile} alt="profile" width="30" height="30"  className={styles.logoImg} />
//         </NavLink>
//   <div ref={menuRef}>
//   <div
//     className={styles.menuIcon}
//     onClick={() => setIsOpen(!isOpen)}
//   >
//     <img src={menuBar} alt="menu" width="30" height="30" className={styles.logoImg} />
//   </div>

//   {isOpen && (
//     <div className={styles.mobileMenu}>
//       {navItems.map((item) => (
//         <NavLink
//           key={item.name}
//           to={item.path}
//           className={styles.mobileItem}
//           onClick={() => setIsOpen(false)}
//         >
//           {item.name}
//         </NavLink>
//       ))}
//     </div>
//   )}
// </div>
//      </div>
       
      
//     </nav>
    
//   );
// };

// export default Navbar;








import styles from "./Nav.module.css";
import homeIcon from "../../assets/home.png";
import alumini from "../../assets/alumini.png";
import chat from "../../assets/chat.png";
import jobs from "../../assets/jobs.png";
import notifications from "../../assets/notifications.png";
import opSrcPro from "../../assets/op-src-pro.png";
import profileIcon from "../../assets/profile.png";
import refralls from "../../assets/refralls.png";
import menuBar from "../../assets/menuBar.png";

import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import Sidebar from "../homepage/Sidebar";
import ProfileDropdown from "../homepage/ProfileDropdown";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  const profileRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/", icon: homeIcon },
    { name: "Alumni", path: "/alumni", icon: alumini },
    { name: "Op-Src-Pro", path: "/op-src-pro", icon: opSrcPro },
    { name: "Jobs", path: "/jobs", icon: jobs },
    { name: "Referrals", path: "/referrals", icon: refralls },
  ];

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close dropdown on outside click (desktop only)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        {/* Logo */}
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
              <img src={item.icon} alt="" width="18" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <NavLink to="/chat">
            <img src={chat} alt="" width="28" />
          </NavLink>

          <NavLink to="/notifications">
            <img src={notifications} alt="" width="28" />
          </NavLink>

          {/* Profile */}
          <div
            className={styles.profileWrapper}
            ref={profileRef}
          >
            <img
              src={profileIcon}
              alt="profile"
              width="28"
              onClick={() =>
                setIsProfileOpen(!isProfileOpen)
              }
              className={styles.profileIcon}
            />

            {/* Desktop Dropdown */}
            {isProfileOpen && !isMobile && (
              <div className={styles.dropdownContainer}>
                <ProfileDropdown />
              </div>
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={styles.menuIcon}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img src={menuBar} alt="" width="28" />
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
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

      {/* Mobile Sidebar Drawer */}
      {isProfileOpen && isMobile && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsProfileOpen(false)}
        >
          <div
            className={styles.mobileSidebar}
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar/>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;