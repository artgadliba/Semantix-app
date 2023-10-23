import styled from "styled-components";
import React, { Suspense, useEffect } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

const Folder = React.lazy(() => import("./pages/AppFolderPage/AppFolderPage"));
const Main = React.lazy(() => import("./pages/AppMainPage/AppMainPage"));
const Index = React.lazy(() => import("./pages/Index/Index"));
const File = React.lazy(() => import("./pages/AppFilePage/AppFilePage"));
const Balance = React.lazy(() => import("./pages/AppBalancePage/AppBalancePage"));
const AppFAQ = React.lazy(() => import("./pages/AppFaqPage/AppFaqPage"));
const LandingFAQ = React.lazy(() => import("./pages/LandingFaqPage/LandingFaqPage"));

const AppBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #040512;
  overflow-x: hidden;
`;

function App() {
    return (
        <AppBlock>
            <Helmet>
                <title>Semantix - распознавание речи и конвертация в текст онлайн</title>
                <meta name="description" content="Транскрибация аудио и видео в текст. Расшифровка речи, расстановка знаков препинания, редактирование в браузере, экспорт в *.docx, *.srt"></meta>
                <meta name="keywords" content="транскрибация, транскрибировать текст, транскрибировать текст онлайн, перевод аудио файлов в текст, транскрибировать онлайн, перевод видео в текст, транскрибация цены, перевод аудио файлов в текст онлайн, переводчик аудио в текст"></meta>
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route index element={<Index />} />
                <Route path="/app/main" element={<Main />} />
                <Route path="/app/folders/:folderName" element={<Folder />} />
                <Route path="/app/folders/:folderName/:fileName" element={<File />} />
                <Route path="/app/balance" element={<Balance />} />
                <Route path="/app/faq" element={<AppFAQ />} />
                <Route path="/faq" element={<LandingFAQ />} />
            </Routes>
            </Suspense>
        </AppBlock>
    );
}

export { App };
