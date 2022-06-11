import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./app_layout/ScrollToTop";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <BrowserRouter>
        <ScrollToTop>
            <RecoilRoot>
                <App></App>
            </RecoilRoot>
        </ScrollToTop>
    </BrowserRouter>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
