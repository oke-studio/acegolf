"use client";

import * as React from "react";
import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
    Grid,
    Box,
    Grow,
    Collapse,
    useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";

import GolfLogo from "../../../public/images/ace-golf-golf-logo2.svg";
import GolfLogoRight from "../../../public/images/ace-golf-golf-logo-right.svg";
import GolfLogoLeft from "../../../public/images/ace-golf-golf-logo-left.svg";
import GolfLogoCentre from "../../../public/images/ace-golf-golf-logo-centre.svg";

const SidebarImages = [
    "/images/ace-golf-card.svg",
    "/images/ace-golf-bar-lounge.svg",
    "/images/ace-golf-full.svg",
];

const backgroundColor = "#529DC8";

const ComingSoonInfoBox = styled("div")({
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
    gap: "16px",
});

const RelativePositionWrapper = styled("div")({
    position: "relative",
});

const ComingSoonFormMobile = () => {};

const ComingSoonForm = () => {
    const [isSubmit, setIsSubmit] = React.useState(false);

    const handleSubmit = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        console.log("submitted");
        setIsSubmit(true);
    };
    return (
        <Box component="form" order={2}>
            <TextField
                fullWidth
                id="email form"
                type="email"
                placeholder="yourname@email.com"
                style={{ alignItems: "center" }}
                helperText="*BY CLICKING THE BUTTON BELOW YOU ARE AGREEING ACEGOLF’S TERMS OF SERVICES AND TO RECEVING MARKETING EMAILS FROM ACEGOLF. 
                YOU ARE ABLE TO UNSUBSCRIBE AT ANY TIME BY CLICKING UNSUBSCRBE FROM ANY FUTURE MARKETING EMAILS. "
                sx={{
                    fontFamily: "new-hero",
                    ".MuiInputBase-root": {
                        background: "white",
                    },
                    ".MuiInputBase-input": {
                        color: "#373737",
                        // background: "white",
                        width: isSubmit ? "0" : "100%",
                    },
                    pointerEvents: isSubmit ? "none" : "initial",
                }}
                InputProps={{
                    endAdornment: (
                        <Button
                            variant="contained"
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                            size="small"
                            sx={{
                                background: backgroundColor,
                                // ":hover": {},
                                width: isSubmit ? "100%" : "max-content",
                                marginTop: "6px",
                                marginBottom: "6px",
                                whiteSpace: "nowrap",
                                borderRadius: "12px",
                                transition: "min-width 500ms ease-out",
                                pointerEvents: isSubmit ? "none" : "initial",
                                ":hover": {
                                    backgroundColor: backgroundColor,
                                },
                                cursor: isSubmit ? "default" : "pointer",
                            }}
                        >
                            <span
                                style={{
                                    paddingLeft: "24px",
                                    paddingRight: "24px",
                                    paddingTop: "14px",
                                    paddingBottom: "14px",
                                    fontFamily: "new-hero",
                                    fontWeight: "700",
                                }}
                            >
                                {isSubmit
                                    ? "WE'LL KEEP IN TOUCH! SEE YOU SOON!"
                                    : "NOTIFY ME"}
                            </span>
                        </Button>
                    ),
                    sx: { borderRadius: "12px" },
                }}
            />
        </Box>
    );
};

const ComingSoonInfoSectionWrapper = styled(Box)(({ theme }) => ({
    marginTop: "60px",
    marginBottom: "60px",
    display: "grid",
    // flexDirection: "row",
    // alignItems: "center",
    justifyContent: "center",
    gridTemplateColumns: "1fr 2fr 1fr",
    width: "100%",
    fontFamily: "new-hero",
}));

const ComingSoonInfoWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
}));

const ComingSoonInfoSection = () => (
    <ComingSoonInfoSectionWrapper>
        <ComingSoonInfoWrapper order={1}>
            <img src="/images/ace-golf-logo.svg" alt="ace golf logo" />
        </ComingSoonInfoWrapper>
        <ComingSoonForm />
        <ComingSoonInfoWrapper order={3}>
            <span>FIND YOUR SWING</span>
            <span>SUMMER 2023</span>
        </ComingSoonInfoWrapper>
    </ComingSoonInfoSectionWrapper>
);

