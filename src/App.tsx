import styled from "styled-components";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import AppFolderPage from "pages/AppFolderPage/AppFolderPage";
import AppMainPage from "pages/AppMainPage/AppMainPage";
import Index from "pages/Index/Index";
import AppFilePage from "pages/AppFilePage/AppFilePage";
import AppBalancePage from "pages/AppBalancePage/AppBalancePage";
import AppFaqPage from "pages/AppFaqPage/AppFaqPage";
import LandingFaqPage from "pages/LandingFaqPage/LandingFaqPage";

// const Folder = React.lazy(() => import("./pages/AppFolderPage/AppFolderPage"));
// const Main = React.lazy(() => import("./pages/AppMainPage/AppMainPage"));
// const Index = React.lazy(() => import("./pages/Index/Index"));
// const File = React.lazy(() => import("./pages/AppFilePage/AppFilePage"));
// const Balance = React.lazy(() => import("./pages/AppBalancePage/AppBalancePage"));
// const AppFAQ = React.lazy(() => import("./pages/AppFaqPage/AppFaqPage"));
// const LandingFAQ = React.lazy(() => import("./pages/LandingFaqPage/LandingFaqPage"));

const AppBlock = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #040512;
  overflow-x: hidden;
`;

function App() {
    const organisation = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Semantix",
        "url": "https://semantix.one",
        "logo": "https://semantix.one/images/main-logo.svg",
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "hello@semantix.one"
        },
        "sameAs": "https://t.me/semantix_one"
    };
    
    return (
        <AppBlock>
            <Helmet>
                <script className="structured-data-list" type="application/ld+json">
                    {JSON.stringify(organisation)}
                </script>
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Index />} />
                        <Route path="/app/main" element={<AppMainPage />} />
                        <Route path="/app/folders/:id" element={<AppFolderPage />} />
                        <Route path="/app/folders/:id/:fileName" element={<AppFilePage />} />
                        <Route path="/app/balance" element={<AppBalancePage />} />
                        <Route path="/app/faq" element={<AppFaqPage />} />
                        <Route path="/faq" element={<LandingFaqPage />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </AppBlock>
    );
}

export { App };
