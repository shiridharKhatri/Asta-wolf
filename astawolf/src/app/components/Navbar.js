"use client";
import React, { useState } from "react";
import {
  BsIcons,
  HiIcons,
  GoIcons,
  FiIcons,
  SlIcons,
  MdIcons,
  CiIcons,
  IoIcons,
  CgIcons,
  BiIcons,
  AiIcons,
} from "./Icons";
export default function Navbar() {
  const profileOnClick = () => {
   
    const profile = document.getElementById("profileoc");
    profile.classList.toggle("profileToggle");
    if (profile.classList.contains("profileToggle")) {
      console.log("open")
      profile.style.display = "flex";
    } else {
      profile.style.display = "none";
      console.log("close")
    }
  };

  const categoryOnClick = () => {
    const category = document.getElementById("category");
    category.classList.toggle("category");
    if (category.classList.contains("category")) {
      category.style.display = "flex";
    } else {
      category.style.display = "none";
    }
  };
  return (
    <nav>
      <div className="logo">
        <img src="/asta-logo.png" alt="asta-logo" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="search-form">
          <form>
            <input
              placeholder="Search..."
              type="search"
              name="search"
              id="search"
            />
            <button>
              <BsIcons.BsSearch />
            </button>
          </form>

          <h1>
            <HiIcons.HiOutlineShoppingBag />
          </h1>
        </div>
        <div className="other-details">
          <ul>
            <li>Support</li>
            <li onClick={categoryOnClick}>
              Category&nbsp;
              <FiIcons.FiChevronDown />
            </li>
            <li id="profile" onClick={profileOnClick}>
              <GoIcons.GoPerson />
            </li>
          </ul>
          <ul id="category">
              <li>
                <CgIcons.CgMenuGridO />
                &nbsp;Products
              </li>
              <li>
                <IoIcons.IoWatchOutline />
                &nbsp;Smartwatchs
              </li>
              <li>
                <BsIcons.BsEarbuds />
                &nbsp;Earbuds
              </li>
              <li>
                <SlIcons.SlEarphones />
                &nbsp;Earphones
              </li>
              <li>
                <MdIcons.MdOutlineEarbuds />
                &nbsp;Neckband
              </li>
              <li>
                <CiIcons.CiSpeaker />
                &nbsp;Speaker
              </li>
            </ul>

          {/* If user is logged in show this  */}
          {/* <div className="profile-details" id="profileoc">
               <img src="/profile-image/male.png" alt="male" />
               <h1>Example Name</h1>
               <p>example@gmail.com</p>
               <button><BiIcons.BiLogOutCircle/>&nbsp;Logout</button>
            </div> */}
          {/* End  */}

          {/* Is user is not logged in show this  */}
          <div className="profile-details" id="profileoc">
            <img src="/profile-image/male.png" alt="other" />
            <h1>Guest Login</h1>
            <p>Please Login below to purchase and to save items</p>
            <button>
              <AiIcons.AiOutlineLogout />
              &nbsp;Login
            </button>
            <h5 style={{ fontSize: "1.5rem", margin: "1rem 0" }}>Or</h5>
            <button>
              <AiIcons.AiOutlineUserAdd />
              &nbsp;Signup
            </button>
          </div>
          {/* End  */}
        </div>
      </div>
    </nav>
  );
}
