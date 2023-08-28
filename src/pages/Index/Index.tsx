import { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import Landing from "../../layouts/Landing/Landing";
import {
  IndexBlock, 
  IndexGreetingBackgroundBlock,
  IndexGreetingBackground, 
  IndexGreeting,
  IndexGreetingContent,
  IndexGreetingBody,
  IndexBlurredRectangle,
  IndexGreetingTitle,
  IndexGreetingTitleBox,
  IndexGreetingText,
  IndexGreetingTryFreeButton,
  IndexGreetingTelegramLinkBlock,
  IndexGreetingEmailLinkBlock,
  IndexGreetingTelegramLinkIcon,
  IndexGreetingEmailLinkIcon,
  IndexUpperBackgroundBlock,
  IndexUpperBackgroundImage,
  IndexUpperMobileBackgroundImage,
  IndexUpperBlurredCircle,
  IndexLowerBackgroundBlock,
  IndexLowerBackgroundImage,
  IndexLowerMobileBackgroundImage,
  IndexLowerBlurredCircle,
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
  IndexFeatures,
  IndexFeaturesTitle,
  IndexFeaturesTitleContent,
  IndexFeaturesBody,
  IndexFeaturesTables,
  IndexFeaturesTableSide,
  IndexFeaturesTableCenter,
  IndexFeaturesTableBackground,
  IndexFeaturesTablePattern,
  IndexFeaturesTableIcon,
  IndexFeaturesTableTitle,
  IndexFeaturesTableText,
  IndexHowItWorks,
  IndexHowItWorksBody,
  IndexHowItWorksContent,
  IndexHowItWorksTitle,
  IndexHowItWorksTables,
  IndexHowItWorksTable,
  IndexHowItWorksTableBackground,
  IndexHowItWorksInnerFrame,
  IndexHowItWorksImage,
  IndexHowItWorksMobileImage,
  IndexHowItWorksText,
  IndexHowItWorksMobileText,
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
  IndexPaymentOptionClaimButton,
  IndexCallToActionBackgroundBlock,
  IndexCallToActionBackgroundImage,
  IndexCallToAction,
  IndexCallToActionContent,
  IndexCallToActionBody,
  IndexCallToActionContentTitle,
  IndexCallToActionContentText,
  IndexBottomLeftBlurredCircle,
  IndexBottomRightBlurredCircle
} from "./IndexStyles";
import FlashLogo from "../../components/SvgComponents/FlashLogo";

function Index() {
  return (
    <Landing>
      <IndexBlock>
      <IndexUpperBlurredCircle />
      <IndexLowerBlurredCircle />
      <IndexBottomLeftBlurredCircle />
      <IndexBottomRightBlurredCircle />
        <Container maxWidth={1440}>
          <IndexGreetingBackgroundBlock>
            <IndexBlurredRectangle />
            <IndexGreetingBackground alt="background" src="/images/main-background.svg" />
            <IndexGreetingTelegramLinkBlock to="">
              <IndexGreetingTelegramLinkIcon width="20" height="20" viewBox="0 0 20 20"><g clip-path="url(#a)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.48 3.692a1.25 1.25 0 0 1 1.72 1.355L16.31 16.51c-.184 1.106-1.397 1.74-2.412 1.189a48.711 48.711 0 0 1-3.241-1.912c-.567-.37-2.303-1.558-2.09-2.403.184-.723 3.1-3.438 4.767-5.052.654-.634.356-1-.416-.416-1.92 1.448-4.999 3.65-6.017 4.27-.898.547-1.367.64-1.927.547-1.021-.17-1.969-.433-2.742-.754-1.045-.433-.994-1.87-.001-2.288l14.25-6Z" /></g><defs><clipPath id="a">
                <path d="M0 0h20v20H0z"/></clipPath></defs>
              </IndexGreetingTelegramLinkIcon>
            </IndexGreetingTelegramLinkBlock>
            <IndexGreetingEmailLinkBlock to="">
              <IndexGreetingEmailLinkIcon width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1.667 5.833A3.333 3.333 0 0 1 5 2.5h10a3.333 3.333 0 0 1 3.333 3.333v8.334A3.333 3.333 0 0 1 15 17.5H5a3.333 3.333 0 0 1-3.333-3.333V5.833Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.48 6.32a.625.625 0 0 1 .867-.173l3.15 2.1c.91.607 2.096.607 3.005 0l3.151-2.1a.625.625 0 0 1 .694 1.04l-3.151 2.1a3.959 3.959 0 0 1-4.392 0l-3.15-2.1a.625.625 0 0 1-.174-.867Z" fill="#131520"/>
              </IndexGreetingEmailLinkIcon>
            </IndexGreetingEmailLinkBlock>
            <IndexGreetingContent>
              <IndexGreeting>
                <IndexGreetingBody>
                  <IndexGreetingTitle>
                    Транскрибация<br className="mobile-break"></br> на базе  
                    <span>
                      <IndexGreetingTitleBox>
                        ИИ
                      </IndexGreetingTitleBox>
                    </span>
                  </IndexGreetingTitle>
                  <IndexGreetingText>
                    Конвертируйте аудио и видео в текст или<br className="mobile-break"></br> субтитры <br className="desktop-break"></br>за считанные минуты
                  </IndexGreetingText>
                  <IndexGreetingTryFreeButton to="">
                    Попробовать бесплатно
                  </IndexGreetingTryFreeButton>
                </IndexGreetingBody>
              </IndexGreeting>
            </IndexGreetingContent>
          </IndexGreetingBackgroundBlock>
          <IndexUpperBackgroundBlock>
            <IndexUpperBackgroundImage alt="background" src="/images/upper-bg.svg" />
            {/* <IndexUpperMobileBackgroundImage alt="background" src="/images/upper-mobile-bg.svg" /> */}
            <IndexUpperMobileBackgroundImage width="320" height="212" viewBox="0 0 320 212" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 48.555C0 32.785 12.784 20 28.555 20h82.752c8.4 0 16.125 4.795 19.924 12.286 11.994 23.651 46.013 23.82 57.758.045A22.135 22.135 0 0 1 208.835 20h82.887C307.339 20 320 32.66 320 48.279V172c0 22.091-17.909 40-40 40H40c-22.091 0-40-17.909-40-40V48.555Z" fill="url(#a)" fill-opacity=".5"/>
              <path d="M319.5 48.279V172c0 21.815-17.685 39.5-39.5 39.5H40C18.185 211.5.5 193.815.5 172V48.555C.5 33.06 13.06 20.5 28.555 20.5h82.752c8.209 0 15.763 4.687 19.478 12.013 12.176 24.008 46.72 24.195 58.652.04A21.635 21.635 0 0 1 208.835 20.5h82.887c15.341 0 27.778 12.437 27.778 27.779Z" stroke="url(#b)" stroke-opacity=".7"/><g filter="url(#c)"><circle cx="160.5" cy="20.5" r="20.5" fill="url(#d)"/><circle cx="160.5" cy="20.5" r="20" stroke="url(#e)"/></g>
              <path d="M160.5 25.348v-9.696m0 9.696 4.156-4.155m-4.156 4.155-4.155-4.155" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/><defs><linearGradient id="a" x1="160" y1="20" x2="160" y2="212" gradientUnits="userSpaceOnUse"><stop stop-color="#10111D"/><stop offset=".886" stop-color="#030512" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="213.565" y1="23.007" x2="240.306" y2="104.095" gradientUnits="userSpaceOnUse"><stop stop-color="#202230"/><stop offset="1" stop-color="#202129" stop-opacity="0"/></linearGradient><linearGradient id="d" x1="160.5" y1="0" x2="160.5" y2="41" gradientUnits="userSpaceOnUse"><stop stop-color="#10111D"/><stop offset="1" stop-color="#030512" stop-opacity="0"/></linearGradient><linearGradient id="e" x1="161.608" y1="-43.216" x2="162.439" y2="79.507" gradientUnits="userSpaceOnUse"><stop stop-color="#1683E2"/><stop offset=".619" stop-color="#1683E2" stop-opacity="0"/></linearGradient><filter id="c" x="136" y="-4" width="49" height="49" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_432_1008"/><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_432_1008" result="shape"/></filter></defs>
            </IndexUpperMobileBackgroundImage>
            <IndexFeaturesTitleContent>
              <IndexFeatures>
                <IndexFeaturesTitle>
                  Возможности <br></br> Semantix
                </IndexFeaturesTitle>
                <IndexFeaturesBody>
                  <IndexFeaturesTables>
                    <IndexFeaturesTableSide>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="accuracy" src="/images/feature-accuracy.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Точность<br></br>расшифровки <span>95%</span>
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                        Автоматическая нейтрализация посторонних шумов увеличивает точность результата. 
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableSide>
                    <IndexFeaturesTableCenter>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="fast" src="/images/feature-fast.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Обработка часовой<br className="mobile-break"></br> записи за <span>10 минут</span>
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                        При максимально высокой плотности речи в записи.
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableCenter>
                    <IndexFeaturesTableSide>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="punctuation" src="/images/feature-punctuation.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Расстановка знаков<br></br> препинания
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                        Значительно улучшает удобство восприятия текста
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableSide>
                    <IndexFeaturesTableSide>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="formats" src="/images/feature-formats.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Поддерживаемые<br></br>форматы
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                      Видео: <span>MP4, MKV, FLV, AVI, MOV, WMV</span><br></br>Аудио: <span>M4A, MP3, OGG, AAC, WAV, FLAC, WMA</span>
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableSide>
                    <IndexFeaturesTableCenter>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="export" src="/images/feature-export.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Экспорт в форматах<br></br><span>docx, txt, srt</span>
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                        По запросу добавим удобный для вас формат
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableCenter>
                    <IndexFeaturesTableSide>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="security" src="/images/feature-security.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Безопасность
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                        Мы дорожим безопасностью ваших данных. Все файлы шифруются как при хранении, так и при передаче в соответствии с лучшими практиками в индустрии.
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableSide>
                    <IndexFeaturesTableSide>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="timecode" src="/images/feature-timecode.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Таймкоды
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                        Указание временных кодов в тексте расшифровки для удобства ориентации
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableSide>
                    <IndexFeaturesTableCenter>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="edit" src="/images/feature-edit.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Редактирование<br></br>расшифровки
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                        Прослушивайте и редактируйте прямо в браузере
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableCenter>
                    <IndexFeaturesTableSide>
                      <IndexFeaturesTableBackground />
                      <IndexFeaturesTableIcon alt="try free" src="/images/feature-tryfree.svg" />
                      <IndexFeaturesTablePattern alt="pattern" src="/images/card-pattern.svg"/>
                      <IndexFeaturesTableTitle>
                        Оцените качество<br className="mobile-break"></br> расшифровки<br className="mobile-break"></br> <span>бесплатно</span>
                      </IndexFeaturesTableTitle>
                      <IndexFeaturesTableText>
                        Не требуется платежных данных.
                      </IndexFeaturesTableText>
                    </IndexFeaturesTableSide>
                  </IndexFeaturesTables>
                </IndexFeaturesBody>
              </IndexFeatures>
            </IndexFeaturesTitleContent>
          </IndexUpperBackgroundBlock>
          <IndexLowerBackgroundBlock>
            <IndexLowerBackgroundImage alt="background" src="/images/lower-bg.svg" />
            {/* <IndexLowerMobileBackgroundImage alt="background" src="/images/lower-mobile-bg.svg" /> */}
            <IndexLowerMobileBackgroundImage width="320" height="192" viewBox="0 0 320 192" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M320 152c0 22.091-17.909 40-40 40H40c-22.091 0-40-17.909-40-40V40C0 17.909 17.909 0 40 0h240c22.091 0 40 17.909 40 40v112Z" fill="url(#a)" fill-opacity=".5"/>
              <path d="M319.5 152c0 21.815-17.685 39.5-39.5 39.5H40C18.185 191.5.5 173.815.5 152V40C.5 18.185 18.185.5 40 .5h240c21.815 0 39.5 17.685 39.5 39.5v112Z" stroke="url(#b)" stroke-opacity=".7"/><defs><linearGradient id="a" x1="160" y1="192" x2="160" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#10111D"/><stop offset=".886" stop-color="#030512" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="106.435" y1="188.993" x2="79.694" y2="107.905" gradientUnits="userSpaceOnUse"><stop stop-color="#202230"/><stop offset="1" stop-color="#202129" stop-opacity="0"/></linearGradient></defs>
            </IndexLowerMobileBackgroundImage>
            <IndexHowItWorksContent>
              <IndexHowItWorksTitle>
                Как это работает?
              </IndexHowItWorksTitle>
              <IndexHowItWorks>
                <IndexHowItWorksBody>
                  <IndexHowItWorksTables>
                    <IndexHowItWorksMobileImage alt="upload" src="/images/upload-mobile.png"/>
                    <IndexHowItWorksMobileText>Загрузите один или несколько<br></br>форматов аудио или видео</IndexHowItWorksMobileText>
                    <IndexHowItWorksTable>
                      <IndexHowItWorksTableBackground />
                      <IndexHowItWorksInnerFrame>
                        <IndexHowItWorksImage alt="upload" src="/images/upload.svg"/>
                      </IndexHowItWorksInnerFrame>
                    </IndexHowItWorksTable>
                    <IndexHowItWorksMobileImage alt="transcription" src="/images/transcription-mobile.png"/>
                    <IndexHowItWorksMobileText>Semantix автоматически<br></br>обработает файлы</IndexHowItWorksMobileText>
                    <IndexHowItWorksTable>
                      <IndexHowItWorksTableBackground />
                      <IndexHowItWorksInnerFrame>
                        <IndexHowItWorksImage alt="transcription" src="/images/transcription.svg"/>
                      </IndexHowItWorksInnerFrame>
                    </IndexHowItWorksTable>
                    <IndexHowItWorksMobileImage alt="export" src="/images/export-mobile.png"/>
                    <IndexHowItWorksMobileText>Экспортируйте расшифровку<br></br>в нужном формате</IndexHowItWorksMobileText>
                    <IndexHowItWorksTable>
                      <IndexHowItWorksTableBackground />
                      <IndexHowItWorksInnerFrame>
                        <IndexHowItWorksImage alt="export" src="/images/export.svg"/>
                      </IndexHowItWorksInnerFrame>
                    </IndexHowItWorksTable>
                    <IndexHowItWorksText>
                      Загрузите один или несколько<br></br>форматов аудио или видео
                    </IndexHowItWorksText>
                    <IndexHowItWorksText>
                      Semantix автоматически<br></br>обработает файлы
                    </IndexHowItWorksText>
                    <IndexHowItWorksText>
                      Экспортируйте расшифровку<br></br>в нужном формате
                    </IndexHowItWorksText>
                  </IndexHowItWorksTables>
                </IndexHowItWorksBody>
              </IndexHowItWorks>
            </IndexHowItWorksContent>
          </IndexLowerBackgroundBlock>
          <IndexPaymentBackgroundBlock>
            {/* <IndexPaymentMobileBackground alt="background" src="/images/payment-mobile-bg.svg" /> */}
            <IndexPaymentMobileBackground width="320" height="192" viewBox="0 0 320 192" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 40C0 17.909 17.909 0 40 0h240c22.091 0 40 17.909 40 40v112c0 22.091-17.909 40-40 40H40c-22.091 0-40-17.909-40-40V40Z" fill="url(#a)" fill-opacity=".5"/>
              <path d="M.5 40C.5 18.185 18.185.5 40 .5h240c21.815 0 39.5 17.685 39.5 39.5v112c0 21.815-17.685 39.5-39.5 39.5H40C18.185 191.5.5 173.815.5 152V40Z" stroke="url(#b)" stroke-opacity=".7"/><defs><linearGradient id="a" x1="160" y1="0" x2="160" y2="192" gradientUnits="userSpaceOnUse"><stop stop-color="#10111D"/><stop offset=".886" stop-color="#030512" stop-opacity="0"/></linearGradient><linearGradient id="b" x1="213.565" y1="3.007" x2="240.306" y2="84.095" gradientUnits="userSpaceOnUse"><stop stop-color="#202230"/><stop offset="1" stop-color="#202129" stop-opacity="0"/></linearGradient></defs>
            </IndexPaymentMobileBackground>
            <IndexPaymentBackground>
              <IndexPaymentBackgroundLayer>
                <IndexPaymentUpperBlurredEllipse />
                <IndexPaymentLowerBlurredEllipse />
                <IndexPaymentTopBackgroundImage alt="background" src="/images/payment-top-bg.svg"/>
                <IndexPaymentBottomBackgroundImage alt="background" src="/images/payment-bottom-bg.svg" />
              </IndexPaymentBackgroundLayer>
            </IndexPaymentBackground>
            <IndexPaymentOptionContent>
              <IndexPaymentOption>
                <IndexPaymentOptionTitle>Выберите подходящий<br className="mobile-break"></br> тариф</IndexPaymentOptionTitle>
                <IndexPaymentOptionBody>
                  <IndexPaymentOptionTables>
                    <IndexPaymentOptionTable>
                      <IndexPaymentOptionTableBackground>
                        <IndexPaymentBlurredEllipseLeft />
                        <IndexPaymentOptionTableName>Базовый</IndexPaymentOptionTableName>
                        <IndexPaymentOptionPrice>3₽/мин</IndexPaymentOptionPrice>
                        <IndexPaymentOptionPriceText>До 10 000 минут</IndexPaymentOptionPriceText>
                        <IndexPaymentOptionPurchaseButton>Приобрести</IndexPaymentOptionPurchaseButton>
                      </IndexPaymentOptionTableBackground>
                    </IndexPaymentOptionTable>
                    <IndexPaymentOptionTable>
                      <IndexPaymentOptionTableBackground>
                        <IndexPaymentBlurredEllipseMiddle />
                        <IndexPaymentOptionTableName><span className="advanced-type">Продвинутый</span></IndexPaymentOptionTableName>
                        <IndexPaymentOptionPrice>2₽/мин</IndexPaymentOptionPrice>
                        <IndexPaymentOptionPriceText>От 10 000 минут</IndexPaymentOptionPriceText>
                        <IndexPaymentOptionPurchaseButton>Приобрести</IndexPaymentOptionPurchaseButton>
                      </IndexPaymentOptionTableBackground>
                    </IndexPaymentOptionTable>
                    <IndexPaymentOptionTable>
                      <IndexPaymentOptionTableBackground>
                        <IndexPaymentBlurredEllipseRight />
                        <IndexPaymentOptionTableName><span className="business-type">Бизнес</span></IndexPaymentOptionTableName>
                        <IndexPaymentOptionText>Отправьте заявку и мы<br></br>предложим специальные условия<br></br>под ваши задачи</IndexPaymentOptionText>
                        <IndexPaymentOptionClaimButton>Оставить заявку</IndexPaymentOptionClaimButton>
                      </IndexPaymentOptionTableBackground>
                    </IndexPaymentOptionTable>
                  </IndexPaymentOptionTables>
                </IndexPaymentOptionBody>
              </IndexPaymentOption>
            </IndexPaymentOptionContent>
          </IndexPaymentBackgroundBlock>
          <IndexCallToActionBackgroundBlock>
            <IndexCallToActionBackgroundImage alt="background" src="/images/bottom-pattern.svg" />
            <IndexCallToActionContent>
              <IndexCallToAction>
                <IndexCallToActionBody>
                  <FlashLogo />
                  <IndexCallToActionContentTitle>Оцените качество<br className="mobile-break"></br> расшифровки</IndexCallToActionContentTitle>
                  <IndexCallToActionContentText>Получите <span>15 пробных минут</span></IndexCallToActionContentText>
                  <IndexGreetingTryFreeButton to="">
                    Попробовать бесплатно
                  </IndexGreetingTryFreeButton>
                </IndexCallToActionBody>
              </IndexCallToAction>
            </IndexCallToActionContent>
          </IndexCallToActionBackgroundBlock>
        </Container>
      </IndexBlock>
    </Landing>
  );
}

export default Index;
