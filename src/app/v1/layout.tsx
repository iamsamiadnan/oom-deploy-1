"use client";

import React, { useState } from "react";
import Categories from "./partials/Categories/Categories";
import { Drawer, DrawerProps } from "antd";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    height: 852,
    padding: 48,
    overflow: "hidden",
    background: "#fafafa",
    border: `1px solid #ccc`,
    width: 393,
    margin: "auto",
  };

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div style={containerStyle}>
      <div className="border-b-2 mb-8 pb-4">OOM</div>
      <Categories setOpenDrawer={setOpenDrawer} />
      <Drawer
        title="Treatments"
        placement="bottom"
        closable={true}
        onClose={onClose}
        open={openDrawer}
        getContainer={false}
        size="large"
      >
        <div>{children}</div>
      </Drawer>
    </div>
  );
}
