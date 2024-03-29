import { FC, useEffect } from "react";
import { 
    SmallComboBoxBlock,
    SmallComboBoxBackground,
    SmallComboBoxContent,
    SmallComboBoxBackgroundLayer,
    SmallComboBoxOptionBlock,
    SmallComboBoxOptionActiveBackground,
    SmallComboBoxOptionButton
} from "./SmallComboBoxStyles";
import useComponentVisible from "hooks/useComponentVisible";
import FocusTrap from "focus-trap-react";

interface ISmallComboBox {
    className: string;
    setOption: (name: string) => void;
    setMenuActive: (state: boolean) => void;
    options: {
        name: string;
    }[];
}

const SmallComboBox: FC<ISmallComboBox> = ({className, setOption, setMenuActive, options}) => {
    const { ref, isComponentVisible } = useComponentVisible(true);

    useEffect(() => {
        if (isComponentVisible === false) {
            setMenuActive(false);
        }
    },[isComponentVisible]);
    
    return (
        <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
            <SmallComboBoxBlock className={className} ref={ref}>
                <SmallComboBoxBackground>
                    <SmallComboBoxBackgroundLayer>
                        <SmallComboBoxContent>
                            {options.map((option, idx) => {
                                return (
                                    <SmallComboBoxOptionBlock key={idx}>
                                        <SmallComboBoxOptionButton
                                            onClick={() => { setOption(option.name); setMenuActive(false); }}
                                        >
                                            {option.name}
                                        </SmallComboBoxOptionButton>
                                        <SmallComboBoxOptionActiveBackground />
                                    </SmallComboBoxOptionBlock>
                                );
                            })}
                        </SmallComboBoxContent>
                    </SmallComboBoxBackgroundLayer>
                </SmallComboBoxBackground>
            </SmallComboBoxBlock>
        </FocusTrap>
    );
}

export default SmallComboBox;