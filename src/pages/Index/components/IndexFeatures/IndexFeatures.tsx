import { useState } from "react";
import {
    IndexFeaturesContent,
    IndexFeaturesTitle,
    IndexFeaturesBody,
    IndexFeaturesGrid,
    IndexFeaturesCard,
    IndexFeaturesCardBackground,
    IndexFeaturesCardPattern,
    IndexFeaturesCardPicture,
    IndexFeaturesCardIcon,
    IndexFeaturesCardTitle,
    IndexFeaturesCardText,
    IndexFeaturesTooltipButton,
    IndexFeaturesTooltipBlock,
    IndexFeaturesTooltipBlockText
} from "./IndexFeaturesStyles";
import { TooltipIconSVG } from "components/SvgComponents/TooltipIconSVG";

const IndexFeaturesCardsComponent = () => {
    const [tooltipActive, setTooltipActive] = useState<boolean>(false);

    const showTip = (): void => {
        setTooltipActive(true);
      };
    
    const hideTip = (): void => {
        setTooltipActive(false);
    };

    return (
        <IndexFeaturesGrid>
            <IndexFeaturesCard>
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-accuracy.webp" />
                    <IndexFeaturesCardIcon alt="accurate" src="/images/feature-accuracy.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Точность<br/>расшифровки <span>95%</span>
                </IndexFeaturesCardTitle>
                <IndexFeaturesCardText>
                    Автоматическая нейтрализация посторонних шумов увеличивает точность результата. 
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
            <IndexFeaturesCard className="lowered_card">
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-fast.webp" />
                    <IndexFeaturesCardIcon alt="fast" src="/images/feature-fast.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Обработка часовой<br className="mobile_break"></br> записи за <span>10 минут</span>
                </IndexFeaturesCardTitle>
                <IndexFeaturesCardText>
                    При максимально высокой плотности речи в записи.
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
            <IndexFeaturesCard>
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-punctuation.webp" />
                    <IndexFeaturesCardIcon alt="punctuation" src="/images/feature-punctuation.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Расстановка знаков<br/> препинания
                </IndexFeaturesCardTitle>
                <IndexFeaturesCardText>
                    Значительно улучшает удобство восприятия текста
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
            <IndexFeaturesCard className="raised_card">
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-formats.webp" />
                    <IndexFeaturesCardIcon alt="formats" src="/images/feature-formats.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Поддерживаемые<br/>форматы
                </IndexFeaturesCardTitle>
                <IndexFeaturesTooltipButton onMouseEnter={showTip} onMouseLeave={hideTip}>
                    <TooltipIconSVG />
                </IndexFeaturesTooltipButton>
                {tooltipActive === true && (
                    <IndexFeaturesTooltipBlock>
                        <IndexFeaturesTooltipBlockText>
                            Поддерживается большинство медиа форматов. По запросу добавим нужный формат.
                        </IndexFeaturesTooltipBlockText>
                    </IndexFeaturesTooltipBlock>
                )}
                <IndexFeaturesCardText>
                    Видео: <span>MP4, MKV, FLV, AVI, MOV, WMV</span><br/>
                    Аудио: <span>M4A, MP3, OGG, AAC, WAV, FLAC, WMA</span>
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
            <IndexFeaturesCard>
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-export.webp" />
                    <IndexFeaturesCardIcon alt="export" src="/images/feature-export.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Экспорт в форматах<br/><span>docx, txt, srt</span>
                </IndexFeaturesCardTitle>
                <IndexFeaturesCardText>
                    По запросу добавим удобный для вас формат
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
            <IndexFeaturesCard className="raised_card">
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-security.webp" />
                    <IndexFeaturesCardIcon alt="secure" src="/images/feature-security.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Безопасность
                </IndexFeaturesCardTitle>
                <IndexFeaturesCardText>
                    Мы дорожим безопасностью ваших данных. Все файлы шифруются как при хранении, так и при передаче в соответствии с лучшими практиками в индустрии.
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
            <IndexFeaturesCard className="raised_card">
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-timecode.webp" />
                    <IndexFeaturesCardIcon alt="timecodes" src="/images/feature-timecode.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Таймкоды
                </IndexFeaturesCardTitle>
                <IndexFeaturesCardText>
                    Указание временных кодов в тексте расшифровки для удобства ориентации
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
            <IndexFeaturesCard>
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-edit.webp" />
                    <IndexFeaturesCardIcon alt="ediCard" src="/images/feature-edit.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Редактирование<br/>расшифровки
                </IndexFeaturesCardTitle>
                <IndexFeaturesCardText>
                    Прослушивайте и редактируйте прямо в браузере
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
            <IndexFeaturesCard className="raised_card">
                <IndexFeaturesCardBackground />
                <IndexFeaturesCardPicture>
                    <source media="(max-width:500px)" srcSet="/images/feature-tryfree.webp" />
                    <IndexFeaturesCardIcon alt="try for free" src="/images/feature-tryfree.svg" />
                </IndexFeaturesCardPicture>
                <IndexFeaturesCardPattern 
                    alt="pattern" 
                    src="/images/card-pattern.webp"
                />
                <IndexFeaturesCardTitle>
                    Оцените качество<br className="mobile_break"></br> расшифровки<br className="mobile_break"></br> <span>бесплатно</span>
                </IndexFeaturesCardTitle>
                <IndexFeaturesCardText>
                    Не требуется платежных данных.
                </IndexFeaturesCardText>
            </IndexFeaturesCard>
        </IndexFeaturesGrid>
    );
}

const IndexFeaturesComponent = () => {
    const [tooltipActive, setTooltipActive] = useState<boolean>(false);

    const showTip = () => {
        setTooltipActive(true);
      };
    
    const hideTip = () => {
        setTooltipActive(false);
    };

    return (
        <IndexFeaturesContent>
            <section id="features">
                <IndexFeaturesTitle>
                    Возможности<br/>Semantix
                </IndexFeaturesTitle>
                <IndexFeaturesBody>
                    <IndexFeaturesCardsComponent />
                </IndexFeaturesBody>
            </section>
        </IndexFeaturesContent>
    );
}

export default IndexFeaturesComponent;