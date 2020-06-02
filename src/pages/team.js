import React from "react"
import { Typography, Row, Col } from "antd"
import Img from "gatsby-image"

function Team({ images }) {
  const { Title } = Typography
  const nameStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
  const textStyle = { fontSize: "12px", color: "#6264A7" }
  return (
    <div
      className="site-layout-background"
      style={{ padding: 25, minHeight: "87vh" }}
    >
      <Title level={2}>Team</Title>
      <Row gutter={[40, 15]} justify="space-between">
        <Col flex="auto" s={{ span: 24 }} m={{ span: 12 }} xl={{ span: 6 }}>
          <Img
            style={{ borderRadius: 3 }}
            fluid={images[3].node.childImageSharp.fluid}
            alt=""
          />
          <div style={nameStyle}>
            <a href="https://www.linkedin.com/in/collintran/" style={textStyle}>
              Collin Tran - UX Design
            </a>
          </div>
        </Col>
        <Col flex="auto" s={{ span: 24 }} m={{ span: 12 }} xl={{ span: 6 }}>
          <Img
            style={{ borderRadius: 3 }}
            fluid={images[1].node.childImageSharp.fluid}
            alt=""
          />
          <div style={nameStyle}>
            <a
              href="https://www.linkedin.com/in/espen-scheuer/"
              style={textStyle}
            >
              Espen Scheuer - Product
            </a>
          </div>
        </Col>
        <Col flex="auto" s={{ span: 24 }} m={{ span: 12 }} xl={{ span: 6 }}>
          <Img
            style={{ borderRadius: 3 }}
            fluid={images[0].node.childImageSharp.fluid}
            alt=""
          />
          <div style={nameStyle}>
            <a
              href="https://www.linkedin.com/in/isabellearmstrong/"
              style={textStyle}
            >
              Izzy Armstrong - UX Design
            </a>
          </div>
        </Col>
        <Col flex="auto" s={{ span: 24 }} m={{ span: 12 }} xl={{ span: 6 }}>
          <Img
            style={{ borderRadius: 3 }}
            fluid={images[2].node.childImageSharp.fluid}
            alt=""
          />
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
      <p>
        <b>Collin</b> deeply enjoys diving into new projects and designing for
        scale. On this project he worked heavily on the design system, and
        embedded shopify controls.
      </p>
      <p>
        <b>Espen</b> likes everything from coding to design to strategy. On this
        project he worked on research, story telling, and stuff no one else
        wanted to do.
      </p>
      <p>
        <b>Izzy</b> really enjoys working on the tiny design details making sure
        everything is perfect. On this project she worked on usability testing
        and designing the dashboard architecting the look and feel of one of the
        key components.
      </p>
      <p>
        <b>Olivia</b> likes getting inside the head of her users. On this
        project she worked on interviews and designing the analytics portion of
        the app, making sure customer experience managers could view the health
        of their team at a glance.
      </p>
    </div>
  )
}

export default Team
