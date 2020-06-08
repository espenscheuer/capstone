import React, { useEffect } from "react"
import { Typography, Row, Col } from "antd"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import Img from "gatsby-image"
import "../styles/global.css" // requires a loader

function Overview({ images }) {
  const { Title } = Typography
  console.log(
    images.find(
      element =>
        element.node.childImageSharp.fluid.originalName === "sketch.png"
    )
  )
  return (
    <div
      className="site-layout-background"
      style={{ paddingTop: 35, paddingBottom: 35 }}
    >
      <Row>
        <Col xs={{ span: 0 }} lg={{ span: 1 }} />
        <Col xs={{ span: 24 }} lg={{ span: 22 }}>
          <Title level={2}>Overview</Title>
          <p>
            Our project sponsor was Microsoft Teams. While Teams has
            traditionally only allowed for internal communication, we worked on
            an extension that would allow it to be used for customer service.
            You can see some images of our deliverables in the carousel below,
            or learn more by navigating using the sidebar.
          </p>
          <></>
          <p>
            <b>Process</b> describes in depth each step of our project
          </p>
          <p>
            <b>Deliverable</b> skips straight to the final designs we created
          </p>
          <p>
            <b>Team</b> has a little bit about us
          </p>
          <>
            <div>
              <br />
            </div>
            <Row>
              <Col span={3}>
                <br />
              </Col>
              <Col span={18}>
                <Carousel
                  showArrows={true}
                  showIndicators={true}
                  dynamicHeight={true}
                  showStatus={true}
                  showThumbs={false}
                >
                  <div>
                    {images && (
                      <Img
                        fluid={
                          images.find(
                            element =>
                              element.node.childImageSharp.fluid
                                .originalName === "sketch.png"
                          ).node.childImageSharp.fluid
                        }
                        alt=""
                      />
                    )}
                  </div>
                  <div>
                    {images && (
                      <Img
                        fluid={
                          images.find(
                            element =>
                              element.node.childImageSharp.fluid
                                .originalName === "wireframe.png"
                          ).node.childImageSharp.fluid
                        }
                        alt=""
                      />
                    )}
                  </div>
                  <div>
                    {images && (
                      <Img
                        fluid={
                          images.find(
                            element =>
                              element.node.childImageSharp.fluid
                                .originalName === "medium.png"
                          ).node.childImageSharp.fluid
                        }
                        alt=""
                      />
                    )}
                  </div>
                  <div>
                    {images && (
                      <Img
                        fluid={
                          images.find(
                            element =>
                              element.node.childImageSharp.fluid
                                .originalName === "high.png"
                          ).node.childImageSharp.fluid
                        }
                        alt=""
                      />
                    )}
                  </div>
                  <div>
                    {images && (
                      <Img
                        fluid={
                          images.find(
                            element =>
                              element.node.childImageSharp.fluid
                                .originalName === "final.png"
                          ).node.childImageSharp.fluid
                        }
                        alt=""
                      />
                    )}
                  </div>
                </Carousel>
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
  )
}

export default Overview
