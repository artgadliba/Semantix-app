import { FC, useEffect, useState } from "react";
import { 
    FileViewBlock,
    FileViewTranscriptionBlock,
    FileViewTranscriptionBackgroundLayer,
    FileViewTranscriptionTextBlock,
    FileViewTranscriptionTextBlockTimestamp,
    FileViewTranscriptionTextBlockParagraph
 } from "./FileViewStyles";

 interface IFileView {
    items: {
        timestamp: string;
        text: string;
    }[];
 }

const FileView: FC<IFileView> = ({items}) => {
    return (
        <FileViewBlock>
            <FileViewTranscriptionBlock>
                <FileViewTranscriptionBackgroundLayer />
                {items.map((item, idx) => {
                    return (
                        <FileViewTranscriptionTextBlock key={idx}>
                            <FileViewTranscriptionTextBlockTimestamp>{item.timestamp}</FileViewTranscriptionTextBlockTimestamp>
                            <FileViewTranscriptionTextBlockParagraph>{item.text}</FileViewTranscriptionTextBlockParagraph>
                        </FileViewTranscriptionTextBlock>
                    );
                })}
            </FileViewTranscriptionBlock>
        </FileViewBlock>
    );
}

export default FileView;