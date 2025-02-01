import React from "react";

import moment from "moment";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-center py-4">
      <p className="text-black dark:text-gray-400 text-sm">
        Copyrights &copy; {moment().format("YYYY")} | All Rights Reserved with
        Handson Panggabean.
      </p>
    </footer>
  );
};

export default Footer;
