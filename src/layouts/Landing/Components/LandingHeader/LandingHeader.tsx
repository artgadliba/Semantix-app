import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderBurger from "../HeaderBurger/HeaderBurger";
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
import useModal from "../../../../hooks/useModal";
import LoginModal from "components/Modals/LoginModal/LoginModal";

const LandingHeader: FC = () => {
  const location = useLocation();
  const {
    closeModal: closeModal,
    openModal: openModal,
    modal: loginModal
  } = useModal(LoginModal, {});

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
      <LandingHeaderBody>
        <LandingHeaderBlurredCircle />
        <LandingHeaderLogoBlock>
          <LandingHeaderLogo alt="Semantix logo" src="/images/main-logo.svg" />
        </LandingHeaderLogoBlock>
          <LandingHeaderNavigation>
            <LandingHeaderNavigationLink to={"#features"} >
              Возможности
            </LandingHeaderNavigationLink>
            <LandingHeaderNavigationLink to={"#howitworks"} >
              Как это работает
            </LandingHeaderNavigationLink>
            <LandingHeaderNavigationLink to={"#payment"} >
              Стоимость
            </LandingHeaderNavigationLink>
            <LandingHeaderNavigationLink to={"#contacts"} >
              Контакты
            </LandingHeaderNavigationLink>
          </LandingHeaderNavigation>
        <LandingHeaderButton onClick={openModal}>Войти</LandingHeaderButton>
        <HeaderBurger />
      </LandingHeaderBody>
      {loginModal}
    </LandingHeaderBlock>
  );
}

export default LandingHeader;
