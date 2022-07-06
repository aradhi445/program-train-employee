/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, View } from "@aws-amplify/ui-react";
import HeroLayout3 from "./HeroLayout3";
export default function HeroLayout2(props) {
  const { home, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="858px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HeroLayout2")}
    >
      <Image
        position="absolute"
        top="0%"
        bottom="0%"
        height="100%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        src="https://images.unsplash.com/photo-1562575214-da9fcf59b907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHx0ZWNobm9sb2d5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <HeroLayout3
        display="flex"
        gap="10px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        direction="column"
        width="1440px"
        height="858px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(0,0,0,0.5)"
        {...getOverrideProps(overrides, "HeroLayout3")}
      ></HeroLayout3>
    </View>
  );
}
