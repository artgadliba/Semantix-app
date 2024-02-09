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
import FocusTrap from "focus-trap-react";
import { useDispatch } from "react-redux";
import { setUploadFolder } from "slices/uploadFolderSlice";

interface ILargeComboBox {
    addFolderActive: boolean;
    setOption?: (name: string) => void;
    setMenuActive: (state: boolean) => void;
    openNewFolderModal?: () => void;
    items: {
        id?: number;
        name?: string;
        option?: string;
    }[];
} 

const LargeComboBox: FC<ILargeComboBox> = (props) => {
    const {addFolderActive, setOption, setMenuActive, openNewFolderModal, items} = props;
    const[scrollable, setScrollable] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (items.length > 4) {
            setScrollable(true);
        }
    },[items]);

    const sortedItems = items.sort((a, b) => a.name < b.name ? -1 : 1);

    if (sortedItems.length > 0) {
        return (
            <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <LargeComboBoxBlock>
                    <LargeComboBoxBackground>
                        <LargeComboBoxBackgroundLayer $addFolderActive={addFolderActive}>
                            <LargeComboBoxContent>
                                {sortedItems.map((item, idx) => {
                                    return (
                                        <LargeComboBoxOptionBlock $isScrollable={scrollable} key={idx}>
                                            {item.name ? (
                                                <LargeComboBoxOptionButton 
                                                    onClick={() => {
                                                        setMenuActive(false);
                                                        dispatch(setUploadFolder({ id: item.id, name: item.name }));
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
                            {addFolderActive && (
                                <>
                                    <LargeComboBoxOptionAddFolderBlock>
                                        <LargeComboBoxOptionAddFolderButtonBlock type="button" onClick={openNewFolderModal}>
                                            <LargeComboBoxOptionAddFolderButtonIcon width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1" y="1" width="17" height="17" rx="3.5"/>
                                                <path d="M9.5 6v7M6 9.5h7" strokeLinecap="round" strokeLinejoin="round"/>
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
            </FocusTrap>
        )
    } else if (sortedItems.length === 0) {
        return (
            <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <LargeComboBoxBlock>
                    <LargeComboBoxBackground>
                        <LargeComboBoxBackgroundLayer 
                            $addFolderActive={addFolderActive}
                            className="empty_content"
                        >
                            {addFolderActive == true && (
                                <>
                                    <LargeComboBoxOptionAddFolderBlock className="empty_content__block">
                                        <LargeComboBoxOptionAddFolderButtonBlock 
                                            className="empty_content__block__button"
                                            type="button"
                                            onClick={openNewFolderModal}
                                        >
                                            <LargeComboBoxOptionAddFolderButtonIcon width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1" y="1" width="17" height="17" rx="3.5"/>
                                                <path d="M9.5 6v7M6 9.5h7" strokeLinecap="round" strokeLinejoin="round"/>
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
            </FocusTrap>
        )
    }
}

export default LargeComboBox;