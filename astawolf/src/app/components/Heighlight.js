import React from "react";
import { FiIcons } from "./Icons";
export default function Heighlight() {
  const product = [
    {
      name: "Fashion smartwatches",
      src: "/images/smartwatch.png",
    },
    {
      name: "For better music",
      src: "/images/earbud.png",
    },
    {
      name: "For perfect neckband",
      src: "/images/neckband.png",
    },
    {
      name: "For better sound",
      src: "/images/speaker.png",
    },
    {
      name: "For the productivity pros",
      src: "/images/watch.png",
    },
    {
      name: "For the focused listeners",
      src: "/images/earphone.png",
    },
    {
      name: "For your backup",
      src: "/images/powerbank.png",
    },
    {
      name: "Charging Adaptor",
      src: "/images/adapter.png",
    },
  ];
  return (
    <section>
      <div className="titleHead" style={{ padding: "0" }}>
        <h1>Smart Lifestyle</h1>
        <p>
          Discover innovation in every device. upgrade your smart lifestyle.
        </p>
      </div>

      <div className="products">
        {product.map((e, index) => {
          return (
            <div className="product-card" key={index}>
              <img src={e.src} alt={e.name} />
              <h4>{e.name}&nbsp;<FiIcons.FiArrowRight/></h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
