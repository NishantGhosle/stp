// const Footer = () => {
//   return (
//     <div className="text-slate-200">
//       <div className="py-2 mt-3 text-center border-t text-muted border-dark">
//         Since 2018
//         <p>
//           Created By <span className="text-primary">Softech Productions </span>{" "}
//           | All Rights Reserved
//         </p>
//         <p>Address :- Bhopal, India</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div class="text-slate-200">
      <div class="py-4 mt-5 text-center border-t text-muted border-dark">
        Since 2018
        <p>
          Created By{" "}
          <span class="text-primary">
            <a href="/" class="text-white-500 hover:text-white-700 mr-4">
              Softech Productions
            </a>
          </span>{" "}
          | All Rights Reserved
        </p>
        <p>Address :- Bhopal, India</p>
        <a
          href="https://www.linkedin.com/company/softechproductions/"
          class="text-white-500 hover:text-white-700 mr-4"
        >
          <i class="fab fa-facebook-f fa-2x">facebook</i>
        </a>
        <a
          href="https://www.linkedin.com/company/softechproductions/"
          class="text-white-500 hover:text-white-700 mr-4"
        >
          <i class="fab fa-twitter fa-2x">twitter</i>
        </a>
        <a
          href="https://www.linkedin.com/company/softechproductions/"
          class="text-white-500 hover:text-white-700 mr-4"
        >
          <i class="fab fa-linkedin-in fa-2x">linkedin</i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
