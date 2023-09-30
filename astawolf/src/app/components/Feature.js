"use client";
import React, { useState } from "react";
import { AiIcons, HiIcons } from "./Icons";
export default function Feature() {
  const [value, setValue] = useState("All product");
  const valueOnChange = (e) => {
    setValue(e.target.value);
  };

  const items = [
    {
      name: "Phoenix Smartwatch",
      price: "Rs 6,000",
      discount: "Rs 4,190",
      src: "/hot-items/watch.png",
      rating: 5,
    },
    {
      name: "Thunder Neckband",
      price: "Rs 3,000",
      discount: "Rs 1,890",
      src: "/hot-items/neckband.png",
      rating: 5,
    },
    {
      name: "Sonic Earbud",
      price: "Rs 4,100",
      discount: "Rs 2,790",
      src: "/hot-items/earbud.png",
      rating: 5,
    },
    {
      name: "Retro Ultra Speaker",
      price: "Rs 5,500",
      discount: "Rs 3,390",
      src: "/hot-items/speaker.png",
      rating: 5,
    },
    {
      name: "Era Earbuds",
      price: "Rs 3,500",
      discount: "Rs 2,390",
      src: "/hot-items/earbudtwo.png",
      rating: 5,
    },
    {
      name: "Sleek Earbuds",
      price: "Rs 3,000",
      discount: "RS 1,990",
      src: "/hot-items/bud3.png",
      rating: 5,
    },
    {
      name: "Rock Earbuds",
      price: "Rs 3,500",
      discount: "Rs 2,390",
      src: "/hot-items/bud2.png",
      rating: 5,
    },
    {
      name: "Tank Speakers",
      price: "Rs 3,500",
      discount: "Rs 2,390",
      src: "/hot-items/speaker2.png",
      rating: 5,
    },
  ];

  function getRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStars = Math.ceil(rating - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-star-${i}`} className="stars">
          <AiIcons.AiFillStar />
        </span>
      );
    }

    for (let i = 0; i < halfStars; i++) {
      stars.push(
        <span key={`half-star-${i}`} className="stars">
          <AiIcons.AiFillStar style={{ opacity: 0.5 }} />
        </span>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-star-${i}`} className="stars">
          <AiIcons.AiOutlineStar />
        </span>
      );
    }

    return stars;
  }
  // console.log(value)
  return (
    <>
      <section className="feature-main">
        <div className="titleHead" style={{ padding: "0" }}>
          <h1>Feature products</h1>
          <p>
            Discover innovation in every device. Elevate your tech lifestyle
            today!
          </p>
        </div>
        <div className="head-title-info">
          <h2 style={{ textTransform: "capitalize", fontSize: "1.7rem" }}>
            {value}
          </h2>
          <div className="select">
            <select id="" onChange={valueOnChange}>
              <option value="earbuds">Earbuds</option>
              <option value="smartwatch">Smartwatch</option>
              <option value="earphone">Earphone</option>
              <option value="powerbank">Powerbank</option>
              <option value="neckband">Neckband</option>
              <option value="speaker">Speaker</option>
              <option value="datacable">Datacable</option>
              <option value="adapter">Power Adapter</option>
            </select>
          </div>
        </div>
        <div className="cardsItemMain">
          {items.splice(0, 8).map((e, index) => {
            return (
              <div className="main-card" key={index}>
                <img src={e.src} alt={e.name} />
                <div className="secondDet">
                  <h2>{e.name}</h2>
                  <div className="revewStars">
                    <span className="stars">{getRatingStars(e.rating)}</span>
                    <p>({e.rating} Stars)</p>
                  </div>
                  <h3>
                    <span style={{ textDecoration: "line-through" }}>
                      {e.price}
                    </span>
                    &nbsp;
                    <span id="discountPrice" style={{ textDecoration: "none" }}>
                      {e.discount}
                    </span>
                  </h3>
                  <button>
                    <HiIcons.HiOutlineShoppingCart />
                    &nbsp;Grab now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="view-all">
          <button class="cta">
            <span>View all</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}
