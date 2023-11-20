import {memo} from 'react';

import {useTheme} from '@mui/material/styles';

// ----------------------------------------------------------------------

function BookingIllustration({...other}) {
    const theme = useTheme();

    const PRIMARY_LIGHTER = theme.palette.primary.lighter;

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    const PRIMARY_DARKER = theme.palette.primary.darker;

    return (
        <svg width="151" height="151" viewBox="0 0 151 151" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_111_37833)">
                <rect x="16" y="8" width="119" height="119" rx="8" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M84.4063 29.8958C84.4063 29.6334 84.302 29.3817 84.1164 29.1961C83.9308 29.0105 83.6791 28.9062 83.4167 28.9062H55.7084C52.8214 28.9062 50.0526 30.0531 48.0112 32.0945C45.9698 34.1359 44.8229 36.9047 44.8229 39.7917V95.2083C44.8229 98.0953 45.9698 100.864 48.0112 102.905C50.0526 104.947 52.8214 106.094 55.7084 106.094H95.2917C98.1787 106.094 100.947 104.947 102.989 102.905C105.03 100.864 106.177 98.0953 106.177 95.2083V56.2069C106.177 55.9444 106.073 55.6927 105.887 55.5071C105.702 55.3216 105.45 55.2173 105.188 55.2173H87.375C86.5877 55.2173 85.8325 54.9045 85.2758 54.3478C84.7191 53.791 84.4063 53.0359 84.4063 52.2485V29.8958ZM87.375 68.4896C88.1624 68.4896 88.9175 68.8024 89.4742 69.3591C90.031 69.9159 90.3438 70.671 90.3438 71.4583C90.3438 72.2457 90.031 73.0008 89.4742 73.5576C88.9175 74.1143 88.1624 74.4271 87.375 74.4271H63.625C62.8377 74.4271 62.0825 74.1143 61.5258 73.5576C60.9691 73.0008 60.6563 72.2457 60.6563 71.4583C60.6563 70.671 60.9691 69.9159 61.5258 69.3591C62.0825 68.8024 62.8377 68.4896 63.625 68.4896H87.375ZM87.375 84.3229C88.1624 84.3229 88.9175 84.6357 89.4742 85.1924C90.031 85.7492 90.3438 86.5043 90.3438 87.2917C90.3438 88.079 90.031 88.8341 89.4742 89.3909C88.9175 89.9476 88.1624 90.2604 87.375 90.2604H63.625C62.8377 90.2604 62.0825 89.9476 61.5258 89.3909C60.9691 88.8341 60.6563 88.079 60.6563 87.2917C60.6563 86.5043 60.9691 85.7492 61.5258 85.1924C62.0825 84.6357 62.8377 84.3229 63.625 84.3229H87.375Z"
                      fill="#3366FF"/>
                <path
                    d="M90.3438 31.1905C90.3438 30.4621 91.1077 29.999 91.6738 30.4542C92.1527 30.8421 92.5842 31.2934 92.9523 31.808L104.879 48.4211C105.148 48.8011 104.855 49.2919 104.388 49.2919H91.3333C91.0709 49.2919 90.8192 49.1877 90.6336 49.0021C90.448 48.8165 90.3438 48.5648 90.3438 48.3023V31.1905Z"
                    fill="#3366FF"/>
                <rect x="17" y="9" width="117" height="117" rx="7" stroke="#091A7A" strokeWidth="2"/>
            </g>
            <defs>
                <filter id="filter0_d_111_37833" x="0" y="0" width="151" height="151" filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                   result="hardAlpha"/>
                    <feOffset dy="8"/>
                    <feGaussianBlur stdDeviation="8"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.4 0 0 0 0 1 0 0 0 0.24 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_111_37833"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_111_37833" result="shape"/>
                </filter>
            </defs>
        </svg>
    );
}

export default memo(BookingIllustration);
