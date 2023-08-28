import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../../components/Container/Container";
import {
  LandingFooterBlock,
  LandingFooterBody,
  LandingFooterTop,
  LandingFooterStamp,
  LandingFooterDocumentsNavigation,
  LandingFooterDocumentLink,
  LandingFooterContactsBlock,
  LandingFooterContactTelegramBlock,
  LandingFooterTelegramIcon,
  LandingFooterTelegramTitle,
  LandingFooterContactEmailBlock,
  LandingFooterEmailIcon,
  LandingFooterEmailTitle
} from "./LandingFooterStyles";

const LandingFooter: FC = () => {
  const location = useLocation();

  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" })
        }
    } else {
    window.scrollTo({top: 0,left: 0, behavior: "auto"})
    }
  }, [location]);

  return (
    <LandingFooterBlock>
      {/* <Container maxWidth={1440}> */}
        <LandingFooterBody>
          <LandingFooterTop />
          <LandingFooterStamp>Москва - 2023 Semantix</LandingFooterStamp>
          <LandingFooterDocumentsNavigation>
            <LandingFooterDocumentLink>Оферта</LandingFooterDocumentLink>
            <LandingFooterDocumentLink>Политика конфиденциальности</LandingFooterDocumentLink>
          </LandingFooterDocumentsNavigation>
          <LandingFooterContactsBlock>
            <LandingFooterContactTelegramBlock to="/">
              <LandingFooterTelegramIcon width="20" height="20" viewBox="0 0 20 20"><g clip-path="url(#a)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.48 3.692a1.25 1.25 0 0 1 1.72 1.355L16.31 16.51c-.184 1.106-1.397 1.74-2.412 1.189a48.711 48.711 0 0 1-3.241-1.912c-.567-.37-2.303-1.558-2.09-2.403.184-.723 3.1-3.438 4.767-5.052.654-.634.356-1-.416-.416-1.92 1.448-4.999 3.65-6.017 4.27-.898.547-1.367.64-1.927.547-1.021-.17-1.969-.433-2.742-.754-1.045-.433-.994-1.87-.001-2.288l14.25-6Z" /></g><defs><clipPath id="a">
                <path fill="#fff" d="M0 0h20v20H0z"/></clipPath></defs>
              </LandingFooterTelegramIcon>
              <LandingFooterTelegramTitle>@semantix</LandingFooterTelegramTitle>
            </LandingFooterContactTelegramBlock>
            <LandingFooterContactEmailBlock>
              <LandingFooterEmailIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.667 5.833A3.333 3.333 0 0 1 5 2.5h10a3.333 3.333 0 0 1 3.333 3.333v8.334A3.333 3.333 0 0 1 15 17.5H5a3.333 3.333 0 0 1-3.333-3.333V5.833Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.48 6.32a.625.625 0 0 1 .867-.173l3.15 2.1c.91.607 2.096.607 3.005 0l3.151-2.1a.625.625 0 0 1 .694 1.04l-3.151 2.1a3.958 3.958 0 0 1-4.392 0l-3.15-2.1a.625.625 0 0 1-.174-.867Z" fill="#0E0F1A"/>
              </LandingFooterEmailIcon>
              <LandingFooterEmailTitle>hello@semantix.one</LandingFooterEmailTitle>
            </LandingFooterContactEmailBlock>
          </LandingFooterContactsBlock>
        </LandingFooterBody>
      {/* </Container> */}
    </LandingFooterBlock>
  );
}

export default LandingFooter;
