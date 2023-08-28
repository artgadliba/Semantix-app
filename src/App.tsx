import styled from "styled-components";
import React, { Suspense, useEffect } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";

// const Account = React.lazy(() => import("./pages/Account/Account"));
const Main = React.lazy(() => import("./pages/Main/Main"));
const Index = React.lazy(() => import("./pages/Index/Index"));

const AppBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #040512;
  overflow-x: hidden;
`;

function App() {
  useEffect(() => {
    document.title = 'Semantix';
  }, []);

  return (
      <AppBlock>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route index element={<Index />} />
            <Route path="/main" element={<Main />} />
            {/*<Route path="/raffles/:id" element={<Collection />} />*/}
          </Routes>
        </Suspense>
      </AppBlock>
  );
}

export { App };
