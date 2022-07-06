/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { navbar, overrides, ...rest } = props;
  const buttonThreeOneSixFiveTwoSixEightOneOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  const buttonThreeOneSixFiveTwoSixNineSevenOnClick = useNavigateAction({
    type: "url",
    url: "/CourseDetails",
  });
  const buttonThreeOneSixFiveTwoSixNineThreeOnClick = useNavigateAction({
    type: "url",
    url: "/TimeTable",
  });
  const buttonThreeOneSixFiveTwoSixEightFiveOnClick = useNavigateAction({
    type: "url",
    url: "/GotoQuiz",
  });
  const buttonThreeOneSixFiveTwoSixEightNineOnClick = useNavigateAction({
    type: "url",
    url: "/GotoTasks",
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      width="1440px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="40px"
        direction="row"
        width="1376px"
        alignItems="center"
        grow="1"
        basis="1376px"
        height="33px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 321")}
      >
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="33px"
          position="relative"
          backgroundColor="rgba(255,255,255,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          color="black"
          children="Go to Home"
          onClick={() => {
            buttonThreeOneSixFiveTwoSixEightOneOnClick();
          }}
          {...getOverrideProps(overrides, "Button31652681")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="33px"
          position="relative"
          backgroundColor="rgba(255,255,255,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          color="black"
          children="Course Details"
          onClick={() => {
            buttonThreeOneSixFiveTwoSixNineSevenOnClick();
          }}
          {...getOverrideProps(overrides, "Button31652697")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="33px"
          position="relative"
          backgroundColor="rgba(255,255,255,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          color="black"
          children="Go to TimeTable"
          onClick={() => {
            buttonThreeOneSixFiveTwoSixNineThreeOnClick();
          }}
          {...getOverrideProps(overrides, "Button31652693")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="33px"
          position="relative"
          backgroundColor="rgba(255,255,255,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          color="black"
          children="Go to Quiz"
          onClick={() => {
            buttonThreeOneSixFiveTwoSixEightFiveOnClick();
          }}
          {...getOverrideProps(overrides, "Button31652685")}
        ></Button>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="fit-content"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          height="33px"
          position="relative"
          backgroundColor="rgba(255,255,255,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          color="black"
          children="Go to Tasks"
          onClick={() => {
            buttonThreeOneSixFiveTwoSixEightNineOnClick();
          }}
          {...getOverrideProps(overrides, "Button31652689")}
        ></Button>
      </Flex>
    </Flex>
  );
}
