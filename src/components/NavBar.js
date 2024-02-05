import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link.toLowerCase()}`}>
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;

//import React from "react";

//function NavBar() {
  //const links = ["home", "about", "projects"];
 // return <nav>{/* display an <a> tag for each link here */
   //<> <a href="#home">Home</a>
    //<a href="#about">About</a>
    //<a href="#project">projects</a>
    //</>

//  }</nav>;
//}

//export default NavBar;
