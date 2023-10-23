import React, { FC, useState } from "react";
import { 
    AppFaqPageBlock,
    AppFaqPageContentBlock,
    AppFaqNavigationBlock,
    AppFaqNavigationBlockTitle,
    AppFaqNavigationBlockSection,
    AppFaqMainBlock,
    AppFaqMainBlockSearchInputBlock,
    AppFaqMainBlockSearchInput,
    AppFaqMainBlockSearchInputIcon,
    AppFaqMainBlockQuestionElement,
    AppFaqMainBlockQuestionElementBackgroundLayer,
    AppFaqMainBlockQuestionElementTitle,
    AppFaqMainBlockQuestionElementIcon,
    AppFaqMainBlockQuestionElementText,
    AppFaqMainBlockQuestionElementInnerLink,
    AppFaqHighlight
} from "./AppFaqPageStyles";
import AppInterface from "layouts/App/AppInterface";

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
            <AppFaqMainBlockQuestionElementTitle>{getHighlightedText(item.question, searchInput)}</AppFaqMainBlockQuestionElementTitle>
            <AppFaqMainBlockQuestionElementText className={isOpen === true ? "visibleText" : ""}>
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
        <AppInterface headerTitle="FAQ" controlBar={false}>
            <AppFaqPageBlock>
                <AppFaqPageContentBlock>
                    <AppFaqNavigationBlock>
                        <AppFaqNavigationBlockTitle>Разделы</AppFaqNavigationBlockTitle>
                        <AppFaqNavigationBlockSection>Начало работы</AppFaqNavigationBlockSection>
                        <AppFaqNavigationBlockSection>Процесс оценки</AppFaqNavigationBlockSection>
                        <AppFaqNavigationBlockSection>Торговые льготы</AppFaqNavigationBlockSection>
                        <AppFaqNavigationBlockSection>Тарифы</AppFaqNavigationBlockSection>
                        <AppFaqNavigationBlockSection>Прочее</AppFaqNavigationBlockSection>
                    </AppFaqNavigationBlock>
                    <AppFaqMainBlock>
                        <AppFaqMainBlockSearchInputBlock>
                            <AppFaqMainBlockSearchInput 
                                type="text" 
                                placeholder="Поиск"
                                autoComplete="search"
                                onChange={handleSearchChange} 
                            />
                            {searchInput != "" ? (
                                <AppFaqMainBlockSearchInputIcon alt="search" src="/images/search-active.svg" />
                            ) : (
                                <AppFaqMainBlockSearchInputIcon alt="search" src="/images/search.svg" />
                            )}
                        </AppFaqMainBlockSearchInputBlock>
                        {faqContent.map((faq, idx) => {
                            return <AppFaqPageItem key={idx} searchInput={searchInput} item={faq} />
                        })}
                    </AppFaqMainBlock>
                </AppFaqPageContentBlock>
            </AppFaqPageBlock>
        </AppInterface>
    );
};

export default AppFaqPage;