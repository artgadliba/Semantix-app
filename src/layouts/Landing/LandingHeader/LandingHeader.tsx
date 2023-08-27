import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "../../../components/Container/Container";
import HeaderBurger from "../../../components/HeaderBurger/HeaderBurger";
import {
  LandingHeaderBlock,
  LandingHeaderBody,
  LandingHeaderButton,
  LandingHeaderLogoBlock,
  LandingHeaderLogo,
  LandingHeaderBlurredCircle,
  LandingHeaderNavigation,
  LandingHeaderNavigationLink,
} from "./LandingHeaderStyles";

const LandingHeader: FC = () => {
  const location = useLocation();

  useEffect(()=> {
          if (location.hash) {
              let elem = document.getElementById(location.hash.slice(1))
              if (elem) {
                  elem.scrollIntoView({ behavior: "smooth" })
              }
          } else {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" })
          }
  }, [location]);

  return (
    <LandingHeaderBlock>
      <Container maxWidth={1440} >
        <LandingHeaderBody>
          <LandingHeaderBlurredCircle />
          <LandingHeaderLogoBlock>
            <LandingHeaderLogo alt="Semantix logo" src="/images/Main-logo.svg" />
          </LandingHeaderLogoBlock>
            <LandingHeaderNavigation>
              <LandingHeaderNavigationLink to={"/"} >
                Возможности
              </LandingHeaderNavigationLink>
              <LandingHeaderNavigationLink to={"/"} >
                Как это работает
              </LandingHeaderNavigationLink>
              <LandingHeaderNavigationLink to={"/"} >
                Стоимость
              </LandingHeaderNavigationLink>
              <LandingHeaderNavigationLink to={"/"} >
                Контакты
              </LandingHeaderNavigationLink>
            </LandingHeaderNavigation>
          <LandingHeaderButton to={"/"}>Войти</LandingHeaderButton>
          <HeaderBurger />
        </LandingHeaderBody>
      </Container>
    </LandingHeaderBlock>
  );
}

export default LandingHeader;
