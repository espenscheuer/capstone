import React from "react"
import { Typography, Row, Col } from "antd"

function Deliverable() {
  const { Title } = Typography
  return (
    <div
      className="site-layout-background"
      style={{ paddingTop: 35, paddingBottom: 35 }}
    >
      <Row>
        <Col xs={{ span: 1 }} lg={{ span: 1 }} />
        <Col xs={{ span: 22 }} lg={{ span: 22 }}>
          <Title level={2}>Deliverable</Title>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBr26YD5v8YYqVRLpgo7kLJ%2FFinal-Project%3Fnode-id%3D1%253A8%26scaling%3Dmin-zoom&chrome=DOCUMENTATION"
            allowfullscreen
          >
            fdasfsda
          </iframe>
        </Col>
        <Col xs={{ span: 1 }} lg={{ span: 1 }} />
      </Row>
    </div>
  )
}

export default Deliverable
