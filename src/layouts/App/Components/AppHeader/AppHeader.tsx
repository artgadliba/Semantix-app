import { FC, useState, useEffect } from "react";
import { 
    AppHeaderBody,
    AppHeaderBlock,
    AppHeaderContent,
    AppHeaderSectionTitleBlock,
    AppHeaderSectionTitle,
    AppHeaderUsernameBlock,
    AppHeaderUsernameTitle,
    AppHeaderSectionTitleEdited,
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
import axios from "axios";
import sliceLongFoldername from "utils/sliceLongFoldername";
import PasswordRecoveryModal from "components/Modals/PasswordRecoveryModal/PasswordRecoveryModal";
import MessageModal from "components/Modals/MessageModal/MessageModal";
import useModal from "hooks/useModal";

interface IAppHeader {
    title: string;
    fileEdited?: boolean;
}

const AppHeader: FC<IAppHeader> = ({title, fileEdited}) => {
    const [username, setUsername] = useState<string>("");
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

    const {
        closeModal: closeMessageModal,
        openModal: openMessageModal,
        modal: messageModal
    } = useModal(MessageModal, { modalType: "passwordChanged" });
    const {
        closeModal: closePassModal,
        openModal: openPassModal,
        modal: passwordRecoveryModal
    } = useModal(PasswordRecoveryModal, { openMessageModal, modalType: "resetPassword" });
    
    const toggleUserMenu = () => {
        if (userMenuActive == true) {
            setUserMenuActive(false);
        } else {
            setUserMenuActive(true);
        }
    }

    const handleLogout = () => {
        axios.delete("/api/users/current/logout", {
            headers: {
                "jwt-tokens": localStorage.getItem("jwt-tokens")
            }
        })
        .then(() => {
            localStorage.clear();
            window.location.href = "/";
        })
        .catch((err) => {
            window.location.href = "/";
            console.log(err);
        })
    }   

    useEffect(() => {
        if (option === "Сменить пароль") {
            openPassModal();
            setOption(null);
        } else if (option === "Выйти") {
            handleLogout();
            setOption(null);
        }
    },[option]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("username"));
        if (data) {
            if ("login" in data) {
                setUsername(data.login);
            }
        } else {
            setUsername("Username"); // delete in prod
        }
    }, []);
    
    return (
        <AppHeaderBody>
            <AppHeaderBlock>
                <AppHeaderContent>
                    <AppHeaderSectionTitleBlock>
                        <AppHeaderSectionTitle>{sliceLongFoldername(title, "header")}</AppHeaderSectionTitle>
                        {fileEdited === true && (
                            <AppHeaderSectionTitleEdited alt="edited" src="/images/file-edited.svg" />
                        )}
                    </AppHeaderSectionTitleBlock>
                    <AppHeaderMobileLogoBlock>
                        <AppHeaderMobileLogo alt="logo" src="/images/main-logo.svg" />
                    </AppHeaderMobileLogoBlock>
                    <AppHeaderUsernameBlock>
                        <AppHeaderUsernameTitle>{username}</AppHeaderUsernameTitle>
                        <AppHeaderUsernameButtonWrapper onClick={() => {toggleUserMenu()}}>
                            {username && (
                                <AppHeaderUsernameIcon>
                                    {username.slice(0, 1).toUpperCase()}
                                </AppHeaderUsernameIcon>
                            )}
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
                </AppHeaderContent>
            </AppHeaderBlock>
            <AppHeaderSectionTitleBlock className="mobileTitleBlock">
                <AppHeaderSectionTitle className="mobileTitle">{sliceLongFoldername(title, "headerMobile")}</AppHeaderSectionTitle>
                {fileEdited === true && (
                    <AppHeaderSectionTitleEdited alt="edited" src="/images/file-edited.svg" />
                )}
            </AppHeaderSectionTitleBlock>
            {passwordRecoveryModal}
            {messageModal}
        </AppHeaderBody>
    );
}

export default AppHeader;