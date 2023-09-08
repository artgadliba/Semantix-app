import styled from "styled-components";
import React, { Suspense, useEffect } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";

const Folder = React.lazy(() => import("./pages/AppFolderPage/AppFolderPage"))
const Folders = React.lazy(() => import("./pages/AppMainPage/AppMainPage"));
const Main = React.lazy(() => import("./pages/AppMainPage/AppMainPage"));
const Index = React.lazy(() => import("./pages/Index/Index"));
const File = React.lazy(() => import("./pages/AppFilePage/AppFilePage"))

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
            <Route path="/folders/:folderName" element={<Folder />} />
            <Route path="/folders" element={<Folders />} />
            <Route path="/folders/:folderName/:fileName" element={<File />} />
          </Routes>
        </Suspense>
      </AppBlock>
  );
}

export { App };
