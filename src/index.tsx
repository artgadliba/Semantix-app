import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    outline: none;
    box-sizing: border-box!important;
    font-family: 'Mulish';
  }

  body, html, #root {
    display: flex;
    width: 100%;
    min-height: 100vh;
    background-color: white;
    font-size: 16px;

    @media(max-width: 1450px) {
      font-size: 14.5px;
    }

    @media(max-width: 1400px) {
      font-size: 14px;
    }

    @media(max-width: 1350px) {
      font-size: 13.5px;
    }

    @media(max-width: 1300px) {
      font-size: 13px;
    }

    @media(max-width: 1250px) {
      font-size: 12.5px;
    }

    @media(max-width: 1200px) {
      font-size: 12px;
    }

    @media(max-width: 1150px) {
      font-size: 11.5px;
    }

    @media(max-width: 1100px) {
      font-size: 11px;
    }

    @media(max-width: 1050px) {
      font-size: 10.5px;
    }

    @media(max-width: 1000px) {
      font-size: 10px;
    }

    @media(max-width: 950px) {
      font-size: 9.5px;
    }

    @media(max-width: 900px) {
      font-size: 9px;
    }

    @media(max-width: 850px) {
      font-size: 8.5px;
    }

    @media(max-width: 800px) {
      font-size: 8px;
    }

    @media(max-width: 750px) {
      font-size: 7.5px;
    }

    @media(max-width: 700px) {
      font-size: 7px;
    }

    @media(max-width: 650px) {
      font-size: 6.5px;
    }

    @media(max-width: 600px) {
      font-size: 6px;
    }

    @media(max-width: 550px) {
      font-size: 5.5px;
    }
    @media(max-width: 500px) {
      font-size: 16px;
    }
    @media(max-width: 450px) {
      font-size: 15px;
    }
    @media(max-width: 400px) {
      font-size: 14px;
    }
    @media(max-width: 350px) {
      font-size: 12px;
    }
    @media(max-width: 300px) {
      font-size: 10px;
    }
    @media(max-width: 250px) {
      font-size: 8px;
    }
  }

  #root > div {
    display: flex;
    width: 100%;
    min-height: 100vh;
  }

  a, button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
        url('/fonts/Mulish-Bold.ttf') format('woff2');
        url('/fonts/Mulish-Bold.ttf') format('woff');
        url('/fonts/Mulish-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
        url('/fonts/Mulish-SemiBold.ttf') format('woff2');
        url('/fonts/Mulish-SemiBold.ttf') format('woff');
        url('/fonts/Mulish-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
        url('/fonts/Mulish-Medium.ttf') format('woff2');
        url('/fonts/Mulish-Medium.ttf') format('woff');
        url('/fonts/Mulish-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
        url('/fonts/Mulish-Regular.ttf') format('woff2');
        url('/fonts/Mulish-Regular.ttf') format('woff');
        url('/fonts/Mulish-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

root.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>
);
