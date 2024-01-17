import React, { FC, useEffect, useLayoutEffect, useState } from "react";
import Landing from "layouts/Landing/Landing";
import { 
    LandingFaqPageBlock,
    LandingFaqPageContentBlock,
    LandingFaqNavigationBlock,
    LandingFaqNavigationBlockTitle,
    LandingFaqNavigationBlockSection,
    LandingFaqNavigationMobileBlock,
    LandingFaqNavigationMobileButton,
    LandingFaqNavigationMobileBlockTitle,
    LandingFaqNavigationMobileExpandIcon,
    LandingFaqMainBlock,
    LandingFaqSearchInputBlock,
    LandingFaqSearchInput,
    LandingFaqSearchInputIcon,
    LandingFaqQuestionElement,
    LandingFaqQuestionElementBackgroundLayer,
    LandingFaqQuestionElementTitle,
    LandingFaqQuestionElementIcon,
    LandingFaqQuestionElementText,
    LandingFaqQuestionElementInnerLink,
    LandingFaqQuestionsBlock,
    LandingFaqQuestionsBlockTitle,
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
import { faqCommon, faqTranscription, faqPayments } from "content/FaqContents";
import { Helmet } from "react-helmet";

interface IFaqContent {
    question: string;
    text: string;
    linkName?: string;
    href?: string;
    moreText?: string;
}

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

    useLayoutEffect(() => {
        setIsOpen(false);
    }, [item]);

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
        <LandingFaqQuestionElement onClick={() => setIsOpen((prev) => !prev)}>
            <LandingFaqQuestionElementBackgroundLayer />
            <LandingFaqQuestionElementIcon width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="32" height="32" rx="8" />
                <path d="M17 11.1665V22.8332M11.1667 16.9998H22.8333" stroke-linecap="round" stroke-linejoin="round"/>
            </LandingFaqQuestionElementIcon>
            <LandingFaqQuestionElementTitle>{getHighlightedText(item.question, searchInput)}</LandingFaqQuestionElementTitle>
            <LandingFaqQuestionElementText className={isOpen === true ? "visible_text" : ""}>
                {item.text}
                <LandingFaqQuestionElementInnerLink to={item.href}>
                    {item.linkName}
                </LandingFaqQuestionElementInnerLink>
                {item.moreText}
            </LandingFaqQuestionElementText>
        </LandingFaqQuestionElement>
    );
}

const LandingFaqPage = () => {
    const [searchInput, setSeacrhInput] = useState<string>("");
    const [currentSection, setCurrentSection] = useState<string>("Общие вопросы");
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [faqContent, setFaqContent] = useState<Array<IFaqContent>>(null);

    useLayoutEffect(() => {
        if (currentSection === "Общие вопросы") {
            setFaqContent(faqCommon);
        } else if (currentSection === "Расшифровка") {
            setFaqContent(faqTranscription);
        } else if (currentSection === "Оплата") {
            setFaqContent(faqPayments);
        }
    }, [currentSection]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth);
        });
        return () => {
            window.removeEventListener("resize", () => {
                setWindowWidth(window.innerWidth);
            });
        }
    }, []);
    
    const sections = ["Общие вопросы", "Расшифровка", "Оплата"];

    const breadcrumbs = {
        "@context": "https://schema.org/", 
        "@type": "BreadcrumbList", 
        "itemListElement": [{
            "@type": "ListItem", 
            "position": 1, 
            "name": "Главная",
            "item": "https://semantix.one"  
        },{
            "@type": "ListItem", 
            "position": 2, 
            "name": "FAQ",
            "item": "https://semantix.one/faq"  
        }]
    };
    
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let lowerCase = event.target.value.toLowerCase();
        setSeacrhInput(lowerCase);
    };

    const handleSection = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const element = e.currentTarget as HTMLElement;
        if (currentSection === element.innerText && windowWidth < 501) {
            setCurrentSection(null);
        } else {
            setCurrentSection(element.innerText);
        }
    }

    return (
        <Landing>
            <Helmet>
                <title>Semantix - распознавание речи и конвертация в текст онлайн</title>
                {/* SEO Meta Tags */}
                <meta name="description" content="Распознавание речи с высокой точностью, конвертация в текст за несколько кликов при помощи алгоритмов искусственного интеллекта Semantix. Транскрибация и редактирование онлайн."></meta>
                <meta name="keywords" content="транскрибация, транскрибировать текст онлайн, аудио в текст, видео в текст, расшифровка речи в текст онлайн, генерация субтритров, распознавание речи"></meta>
                <script className='structured-data-list' type="application/ld+json">
                    {JSON.stringify(breadcrumbs)}
                </script>
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
                    <LandingFaqSearchInputBlock>
                        <LandingFaqSearchInput type="text" placeholder="Поиск" onChange={handleSearchChange} />
                        {searchInput !== "" ? (
                            <LandingFaqSearchInputIcon alt="search" src="/images/search-active.svg" />
                        ) : (
                            <LandingFaqSearchInputIcon alt="search" src="/images/search.svg" />
                        )}
                    </LandingFaqSearchInputBlock>
                    {windowWidth > 500 ? (
                        <LandingFaqMainBlock>
                            <LandingFaqNavigationBlock>
                                <LandingFaqNavigationBlockTitle>Разделы</LandingFaqNavigationBlockTitle>
                                {sections.map((section, idx) => {
                                    return (
                                        <LandingFaqNavigationBlockSection
                                            key={idx}
                                            className={currentSection === section ? "active_section" : ""} 
                                            onClick={(e) => { handleSection(e); }}
                                        >
                                            {section}
                                        </LandingFaqNavigationBlockSection>
                                    );
                                })}
                            </LandingFaqNavigationBlock>
                            <LandingFaqQuestionsBlock>
                                <LandingFaqQuestionsBlockTitle>{currentSection}</LandingFaqQuestionsBlockTitle>
                                {faqContent && faqContent.map((faq, idx) => {
                                    return <LandingFaqPageItem key={idx} searchInput={searchInput} item={faq} />
                                })}
                            </LandingFaqQuestionsBlock>
                        </LandingFaqMainBlock>
                    ) : (
                        <LandingFaqMainBlock>
                            <LandingFaqQuestionsBlock>
                                {sections.map((section, idx) => {
                                    return (
                                        <LandingFaqNavigationMobileBlock key={idx}>
                                            <LandingFaqNavigationMobileButton
                                                onClick={(e) => { handleSection(e); }}
                                            >
                                                <LandingFaqNavigationMobileBlockTitle>
                                                    {section}
                                                </LandingFaqNavigationMobileBlockTitle>
                                                <LandingFaqNavigationMobileExpandIcon 
                                                    alt="icon"
                                                    src={currentSection === section ? 
                                                        "/images/folders-closed.svg" : "/images/folders-opened.svg"
                                                    }
                                                />
                                            </LandingFaqNavigationMobileButton>
                                            {currentSection === section 
                                                && faqContent && faqContent.map((faq, idx) => {
                                                return (
                                                    <LandingFaqPageItem 
                                                        key={idx} 
                                                        searchInput={searchInput} 
                                                        item={faq} 
                                                    />
                                                );
                                            })}
                                        </LandingFaqNavigationMobileBlock>
                                    );
                                })}
                            </LandingFaqQuestionsBlock>
                        </LandingFaqMainBlock>
                    )}
                </LandingFaqPageContentBlock>
            </LandingFaqPageBlock>
        </Landing>
    );
}

export default LandingFaqPage;