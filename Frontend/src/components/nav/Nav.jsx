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

const [isOpen,setIsOpen]=useState(false);
const [isProfileOpen,setIsProfileOpen]=useState(false);
const [isMobile,setIsMobile]=useState(window.innerWidth<=1024);

const profileRef=useRef(null);
const menuRef=useRef(null);

const navItems=[
{ name:"Home", path:"/", icon:homeIcon },
{ name:"Alumni", path:"/alumni", icon:alumini },
{ name:"Op-Src-Pro", path:"/op-src-pro", icon:opSrcPro },
{ name:"Jobs", path:"/jobs", icon:jobs },
{ name:"Referrals", path:"/referrals", icon:refralls }
];

useEffect(()=>{
const handleResize=()=>{
setIsMobile(window.innerWidth<=1024);
};

window.addEventListener("resize",handleResize);
return()=>window.removeEventListener("resize",handleResize);
},[]);

useEffect(()=>{

const handleClickOutside=(e)=>{

if(profileRef.current && !profileRef.current.contains(e.target)){
setIsProfileOpen(false);
}

if(menuRef.current && !menuRef.current.contains(e.target)){
setIsOpen(false);
}

};

document.addEventListener("mousedown",handleClickOutside);

return()=>{
document.removeEventListener("mousedown",handleClickOutside);
};

},[]);

return(
<>

<nav className="w-full h-[65px] bg-white flex items-center justify-between px-10 shadow-sm sticky top-0 z-[1000]">

{/* Logo */}

<div className="flex items-center text-blue-600 text-[24px] font-semibold">

<span className="text-[34px] font-bold">U</span>
<span>nixa</span>

</div>

{/* Desktop Menu */}

<div className="hidden lg:flex gap-4">

{navItems.map((item)=>(

<NavLink
key={item.name}
to={item.path}
className={({isActive})=>

`flex items-center gap-2 px-4 py-[6px] rounded-full font-medium transition

${isActive
? "bg-[#035BFF] text-white"
: "bg-[#e3eeef] text-[#035bff] hover:bg-gray-100"
}`
}

>
 {({ isActive }) => (
    <>
      <img
        src={item.icon}
        width="18"
        className={isActive ? "invert brightness-0" : ""}
        alt=""
      />
      <span>{item.name}</span>
    </>
  )}
</NavLink>

))}

</div>

{/* Right Section */}

<div className="flex items-center gap-4">

<NavLink to="/chat">
<img src={chat} width="28" alt="" />
</NavLink>

<NavLink to="/notifications">
<img src={notifications} width="28" alt="" />
</NavLink>

{/* Profile */}

<div className="relative cursor-pointer" ref={profileRef}>

<img
src={profileIcon}
width="28"
alt="profile"
className="rounded-full"
onClick={()=>setIsProfileOpen(prev=>!prev)}
/>

{isProfileOpen && !isMobile && (

<div className="absolute right-0 top-[55px] z-[999]">

<ProfileDropdown/>

</div>

)}

</div>

{/* Mobile Menu */}

<div className="relative lg:hidden" ref={menuRef}>

<div
className="cursor-pointer"
onClick={()=>setIsOpen(prev=>!prev)}
>

<img src={menuBar} width="28" alt="" />

</div>

{isOpen && (

<div className="absolute right-0 top-[55px] bg-white rounded-xl p-6 shadow-lg flex flex-col gap-3 w-[150px]">

{navItems.map((item)=>(

<NavLink
key={item.name}
to={item.path}
className="text-[#2563eb]"
onClick={()=>setIsOpen(false)}
>

{item.name}

</NavLink>

))}

</div>

)}

</div>

</div>

</nav>

{/* Mobile Sidebar */}

{isProfileOpen && isMobile && (

<div
className="fixed inset-0 bg-black/40 z-[2000]"
onClick={()=>setIsProfileOpen(false)}
>

<div
className="fixed left-0 top-0 h-full w-[85%] max-w-[300px] bg-white p-4"
onClick={(e)=>e.stopPropagation()}
>

<Sidebar/>

</div>

</div>

)}

</>

);

};

export default Navbar;