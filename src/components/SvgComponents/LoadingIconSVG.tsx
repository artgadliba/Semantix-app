import { LoadingIcon } from "components/Mixins/Mixins";

const LoadingIconSVG = () => {
    return (
        <LoadingIcon viewBox="0 0 48 66" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_338_484)">
                <path d="M6.83363 0C3.06147 0 0 3.11504 0 6.95322V59.0468C0 62.8849 3.06147 66 6.83363 66H41.1664C44.9385 66 48 62.8849 48 59.0468V18.48L29.8378 0H6.83363Z" fill="#292A3C"/>
                <path d="M29.8418 0V11.7404C29.8418 15.4606 32.8092 18.48 36.4655 18.48H48.004L29.8418 0Z" fill="#202130"/>
            </g>
            <g>
                <circle className="upload_circle_6" cx="17" cy="29" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                <circle className="upload_circle_5" cx="17" cy="37" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                <circle className="upload_circle_4" cx="24" cy="41" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                <circle className="upload_circle_3" cx="31" cy="37" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                <circle className="upload_circle_2" cx="31" cy="29" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                <circle className="upload_circle_1" cx="24" cy="25" r="2.3" fill="#79768B" fill-opacity="0.25"/>
            </g>
            <defs>
                <clipPath id="clip0_338_484">
                    <rect width="48" height="66" fill="white"/>
                </clipPath>
                <clipPath id="clip1_338_484">
                    <rect width="20" height="20" fill="white" transform="translate(14 27)"/>
                </clipPath>
            </defs>
        </LoadingIcon>
    );
}

export default LoadingIconSVG;