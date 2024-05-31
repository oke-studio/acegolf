'use client';

import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';

export const MenuBackground = () => {
	// const isMobile = useMediaQuery('(max-width:640px)');

	//   if (isMobile) {
	//     return (
	//       <svg
	//         width="391"
	//         height="2927"
	//         viewBox="0 0 391 2927"
	//         fill="none"
	//         xmlns="http://www.w3.org/2000/svg"
	//       >
	//         <path
	//           d="M-56.276 19.3418L57.6 96.2043L33.7025 132.053L-40.508 81.9598L-65.7092 119.78L2.16847 165.6L-19.7718 198.537L-87.6495 152.717L-114.133 192.485L-39.9226 242.579L-63.651 278.198L-177.527 201.336L-56.2973 19.365L-56.276 19.3418Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M139.019 188.815L93.2052 143.6L123.695 112.396L248.984 236.051L218.494 267.256L172.911 222.256L50.739 347.305L16.8474 313.864L139.019 188.815Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M190.586 368.931L155.56 314.874L192.08 291.065L287.879 438.974L251.358 462.783L216.497 408.966L70.1757 504.368L44.2668 464.378L190.588 368.976L190.586 368.931Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M252.391 571.31L335.963 441.163L359.069 489.825L301.545 575.273L301.932 576.065L404.141 584.704L426.109 630.966L273.117 614.26L194.451 651.761L174.01 608.689L252.436 571.309L252.391 571.31Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M328.132 682.578L356.012 763.565L322.005 775.29L294.125 694.303L328.132 682.578Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M404.031 992.75C339.335 1004.73 287.796 964.602 274.814 895.193L262.903 831.566L477.416 791.797L489.327 855.425C502.477 925.722 468.44 980.797 404.031 992.75ZM317.731 889.329C325.259 929.524 353.675 952.686 394.81 945.073C436.52 937.349 454.388 905.608 446.86 865.413L443.402 846.894L314.296 870.832L317.754 889.351L317.731 889.329Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M472.692 1018.02L475.1 1155.66L432.09 1156.27L430.542 1066.56L385.195 1067.18L386.624 1149.24L347.129 1149.77L345.699 1067.71L297.994 1068.37L299.543 1158.08L256.821 1158.66L254.412 1021.02L472.692 1018.02Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M292.864 1264.11C301.052 1203.82 352.992 1158.6 421.132 1168.18C489.271 1177.76 527.23 1235.68 519.042 1295.97C515.652 1321.02 506.367 1339.32 496.147 1353.6L449.183 1346.98C463.172 1331.14 471.657 1316.31 474.604 1294.77C479.622 1257.75 456.69 1222.18 414.629 1216.26C372.881 1210.38 340.724 1238.22 335.704 1275.19C332.78 1296.75 337.883 1313.49 347.42 1332.65L299.852 1325.94C293.584 1309.02 289.473 1289.16 292.864 1264.11Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M449.782 1382.43L411.093 1514.32L369.827 1501.96L395.051 1416L351.533 1402.95L328.474 1481.58L290.586 1470.21L313.645 1391.58L267.898 1377.87L242.674 1463.83L201.679 1451.55L240.368 1319.66L449.76 1382.46L449.782 1382.43Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M142.597 1684.85L159.31 1642.85L327.695 1605.95L327.818 1605.68L195.476 1552.03L212.411 1509.46L415.143 1591.63L397.983 1634.72L232.071 1671.69L231.948 1671.96L362.142 1724.73L345.306 1766.99L142.574 1684.82L142.597 1684.85Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M267.632 1843.24L276.487 1779.48L319.674 1785.72L295.393 1960.13L252.207 1953.9L261.05 1890.43L88.0351 1865.46L94.5959 1818.3L267.611 1843.27L267.632 1843.24Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M203.571 2052.08L190.085 2185.74L146.717 2181.14L155.376 2095.14L100.943 2089.4L92.7931 2170.14L52.041 2165.84L60.1913 2085.09L-18.4069 2076.78L-13.6028 2029.1L203.569 2052.03L203.571 2052.08Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M169.158 2302.4C181.533 2365.34 143.901 2422.44 79.0311 2435.12C14.161 2447.81 -42.3338 2409.04 -54.7312 2346.08C-67.1835 2282.85 -29.8736 2225.49 35.3077 2212.79C100.18 2200.15 156.784 2239.46 169.203 2302.39L169.158 2302.4ZM69.6553 2387.48C113.558 2378.91 132.472 2343.15 126.095 2310.79C119.629 2277.88 88.5635 2251.86 44.6604 2260.42C0.4478 2269.04 -18.443 2304.82 -11.9557 2337.71C-5.60131 2370.05 25.729 2396.02 69.6766 2387.45L69.6553 2387.48Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M237.122 2566.79C252.014 2629.19 216.711 2687.78 152.409 2703.07C88.1074 2718.35 30.1005 2681.91 15.1877 2619.53C0.218325 2556.84 35.1784 2498.02 99.7664 2482.66C164.068 2467.38 222.208 2504.37 237.099 2566.77L237.122 2566.79ZM141.135 2655.84C184.658 2645.5 202.118 2608.99 194.438 2576.92C186.647 2544.28 154.563 2519.54 111.04 2529.88C67.2316 2540.3 49.7715 2576.82 57.584 2609.44C65.2406 2641.48 97.5896 2666.16 141.112 2655.82L141.135 2655.84Z"
	//           fill="#F0E68C"
	//         />
	//         <path
	//           d="M356.224 2877.86C308.874 2923.64 243.939 2918.54 195.159 2867.58L150.425 2820.85L307.478 2669.02L352.212 2715.74C401.618 2767.32 403.399 2832.24 356.236 2877.83L356.224 2877.86ZM227.726 2838.96C255.995 2868.48 292.339 2872.15 322.468 2843.06C352.983 2813.54 350.507 2777.11 322.267 2747.6L309.263 2734.01L214.75 2825.38L227.755 2838.97L227.726 2838.96Z"
	//           fill="#F0E68C"
	//         />
	//       </svg>
	//     );
	//   }

	return (
		<Box
			sx={{
				display: 'flex',
				// height: '100%',
				position: 'absolute',
				alignItems: 'end',
				width: '100%',
				top: 0,
				zIndex: 1,
				// overflowX: 'hidden',
			}}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 1441 3552"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				overflow="hidden"
			>
				<path
					d="M37.6931 -121L109.97 -94.4945C177.333 -69.8133 204.277 -21.4438 184.704 31.7471C166.228 81.9634 114.512 109.005 47.8068 84.5726L25.7957 76.4831L-0.0292816 146.627L-53.6055 127L37.6931 -121ZM67.8621 37.1753C95.4667 47.3067 120.233 39.79 129.767 13.8599C139.301 -12.0702 124.936 -32.8235 97.0217 -43.0413L73.0454 -51.8225L43.5458 28.2853L67.8397 37.2061L67.8621 37.1753Z"
					fill="#F0E68C"
				/>
				<path
					d="M386.29 -21.099L442.774 39.3487C485.847 85.4678 490.398 135.349 450.434 173.369C427.639 195.058 390.532 207.617 347.039 180.292L330.185 305.182L283.24 254.98L302.952 140.423L301.281 138.624L234.168 202.453L195.143 160.688L386.29 -21.099ZM349.427 124.791C370.507 147.325 391.72 149.862 408.656 133.784C426.086 117.22 423.085 95.3849 403.697 74.6184L387.173 56.955L333.639 107.907L349.457 124.813L349.427 124.791Z"
					fill="#F0E68C"
				/>
				<path
					d="M545.425 151.435L691.005 226.433L667.225 272.74L572.353 223.861L547.278 272.712L634.054 317.422L612.225 359.966L525.449 315.256L499.101 366.621L593.973 415.501L570.364 461.509L424.784 386.51L545.402 151.466L545.425 151.435Z"
					fill="#F0E68C"
				/>
				<path
					d="M799.997 325.004L739.566 277.77L771.798 236.038L937.061 365.213L904.828 406.946L844.7 359.936L715.545 527.173L670.842 492.24L799.997 325.004Z"
					fill="#F0E68C"
				/>
				<path
					d="M884.849 532.417L836.109 473.043L876.485 439.251L1009.8 601.715L969.422 635.507L920.91 576.395L759.144 711.796L723.091 667.871L884.857 532.47L884.849 532.417Z"
					fill="#F0E68C"
				/>
				<path
					d="M984.789 764.899L1067.33 597.254L1101.17 651.941L1043.82 762.4L1044.39 763.288L1167.19 758.566L1199.37 810.556L1015.06 813.118L926.291 869.453L896.346 821.046L984.842 764.891L984.789 764.899Z"
					fill="#F0E68C"
				/>
				<path
					d="M1089.45 886.577L1133.19 979.148L1094.23 998.146L1050.49 905.575L1089.45 886.577Z"
					fill="#F0E68C"
				/>
				<path
					d="M1220.21 1245.66C1144.75 1269.48 1078.17 1229.15 1053.67 1148.21L1031.2 1074.02L1281.4 994.992L1303.87 1069.19C1328.68 1151.17 1295.33 1221.92 1220.21 1245.66ZM1104 1134.9C1118.2 1181.77 1155.05 1205.24 1203.02 1190.1C1251.67 1174.75 1268.81 1134.23 1254.61 1087.36L1248.08 1065.76L1097.5 1113.33L1104.03 1134.92L1104 1134.9Z"
					fill="#F0E68C"
				/>
				<path
					d="M1305.24 1265.72L1326.04 1429.66L1274.92 1436.71L1261.39 1329.86L1207.48 1337.27L1219.87 1435.01L1172.92 1441.45L1160.53 1343.71L1103.83 1351.52L1117.36 1458.38L1066.57 1465.35L1045.78 1301.41L1305.24 1265.72Z"
					fill="#F0E68C"
				/>
				<path
					d="M1123.22 1585.92C1125.11 1512.75 1181.06 1451.14 1263.42 1452.55C1345.79 1453.96 1398.52 1517.51 1396.63 1590.68C1395.86 1621.08 1387.19 1644.29 1376.88 1662.84L1320.11 1661.85C1334.7 1640.88 1342.87 1621.93 1343.57 1595.78C1344.72 1550.86 1312.79 1511.77 1261.94 1510.89C1211.48 1510.01 1176.82 1547.97 1175.66 1592.84C1174.99 1619.01 1183.24 1638.24 1197.09 1659.7L1139.59 1658.7C1129.93 1639.42 1122.44 1616.32 1123.22 1585.92Z"
					fill="#F0E68C"
				/>
				<path
					d="M1325.44 1704.08L1296.56 1867.2L1245.82 1858.51L1264.65 1752.19L1211.15 1743.02L1193.94 1840.27L1147.35 1832.27L1164.56 1735.02L1108.31 1725.39L1089.48 1831.71L1039.08 1823.07L1067.96 1659.95L1325.42 1704.11L1325.44 1704.08Z"
					fill="#F0E68C"
				/>
				<path
					d="M999.132 2110.24L1013.56 2057.66L1209.21 1988.84L1209.32 1988.5L1044.78 1943.92L1059.4 1890.63L1311.45 1958.89L1296.64 2012.84L1103.94 2081.38L1103.83 2081.72L1265.69 2125.55L1251.15 2178.48L999.102 2110.22L999.132 2110.24Z"
					fill="#F0E68C"
				/>
				<path
					d="M1168.62 2280.92L1170.85 2203.51L1223.08 2204.6L1216.89 2416.37L1164.67 2415.28L1166.93 2338.22L957.704 2333.86L959.372 2276.6L1168.6 2280.96L1168.62 2280.92Z"
					fill="#F0E68C"
				/>
				<path
					d="M1119.56 2539.63L1120.91 2701.15L1068.69 2702.05L1067.79 2598.12L1002.24 2599.27L1003.06 2696.85L953.981 2697.71L953.166 2600.13L858.514 2601.77L858.022 2544.14L1119.55 2539.57L1119.56 2539.63Z"
					fill="#F0E68C"
				/>
				<path
					d="M1111.2 2843.48C1134.13 2916.79 1096.77 2990.49 1021.19 3015.18C945.617 3039.86 873.31 3001.89 850.35 2928.56C827.289 2854.92 864.234 2780.96 940.178 2756.22C1015.76 2731.59 1088.27 2770.18 1111.25 2843.48L1111.2 2843.48ZM1003.82 2959.68C1054.97 2943 1072.83 2897.53 1061.02 2859.84C1049.04 2821.51 1008.67 2795.01 957.516 2811.69C906.004 2828.48 888.176 2873.97 900.184 2912.28C911.961 2949.95 952.642 2976.33 1003.85 2959.65L1003.82 2959.68Z"
					fill="#F0E68C"
				/>
				<path
					d="M1226.55 3149.09C1252.4 3221.39 1218.01 3296.51 1143.45 3324.22C1068.89 3351.92 995.087 3316.96 969.208 3244.69C943.221 3172.06 977.178 3096.7 1052.07 3068.87C1126.63 3041.17 1200.66 3076.77 1226.52 3149.07L1226.55 3149.09ZM1123.88 3269.5C1174.34 3250.76 1190.37 3204.61 1177.05 3167.46C1163.52 3129.64 1122.11 3104.84 1071.64 3123.58C1020.84 3142.46 1004.81 3188.61 1018.36 3226.4C1031.65 3263.53 1073.38 3288.23 1123.85 3269.48L1123.88 3269.5Z"
					fill="#F0E68C"
				/>
				<path
					d="M1408.86 3502.88C1358.45 3564.5 1280.48 3567.96 1215.77 3514.3L1156.43 3465.11L1323.62 3260.76L1382.96 3309.95C1448.5 3364.26 1459.08 3441.49 1408.87 3502.85L1408.86 3502.88ZM1250.81 3475.35C1288.31 3506.43 1332.06 3505.47 1364.14 3466.3C1396.62 3426.59 1388.93 3383.46 1351.46 3352.39L1334.21 3338.08L1233.6 3461.05L1250.85 3475.36L1250.81 3475.35Z"
					fill="#F0E68C"
				/>
			</svg>
		</Box>
	);
};