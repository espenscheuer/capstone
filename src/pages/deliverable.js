import React from "react"
import { Typography } from "antd"

function Deliverable() {
    const { Title } = Typography
    return(<div
        className="site-layout-background"
        style={{ padding: 25, minHeight: 800 }}
      >
        <Title level={2}>Deliverable</Title>
      </div>)
}

export default Deliverable