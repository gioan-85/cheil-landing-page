import "./css/style.scss";
jQuery(document).ready(function (e) {
    var products = [{
        name: 'Tủ lạnh<br>Bespoke',
        path: 'tulanh-bespoke.png',
        id: 'tulanh-bespoke',
        sub: [{
            name: 'Tủ lạnh BESPOKE 1 Cửa 323L Trắng',
            id: 'RZ32T744535/SV',
            path: 'tulanh/RZ32T744535.jpg',
            priceOld: '(Giá gốc 26.900.500 đ)',
            // priceNew: '24.899.103đ',
            priceNew: '200009.899.103đ',
            ctaBuyNow: '',
            ctaReadMore: 'http://samsung.com/vn/refrigerators/one-door/rr7000m-323l-white-rz32t744535-sv/'
        },
        {
            name: 'Tủ lạnh BESPOKE 2 Cửa <br>Ngăn Đông Dưới 339L Trắng/Xanh Navy',
            id: 'RB33T307029/SV',
            path: 'tulanh/RB33T307029.jpg',
            priceOld: '(Giá gốc 32.899.900 đ)',
            priceNew: '30.001.419đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/bottom-mount-freezer/rbf310g-3050-332l-blue-rb33t307029-sv/'
        },
        {
            name: 'Tủ lạnh BESPOKE 2 Cửa <br>Ngăn Đông Dưới 339L Trắng/Hồng',
            id: 'RB33T307055/SV',
            path: 'tulanh/RB33T307055.jpg',
            priceOld: '(Giá gốc 32.899.900 đ)',
            priceNew: '30.001.419đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/bottom-mount-freezer/rbf310g3050-332l-pink-rb33t307055-sv/'
        },
        {
            name: 'Tủ lạnh BESPOKE Multidoor 599L Trắng/Xanh Navy',
            id: 'RF60A91R177/SV',
            path: 'tulanh/RF60A91R177.jpg',
            priceOld: '(Giá gốc 82.900.400 đ)',
            priceNew: '78.896.311đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/french-door/rf9000ac-605l-white-rf60a91r177-sv/'
        }
        ]
    },
    {
        name: 'Tủ lạnh<br>Multidoor',
        path: 'tulanh-multidoor.png',
        id: 'tulanh-multidoor',
        sub: [{
            name: 'Tủ lạnh Multidoor 488L',
            id: 'RF48A4000B4/SV',
            path: 'tulanh/RF48A4000B4.jpg',
            priceOld: '(Giá gốc 22.990.000 đ)',
            priceNew: '20.989.870đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/multi-door/rf4000tm-488l-black-rf48a4000b4-sv/'
        },
        {
            name: 'Tủ lạnh Multidoor 488L',
            id: 'RF48A4010M9/SV',
            path: 'tulanh/RF48A4010M9.jpg',
            priceOld: '(Giá gốc 27.900.400 đ)',
            priceNew: '23.489.347đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/multi-door/rf4000tm-488l-silver-rf48a4010m9-sv/'
        },
        {
            name: 'Tủ lạnh Multidoor 488L',
            id: 'RF48A4010B4/SV',
            path: 'tulanh/RF48A4010B4.jpg',
            priceOld: '(Giá gốc 29.900.200 đ)',
            priceNew: '24.990.587đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/multi-door/rf4000tm-488l-black-rf48a4010b4-sv/'
        }
        ]
    },
    {
        name: 'Tủ lạnh<br>Side by Side',
        path: 'tulanh-sidebyside.png',
        id: 'tulanh-sidebyside',
        sub: [{
            name: 'Tủ lạnh Side by Side 680L',
            id: 'RS62R5001M9/SV',
            path: 'tulanh/RS62R5001M9_SV.jpg',
            priceOld: '(Giá gốc 23.899.700 đ)',
            priceNew: '19.900.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/side-by-side/680l-gentle-silver-matt-rs62r5001m9-sv/'
        },
        {
            name: 'Tủ lạnh Side by Side 680L',
            id: 'RS62R5001B4/SV',
            path: 'tulanh/RS62R5001B4_SV.jpg',
            priceOld: '(Giá gốc 25.899.500 đ)',
            priceNew: '21.900.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/side-by-side/680l-gentle-black-matt-rs62r5001b4-sv/'
        },
        {
            name: 'Tủ lạnh Side by Side 680L',
            id: 'RS64R5301B4/SV',
            path: 'tulanh/RS64R5301B4_SV.jpg',
            priceOld: '(Giá gốc 39.900.300 đ)',
            priceNew: '36.900.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/side-by-side/617l-gentle-black-matt-rs64r5301b4-sv/'
        },
        {
            name: 'Tủ lạnh Side by Side 680L',
            id: 'RS64R53012C/SV',
            path: 'tulanh/RS64R53012C.jpg',
            priceOld: '(Giá gốc 44.899.800 đ)',
            priceNew: '37.899.921đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/side-by-side/617l-all-black-glass-rs64r53012c-sv/'
        }
        ]
    },
    {
        name: 'Tủ lạnh 2 cửa<br>ngăn đông dưới',
        path: 'tulanh-haicua.png',
        id: 'tulanh-ngandongduoi',
        sub: [{
            name: 'Tủ lạnh hai cửa Ngăn&nbsp;Đông Dưới 313L',
            id: 'RB30N4170BU/SV',
            path: 'tulanh/RB30N4170BU_SV.jpg',
            priceOld: '(Giá gốc 16.490.100 đ)',
            priceNew: '14.090.790đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/bottom-mount-freezer/307l-starry-black-rb30n4170bu-sv/'
        },
        {
            name: 'Tủ lạnh hai cửa Ngăn&nbsp;Đông Dưới 315L',
            id: 'RB30N4010BU/SV',
            path: 'tulanh/RB30N4010BU_SV.jpg',
            priceOld: '(Giá gốc 15.790.500 đ)',
            priceNew: '13.189.805đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/bottom-mount-freezer/307l-starry-black-rb30n4010bu-sv/'
        },
        {
            name: 'Tủ lạnh hai cửa Ngăn&nbsp;Đông Dưới 310L',
            id: 'RB30N4010S8/SV',
            path: 'tulanh/RB30N4010S8_SV.jpg',
            priceOld: '(Giá gốc 15.189.900 đ)',
            priceNew: '12.189.895đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/bottom-mount-freezer/310l-elegant-inox-rb30n4010s8-sv/'
        },
        {
            name: 'Tủ lạnh hai cửa Ngăn&nbsp;Đông Dưới 285L',
            id: 'RB27N4010BU/SV',
            path: 'tulanh/RB27N4010BU.jpg',
            priceOld: '(Giá gốc 12.290.300 đ)',
            priceNew: '10.390.220đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/bottom-mount-freezer/280l-starry-black-rb27n4010bu-sv/'
        }
        ]
    },
    {
        name: 'Tủ lạnh 2 cửa<br>ngăn đông trên',
        path: 'tulanh-haicua-ngandongtren.png',
        id: 'tulanh-ngandongtren',
        sub: [{
            name: 'Tủ lạnh hai cửa <br>Digital Inverter 216L',
            id: 'RT19M300BGS/SV',
            path: 'tulanh/RT19M300BGS_SV.jpg',
            priceOld: '(Giá gốc 6.790.300 đ)',
            priceNew: '5.990.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/top-mount-freezer/220l-gray-silver-rt19m300bgs-sv/'
        },
        {
            name: 'Tủ lạnh hai cửa <br>Digital Inverter 216L',
            id: 'RT20HAR8DBU/SV',
            path: 'tulanh/RT20HAR8DBU_SV.jpg',
            priceOld: '(Giá gốc 8.289.600 đ)',
            priceNew: '6.790.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/top-mount-freezer/top-mount-freezer-rt20har8dbu-rt20har8dbu-sv/'
        },
        {
            name: 'Tủ lạnh hai cửa <br>Twin Cooling Plus 308L',
            id: 'RT29K5532BU/SV',
            path: 'tulanh/RT29K5532BU_SV.jpg',
            priceOld: '(Giá gốc 12.390.400 đ)',
            priceNew: '11.490.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/top-mount-freezer/290l-starry-black-rt29k5532bu-sv/'
        },
        {
            name: 'Tủ lạnh hai cửa <br>Twin Cooling Plus 327L',
            id: 'RT32K5932BY/SV',
            path: 'tulanh/RT32K5932BY_SV.jpg',
            priceOld: '(Giá gốc 14.390.200 đ)',
            priceNew: '12.090.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/refrigerators/top-mount-freezer/320l-starry-brown-rt32k5932by-sv/'
        }
        ]
    },
    {
        name: 'Máy sấy',
        path: 'maysay.png',
        id: 'maysay',
        sub: [{
            name: 'Máy sấy bơm nhiệt <br>Samsung Heatpump 9kg',
            id: 'DV90TA240AE/SV',
            path: 'maygiat/DV90TA240AE.jpg',
            priceOld: '(Giá gốc 18.990.400 đ)',
            priceNew: '18.489.053đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/dryers/dv5000t-front-loading-reversible-door-wrinkle-prevent-optimaldry-9kg-white-dv90ta240ae-sv/'
        },
        {
            name: 'Máy sấy bơm nhiệt <br>Samsung Heatpump 9kg',
            id: 'DV90TA240AX/SV',
            path: 'maygiat/DV90TA240AX.jpg',
            priceOld: '(Giá gốc 19.690.000 đ)',
            priceNew: '19.189.874đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/dryers/dv5000t-front-loading-reversible-door-wrinkle-prevent-optimaldry-9kg-platinum-silver-dv90ta240ax-sv/'
        },
        {
            name: 'Máy sấy thông minh <br>Samsung AI Heatpump 9kg',
            id: 'DV90T7240BH/SV',
            path: 'maygiat/DV90T7240BH.jpg',
            priceOld: '(Giá gốc 25.089.900 đ)',
            priceNew: '20.490.921đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/dryers/dv7000t-front-loading-ai-control-super-speed-hygiene-care-9kg-white-dv90t7240bh-sv/'
        },
        {
            name: 'Máy sấy thông minh <br>Samsung AI Heatpump 9kg',
            id: 'DV90T7240BB/SV',
            path: 'maygiat/DV90T7240BB.jpg',
            priceOld: '(Giá gốc 26.590.300 đ)',
            priceNew: '20.689.912đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/dryers/dv7000t-front-loading-ai-control-super-speed-hygiene-care-9kg-black-dv90t7240bb-sv/'
        }
        ]
    },
    {
        name: 'Máy giặt<br>cửa trước',
        path: 'maygiat.png',
        id: 'maygiat',
        sub: [{
            name: 'Máy giặt cửa trước <br>Digital Inverter 8kg',
            id: 'WW80T3020WW/SV',
            path: 'maygiat/WW80T3020WW_SV.jpg',
            priceOld: '(Giá gốc 10.090.000 đ)',
            priceNew: '6.690.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washing-machines/front-load-8kg-white-ww80t3020ww-sv/'
        },
        {
            name: 'Máy giặt cửa trước <br>Digital Inverter 8,5kg',
            id: 'WW85T4040CE/SV',
            path: 'maygiat/WW85T4040CE_SV.jpg',
            priceOld: '(Giá gốc 10.640.000 đ)',
            priceNew: '8.500.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washing-machines/ww4000t-front-loading-hygiene-steam-digital-inverter-technology-drum-clean-8-5kg-white-ww85t4040ce-sv/'
        },
        {
            name: 'Máy giặt thông minh <br>AI EcoBubble™ 9kg',
            id: 'WW90T634DLE/SV',
            path: 'maygiat/WW90T634DLE_SV.jpg',
            priceOld: '(Giá gốc 12.990.000 đ)',
            priceNew: '10.690.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washing-machines/ww6300t-front-loading-eco-bubble-ai-control-auto-dispense-9kg-white-ww90t634dle-sv/'
        },
        {
            name: 'Máy giặt thông minh <br>AI EcoBubble™ 10kg',
            id: 'WW10T634DLX/SV',
            path: 'maygiat/WW10T634DLX_SV.jpg',
            priceOld: '(Giá gốc 16.090.000 đ)',
            priceNew: '14.590.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washing-machines/ww6300t-front-loading-eco-bubble-ai-control-auto-dispense-10kg-platinum-silver-ww10t634dlx-sv/'
        }
        ]
    },
    {
        name: 'Máy giặt<br>kèm sấy',
        path: 'maygiatsay.png',
        id: 'maygiatsay',
        sub: [{
            name: 'Máy giặt sấy 9,5kg',
            id: 'WD95T4046CE/SV',
            path: 'maygiat/WD95T4046CE_SV.jpg',
            priceOld: '(Giá gốc 15.290.000 đ)',
            priceNew: '12.990.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washer-dryer-combo/wd4000t-front-loading-air-wash-drum-clean-bubble-soak-9-5kg-white-wd95t4046ce-sv/'
        },
        {
            name: 'Máy giặt sấy thông minh <br>AI EcoBubble™ 9,5kg',
            id: 'WD95T754DBX/SV',
            path: 'maygiat/WD95T754DBX_SV.jpg',
            priceOld: '(Giá gốc 17.790.000 đ)',
            priceNew: '15.590.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washer-dryer-combo/wd7500t-front-loading-eco-bubble-quickdrive-ai-control-9-5kg-gray-wd95t754dbx-sv/'
        },
        {
            name: 'Máy giặt sấy thông minh <br>AI EcoBubble™ 11kg',
            id: 'WD11T734DBX/SV',
            path: 'maygiat/WD11T734DBX_SV.jpg',
            priceOld: '(Giá gốc 22.800.000 đ)',
            priceNew: '20.090.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washer-dryer-combo/wd7300t-front-loading-11kg-gray-wd11t734dbx-sv/'
        },
        {
            name: 'Máy giặt sấy <br>Addwash 10.5kg',
            id: 'WD10N64FR2X/SV',
            path: 'maygiat/WD10N64FR2X_SV.jpg',
            priceOld: '(Giá gốc 28.590.100 đ)',
            priceNew: '28.590.100đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washer-dryer-combo/front-load-10-5kg-plus-7kg-inox-wd10n64fr2x-sv/'
        }
        ]
    },
    {
        name: 'Máy giặt<br>cửa trên',
        path: 'maygiat-cuatren.png',
        id: 'maygiat-cuatren',
        sub: [{
            name: 'Máy giặt cửa trên <br>Digital Inverter 8.5kg',
            id: 'WA85T5160BY/SV',
            path: 'maygiat/WA85T5160BY.jpg',
            priceOld: '(Giá gốc 9.579.900 đ)',
            priceNew: '7.389.935đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washing-machines/top-load-8-5kg-gray-wa85t5160by-sv/'
        },
        {
            name: 'Máy giặt cửa trên <br>Digital Inverter 9kg',
            id: 'WA90T5260BY/SV',
            path: 'maygiat/WA90T5260BY.jpg',
            priceOld: '(Giá gốc 9.964.900 đ)',
            priceNew: '7.550.405đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washing-machines/top-load-9kg-gray-wa90t5260by-sv/'
        },
        {
            name: 'Máy giặt cửa trên <br>Digital Inverter 11kg',
            id: 'WA11T5260BV/SV',
            path: 'maygiat/WA11T5260BV.jpg',
            priceOld: '(Giá gốc 14.474.900 đ)',
            priceNew: '9.630.151đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washing-machines/wa5700js-top-loading-dit-wobble-technology-magic-dispenser-11kg-black-wa11t5260bv-sv/'
        },
        {
            name: 'Máy Giặt Cửa Trên <br>Digital Inverter 16kg',
            id: 'WA16R6380BV/SV',
            path: 'maygiat/WA16R6380BV.jpg',
            priceOld: '(Giá gốc 15.989.600 đ)',
            priceNew: '13.690.296đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/washing-machines/top-load-16kg-black-caviar-wa16r6380bv-sv/'
        }
        ]
    },
    {
        name: 'Tủ chăm sóc<br>quần áo',
        path: 'tuchamsoc-quanao.png',
        id: 'tuchamsoc-quanao',
        sub: [{
            name: 'Tủ Chăm Sóc Quần Áo Thông&nbsp;Minh',
            id: 'DF60R8600CG/SV',
            path: 'maygiat/DF60R8600CG_SV.jpg',
            priceOld: '(Giá gốc 42.990.000 đ)',
            priceNew: '37.090.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/washers-and-dryers/airdresser/airdresser-with-3-jacket-and-3-pants-capacity-crystal-mirror-df60r8600cg-sv/'
        }]
    },
    {
        name: 'Máy lọc<br>không khí',
        path: 'mayloc-khongkhi.png',
        id: 'mayloc-khongkhi',
        sub: [{
            name: 'Bộ Lọc Máy Lọc Không Khí',
            id: 'CFX-D100/GB',
            path: 'maygiat/CFX-D100_GB.jpg',
            priceOld: '(Giá gốc 1.989.900 đ)',
            priceNew: '1.830.708đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/air-conditioners/air-purifier-filter-cfx-d100/CFX-D100GB/'
        },
        {
            name: 'Máy lọc không khí 34m2',
            id: 'AX34R3020WW/SV',
            path: 'maygiat/AX34R3020WW_SV.jpg',
            priceOld: '(Giá gốc 5.289.900 đ)',
            priceNew: '4.866.708đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/air-care/air-purifier/air-purifier-ax34r3020ww/'
        },
        {
            name: 'Máy lọc không khí 40m2',
            id: 'AX40R3030WM/SV',
            path: 'maygiat/AX40R3030WM_SV.jpg',
            priceOld: '(Giá gốc 6.890.400 đ)',
            priceNew: '6.339.168đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/air-care/air-purifier/air-purifier-ax40r3030wm/'
        },
        {
            name: 'Máy lọc không khí 60m2',
            id: 'AX60R5080WD/SV',
            path: 'maygiat/AX60R5080WD_SV.jpg',
            priceOld: '(Giá gốc 10.190.400 đ)',
            priceNew: '9.375.168đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/air-care/air-purifier/air-purifier-ax60r5080wdsv/'
        }
        ]
    },
    {
        name: 'Lò vi sóng',
        path: 'lovisong.png',
        id: 'lovisong',
        sub: [{
            name: 'Lò vi sóng tráng men <br>Dòng nướng',
            id: 'MG23K3515AS/SV',
            path: 'diengiadung/MG23K3515AS_SV.jpg',
            priceOld: '(Giá gốc 2.989.800 đ)',
            priceNew: '2.590.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/microwave-ovens/grill/microwave-oven-grill-mg23k3515as/'
        },
        {
            name: 'Lò vi sóng tráng men <br>Dòng nướng',
            id: 'MG23K3575AS/SV',
            path: 'diengiadung/MG23K3575AS_SV.jpg',
            priceOld: '(Giá gốc 3.250.500 đ)',
            priceNew: '2.990.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/microwave-ovens/grill/microwave-oven-grill-mg23k3575as/'
        },
        {
            name: 'Lò vi sóng tráng men <br>dòng nướng 23L',
            id: 'RB33T307055/SV',
            path: 'diengiadung/MG23T5018CK_SV.jpg',
            priceOld: '(Giá gốc 3.989.700 đ)',
            priceNew: '3.650.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/microwave-ovens/grill/microwaves-oven-grill-mg23t5018ck/'
        },
        {
            name: 'Lò vi sóng tráng men <br>dòng nướng 30L',
            id: 'MG30T5018CK/SV',
            path: 'diengiadung/MG30T5018CK_SV.jpg',
            priceOld: '(Giá gốc 4.390.100 đ)',
            priceNew: '4.000.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/microwave-ovens/grill/microwave-oven-grill-mg30t5018ck/'
        }
        ]
    },
    {
        name: 'Robot hút bụi',
        path: 'robot-hutbui.png',
        id: 'robot-hutbui',
        sub: [{
            name: 'Robot hút bụi vượt trội Jet Bot+',
            id: 'VR30T85513W/SV',
            path: 'diengiadung/VR30T85513W_SV.jpg',
            priceOld: '(Giá gốc 19.990.300 đ)',
            priceNew: '17.990.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/robot/vr8500t-white-vr30t85513w-sv/'
        },
        {
            name: 'Robot hút bụi, lau nhà Powerbot-E',
            id: 'VR05R5050WK/SV',
            path: 'diengiadung/VR05R5050WK.jpg',
            priceOld: '(Giá gốc 7.890.000 đ)',
            priceNew: '7.495.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/robot/vr5000rm-slim-design-wi-fi-control-ez-empty-dustbin-black-vr05r5050wk-sv/'
        }
        ]
    },
    {
        name: 'Máy hút bụi<br>không dây',
        path: 'mayhutbui-khongday.png',
        id: 'mayhutbui-khongday',
        sub: [{
            name: 'Máy hút bụi không dây 3 trong 1',
            id: 'VS03R6523J1/SV',
            path: 'diengiadung/VS03R6523J1_SV.jpg',
            priceOld: '(Giá gốc 5.989.500 đ',
            priceNew: '5.390.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/stick/stick-handy-vs03r6523j1/'
        },
        {
            name: 'Máy hút bụi không dây hiệu suất cao Jet 60 Turbo',
            id: 'VS15A6031R1/SV',
            path: 'diengiadung/VS15A6031R1_SV.jpg',
            priceOld: '(Giá gốc 7.990.400 đ)',
            priceNew: '7.200.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/stick/jet60-vs6700-mint-vs15a6031r1-sv/'
        },
        {
            name: 'Máy hút bụi không dây <br>Jet 90E multi',
            id: 'VS15R8544S1/SV',
            path: 'diengiadung/VS15R8544S1_SV.jpg',
            priceOld: '(Giá gốc 12.989.900 đ)',
            priceNew: '11.041.415đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/stick/stick-handy-vs15r8544s1/'
        }
        ]
    },
    {
        name: 'Máy hút bụi<br>dạng hộp',
        path: 'mayhutbui-danghop.png',
        id: 'mayhutbui-danghop',
        sub: [{
            name: 'Máy hút bụi dạng hộp',
            id: 'VC18M2120SB/SV',
            path: 'diengiadung/VC18M2120SB_SV.jpg',
            priceOld: '(Giá gốc 1.989.900 đ)',
            priceNew: '1.790.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/canister/canister-sc18m2120sb/'
        },
        {
            name: 'Máy hút bụi dạng hộp',
            id: 'VC18M3110VB/SV',
            path: 'diengiadung/VC18M3110VB_SV.jpg',
            priceOld: '(Giá gốc 2.290.200 đ)',
            priceNew: '2.040.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/canister/vitality-blue-vc18m3110vb-sv/'
        },
        {
            name: 'Máy hút bụi dạng hộp',
            id: 'VC18M21M0VN/SV',
            path: 'diengiadung/VC18M21M0VN_SV.jpg',
            priceOld: '(Giá gốc 2.290.200 đ)',
            priceNew: '2.150.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/canister/canister-sc18m21m0vn/'
        },
        {
            name: 'Máy hút bụi không dùng túi Rambo',
            id: 'VCC8835V37/XSV',
            path: 'diengiadung/VCC8835V37_XSV.jpg',
            priceOld: '(Giá gốc 3.290.100 đ)',
            priceNew: '2.950.000đ',
            ctaBuyNow: '/vn/bespoke/refrigerators/',
            ctaReadMore: 'https://www.samsung.com/vn/vacuum-cleaners/canister/canister-vcc8835v37/'
        }
        ]
    }
    ]

    var slick_setting = {
        // autoplay: true,
        // autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    let r = e("#firstName"),
        a = e("#lastName"),
        t = e("#dateOfBirth"),
        s = e("#email"),
        n = e("#phoneNumber");
    const o = ".form-submit__group";

    const imgPath = 'https://images.samsung.com/is/image/samsung/assets/vn/uu-dai-dang-ky/';
    const i = "https://vn-2022-da-gcdm-registration-campaign-11447-stg.azurewebsites.net/api/User/insertUser";

    function totalProducts() {
        let total = 0;
        products.forEach((e, i) => {
            if (e.sub.length)
                total += e.sub.length
        })
        return total;
    }

    function productPrice(callback) {
        let count = 0;
        let productCount = totalProducts();
        products.forEach((e, i) => {
            if (e.sub.length) {
                e.sub.forEach(async (element, index) => {
                    await $.ajax({
                        url: 'https://shop.samsung.com/vn/servicesv2/getSimpleProductsInfo?productCodes=' + element.id,
                        success: function (data, textStatus, jqXHR) {
                            count++;
                            if (jqXHR.readyState == 4 && jqXHR.responseJSON.resultCode == "0000") {
                                let data = jqXHR.responseJSON.productDatas[0];
                                element.priceNew = data.promotionPriceFormatted
                                element.priceOld = data.priceFormatted
                            } else {
                                element.priceNew = element.priceOld = '0 đ'
                            }

                            if (count >= productCount) {
                                callback();
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {

                        }
                    })
                })
            }
        })


    };

    function loadProducts(itemsInSlide) {
        var content = itemsInSlide == 0 ? '' : '<div class="slick-cover">'
        var subContent = '';
        $('.list-products').empty()
        products.forEach((e, i) => {
            content += `
                <div class="product-item" data-rel="${e.id}">
                    <img src="${imgPath}${e.path}" class="product-img" />
                    <div class="product-name">
                        <p>${e.name}</p>
                    </div>
                </div>
            `
            if (e.sub) {
                subContent += `<div class="sub-prod-content ${e.id}"><div class="sub-content">`;
                e.sub.forEach((element, index) => {
                    subContent += `
                        <div class="sub-prod-item">
                            <div class="sub-prod-img-cover">
                                <img src="${imgPath}${element.path}" />    
                            </div>
                            <div class="sub-prod-info">
                                <div>
                                <div class="sub-prod-name">${element.name}</div>
                                <div class="sub-prod-id">(${element.id})</div>
                                </div>
                                <div>
                                <div class="sub-prod-price">
                                    <div class="sub-prod-price--new">${element.priceNew}</div>
                                    <div class="sub-prod-price--old">(Giá gốc ${element.priceOld})</div>
                                </div>
                                <a href="javascript:void(0)" class="cta cta--black cta--contained btn--add2cart" data-productmodel="${element.id}" data-omni-type="microsite_buyOnline" data-omni="buy online:SShop|;${element.id}">
                                    Thêm vào giỏ hàng
                                </a>
                                <a href="${element.ctaReadMore}" target="_blank"><span class="cta cta--black cta--underline">Tìm hiểu thêm</span></a>
                                </div>
                            </div>
                        </div>
                    `
                })
                subContent += "</div></div>"
            }

            if (itemsInSlide != 0) {
                if (i > 0 && i % itemsInSlide == itemsInSlide - 1 && i != products.length - 1) {
                    $('.mo-list-sub-products').append(subContent)
                    content += `<div class="sub-product-wrapper">${subContent}</div></div><div class="slick-cover">`
                    subContent = ''
                }
            }

        })

        if (itemsInSlide != 0) {
            $('.mo-list-sub-products').append(subContent)
            content += `<div class="sub-product-wrapper">${subContent}</div></div>`
        }


        $('.list-products').append(content);

    }

    productPrice(function () {
        loadProducts(5);
        $('.product-item').click(function () {
            if ($(this).hasClass('actived'))
                return;

            slick_setting.autoplay = false

            $(this).parent('.slick-cover').find('.product-item').removeClass('actived')
            $(this).addClass('actived')

            if ($(window).width() <= 768) {
                $('.mo-list-sub-products .sub-prod-content').fadeOut(300)
            } else {
                $(this).parent('.slick-cover').find('.sub-prod-content').fadeOut(300)
            }

            $('.sub-prod-content.' + $(this).data('rel')).fadeIn(300)
        })
    });

    if ($(window).width() <= 768) {
        setTimeout(function () {
            $('.list-products').slick(slick_setting);
            $('.list-products').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                if (currentSlide != nextSlide) {
                    slick_setting.autoplay = false
                }
            });
        }, 500);
    }



    $(window).resize(function () {
        if ($(window).width() <= 768) {
            setTimeout(function () {
                $('.list-products').slick(slick_setting);
                $('.list-products').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
                    if (currentSlide != nextSlide) {
                        slick_setting.autoplay = false
                        $('.product-item').removeClass('actived')
                        $('.sub-prod-content').hide()
                    }
                });
            }, 500);
        } else {
            if ($('.list-products').hasClass('slick-initialized'))
                $('.list-products').slick('unslick');
        }
    });

    function isNumber(e) {
        var r = e.which ? e.which : event.keyCode;
        return !(r > 31 && (r < 48 || r > 57))
    }

    function validateEmail(e) {
        return /\S+@\S+\.\S+/.test(e)
    }

    function ValidateDate(dtValue) {
        return /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/.test(dtValue)
    }


    $('#hero-banner-cta').click(function (e) {
        e.preventDefault()
        var scrollElement = $(this).data('scroll')
        if (scrollElement) {
            $('body, html').animate({
                scrollTop: $('.' + scrollElement).position().top
            }, 500)
        }
    })

    r.on("focusout", function () {
        r.val() ? r.parents(o).removeClass("has-error") : r.parents(o).addClass("has-error")
    })

    a.on("focusout", function () {
        a.val() ? a.parents(o).removeClass("has-error") : a.parents(o).addClass("has-error")
    })

    s.on("focusout", function () {
        s.val() ? 0 == validateEmail(s.val()) ? s.parents(o).addClass("has-error").find(".form-submit__error span").text("Email không đúng định dạng") : s.parents(o).removeClass("has-error") : s.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập email")
    })

    t.on("focusout", function () {
        t.val() ? !ValidateDate(t.val()) ? t.parents(o).addClass('has-error').find(".form-submit__error span").text("Ngày sinh không đúng định dạng") : t.parents(o).removeClass("has-error") : t.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập ngày sinh")
    })

    $("#dateOfBirth").keyup(function () {
        e("#dateOfBirth").mask("00/00/0000")
    })

    n.on("focusout", function () {
        this.value.length;
        let e = n.val(),
            r = e.substring(0, 1),
            a = e.substring(0, 3);

        if (n.val()) {
            let t = n.val();
            if ("0" === r)
                e = e.substring(1, e.length);
            else {
                "840" === a && (e = e.substring(3, e.length)),
                    "84" === e.substring(0, 2) && (e = e.substring(2, e.length))
            }

            n.val("84" + e), (t = n.val()) ? n.parents(o).removeClass("has-error") : n.parents(o).addClass("has-error").find(".form-submit__error span").text("Số điện thoại không đúng định dạng")

        } else
            n.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập số điện thoại")
    })

    e("#policy").on("change", function () {
        e("#policy").is(":checked") ? e("#policy").parents(o).removeClass("has-error") : e("#policy").parents(o).addClass("has-error")
    })

    e("#receiveEmail").on("change", function () {
        e("#receiveEmail").is(":checked") ? e("#receiveEmail").parents(o).removeClass("has-error") : e("#receiveEmail").parents(o).addClass("has-error")
    })

    e("#jsSubmit").click(function (l) {
        l.preventDefault();



        var d = 0;
        let p = window.location.href;
        if (r.val() ? r.parents(o).removeClass("has-error") : (r.parents(o).addClass("has-error"), d++),
            a.val() ? a.parents(o).removeClass("has-error") : (a.parents(o).addClass("has-error"), d++),
            e("#policy").is(":checked") ? e("#policy").parents(o).removeClass("has-error") : (e("#policy").parents(o).addClass("has-error"), d++),
            e("#receiveEmail").is(":checked") ? e("#receiveEmail").parents(o).removeClass("has-error") : (e("#receiveEmail").parents(o).addClass("has-error"), d++),
            s.val() ? 0 == validateEmail(s.val()) ? (s.parents(o).addClass("has-error").find(".form-submit__error span").text("Email không đúng định dạng"), d++) : s.parents(o).removeClass("has-error") : (s.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập email"), d++),
            t.val() ? !ValidateDate(t.val()) ? (t.parents(o).addClass('has-error').find(".form-submit__error span").text("Ngày sinh không đúng định dạng"), d++) : t.parents(o).removeClass("has-error") : (t.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập ngày sinh"), d++),
            n.val()) {
            n.val();
            n.parents(o).removeClass("has-error")
        } else
            n.parents(o).addClass("has-error").find(".form-submit__error span").text("Vui lòng nhập số điện thoại"), d++;

        if (!t.val()) {
            let e = t.val();
            ValidateDate(e) || 0 == e.length ? (t.parents(o).addClass("has-error"), d++) : t.parents(o).removeClass("has-error")
        }

        if (d <= 0) {
            e("#jsSubmit").addClass("loading").prop("disabled", true)
            grecaptcha.ready(function () {
                grecaptcha.execute("6LeAhpoeAAAAAAqIILky8gTWxuItnvxVcw-owpg1", {
                    action: "submit"
                })
                    .then(function (r) {
                        ! function (r) {
                            (new Date).toISOString().split(".")[0], window.location.href;

                            $.ajax({
                                url: i,
                                method: "POST",
                                timeout: 5000,
                                headers: {
                                    "content-type": "application/json",
                                    "Access-Control-Allow-Origin": "*",
                                    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                                    "Access-Control-Allow-Headers": "*"
                                },
                                data: JSON.stringify({
                                    FormCode: r.FormCode,
                                    lastName: r.LastName,
                                    firstName: r.FirstName,
                                    email: r.Email,
                                    phoneNumber: r.phoneNumber,
                                    gender: r.gender,
                                    dateOfBirth: r.BirthDay,
                                    url: r.ReferrerUrl,
                                    medium: r.medium,
                                    gRecaptchaResponse: r.grecaptchaToken,
                                    product: r.product,
                                    priceRange: r.priceRange,

                                }),
                                success: function (data, textStatus, jqXHR) {
                                    if (jqXHR.status == 200) {
                                        var error_message = ''

                                        $("#jsSubmit").removeClass("loading").prop("disabled", !1)

                                        if (jqXHR.responseJSON == 'success') {
                                            $("#popupSuccess").fadeIn()
                                            document.getElementById("register").reset()
                                            general_tag()
                                            return
                                        }

                                        if (jqXHR.responseJSON == 'invalidToken' || jqXHR.responseJSON == 'invalidData') {
                                            error_message = "Có lỗi xảy ra, vui lòng thử lại!"
                                        }
                                        if (jqXHR.responseJSON == 'duplicateEmail') {
                                            error_message = "Email này đã được sử dụng, vui lòng kiểm tra lại thông tin!"
                                        }
                                        if (jqXHR.responseJSON == 'duplicatePhone') {
                                            error_message = "Số điện thoại này đã được sử dụng, vui lòng kiểm tra lại thông tin!"
                                        }

                                        void Swal.fire({
                                            icon: "error",
                                            text: error_message,
                                            confirmButtonText: "Đồng ý"
                                        })

                                    }
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    void Swal.fire({
                                        icon: "error",
                                        text: "Có lỗi xảy ra, vui lòng thử lại!",
                                        confirmButtonText: "Đồng ý"
                                    })

                                    e("#jsSubmit").removeClass("loading").prop("disabled", !1);
                                }
                            })

                        }({
                            FormCode: 'da_gcdm_registration',
                            FirstName: e("#firstName").val(),
                            LastName: e("#lastName").val(),
                            BirthDay: e("#dateOfBirth").val(),
                            Email: e("#email").val(),
                            phoneNumber: e("#phoneNumber").val(),
                            ReferrerUrl: window.location.href,
                            grecaptchaToken: r,
                            gender: '',
                            formCode: 'default',
                            product: e('#productName').val(),
                            priceRange: e('#productRange').val(),
                            medium: window.location.search.replace('?', '')
                        })
                    })

            })

        } else {
            e("#jsSubmit").remove("loading").prop("disabled", false)
        }
    }),

        e("#popupSuccess .close-button, #popupSuccess .dimmer, #popupSuccess .cta--close-pu").on("click", function (r) {
            r.preventDefault(), e("#popupSuccess").fadeOut()
        })


    $.fn.ssAddToCartHandler = function (configs) {
        try {
            let {
                sideCode,
                skus,
                callBack
            } = configs;
            if (skus.length == 0) throw "Skus can't not empty";
            let apiProductCodeUrl = function getProductCodeInfoApiUrl(productCode) {
                return "https://shop.samsung.com/" + sideCode + "/servicesv2/getSimpleProductsInfo?productCodes=" + productCode;
            };

            let apiAddToCartUrl = function getAddToCartApiUrl(productSkus) {
                let params = []
                productSkus.map(function (data, index) {
                    params.push('products[' + index + '].productCode=' + data.sku + '&products[' + index + '].quantity=' + data.qty);
                });

                return "https://shop.samsung.com/" + sideCode + "/ng/p4v1/addToCart?" + params.join('&');
            };

            return {
                _isInstock: true,
                isInStock: function () {
                    return this._isInstock;
                },
                checkStock: function () {
                    let $this = this;
                    let requestInfos = [];
                    skus.map(function (sku) {
                        requestInfos.push($.ajax({
                            method: "GET",
                            url: apiProductCodeUrl(sku.sku)
                        }));
                    });

                    return Promise.all(requestInfos).then(function (results) {
                        let isInStock = true;
                        results.map(function (res) {
                            if (typeof res.productDatas === "undefined" || res.productDatas.length === 0) {
                                isInStock = false;
                            }
                            res.productDatas.map(function (productData) {
                                if (productData.stockLevelStatus !== "inStock") {
                                    isInStock = false;
                                }
                            });
                            $this._isInstock = isInStock;
                        });
                        return $this._isInstock;
                    });
                },
                addToCart: function () {
                    let result = null;
                    if (this.isInStock()) {
                        result = $.ajax({
                            method: "GET",
                            url: apiAddToCartUrl(skus),
                            xhrFields: {
                                withCredentials: true
                            }
                        }).done((res) => {
                            if (typeof callBack !== "undefined") {
                                callBack(res);
                            }
                        });
                    }
                    return result;
                }
            }

        } catch (errors) {
            // console.log(errors);
        }
    }

    let allowAddToCart = true;

    $('.btn--add2cart').on('click', function (e) {
        e.preventDefault();
        let btn = $(this);

        let addToCartBtn = btn.ssAddToCartHandler({
            sideCode: 'vn',
            skus: [{
                sku: btn.attr('data-productmodel'),
                qty: 1
            }]
        });

        addToCartBtn.checkStock().then(function (res) {
            let btnLabel = 'Hết hàng';
            let classNameRemove = 'cta--disabled';

            if (res) {
                $(this).addClass('cta--disabled');
                addToCartBtn.addToCart().done(function (res) {
                    $(this).removeClass('cta--disabled');
                    window.location = 'https://shop.samsung.com/vn/cart';
                });
            } else {
                $(btn).text(btnLabel).addClass(classNameRemove);
            }
        });
    });
});
