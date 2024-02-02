import Container from "../../components/Container/Container";
import Landing from "../../layouts/Landing/Landing";
import {
  IndexBlock,
  IndexMainBlock,
  IndexBlurredRectangle,
  IndexUpperBackgroundBlock,
  IndexUpperBackgroundPicture,
  IndexUpperBackgroundImage,
  IndexUpperBlurredCircle,
  IndexLowerBackgroundBlock,
  IndexLowerBackgroundPicture,
  IndexLowerBackgroundImage,
  IndexMiddleBlurredCircle,
  IndexBottomLeftBlurredCircle,
  IndexBottomRightBlurredCircle
} from "./IndexStyles";
import IndexGreetingComponent from "./components/IndexGreeting/IndexGreeting";
import IndexWidgetComponent from "./components/IndexWidget/IndexWidget";
import IndexFeaturesComponent from "./components/IndexFeatures/IndexFeatures";
import IndexHowItWorksComponent from "./components/IndexHowItWorks/IndexHowItWorks";
import IndexPaymentComponent from "./components/IndexPayment/IndexPayment";
import IndexCallToActionComponent from "./components/IndexCallToAction/IndexCallToAction";
import { Helmet } from "react-helmet";

const Index = () => {
    const breadcrumbs = {
        "@context": "https://schema.org/", 
        "@type": "BreadcrumbList", 
        "itemListElement": [{
            "@type": "ListItem", 
            "position": 1, 
            "name": "Main page",
            "item": "https://semantix.one"  
        },{
            "@type": "ListItem", 
            "position": 2, 
            "name": "📲 t.me/semantix_one",
            "item": "https://semantix.one/#"  
        }]
    };

    return (
        <Landing>
            <Helmet>
                <title>Semantix - распознавание речи из аудио и видео в текст</title>
                {/* SEO Meta Tags */}
                <meta name="description" content="Распознавание речи и конвертация из аудио и видео в текст при помощи нейросетей Semantix с высокой точностью. Редактирование в браузере, поддержка большинства медиа форматов." />
                <meta name="keywords" content="транскрибация, транскрибировать текст онлайн, аудио в текст, видео в текст, расшифровка речи в текст онлайн, генерация субтритров, распознавание речи" />
                {/* Facebook Meta Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Semantix – конвертация речи в текст" />
                <meta property="og:description" content="Конвертируйте аудио и видео в текстовый формат. Высокая точность расшифровки, расстановка знаков препинания, экспорт в удобном формате." />
                <meta property="og:url" content="https://semantix.one" />
                <meta property="og:image" content="https://semantix.one/images/Semantix-banner.png" />
                <meta property="og:site_name" content="Semantix" />
                <meta property="og:locale" content="ru_RU" />
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="semantix.one" />
                <meta property="twitter:url" content="https://semantix.one" />
                <meta name="twitter:title" content="Semantix – конвертация речи в текст" />
                <meta name="twitter:description" content="Конвертируйте аудио и видео в текстовый формат. Высокая точность расшифровки, расстановка знаков препинания, экспорт в удобном формате." />
                <meta name="twitter:image" content="https://semantix.one/images/Semantix-banner.png" />
                <script className='structured-data-list' type="application/ld+json">
                    {JSON.stringify(breadcrumbs)}
                </script>
            </Helmet>
            <IndexBlock>
                <IndexUpperBlurredCircle />
                <IndexMiddleBlurredCircle />
                <IndexBottomLeftBlurredCircle />
                <IndexBottomRightBlurredCircle />
                <Container maxwidth={1440}>
                        <IndexMainBlock>
                            <IndexGreetingComponent />
                            <IndexWidgetComponent />
                            <IndexBlurredRectangle />
                        </IndexMainBlock>
                        <IndexUpperBackgroundBlock>
                            <IndexUpperBackgroundPicture>
                                <source media="(max-width:500px)" srcSet="/images/upper-bg-mobile.svg" />
                                <IndexUpperBackgroundImage alt="background" src="/images/upper-bg.svg" />
                            </IndexUpperBackgroundPicture>
                            <IndexFeaturesComponent />
                        </IndexUpperBackgroundBlock>
                        <IndexLowerBackgroundBlock>
                            <IndexLowerBackgroundPicture>
                                <source media="(max-width:500px)" srcSet="/images/lower-bg-mobile.webp" />
                                <IndexLowerBackgroundImage alt="background" src="/images/lower-bg.svg" />
                            </IndexLowerBackgroundPicture>
                            <IndexHowItWorksComponent />
                        </IndexLowerBackgroundBlock>
                        <IndexPaymentComponent />
                        <IndexCallToActionComponent />
                </Container>
            </IndexBlock>
        </Landing>
    );
}

export default Index;
