import { Tabs, TabsProps } from "antd";
import React from "react";
import style from "./ctabs.module.scss";

export default function CTabs({
  items,
  onChange,
}: {
  items: TabsProps["items"];
}) {
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      className={style.ctabs}
      onChange={onChange}
    />
  );
}
