import React, { FC, useState } from "react";
import Landing from "layouts/Landing/Landing";
import { 
    LandingFaqPageBlock,
    LandingFaqPageContentBlock,
    LandingFaqNavigationBlock,
    LandingFaqNavigationBlockTitle,
    LandingFaqNavigationBlockSection,
    LandingFaqMainBlock,
    LandingFaqMainBlockSearchInputBlock,
    LandingFaqMainBlockSearchInput,
    LandingFaqMainBlockSearchInputIcon,
    LandingFaqMainBlockQuestionElement,
    LandingFaqMainBlockQuestionElementBackgroundLayer,
    LandingFaqMainBlockQuestionElementTitle,
    LandingFaqMainBlockQuestionElementIcon,
    LandingFaqMainBlockQuestionElementText,
    LandingFaqMainBlockQuestionElementInnerLink,
    LandingFaqGreetingBlock,
    LandingFaqGreetingTitle,
    LandingFaqGreetingCallToAction,
    LandingFaqContactsLinkBlock,
    LandingFaqTelegramLinkIcon,
    LandingFaqTelegramLinkBlock,
    LandingFaqEmailLinkIcon,
    LandingFaqEmailLinkBlock,
    LandingFaqHighlight
} from "./LandingFaqPageStyles";
import { Helmet } from "react-helmet";

interface ILandingFaqPageItem {
    searchInput?: string;
    item: {
        question: string;
        text: string;
        linkName?: string;
        href?: string;
        moreText?: string;
    }
}

const LandingFaqPageItem: FC<ILandingFaqPageItem> = ({searchInput, item}) => {
    const [isOpen, setIsOpen] = useState(false);

    function getHighlightedText(text: string, searchInput: string) {
        const parts = text.split(new RegExp(`(${searchInput})`, "gi"));
        return parts.map((part, index) => (
          <React.Fragment key={index}>
            {part.toLowerCase() === searchInput.toLowerCase() ? (
              <LandingFaqHighlight>{part}</LandingFaqHighlight>
            ) : (
              part
            )}
          </React.Fragment>
        ));
    }

    return (
        <LandingFaqMainBlockQuestionElement onClick={() => setIsOpen((prev) => !prev)}>
            <LandingFaqMainBlockQuestionElementBackgroundLayer />
            <LandingFaqMainBlockQuestionElementIcon width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="32" height="32" rx="8" />
                <path d="M17 11.1665V22.8332M11.1667 16.9998H22.8333" stroke-linecap="round" stroke-linejoin="round"/>
            </LandingFaqMainBlockQuestionElementIcon>
            <LandingFaqMainBlockQuestionElementTitle>{getHighlightedText(item.question, searchInput)}</LandingFaqMainBlockQuestionElementTitle>
            <LandingFaqMainBlockQuestionElementText className={isOpen === true ? "visibleText" : ""}>
                {item.text}
                <LandingFaqMainBlockQuestionElementInnerLink to={item.href}>
                    {item.linkName}
                </LandingFaqMainBlockQuestionElementInnerLink>
                {item.moreText}
            </LandingFaqMainBlockQuestionElementText>
        </LandingFaqMainBlockQuestionElement>
    );
}

