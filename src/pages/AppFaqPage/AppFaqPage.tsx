import React, { FC, useLayoutEffect, useEffect, useState } from "react";
import { 
    AppFaqPageBlock,
    AppFaqPageContentBlock,
    AppFaqNavigationBlock,
    AppFaqNavigationBlockTitle,
    AppFaqNavigationBlockSection,
    AppFaqNavigationMobileBlock,
    AppFaqNavigationMobileButton,
    AppFaqNavigationMobileBlockTitle,
    AppFaqNavigationMobileExpandIcon,
    AppFaqMainBlock,
    AppFaqMainBlockSearchInputBlock,
    AppFaqMainBlockSearchInput,
    AppFaqMainBlockSearchInputIcon,
    AppFaqMainBlockTitle,
    AppFaqMainBlockQuestionElement,
    AppFaqMainBlockQuestionElementBackgroundLayer,
    AppFaqMainBlockQuestionElementTitle,
    AppFaqMainBlockQuestionElementIcon,
    AppFaqMainBlockQuestionElementText,
    AppFaqMainBlockQuestionElementInnerLink,
    AppFaqHighlight
} from "./AppFaqPageStyles";
import AppInterface from "layouts/App/AppInterface";
import { faqCommon, faqPayments, faqTranscription } from "content/FaqContents";
import axios from "axios";

interface IFaqContent {
    question: string;
    text: string;
    linkName?: string;
    href?: string;
    moreText?: string;
}

interface IAppFaqPageItem {
    searchInput?: string;
    item: {
        question: string;
        text: string;
        linkName?: string;
        href?: string;
        moreText?: string;
    }
}

const AppFaqPageItem: FC<IAppFaqPageItem> = ({searchInput, item}) => {
    const [isOpen, setIsOpen] = useState(false);

    useLayoutEffect(() => {
        setIsOpen(false);
    }, [item]);

    function getHighlightedText(text: string, searchInput: string) {
        const parts = text.split(new RegExp(`(${searchInput})`, "gi"));
        return parts.map((part, index) => (
          <React.Fragment key={index}>
            {part.toLowerCase() === searchInput.toLowerCase() ? (
              <AppFaqHighlight>{part}</AppFaqHighlight>
            ) : (
              part
            )}
          </React.Fragment>
        ));
    }

    return (
        <AppFaqMainBlockQuestionElement onClick={() => setIsOpen((prev) => !prev)}>
            <AppFaqMainBlockQuestionElementBackgroundLayer />
            <AppFaqMainBlockQuestionElementIcon width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="32" height="32" rx="8" />
                <path d="M17 11.1665V22.8332M11.1667 16.9998H22.8333" stroke-linecap="round" stroke-linejoin="round"/>
            </AppFaqMainBlockQuestionElementIcon>
            <AppFaqMainBlockQuestionElementTitle>
                {getHighlightedText(item.question, searchInput)}
            </AppFaqMainBlockQuestionElementTitle>
            <AppFaqMainBlockQuestionElementText className={isOpen === true ? "visible_text" : ""}>
                {item.text}
                <AppFaqMainBlockQuestionElementInnerLink to={item.href}>
                    {item.linkName}
                </AppFaqMainBlockQuestionElementInnerLink>
                {item.moreText}
            </AppFaqMainBlockQuestionElementText>
        </AppFaqMainBlockQuestionElement>
    );
}

const AppFaqPage = () => {
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

    useEffect(() => {
        if (localStorage.getItem("jwt-tokens")) {
            axios.get("/api/users/current", {
                headers: {
                    "jwt-tokens": localStorage.getItem("jwt-tokens")
                }
            })
            .then(res => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
            })
            .catch(err => {
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                window.location.href = "/#login";
            })
        } else {
            window.location.href = "/#login";
        }
    }, []);

    const sections = ["Общие вопросы", "Расшифровка", "Оплата"];
    
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
        <AppInterface headerTitle="FAQ" controlBar={false}>
            <AppFaqPageBlock>
                {windowWidth > 500 ? (
                    <AppFaqPageContentBlock>
                        <AppFaqNavigationBlock>
                            <AppFaqNavigationBlockTitle>Разделы</AppFaqNavigationBlockTitle>
                            {sections.map((section, idx) => {
                                return (
                                    <AppFaqNavigationBlockSection
                                        key={idx}
                                        className={currentSection === section ? "active_section" : ""} 
                                        onClick={(e) => { handleSection(e); }}
                                    >
                                        {section}
                                    </AppFaqNavigationBlockSection>
                                );
                            })}
                        </AppFaqNavigationBlock>
                        <AppFaqMainBlock>
                            <AppFaqMainBlockSearchInputBlock>
                                <AppFaqMainBlockSearchInput 
                                    type="text" 
                                    placeholder="Поиск"
                                    autoComplete="search"
                                    onChange={handleSearchChange} 
                                />
                                {searchInput !== "" ? (
                                    <AppFaqMainBlockSearchInputIcon alt="search" src="/images/search-active.svg" />
                                ) : (
                                    <AppFaqMainBlockSearchInputIcon alt="search" src="/images/search.svg" />
                                )}
                            </AppFaqMainBlockSearchInputBlock>
                            <AppFaqMainBlockTitle>{currentSection}</AppFaqMainBlockTitle>
                            {faqContent && faqContent.map((faq, idx) => {
                                return <AppFaqPageItem key={idx} searchInput={searchInput} item={faq} />
                            })}
                        </AppFaqMainBlock>
                    </AppFaqPageContentBlock>
                ) : (
                    <AppFaqPageContentBlock>
                        <AppFaqMainBlock>
                            <AppFaqMainBlockSearchInputBlock>
                                <AppFaqMainBlockSearchInput 
                                    type="text" 
                                    placeholder="Поиск"
                                    autoComplete="search"
                                    onChange={handleSearchChange} 
                                />
                                {searchInput !== "" ? (
                                    <AppFaqMainBlockSearchInputIcon alt="search" src="/images/search-active.svg" />
                                ) : (
                                    <AppFaqMainBlockSearchInputIcon alt="search" src="/images/search.svg" />
                                )}
                            </AppFaqMainBlockSearchInputBlock>
                            {sections.map((section, idx) => {
                                return (
                                    <AppFaqNavigationMobileBlock key={idx}>
                                        <AppFaqNavigationMobileButton onClick={(e) => { handleSection(e); }}>
                                            <AppFaqNavigationMobileBlockTitle>
                                                {section}
                                            </AppFaqNavigationMobileBlockTitle>
                                            <AppFaqNavigationMobileExpandIcon 
                                                alt="icon"
                                                src={currentSection === section ? 
                                                    "/images/folders-closed.svg" : "/images/folders-opened.svg"
                                                }
                                            />
                                        </AppFaqNavigationMobileButton>
                                        {currentSection === section 
                                            && faqContent && faqContent.map((faq, idx) => {
                                            return (
                                                <AppFaqPageItem 
                                                    key={idx} 
                                                    searchInput={searchInput} 
                                                    item={faq} 
                                                />
                                            );
                                        })}
                                    </AppFaqNavigationMobileBlock>
                                );
                            })}
                        </AppFaqMainBlock>
                    </AppFaqPageContentBlock>
                )}
            </AppFaqPageBlock>
        </AppInterface>
    );
};

export default AppFaqPage;