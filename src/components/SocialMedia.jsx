import React from "react";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitterX />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
