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
          <p>
            You can check out our final video <a href ="https://www.youtube.com/embed/ExHmzWH7ktk"> here</a> and check out a high fidelity clickable prototype below. 
          </p>
          <br/>
          <iframe
            style={{border: "1px solid rgba(0, 0, 0, 0.1)",
            width:1000,
            height:611}}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FFZ2uuddJsFhfzNRlsF9BQj%2FCX-App-Prototype%3Fnode-id%3D2%253A0%26scaling%3Dscale-down-width&chrome=DOCUMENTATION"
            allowFullScreen
          ></iframe>
        </Col>
        <Col xs={{ span: 1 }} lg={{ span: 1 }} />
      </Row>
    </div>
  )
}

export default Deliverable
