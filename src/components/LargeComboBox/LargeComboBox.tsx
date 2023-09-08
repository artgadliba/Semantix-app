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

interface ILargeComboBox {
    isActive: boolean;
    addFolderActive: boolean;
    setOption: (name: string) => void;
    setMenuActive: (state: boolean) => void;
    openNewFolderModal?: () => void;
     items: {
        option: string;
    }[];
}

const LargeComboBox: FC<ILargeComboBox> = ({isActive, addFolderActive, setOption, setMenuActive, openNewFolderModal, items}) => {
    const[scrollable, setScrollable] = useState<boolean>(false);

    useEffect(() => {
        if (items.length > 4) {
            setScrollable(true);
        }
    },[items]);

    return (
        <LargeComboBoxBlock>
            <LargeComboBoxBackground addFolderActive={addFolderActive}>
                <LargeComboBoxBackgroundLayer />
                <LargeComboBoxContent>
                    {items.map((item, idx) => {
                        return (
                            <LargeComboBoxOptionBlock isScrollable={scrollable} key={idx}>
                                <LargeComboBoxOptionButton onClick={() => { setOption(item.option); setMenuActive(false); }}>{item.option}</LargeComboBoxOptionButton>
                                <LargeComboBoxOptionActiveBackground />
                            </LargeComboBoxOptionBlock>
                        );
                    })}
                </LargeComboBoxContent>
                {addFolderActive == true && (
                    <>
                    <LargeComboBoxOptionAddFolderBlock>
                        <LargeComboBoxOptionAddFolderButtonBlock onClick={openNewFolderModal}>
                            <LargeComboBoxOptionAddFolderButtonIcon width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="17" height="17" rx="3.5"/>
                                <path d="M9.5 6v7M6 9.5h7" stroke-linecap="round" strokeLinejoin="round"/>
                            </LargeComboBoxOptionAddFolderButtonIcon>
                            <LargeComboBoxOptionAddFolderButtonTitle>Новая папка</LargeComboBoxOptionAddFolderButtonTitle>
                        </LargeComboBoxOptionAddFolderButtonBlock>
                    </LargeComboBoxOptionAddFolderBlock>
                    <LargeComboBoxOptionAddFolderBlockLine />
                    </>
                )}
            </LargeComboBoxBackground>
        </LargeComboBoxBlock>
    )
}

export default LargeComboBox;