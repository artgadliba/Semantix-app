function BlurredEllipseHeader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="542"
      height="548"
      fill="none"
      viewBox="0 0 542 548"
    >
      <g filter="url(#filter0_f_466_94)" opacity="0.4">
        <circle
          cx="39"
          cy="45"
          r="109"
          fill="url(#paint0_linear_466_94)"
        ></circle>
      </g>
      <defs>
        <filter
          id="filter0_f_466_94"
          width="1006"
          height="1006"
          x="-464"
          y="-458"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_466_94"
            stdDeviation="197"
          ></feGaussianBlur>
        </filter>
        <linearGradient
          id="paint0_linear_466_94"
          x1="-54.063"
          x2="148.7"
          y1="166.555"
          y2="148.843"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0781FE"></stop>
          <stop offset="1" stopColor="#00C7B4"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default BlurredEllipseHeader;