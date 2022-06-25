import React from "react";
import styled from "styled-components";

import Content from "./content";
import Header from "./header";

const MainLayout = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: min-content 1fr;
  width: 100vw;
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <MainLayout className="app-main-layout">
      <Header />
      <Content>{children}</Content>
    </MainLayout>
  );
};

export default Layout;
