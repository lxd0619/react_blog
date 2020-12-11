/* eslint-disable */
import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Palette from "Components/Palette";

const Sider = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const icon = {
    position: "absolute",
    right: "1rem",
    top: "1rem",
    fontSize: "2rem",
  };
  return (
    <>
      <MenuOutlined style={icon} onClick={showDrawer} />
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Palette />
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Sider;