const LandingFaqPage = () => {
    const [searchInput, setSeacrhInput] = useState<string>("");
    const faqContent = [
        {
            question: "Я хочу оплатить сервис со счета ООО или ИП, как это сделать?",
            text: 'Отправьте заявку на нашу электронную почту ',
            linkName: "hello@semantix.one",
            href: "mailto:hello@semantix.one",
            moreText: " с указанием реквизитов организации и желаемого пакета минут. Мы ответим вам в самое ближайшее время и выставим счет."
        },
        {
            question: "Какое качество расшифровки у алгоритмов Semantix?",
            text: "Благодаря автоматической нейтрализации посторонних шумов точность расшифровки достигает 95%. Обратите внимание, что иногда качество аудио может влиять на финальный результат: низкое качество звука, невнятная речь, собеседники, говорящие одновременно — все это может негативно сказаться на точности расшифровки."
        },
        {
            question: "Сколько занимает расшифровка записи?",
            text: "Приблизительное время расшифровки часовой записи - 10 минут. В редких случаях, при большой нагрузке на сервера, время обработки может быть увеличено."
        },
        {
            question: "Как скачать расшифровку?",
            text: "Перейдите на страницу файла (выбрав нужный из списка) чтобы открыть просмотр расшифровки. В онлайн редакторе вы сможете править текст, прослушивать аудио и экспортировать результат в различных форматах. По вашему запросу добавим недостающий формат."
        },
        {
            question: "Сколько хранится аудио в сервисе?",
            text: 'Аудио в онлайн редакторе расшифровки хранится в течение 30 дней, после чего безвозвратно удаляется. По запросу от пользователей тарифа "Бизнес", данное условие может быть изменено, чтобы соответствовать бизнес-требованиям.'
        },
        {
            question: "У меня проблема, что делать?",
            text: "Напишите нашему оператору в ",
            linkName: "telegram",
            href: "https://t.me/semantix_one",
            moreText: ". Он оперативно проконсультирует вас по любым вопросам связанным с работой сервиса."
        },
    ];
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let lowerCase = event.target.value.toLowerCase();
        setSeacrhInput(lowerCase);
    };

    return (
        <Landing>
            <Helmet>
                <title>Semantix - </title>
            </Helmet>
            <LandingFaqGreetingBlock>
                <LandingFaqGreetingTitle>Всё, что нужно знать</LandingFaqGreetingTitle>
                <LandingFaqGreetingCallToAction>
                    Не можете найти то, что ищете? <span>Свяжитесь с нами!</span>
                </LandingFaqGreetingCallToAction>
                <LandingFaqContactsLinkBlock>
                        <LandingFaqTelegramLinkBlock to="https://t.me/semantix_one">
                            <LandingFaqTelegramLinkIcon width="20" height="20" viewBox="0 0 20 20"><g clipPath="url(#a)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.48 3.692a1.25 1.25 0 0 1 1.72 1.355L16.31 16.51c-.184 1.106-1.397 1.74-2.412 1.189a48.711 48.711 0 0 1-3.241-1.912c-.567-.37-2.303-1.558-2.09-2.403.184-.723 3.1-3.438 4.767-5.052.654-.634.356-1-.416-.416-1.92 1.448-4.999 3.65-6.017 4.27-.898.547-1.367.64-1.927.547-1.021-.17-1.969-.433-2.742-.754-1.045-.433-.994-1.87-.001-2.288l14.25-6Z" /></g><defs><clipPath id="a">
                                <path d="M0 0h20v20H0z"/></clipPath></defs>
                            </LandingFaqTelegramLinkIcon>
                        </LandingFaqTelegramLinkBlock>
                        <LandingFaqEmailLinkBlock to="mailto:hello@semantix.one">
                            <LandingFaqEmailLinkIcon width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.667 5.833A3.333 3.333 0 0 1 5 2.5h10a3.333 3.333 0 0 1 3.333 3.333v8.334A3.333 3.333 0 0 1 15 17.5H5a3.333 3.333 0 0 1-3.333-3.333V5.833Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.48 6.32a.625.625 0 0 1 .867-.173l3.15 2.1c.91.607 2.096.607 3.005 0l3.151-2.1a.625.625 0 0 1 .694 1.04l-3.151 2.1a3.959 3.959 0 0 1-4.392 0l-3.15-2.1a.625.625 0 0 1-.174-.867Z" fill="#131520"/>
                            </LandingFaqEmailLinkIcon>
                        </LandingFaqEmailLinkBlock>
                </LandingFaqContactsLinkBlock>
            </LandingFaqGreetingBlock>
            <LandingFaqPageBlock>
                <LandingFaqPageContentBlock>
                    <LandingFaqNavigationBlock>
                        <LandingFaqNavigationBlockTitle>Разделы</LandingFaqNavigationBlockTitle>
                        <LandingFaqNavigationBlockSection>Начало работы</LandingFaqNavigationBlockSection>
                        <LandingFaqNavigationBlockSection>Процесс оценки</LandingFaqNavigationBlockSection>
                        <LandingFaqNavigationBlockSection>Торговые льготы</LandingFaqNavigationBlockSection>
                        <LandingFaqNavigationBlockSection>Тарифы</LandingFaqNavigationBlockSection>
                        <LandingFaqNavigationBlockSection>Прочее</LandingFaqNavigationBlockSection>
                    </LandingFaqNavigationBlock>
                    <LandingFaqMainBlock>
                        <LandingFaqMainBlockSearchInputBlock>
                            <LandingFaqMainBlockSearchInput type="text" placeholder="Поиск" onChange={handleSearchChange} />
                            {searchInput != "" ? (
                                <LandingFaqMainBlockSearchInputIcon alt="search" src="/images/search-active.svg" />
                            ) : (
                                <LandingFaqMainBlockSearchInputIcon alt="search" src="/images/search.svg" />
                            )}
                        </LandingFaqMainBlockSearchInputBlock>
                        {faqContent.map((faq, idx) => {
                            return <LandingFaqPageItem key={idx} searchInput={searchInput} item={faq} />
                        })}
                    </LandingFaqMainBlock>
                </LandingFaqPageContentBlock>
            </LandingFaqPageBlock>
        </Landing>
    );
}

export default LandingFaqPage;