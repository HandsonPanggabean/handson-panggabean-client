import React from "react";

import moment from "moment";

const Footer = () => {
  return (
    <footer className="py-4 text-center bg-white dark:bg-black">
      <p className="text-sm text-black dark:text-gray-400">
        Copyrights &copy; {moment().format("YYYY")} | All Rights Reserved with
        Handson Panggabean.
      </p>
    </footer>
  );
};

export default Footer;
