"use client";

import * as React from "react";
import {
    Button,
    TextField,
    FormControl,
    InputLabel,
    OutlinedInput,
} from "@mui/material";
import Image from "next/image";
import { styled } from "@mui/system";

const SidebarImages = [
    "/images/ace-golf-card.svg",
    "/images/ace-golf-bar-lounge.svg",
];

const ComingSoonInfoBox = styled("div")({
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "column",
    gap: "16px",
});

const ComingSoonForm = () => {
    return (
        <ComingSoonInfoBox>
            Coming soon...
            <FormControl>
                <InputLabel htmlFor="component-outlined">Email</InputLabel>
                <OutlinedInput
                    color="primary"
                    id="component-outlined"
                    defaultValue="Composed TextField"
                    label="Email"
                />
            </FormControl>
        </ComingSoonInfoBox>
    );
};

export default function Page() {
    // const sidebarChoice = Math.floor(Math.random() * (1 - 0 + 1)) + 1;

    return (
        <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
            <div style={{ display: "flex", width: "35%" }}>
                <img
                    src={SidebarImages[0]}
                    alt="ace golf card"
                    style={{ maxWidth: "100%" }}
                    // width={500}
                    // height={500}
                />
            </div>
            <div style={{ display: "flex", width: "65%" }}>
                <ComingSoonForm />
            </div>
        </div>
    );
}
