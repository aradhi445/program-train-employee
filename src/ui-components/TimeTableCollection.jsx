/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { TimeTable } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CommentCard from "./CommentCard";
import { Collection } from "@aws-amplify/ui-react";
export default function TimeTableCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: TimeTable,
  }).items;
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="grid"
      searchPlaceholder="Search..."
      templateRows="1fr 1fr"
      autoFlow="column"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "TimeTableCollection")}
    >
      {(item, index) => (
        <CommentCard
          timetable={item}
          margin="30px 30px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CommentCard>
      )}
    </Collection>
  );
}
