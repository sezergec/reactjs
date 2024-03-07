import React from "react";
import "./sidebar.scss";
import SidebarNav from "./sidebar-nav";

const Sidebar = () => {
  return (
    <aside>
      <nav>
        {[...new Array(8)].map((_, index) => (
          <SidebarNav key={index} />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
