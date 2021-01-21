import React, { Suspense } from "react";
import Router from "./Router";
import Header from "./Header";

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Header />
            <Router />
        </Suspense>
    );
}

export default App;
