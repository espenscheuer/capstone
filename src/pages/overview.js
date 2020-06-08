import React, { useEffect } from "react"
import { Typography, Row, Col } from "antd"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import Img from "gatsby-image"
import "../styles/global.css" // requires a loader

function Overview({ images }) {
  const { Title } = Typography
  return (
    <>
      {images && (
        <Img
          fluid={
            images.find(
              element =>
                element.node.childImageSharp.fluid.originalName === "hero.png"
            ).node.childImageSharp.fluid
          }
          alt=""
        />
      )}
      <div
        className="site-layout-background"
        style={{ paddingTop: 35, paddingBottom: 35 }}
      >
        <Row>
          <Col xs={{ span: 0 }} lg={{ span: 1 }} />
          <Col xs={{ span: 24 }} lg={{ span: 22 }}>
            <Title level={2}>Overview</Title>
            <p>
              We partnered with Microsoft Teams to support small and medium
              businesses, helping them build long-lasting relationships with
              their customers and communicate within their organization, in one,
              central place. Throughout our design process, we interviewed
              multiple e-commerce stores to understand their existing with
              struggles managing customer inquiries, and how we might build upon
              Microsoft Teams’ existing tools to simplify their workflows. Our
              solution combines a request ticketing system, an internal
              workspace communication tool, and a customer-facing chatbot, into
              one Teams app.
            </p>
            <p>
              Our chatbot handles basic work and information gathering, and
              passes that information to customer service agents inside of their
              Teams channels, so they can work most efficiently and provide the
              best customer service possible. As customer tickets populate
              inside an agent’s Teams workspace, they can share, edit, and
              escalate tickets to management, without ever having to leave a
              conversation.
            </p>
            <></>
            <>
              <div>
                <br />
              </div>
              <Row>
                <Col span={3}>
                  <br />
                </Col>
                <Col span={18}>
                  {images && (
                    <Img
                      fluid={
                        images.find(
                          element =>
                            element.node.childImageSharp.fluid.originalName ===
                            "process.png"
                        ).node.childImageSharp.fluid
                      }
                      alt=""
                    />
                  )}
                </Col>
                <Col span={3}>
                  <br />
                </Col>
              </Row>
            </>
            <Col xs={{ span: 0 }} lg={{ span: 1 }} />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Overview
