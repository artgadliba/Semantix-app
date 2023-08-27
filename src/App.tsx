import styled from "styled-components";
import React, { Suspense, useEffect } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";

// const Account = React.lazy(() => import("./pages/Account/Account"));
// const Collection = React.lazy(() => import("./pages/Collection/Collection"));
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
            {/*<Route path="/account" element={<Account />} />*/}
            {/*<Route path="/raffles/:id" element={<Collection />} />*/}
          </Routes>
        </Suspense>
      </AppBlock>
  );
}

export { App };
