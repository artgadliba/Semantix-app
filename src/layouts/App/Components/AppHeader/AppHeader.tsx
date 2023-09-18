import { FC, useState, useEffect, useRef } from "react";
import { 
    AppHeaderBlock,
    AppHeaderBody,
    AppHeaderSectionTitle,
    AppHeaderUsernameBlock,
    AppHeaderUsernameTitle,
    AppHeaderUsernameIcon,
    AppHeaderUsernameButtonWrapper,
    AppHeaderMenuButton,
    AppHeaderMenuButtonIcon,
    AppHeaderBottomLineBlock,
    AppHeaderBottomLine,
    AppHeaderMobileLogoBlock,
    AppHeaderMobileLogo
} from "./AppHeaderStyles";
import AppHeaderBurger from "../AppHeaderBurger/AppHeaderBurger";
import SmallComboBox from "components/SmallComboBox/SmallComboBox";

interface IAppHeader {
    title: string;
}

const AppHeader: FC<IAppHeader> = ({title}) => {
    const [userMenuActive, setUserMenuActive] = useState<boolean>(false);
    const [option, setOption] = useState<string>("");
    const options = [
        {
            name: "Сменить пароль"
        },
        {
            name: "Выйти"
        }
    ];
    const toggleUserMenu = () => {
        if (userMenuActive == true) {
            setUserMenuActive(false);
        } else {
            setUserMenuActive(true);
        }
    }

    return (
        <AppHeaderBlock>
            <AppHeaderBody>
                <AppHeaderMobileLogoBlock>
                    <AppHeaderMobileLogo alt="logo" src="/images/main-logo.svg" />
                </AppHeaderMobileLogoBlock>
                <AppHeaderSectionTitle>{title}</AppHeaderSectionTitle>
                <AppHeaderUsernameBlock>
                    <AppHeaderUsernameTitle>User name</AppHeaderUsernameTitle>
                    <AppHeaderUsernameButtonWrapper onClick={() => {toggleUserMenu()}}>
                        <AppHeaderUsernameIcon alt="avatar" src="/images/avatar.png" />
                        <AppHeaderMenuButton >
                            <AppHeaderMenuButtonIcon alt="open" src="/images/folders-closed.svg" />
                        </AppHeaderMenuButton>
                    </AppHeaderUsernameButtonWrapper>
                    {userMenuActive == true && (
                        <SmallComboBox className="header-box" setMenuActive={setUserMenuActive} setOption={setOption} options={options} />
                    )}
                </AppHeaderUsernameBlock>
                <AppHeaderBottomLineBlock>
                    <AppHeaderBottomLine />
                </AppHeaderBottomLineBlock>
                <AppHeaderBurger />
            </AppHeaderBody>
        </AppHeaderBlock>
    );
}

export default AppHeader;