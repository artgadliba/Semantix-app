import { FC, useEffect, useState } from "react";
import { 
    FileEditBlock,
    FileEditTranscriptionBlock,
    FileEditTranscriptionBackgroundLayer,
    FileEditTranscriptionTextBlock,
    FileEditTranscriptionTextBlockTimestamp,
    FileEditTranscriptionTextBlockParagraph
 } from "./FileEditStyles";

 interface IFileEdit {
    items: {
        timestamp: string;
        text: string;
    }[];
 }

const FileEdit: FC<IFileEdit> = ({items}) => {
    
    return (
        <FileEditBlock>
        {items.map((item, idx) => {
            return (
                <FileEditTranscriptionBlock key={idx}>
                    <FileEditTranscriptionBackgroundLayer />
                    <FileEditTranscriptionTextBlock>
                        <FileEditTranscriptionTextBlockTimestamp>{item.timestamp}</FileEditTranscriptionTextBlockTimestamp>
                        <FileEditTranscriptionTextBlockParagraph defaultValue={item.text}></FileEditTranscriptionTextBlockParagraph>
                    </FileEditTranscriptionTextBlock>
                </FileEditTranscriptionBlock>
            );
        })}
        </FileEditBlock>  
    );
}

export default FileEdit;