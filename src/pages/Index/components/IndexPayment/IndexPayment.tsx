import {
    IndexPaymentBackgroundBlock,
    IndexPaymentBackground,
    IndexPaymentBackgroundLayer,
    IndexPaymentBlurredEllipseLeft,
    IndexPaymentBlurredEllipseMiddle,
    IndexPaymentBlurredEllipseRight,
    IndexPaymentUpperBlurredEllipse,
    IndexPaymentLowerBlurredEllipse,
    IndexPaymentTopBackgroundImage,
    IndexPaymentBottomBackgroundImage,
    IndexPaymentMobileBackground,
    IndexPaymentOption,
    IndexPaymentOptionBody,
    IndexPaymentOptionContent,
    IndexPaymentOptionTitle,
    IndexPaymentOptionTables,
    IndexPaymentOptionTable,
    IndexPaymentOptionTableBackground,
    IndexPaymentOptionTableName,
    IndexPaymentOptionPrice,
    IndexPaymentOptionPriceText,
    IndexPaymentOptionText,
    IndexPaymentOptionPurchaseButton,
    IndexPaymentOptionClaimButton
} from "./IndexPaymentStyles";
import useModal from "hooks/useModal";
import RegistrationModal from "components/Modals/RegistrationModal/RegistrationModal";
import PasswordRecoveryModal from "components/Modals/PasswordRecoveryModal/PasswordRecoveryModal";
import MessageModal from "components/Modals/MessageModal/MessageModal";

const IndexPaymentComponent = () => {
    const {
        openModal: openRecModal,
        modal: passwordRecoveryModal
    } = useModal(PasswordRecoveryModal, { modalType: "request" });
    const {
        openModal: openMessModal,
        modal: messageModal
    } = useModal(MessageModal, { modalType: "messageModal", message: "Регистрация прошла успешно!" });
    const {
        openModal: openRegModal,
        modal: registrationModal
    } = useModal(RegistrationModal, { openRecModal, openMessModal, modalType: "registration" });

    return (
        <IndexPaymentBackgroundBlock id="payment">
            <IndexPaymentMobileBackground 
                alt="background"
                src="/images/payment-mobile-bg.webp"
            />
            <IndexPaymentBackground>
                <IndexPaymentBackgroundLayer>
                    <IndexPaymentUpperBlurredEllipse />
                    <IndexPaymentLowerBlurredEllipse />
                    <IndexPaymentTopBackgroundImage 
                        alt="background" 
                        src="/images/payment-top-bg.svg"
                    />
                    <IndexPaymentBottomBackgroundImage 
                        alt="background"
                        src="/images/payment-bottom-bg.svg"
                    />
                </IndexPaymentBackgroundLayer>
            </IndexPaymentBackground>
            <IndexPaymentOptionContent>
                <IndexPaymentOption>
                    <IndexPaymentOptionTitle>
                        Выберите подходящий тариф
                    </IndexPaymentOptionTitle>
                    <IndexPaymentOptionBody>
                        <IndexPaymentOptionTables>
                            <IndexPaymentOptionTable>
                                <IndexPaymentOptionTableBackground>
                                    <IndexPaymentBlurredEllipseLeft />
                                    <IndexPaymentOptionTableName>
                                        Базовый
                                    </IndexPaymentOptionTableName>
                                    <IndexPaymentOptionPrice>
                                        2.5₽/мин
                                    </IndexPaymentOptionPrice>
                                    <IndexPaymentOptionPriceText>
                                        До 10 000 минут
                                    </IndexPaymentOptionPriceText>
                                    <IndexPaymentOptionPurchaseButton onClick={openRegModal}>
                                        Приобрести
                                    </IndexPaymentOptionPurchaseButton>
                                </IndexPaymentOptionTableBackground>
                            </IndexPaymentOptionTable>
                            <IndexPaymentOptionTable>
                                <IndexPaymentOptionTableBackground>
                                    <IndexPaymentBlurredEllipseMiddle />
                                    <IndexPaymentOptionTableName>
                                        <span className="advanced_type">Продвинутый</span>
                                    </IndexPaymentOptionTableName>
                                    <IndexPaymentOptionPrice>1.5₽/мин</IndexPaymentOptionPrice>
                                    <IndexPaymentOptionPriceText>
                                        От 100 000 минут
                                    </IndexPaymentOptionPriceText>
                                    <IndexPaymentOptionPurchaseButton onClick={openRegModal}>
                                        Приобрести
                                    </IndexPaymentOptionPurchaseButton>
                                </IndexPaymentOptionTableBackground>
                            </IndexPaymentOptionTable>
                            <IndexPaymentOptionTable>
                                <IndexPaymentOptionTableBackground>
                                    <IndexPaymentBlurredEllipseRight />
                                    <IndexPaymentOptionTableName>
                                        <span className="business_type">Бизнес</span>
                                    </IndexPaymentOptionTableName>
                                    <IndexPaymentOptionText>
                                        Отправьте заявку и мы<br/>предложим специальные условия<br/>под ваши задачи
                                    </IndexPaymentOptionText>
                                    <IndexPaymentOptionClaimButton 
                                        onClick={(e) => { 
                                            window.location.href="mailto:hello@semantix.one"; 
                                            e.preventDefault(); 
                                        }}
                                    >
                                        Оставить заявку
                                    </IndexPaymentOptionClaimButton>
                                </IndexPaymentOptionTableBackground>
                            </IndexPaymentOptionTable>
                        </IndexPaymentOptionTables>
                    </IndexPaymentOptionBody>
                </IndexPaymentOption>
            </IndexPaymentOptionContent>
            {registrationModal}
            {passwordRecoveryModal}
            {messageModal}
        </IndexPaymentBackgroundBlock>
    );
}

export default IndexPaymentComponent;