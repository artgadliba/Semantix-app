import { createGlobalStyle } from "styled-components";
import App from "App";
import pxIntoRem from "utils/pxIntoRem";
import { hydrate, render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "slices";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    text-decoration: none;
    outline: none;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: ${pxIntoRem(8)};
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(37, 38, 55);
      height: ${pxIntoRem(50)};
      width: ${pxIntoRem(8)};
      border-radius: ${pxIntoRem(4)};
    }
  }

  body, html, #root {
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 16px;
    scroll-behavior: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #040512;
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
    @media(max-width: 500px) {
      font-size: 16px;
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
    @media(max-width: 300px) {
      font-size: 14px;
    }
    @media(max-width: 250px) {
      font-size: 13px;
    }
    @media(max-width: 200px) {
      font-size: 12px;
    }
  }

  #root > div {
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  a, button {
    cursor: pointer;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
        url('/fonts/Mulish-Bold.ttf') format('truetype'),
        url('/fonts/Mulish-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
        url('/fonts/Mulish-SemiBold.ttf') format('truetype'),
        url('/fonts/Mulish-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
        url('/fonts/Mulish-Medium.ttf') format('truetype'),
        url('/fonts/Mulish-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Mulish';
    src: local('Mulish'),
        url('/fonts/Mulish-Regular.ttf') format('truetype'),
        url('/fonts/Mulish-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`;

const route = (
    <>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </>
);

const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement.hasChildNodes()) {
    hydrate(route, rootElement);
} else {
    render(route, rootElement);
}