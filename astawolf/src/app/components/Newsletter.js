import React from "react";
import Image from "next/image";
import { AiIcons, IoIcons } from "./Icons";
export default function Newsletter() {
  return (
    <div className="newsLetter">
      <div className="newsletter-image">
        <Image
          height={300}
          width={300}
          className="n-image"
          src="/image/newsletter.gif"
        />
      </div>
      <div className="subscribe">
        <h1>Subscribe to our newsletter</h1>
        <h5>
          Subscribe here to get the news, update and special offers delivered
          directly to your inbox.
        </h5>
        <form>
          <input type="email" placeholder="example@gmail.com" />
          <button>
            <IoIcons.IoSend />
          </button>
        </form>
        <p>
          <AiIcons.AiFillInfoCircle />
          &nbsp;You can unsubscribe anytime
        </p>
      </div>
    </div>
  );
}
