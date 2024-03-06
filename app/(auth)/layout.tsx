import React from "react";

//folders route in paranthesis like this (root) are called route group

//layout always has to export children within them
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
