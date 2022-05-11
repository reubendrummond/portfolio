import React from "react";

type CodoLogoProps = {
  className?: string;
};

export const CodeLogo = ({ className }: CodoLogoProps) => {
  const duration = 3;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200px"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 271 211"
      className={`group overflow-visible ${className}`}
    >
      <g fill="url(#paint0_linear_73_255)">
        <path
          className={`animate-[slightRotation_5s_ease-in-out_infinite] origin-center`}
          d="M170.237 0.769337C172.106 1.39142 173.835 2.37575 175.324 3.66613C176.813 4.9565 178.034 6.52762 178.915 8.28972C179.797 10.0518 180.323 11.9704 180.463 13.9358C180.603 15.9012 180.355 17.875 179.732 19.7443L119.732 199.744C118.475 203.52 115.769 206.641 112.211 208.422C108.652 210.202 104.532 210.496 100.757 209.239C96.9814 207.982 93.8601 205.277 92.0794 201.718C90.2988 198.16 90.0047 194.04 91.2618 190.264L151.262 10.2643C151.884 8.39471 152.868 6.66596 154.159 5.17685C155.449 3.68775 157.02 2.46747 158.782 1.58572C160.544 0.703967 162.463 0.17803 164.428 0.0379527C166.394 -0.102124 168.367 0.146405 170.237 0.769337"
        />

        <path
          className={`animate-[rightToLeft_5s_ease-in-out_infinite]`}
          d="M71.1018 49.3993C73.9139 52.2123 75.4936 56.0269 75.4936 60.0043C75.4936 63.9818 73.9139 67.7964 71.1018 70.6093L36.7068 105.004L71.1018 139.399C72.5344 140.783 73.6772 142.438 74.4633 144.268C75.2495 146.098 75.6632 148.067 75.6805 150.058C75.6979 152.05 75.3183 154.025 74.5641 155.869C73.8099 157.712 72.6961 159.387 71.2877 160.795C69.8793 162.204 68.2046 163.317 66.3611 164.072C64.5177 164.826 62.5425 165.205 60.5508 165.188C58.5591 165.171 56.5908 164.757 54.7607 163.971C52.9307 163.185 51.2755 162.042 49.8918 160.609L4.8918 115.609C2.07973 112.796 0.5 108.982 0.5 105.004C0.5 101.027 2.07973 97.2122 4.8918 94.3993L49.8918 49.3993C52.7047 46.5873 56.5193 45.0075 60.4968 45.0075C64.4743 45.0075 68.2889 46.5873 71.1018 49.3993Z"
        />
        <path
          className={`animate-[leftToRight_5s_ease-in-out_infinite]`}
          d="M199.892 49.3993C202.705 46.5873 206.519 45.0075 210.497 45.0075C214.474 45.0075 218.289 46.5873 221.102 49.3993L266.102 94.3993C268.914 97.2122 270.494 101.027 270.494 105.004C270.494 108.982 268.914 112.796 266.102 115.609L221.102 160.609C219.718 162.042 218.063 163.185 216.233 163.971C214.403 164.757 212.434 165.171 210.443 165.188C208.451 165.205 206.476 164.826 204.632 164.072C202.789 163.317 201.114 162.204 199.706 160.795C198.297 159.387 197.184 157.712 196.429 155.869C195.675 154.025 195.296 152.05 195.313 150.058C195.33 148.067 195.744 146.098 196.53 144.268C197.316 142.438 198.459 140.783 199.892 139.399L234.287 105.004L199.892 70.6093C197.08 67.7964 195.5 63.9818 195.5 60.0043C195.5 56.0269 197.08 52.2123 199.892 49.3993Z"
        />
      </g>

      <defs xmlns="http://www.w3.org/2000/svg">
        <linearGradient
          id="paint0_linear_73_255"
          x1="242"
          y1="64.5"
          x2="1.24999"
          y2="144.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A259FF" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
      </defs>
    </svg>
  );
};
