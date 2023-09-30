import React from "react";
import { AiIcons, HiIcons } from "./Icons";
export default function Hotselling() {
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
  return (
    <section className="hotSelling">
      <div className="titleHead">
        <h1>Hot-Selling Gadgets</h1>
        <p>Seize innovation now, not later. Upgrade your life with us today.</p>
      </div>
      <div className="hotItems">
        <div className="top-head">
          <h3>
            Hot selling items(23)<span>View All</span>
          </h3>
        </div>
        <div className="cardsItem">
          {items.map((e, index) => {
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
                    <span style={{textDecoration:"line-through"}}>{e.price}</span>&nbsp;<span id="discountPrice" style={{textDecoration:"none"}}>{e.discount}</span>
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
      </div>
    </section>
  );
}
