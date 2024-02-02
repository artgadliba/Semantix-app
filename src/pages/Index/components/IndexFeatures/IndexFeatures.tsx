import { useState } from "react";
import {
    IndexFeaturesContent,
    IndexFeaturesTitle,
    IndexFeaturesBody,
    IndexFeaturesTables,
    IndexFeaturesTableSide,
    IndexFeaturesTableCenter,
    IndexFeaturesTableBackground,
    IndexFeaturesTablePattern,
    IndexFeaturesTablePicture,
    IndexFeaturesTableIcon,
    IndexFeaturesTableTitle,
    IndexFeaturesTableText,
    IndexFeaturesTooltipButton,
    IndexFeaturesTooltipBlock,
    IndexFeaturesTooltipBlockText
} from "./IndexFeaturesStyles";
import { TooltipIconSVG } from "components/SvgComponents/TooltipIconSVG";

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
                    <IndexFeaturesTables>
                        <IndexFeaturesTableSide>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-accuracy.webp" />
                                <IndexFeaturesTableIcon alt="accurate" src="/images/feature-accuracy.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Точность<br/>расшифровки <span>95%</span>
                            </IndexFeaturesTableTitle>
                            <IndexFeaturesTableText>
                                Автоматическая нейтрализация посторонних шумов увеличивает точность результата. 
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableSide>
                        <IndexFeaturesTableCenter>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-fast.webp" />
                                <IndexFeaturesTableIcon alt="fast" src="/images/feature-fast.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Обработка часовой<br className="mobile_break"></br> записи за <span>10 минут</span>
                            </IndexFeaturesTableTitle>
                            <IndexFeaturesTableText>
                                При максимально высокой плотности речи в записи.
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableCenter>
                        <IndexFeaturesTableSide>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-punctuation.webp" />
                                <IndexFeaturesTableIcon alt="punctuation" src="/images/feature-punctuation.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Расстановка знаков<br/> препинания
                            </IndexFeaturesTableTitle>
                            <IndexFeaturesTableText>
                                Значительно улучшает удобство восприятия текста
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableSide>
                        <IndexFeaturesTableSide>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-formats.webp" />
                                <IndexFeaturesTableIcon alt="formats" src="/images/feature-formats.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Поддерживаемые<br/>форматы
                            </IndexFeaturesTableTitle>
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
                            <IndexFeaturesTableText>
                                Видео: <span>MP4, MKV, FLV, AVI, MOV, WMV</span><br/>
                                Аудио: <span>M4A, MP3, OGG, AAC, WAV, FLAC, WMA</span>
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableSide>
                        <IndexFeaturesTableCenter>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-export.webp" />
                                <IndexFeaturesTableIcon alt="export" src="/images/feature-export.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Экспорт в форматах<br/><span>docx, txt, srt</span>
                            </IndexFeaturesTableTitle>
                            <IndexFeaturesTableText>
                                По запросу добавим удобный для вас формат
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableCenter>
                        <IndexFeaturesTableSide>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-security.webp" />
                                <IndexFeaturesTableIcon alt="secure" src="/images/feature-security.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Безопасность
                            </IndexFeaturesTableTitle>
                            <IndexFeaturesTableText>
                                Мы дорожим безопасностью ваших данных. Все файлы шифруются как при хранении, так и при передаче в соответствии с лучшими практиками в индустрии.
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableSide>
                        <IndexFeaturesTableSide>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-timecode.webp" />
                                <IndexFeaturesTableIcon alt="timecodes" src="/images/feature-timecode.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Таймкоды
                            </IndexFeaturesTableTitle>
                            <IndexFeaturesTableText>
                                Указание временных кодов в тексте расшифровки для удобства ориентации
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableSide>
                        <IndexFeaturesTableCenter>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-edit.webp" />
                                <IndexFeaturesTableIcon alt="editable" src="/images/feature-edit.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Редактирование<br/>расшифровки
                            </IndexFeaturesTableTitle>
                            <IndexFeaturesTableText>
                                Прослушивайте и редактируйте прямо в браузере
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableCenter>
                        <IndexFeaturesTableSide>
                            <IndexFeaturesTableBackground />
                            <IndexFeaturesTablePicture>
                                <source media="(max-width:500px)" srcSet="/images/feature-tryfree.webp" />
                                <IndexFeaturesTableIcon alt="try for free" src="/images/feature-tryfree.svg" />
                            </IndexFeaturesTablePicture>
                            <IndexFeaturesTablePattern 
                                alt="pattern" 
                                src="/images/card-pattern.webp"
                            />
                            <IndexFeaturesTableTitle>
                                Оцените качество<br className="mobile_break"></br> расшифровки<br className="mobile_break"></br> <span>бесплатно</span>
                            </IndexFeaturesTableTitle>
                            <IndexFeaturesTableText>
                                Не требуется платежных данных.
                            </IndexFeaturesTableText>
                        </IndexFeaturesTableSide>
                    </IndexFeaturesTables>
                </IndexFeaturesBody>
            </section>
        </IndexFeaturesContent>
    );
}

export default IndexFeaturesComponent;