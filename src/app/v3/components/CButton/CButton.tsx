import { Button } from "antd";
import React from "react";
import styles from "./cbutton.module.scss";

export default function CButton({
  text,
  invertStyle,
  onClick,
}: {
  text: string;
  invertStyle: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}) {
  return (
    <Button
      className={`${invertStyle ? styles.cbutton_invert : styles.cbutton}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
