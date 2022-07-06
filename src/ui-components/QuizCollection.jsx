/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Quiz } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import FAQItem from "./FAQItem";
import { Collection } from "@aws-amplify/ui-react";
export default function QuizCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Quiz,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      templateColumns="1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "QuizCollection")}
    >
      {(item, index) => (
        <FAQItem
          quiz={item}
          height="auto"
          width="auto"
          margin="30px 30px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></FAQItem>
      )}
    </Collection>
  );
}
