import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RemoveTrailingSlash from "utils/RemoveTrailingSlash";
import { Helmet } from "react-helmet";
import Index from "./pages/Index/Index";
import { AppBlock } from "index";

const LandingFaqPage = React.lazy(() => import("./pages/LandingFaqPage/LandingFaqPage"));
const AppFolderPage = React.lazy(() => import("./pages/AppFolderPage/AppFolderPage"));
const AppMainPage = React.lazy(() => import("./pages/AppMainPage/AppMainPage"));
const AppFilePage = React.lazy(() => import("./pages/AppFilePage/AppFilePage"));
const AppBalancePage = React.lazy(() => import("./pages/AppBalancePage/AppBalancePage"));
const AppFaqPage = React.lazy(() => import("./pages/AppFaqPage/AppFaqPage"));

const App = () => {
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
        <AppBlock id="app_block">
            <Helmet>
                <script className="structured-data-list" type="application/ld+json">
                    {JSON.stringify(organisation)}
                </script>
            </Helmet>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <RemoveTrailingSlash />
                    <Routes>
                        <Route index element={<Index />} />
                        <Route path="/faq" element={<LandingFaqPage />} />
                        <Route path="/app/main" element={<AppMainPage />} />
                        <Route path="/app/folders/:id" element={<AppFolderPage />} />
                        <Route path="/app/folders/:id/:fileName" element={<AppFilePage />} />
                        <Route path="/app/balance" element={<AppBalancePage />} />
                        <Route path="/app/faq" element={<AppFaqPage />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </AppBlock>
    );
}

export default App;
