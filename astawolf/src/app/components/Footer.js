import React from "react";
import { BsIcons, ImIcons, BiIcons } from "./Icons";
export default function Footer() {
  return (
    <footer>
      <img id="image" src="/footer.png" alt="image" />
      <div className="firstFooterSection">
        <div className="image">
          <img src="/footer.png" alt="logo" />
        </div>
        <div className="usefulLinks">
          <h2>Useful Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="company">
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Return and Replace Policy</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <ul>
            <li>Store: Kathmandu, Nepal</li>
            <li>Call: +977-9761723399</li>
            <li>Mail: info@astawolf.com</li>
          </ul>
        </div>
      </div>
      <div className="socialLinks">
        <ul>
          <li>
            <a href="https://www.facebook.com/AstaWolfNepal">
              <ImIcons.ImFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/astawolfnepal/">
              <BsIcons.BsInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <BsIcons.BsTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@astawolfnepal">
              <BsIcons.BsYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/astawolfnepal/about/">
              <BiIcons.BiLogoLinkedin />
            </a>
          </li>
        </ul>
        <p>
          Copyright © 2023, Astawolf. All Rights Reserved. Developed by Digitic
          Nepal.
        </p>
      </div>
    </footer>
  );
}
