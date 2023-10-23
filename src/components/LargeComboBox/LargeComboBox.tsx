import { FC, useEffect, useState } from "react";
import { 
    LargeComboBoxBlock,
    LargeComboBoxBackground,
    LargeComboBoxContent,
    LargeComboBoxBackgroundLayer,
    LargeComboBoxOptionBlock,
    LargeComboBoxOptionActiveBackground,
    LargeComboBoxOptionButton,
    LargeComboBoxOptionAddFolderBlock,
    LargeComboBoxOptionAddFolderButtonBlock,
    LargeComboBoxOptionAddFolderButtonIcon,
    LargeComboBoxOptionAddFolderButtonTitle,
    LargeComboBoxOptionAddFolderBlockLine
} from "./LargeComboBoxStyles";

interface IAppFolderObj {
    id: number;
    name: string;
}

interface ILargeComboBox {
    addFolderActive: boolean;
    setOption?: (name: string) => void;
    setCurrentFolder?:(folder: IAppFolderObj) => any;
    setMenuActive: (state: boolean) => void;
    openNewFolderModal?: () => void;
    items: {
        id?: number;
        name?: string;
        option?: string;
    }[];
} 

const LargeComboBox: FC<ILargeComboBox> = ({
    addFolderActive, setOption, setCurrentFolder, setMenuActive, openNewFolderModal, items
}) => {
    const[scrollable, setScrollable] = useState<boolean>(false);

    useEffect(() => {
        if (items.length > 4) {
            setScrollable(true);
        }
    },[items]);

    if (items.length > 0) {
        return (
            <LargeComboBoxBlock>
                <LargeComboBoxBackground>
                    <LargeComboBoxBackgroundLayer $addFolderActive={addFolderActive}>
                        <LargeComboBoxContent>
                            {items.map((item, idx) => {
                                return (
                                    <LargeComboBoxOptionBlock $isScrollable={scrollable} key={idx}>
                                        {item.name ? (
                                            <LargeComboBoxOptionButton 
                                                onClick={() => {
                                                    setMenuActive(false);
                                                    setCurrentFolder({ id: item.id, name: item.name });
                                                }}
                                            >
                                                {item.name}
                                            </LargeComboBoxOptionButton>
                                        ) : (
                                            <LargeComboBoxOptionButton 
                                                onClick={() => {
                                                    setMenuActive(false);
                                                    setOption(item.option)
                                                }}
                                            >
                                                {item.option}
                                            </LargeComboBoxOptionButton>
                                        )}
                                        <LargeComboBoxOptionActiveBackground />
                                    </LargeComboBoxOptionBlock>
                                );
                            })}
                        </LargeComboBoxContent>
                        {addFolderActive == true && (
                            <>
                                <LargeComboBoxOptionAddFolderBlock>
                                    <LargeComboBoxOptionAddFolderButtonBlock type="button" onClick={openNewFolderModal}>
                                        <LargeComboBoxOptionAddFolderButtonIcon width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1" y="1" width="17" height="17" rx="3.5"/>
                                            <path d="M9.5 6v7M6 9.5h7" stroke-linecap="round" strokeLinejoin="round"/>
                                        </LargeComboBoxOptionAddFolderButtonIcon>
                                        <LargeComboBoxOptionAddFolderButtonTitle>
                                            Новая папка
                                        </LargeComboBoxOptionAddFolderButtonTitle>
                                    </LargeComboBoxOptionAddFolderButtonBlock>
                                </LargeComboBoxOptionAddFolderBlock>
                                <LargeComboBoxOptionAddFolderBlockLine />
                            </>
                        )}
                    </LargeComboBoxBackgroundLayer>
                </LargeComboBoxBackground>
            </LargeComboBoxBlock>
        )
    } else if (items.length === 0) {
        return (
            <LargeComboBoxBlock>
                <LargeComboBoxBackground>
                    <LargeComboBoxBackgroundLayer 
                        $addFolderActive={addFolderActive}
                        className="empty-content"
                    >
                        {addFolderActive == true && (
                            <>
                                <LargeComboBoxOptionAddFolderBlock className="empty-content-block">
                                    <LargeComboBoxOptionAddFolderButtonBlock 
                                        className="empty-content-button"
                                        type="button"
                                        onClick={openNewFolderModal}
                                    >
                                        <LargeComboBoxOptionAddFolderButtonIcon width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="1" y="1" width="17" height="17" rx="3.5"/>
                                            <path d="M9.5 6v7M6 9.5h7" stroke-linecap="round" strokeLinejoin="round"/>
                                        </LargeComboBoxOptionAddFolderButtonIcon>
                                        <LargeComboBoxOptionAddFolderButtonTitle>
                                            Новая папка
                                        </LargeComboBoxOptionAddFolderButtonTitle>
                                    </LargeComboBoxOptionAddFolderButtonBlock>
                                </LargeComboBoxOptionAddFolderBlock>
                            </>
                        )}
                    </LargeComboBoxBackgroundLayer>
                </LargeComboBoxBackground>
            </LargeComboBoxBlock>
        )
    }
}

export default LargeComboBox;