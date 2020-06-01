import React, { useState } from "react"
import { Typography } from "antd"

function Process() {
  const { Title, Text } = Typography

  return (
    <div
      className="site-layout-background"
      style={{ padding: 30, minHeight: 360 }}
    >
      <Title level={3}>Process</Title>
      <br />
    </div>
  )
}

export default Process