const ComingSoonInfoSectionMobileWrapper = styled(Box)(({ theme }) => ({
    marginTop: "60px",
    marginBottom: "60px",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",

    width: "100%",
    fontFamily: "new-hero",
    gap: "24px",
    marginLeft: "12px",
    marginRight: "12px",
}));

const ComingSoonInfoMobileWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // [theme.breakpoints.down(640)]: {
    //     marginLeft: "12px",
    //     marginRight: "12px",
    // },
    gap: "10px",
    whiteSpace: "nowrap",
}));

const ComingSoonInfoSectionMobile = () => (
    <ComingSoonInfoSectionMobileWrapper>
        <ComingSoonInfoMobileWrapper order={1}>
            <img src="/images/ace-golf-logo.svg" alt="ace golf logo" />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "centre",
                }}
            >
                <span>FIND YOUR SWING</span>
                <span>SUMMER 2023</span>
            </Box>
        </ComingSoonInfoMobileWrapper>
        <ComingSoonForm />
    </ComingSoonInfoSectionMobileWrapper>
);

const LogoMap = () => {
    let logoStack = [];

    // Array.from(
    //     Array(4).map((_, index) => {
    //         console.log(index);
    //         logoStack.push(<img src={GolfLogo} alt="temp" key={index} />);
    //     })
    // );

    for (let index = 0; index < 4; index++) {
        logoStack.push(
            // <Image
            //     src={golfLogo}
            //     width={width}
            //     height={height}
            //     alt="temp alt"
            //     key={index}
            // />

            <RelativePositionWrapper key={index}>
                <GolfLogo key={index} position="absolute" height="100%" />
            </RelativePositionWrapper>
        );
    }

    // return (
    //     <div
    //         style={{
    //             display: "flex",
    //             // gridTemplateColumns: "repeat(4, 1fr)",
    //             width: "100%",
    //         }}
    //     >
    //         <RelativePositionWrapper>
    //             <GolfLogoLeft
    //                 position="absolute"
    //                 height="100%"
    //                 // viewBox={viewBox}
    //             />
    //         </RelativePositionWrapper>
    //         <RelativePositionWrapper>
    //             <GolfLogoCentre
    //                 position="absolute"
    //                 height="100%"
    //                 // viewBox={viewBox}
    //             />
    //         </RelativePositionWrapper>
    //         <RelativePositionWrapper>
    //             <GolfLogoCentre
    //                 position="absolute"
    //                 height="100%"
    //                 // viewBox={viewBox}
    //             />
    //         </RelativePositionWrapper>
    //         <RelativePositionWrapper>
    //             <GolfLogoRight
    //                 position="absolute"
    //                 height="100%"
    //                 // viewBox={viewBox}
    //             />
    //         </RelativePositionWrapper>
    //     </div>
    // );

    return (
        <Box sx={{ display: "grid", gridTemplateRows: "repeat(4, 1fr)" }}>
            {logoStack}
        </Box>
    );
};

const PageWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
    // [theme.breakpoints.up('md')]: {

    // }
}));

export default function Page() {
    const isMobile = useMediaQuery("(max-width:640px)");

    let topLogoVertStack = [];
    let bottomLogoVertStack = [];

    // Array.from(Array(4).map((_, index) => {}));

    for (let index = 0; index < 4; index++) {
        topLogoVertStack.push(<LogoMap key={index} />);
    }

    return (
        <div
            style={{
                backgroundColor: backgroundColor,
                height: "100vh",
                color: "black",
                width: "100vw",
                overflow: "hidden",
            }}
        >
            <PageWrapper>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                    }}
                >
                    Hi
                </div>
                {isMobile ? (
                    <ComingSoonInfoSectionMobile />
                ) : (
                    <ComingSoonInfoSection />
                )}

                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        height: "100%",
                        position: "relative",
                        // top: "-10px",
                    }}
                >
                    {topLogoVertStack}
                </div>
            </PageWrapper>
        </div>
    );
}
