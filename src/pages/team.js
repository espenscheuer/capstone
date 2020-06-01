import React, { useState } from "react"
import espen from "../images/espen.png"
import olivia from "../images/oliva.png"
import collin from "../images/collin.png"
import izzy from "../images/izzy.png"
import { Typography, Menu, Descriptions, Row, Col, Avatar, Divider } from "antd"
import { LinkedinOutlined } from "@ant-design/icons"

function Team() {
  const { Title, Text } = Typography
  const nameStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
  const iconStyle = { color: "#484644", marginLeft: 2, height: 20, width: 20 }
  const textStyle = { fontSize: "9px", color: "#6264A7" }
  return (
    <div className="site-layout-background" style={{ padding: 30 }}>
      <Title level={3}>Team</Title>
      <br />
      <Row gutter={20} justify="space-between">
        <Col flex="auto" s={{ span: 24 }} l={{ span: 6 }}>
          <Avatar
            style={{ width: 125, height: 125 }}
            src={collin}
            shape="square"
            size="large"
          />{" "}
          <div style={nameStyle}>
            <a href="https://www.linkedin.com/in/collintran/" style={textStyle}>
              Collin Tran - UX Design
            </a>
          </div>
        </Col>
        <Col flex="auto" s={{ span: 24 }} l={{ span: 6 }}>
          <Avatar
            style={{ width: 125, height: 125 }}
            src={espen}
            shape="square"
            size="large"
          />{" "}
          <div style={nameStyle}>
            <a
              href="https://www.linkedin.com/in/espen-scheuer/"
              style={textStyle}
            >
              Espen Scheuer - Product
            </a>
          </div>
        </Col>
        <Col flex="auto" s={{ span: 24 }} l={{ span: 6 }}>
          <Avatar
            style={{ width: 125, height: 125 }}
            shape="square"
            src={izzy}
            size="large"
          />{" "}
          <div style={nameStyle}>
            <a
              href="https://www.linkedin.com/in/isabellearmstrong/"
              style={textStyle}
            >
              Izzy Armstrong - UX Design
            </a>
          </div>
        </Col>
        <Col flex="auto" s={{ span: 24 }} l={{ span: 6 }}>
          <Avatar
            style={{ width: 125, height: 125 }}
            src={olivia}
            shape="square"
            size="large"
          />{" "}
          <div style={nameStyle}>
            <a
              href="https://www.linkedin.com/in/olivia-oplinger/"
              style={textStyle}
            >
              Olivia Oplinger - UX Design
            </a>
          </div>
        </Col>
      </Row>
      <br />
      <p>
        Our capstone team has been friends since pretty much the first HCDE
        class. After four years of working together we were really excited to
        get to partner with Microsoft to tackle such an interesting problem.
        While we have areas of speciality, for this product we worked pretty
        freely helping with different things as needed. Feel free to connect
        with us on Linkedin by clicking any of our names.
      </p>
    </div>
  )
}

export default Team
