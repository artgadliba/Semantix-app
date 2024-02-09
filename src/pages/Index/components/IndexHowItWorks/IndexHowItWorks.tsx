import {
    IndexHowItWorksBody,
    IndexHowItWorksContent,
    IndexHowItWorksTitle,
    IndexHowItWorksTables,
    IndexHowItWorksTableBlock,
    IndexHowItWorksPicture,
    IndexHowItWorksImage,
    IndexHowItWorksText,
} from "./IndexHowItWorksStyles";

const IndexHowItWorksComponent = () => {
    return (
        <IndexHowItWorksContent>
            <section id="howitworks">
                <IndexHowItWorksBody>
                    <IndexHowItWorksTitle>
                        Как это работает?
                    </IndexHowItWorksTitle>
                    <IndexHowItWorksTables>
                        <IndexHowItWorksTableBlock>
                            <IndexHowItWorksPicture>
                                <source media="(max-width:500px)" srcSet="/images/upload-mobile.webp" />
                                <IndexHowItWorksImage 
                                    alt="upload" 
                                    src="/images/upload.svg"
                                />
                            </IndexHowItWorksPicture>
                            <IndexHowItWorksText>
                                Загрузите один или несколько<br/>аудио или видео файлов
                            </IndexHowItWorksText>
                        </IndexHowItWorksTableBlock>
                        <IndexHowItWorksTableBlock>
                            <IndexHowItWorksPicture>
                                <source media="(max-width:500px)" srcSet="/images/transcription-mobile.webp" />
                                <IndexHowItWorksImage 
                                    alt="upload" 
                                    src="/images/transcription.svg"
                                />
                            </IndexHowItWorksPicture>
                            <IndexHowItWorksText>
                                Semantix автоматически<br/>обработает файлы
                            </IndexHowItWorksText>
                        </IndexHowItWorksTableBlock>
                        <IndexHowItWorksTableBlock>
                            <IndexHowItWorksPicture>
                                <source media="(max-width:500px)" srcSet="/images/export-mobile.webp" />
                                <IndexHowItWorksImage 
                                    alt="upload" 
                                    src="/images/export.svg"
                                />
                            </IndexHowItWorksPicture>
                            <IndexHowItWorksText>
                                Экспортируйте расшифровку<br/>в нужном формате
                            </IndexHowItWorksText>
                        </IndexHowItWorksTableBlock>
                    </IndexHowItWorksTables>
                </IndexHowItWorksBody>
            </section>
        </IndexHowItWorksContent>
    );
}

export default IndexHowItWorksComponent;