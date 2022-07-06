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
import EditProfile from "./EditProfile";
import { Collection } from "@aws-amplify/ui-react";
export default function EditProfileCollection(props) {
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
      templateColumns="1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "EditProfileCollection")}
    >
      {(item, index) => (
        <EditProfile
          timetable={item}
          height="auto"
          width="auto"
          margin="30px 30px 0 0"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></EditProfile>
      )}
    </Collection>
  );
}
