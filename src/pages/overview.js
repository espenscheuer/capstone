import React, { useState, Component } from "react"
import { Typography, Button } from "antd"
import low from "../images/low.png"
import medium from "../images/medium.png"
import high from "../images/high.png"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

function Overview({updatePage}) {
  const { Title, Text } = Typography
  return (
    <div
      className="site-layout-background"
      style={{ padding: 30, minHeight: 360 }}
    >
      <Title level={3}>Overview</Title>
      <br />
      <p>
        Our project sponsor was Microsoft Teams. While Teams has traditionally
        only allowed for internal communication, we worked on an extension that
        would allow it to be used for customer service. You can see some images
        of our deliverables below, and learn more by clicking any of the links
        or navigating using the sidebar.
      </p>
      <Button
        type="link"
        onClick={() => {
          updatePage(2)
        }}
      >
        {" "}
        Process
      </Button>
      <Button
        type="link"
        onClick={() => {
          updatePage(3)
        }}
      >
        {" "}
        Deliverable
      </Button>
      <Button
        type="link"
        onClick={() => {
          updatePage(4)
        }}
      >
        {" "}
        Team
      </Button>
      <>
        <div>
          <br />
        </div>
        <Carousel
          arrows
          arrowLeft={<LeftOutlined style={{ fontSize: "20px" }} />}
          arrowRight={<RightOutlined style={{ fontSize: "20px" }} />}
          addArrowClickHandler
        >
          <img style={{ width: 600, height: 375 }} src={low} />
          <img style={{ width: 615, height: 346 }} src={medium} />
          <img style={{ width: 615, height: 346 }} src={high} />
        </Carousel>
      </>
    </div>
  )
}


export default Overview

