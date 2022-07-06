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
import { Button, Divider, Flex, Text, TextField } from "@aws-amplify/ui-react";
export default function EditProfile(props) {
  const { coursedetails, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({ type: "url", url: "/TimeTable" });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      position="relative"
      border="0px SOLID rgba(0,0,0,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="FFE5BD"
      {...rest}
      {...getOverrideProps(overrides, "EditProfile")}
    >
      <Flex
        gap="24px"
        direction="column"
        shrink="0"
        alignSelf="stretch"
        objectFit="cover"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile29766913")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Choose your Course"
            {...getOverrideProps(overrides, "Edit Profile29766916")}
          ></Text>
        </Flex>
        <Divider
          width="569px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="default"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="569px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Enter your course"
          placeholder={coursedetails?.course}
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          ariaValuetext={coursedetails?.course}
          {...getOverrideProps(overrides, "TextField31752713")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="574px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Lecturer"
          placeholder={coursedetails?.lecturer}
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField31752720")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="569px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Date"
          placeholder={coursedetails?.date}
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField31762734")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="574px"
          justifyContent="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          label="Enter Time"
          placeholder={coursedetails?.time}
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField31762727")}
        ></TextField>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="180px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          backgroundColor="rgba(0,25,77,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Add to TimeTable"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
