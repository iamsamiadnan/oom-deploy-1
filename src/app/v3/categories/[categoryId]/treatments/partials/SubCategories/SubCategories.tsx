"use client";

import React from "react";
import CTabs from "../../components/CTabs/CTabs";
import { TabsProps } from "antd";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Blowout",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Hair cut",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Coloration",
    children: "Content of Tab Pane 2",
  },
  {
    key: "4",
    label: "Nails",
    children: "Content of Tab Pane 2",
  },
  {
    key: "5",
    label: "Face Treatment",
    children: "Content of Tab Pane 2",
  },
];

export default function SubCategories({ subCategories }) {
  const onChange = (key: string) => {
    console.log(key);
  };

  return <CTabs items={subCategories} onChange={onChange} />;
}
