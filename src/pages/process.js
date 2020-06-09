import React from "react"
import { Typography, Row, Col, List } from "antd"
import Img from "gatsby-image"
import { Carousel } from "react-responsive-carousel"

function Process({ images }) {
  const { Title } = Typography
  console.log(images)
  return (
    <>
      {images && (
        <Img
          fluid={
            images.find(
              element =>
                element.node.childImageSharp.fluid.originalName === "prc.png"
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
          <Col xs={{ span: 1 }} lg={{ span: 1 }} />
          <Col xs={{ span: 22 }} lg={{ span: 22 }}>
            <p>
              Our work on this project can be broken down into four phases:
              Research, Synthesis, Ideation, and Iteration. Our work took place
              during 12 weeks spanning from late March to early June. Prior to
              that we spent several weeks coordinating with our capstone sponsor
              and planning.
            </p>
            <br />
            <Title level={3}>Research</Title>
            <p>
              During this phase we conducted interviews with customer experience
              associates, and competitive analysis of other tools in the space.
            </p>
            <br />
            <Row justify="space-around" align="middle" gutter={30}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <p>
                  <b>Interviews</b>
                </p>
                <p>
                  {" "}
                  Our interviews were designed to help us better understand the
                  experiences of associates. We talked with 4 different
                  associates from various e-commerce companies.
                </p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                {images && (
                  <Img
                    fluid={
                      images.find(
                        element =>
                          element.node.childImageSharp.fluid.originalName ===
                          "int.png"
                      ).node.childImageSharp.fluid
                    }
                    alt=""
                  />
                )}
              </Col>
            </Row>
            <br />
            <p>
              <b>Interview Insights</b>
            </p>
            <p>We compiled our information into four key insights.</p>
            <List>
              <List.Item>
                CX agents are overloaded by tools to manage their workflows ​
              </List.Item>
              <List.Item>
                CX associates need to balance efficiency and personalization
                while interacting with customers​{" "}
              </List.Item>
              <List.Item>
                E-commerce SMB's frequently change tools and modify behavior to
                minimize costs​{" "}
              </List.Item>
              <List.Item>
                CX tools lack robust internal messaging and require workarounds
                for ticket discussions{" "}
              </List.Item>
            </List>
            <br />
            <Title level={3}>Synthesis</Title>
            <p>
              In order to analyze our research results we created an extensive
              set of Jobs-To-Be-Done for each task we learned about, we then
              identified a user journey that touched many of our key JTBD to
              design for. Based on this user journey, we created a flow diagram
              and feature map to inform future designs.
            </p>
            <br />
            <Row justify="space-around" align="middle" gutter={30}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                {images && (
                  <Img
                    fluid={
                      images.find(
                        element =>
                          element.node.childImageSharp.fluid.originalName ===
                          "jtbd.png"
                      ).node.childImageSharp.fluid
                    }
                  />
                )}
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <p>
                  <b>Jobs-to-be-Done​</b>
                </p>
                <p>
                  {" "}
                  To better understand what interaction we should design for, we
                  mapped Jobs-to-be-Done to each of the tasks uncovered in our
                  primary research.
                </p>
              </Col>
            </Row>
            <br />
            <p>
              <b>User Scenario </b>
            </p>
            <p>
              To scope down our designs from the 30+ JTBD we identified, we
              created a single user story we could design for:
            </p>
            <p>
              A user shopping online reaches out to customer service because
              they would like to change their order.
            </p>
            <p>
              To support this story we designed a flow diagram and feature map
              which can be seen in the carousel below.
            </p>
            <br />
            <Row>
              <Col span={3}></Col>
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
                                .originalName === "user flow.png"
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
                                .originalName === "feature.png"
                          ).node.childImageSharp.fluid
                        }
                        alt=""
                      />
                    )}
                  </div>
                </Carousel>
              </Col>
              <Col span={3}></Col>
            </Row>
            <br />
            <br />
            <Title level={3}>Ideation</Title>
            <br />
            <p>
              During this phase we jumped heavily into design. We took our
              designs through three levels of fidelity, sketching, wireframing,
              and medium fidelity.
            </p>
            <br />
            <Row justify="space-around" align="middle" gutter={30}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <p>
                  <b>Sketches​</b>
                </p>
                <p>
                  {" "}
                  We ideated on how to create a system within teams to answer
                  these queries through a chatbot, ticketing queue, and
                  dashboard.​
                </p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                {images && (
                  <Img
                    fluid={
                      images.find(
                        element =>
                          element.node.childImageSharp.fluid.originalName ===
                          "sketch.png"
                      ).node.childImageSharp.fluid
                    }
                    alt=""
                  />
                )}
              </Col>
            </Row>
            <br />
            <br />
            <Row justify="space-around" align="middle" gutter={30}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                {images && (
                  <Img
                    fluid={
                      images.find(
                        element =>
                          element.node.childImageSharp.fluid.originalName ===
                          "wireframe.png"
                      ).node.childImageSharp.fluid
                    }
                    alt=""
                  />
                )}
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <p>
                  <b>Wireframes​</b>
                </p>
                <p>
                  {" "}
                  We used wireframes to map out the scenario, understanding how
                  a ticket escalation would look inside the tool we were
                  designing.
                </p>
              </Col>
            </Row>
            <br />
            <br />
            <Row justify="space-around" align="middle" gutter={30}>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <p>
                  <b>Medium Fidelity</b>
                </p>
                <p>
                  {" "}
                  For further review we leveraged Microsofts extensive library
                  of components to bring our designs to medium fidelity, getting
                  an idea of what our solution would actually look like.
                </p>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                {images && (
                  <Img
                    fluid={
                      images.find(
                        element =>
                          element.node.childImageSharp.fluid.originalName ===
                          "medium.png"
                      ).node.childImageSharp.fluid
                    }
                    alt=""
                  />
                )}
              </Col>
            </Row>
            <br />
            <br />
            <Title level={3}>Iteration</Title>
            <br />
            <p>
              We then usabilty tested our designs, incorperated the changes and
              brought the up to high fidelity.
            </p>
            <p>
              <b>Usability Testing</b>
            </p>
            <p>
              For usability testing we reached out to 4 people working in
              customer experience. We recieved a ton of feedback which is
              displayed below broken down into validation, and areas for
              improvement.
            </p>
            <br />
            <p>
              <b>Validation</b>
            </p>
            <List>
              <List.Item>
                Seeing personal metrics and goals motivates increased
                productivity​{" "}
              </List.Item>
              <List.Item>
                Customer metadata is helpful to streamline support interactions​{" "}
              </List.Item>
              <List.Item>
                Efficient manager escalation is valuable to save time and stay
                organized​{" "}
              </List.Item>
            </List>
            <br />
            <p>
              <b>Areas for Improvement</b>
            </p>
            <List>
              <List.Item>Desire to see leaderboard in dash view​ </List.Item>
              <List.Item>
                Goals are changeable by managing staff and should be conveyed to
                the agents
              </List.Item>
              <List.Item>Ticket queue priority needs clarification</List.Item>
            </List>
            <br />
            <p>
              <b>Final Designs</b>
            </p>
            <p>
              We then incorperated usability testing feedback into our final
              designs, a hi-fidelity flow that takes users through the process
              of escalating and resolving a customer support ticket. You can see
              this in a clickable prototype in the Deliverable tab.
            </p>
            <br />
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <div>
                  {images && (
                    <Img
                      fluid={
                        images.find(
                          element =>
                            element.node.childImageSharp.fluid.originalName ===
                            "final.png"
                        ).node.childImageSharp.fluid
                      }
                      alt=""
                    />
                  )}
                </div>
              </Col>
              <Col span={3}></Col>
            </Row>
            <br />
            <p>
              <b>Component Library</b>
            </p>
            <p>
              We also put together a component library fully documenting the new
              components we created to better faciliatate the hand off to
              Microsoft Design.
            </p>
            <br />
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <div>
                  {images && (
                    <Img
                      fluid={
                        images.find(
                          element =>
                            element.node.childImageSharp.fluid.originalName ===
                            "componenet.png"
                        ).node.childImageSharp.fluid
                      }
                      alt=""
                    />
                  )}
                </div>
              </Col>
              <Col span={3}></Col>
            </Row>
            <br />
            <p>
              <b>Accessibility Considerations</b>
            </p>
            <p>
              In line with Micorosft accessibility guidelines we created tabbing
              documentations for our designs.
            </p>
            <br />
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <div>
                  {images && (
                    <Img
                      fluid={
                        images.find(
                          element =>
                            element.node.childImageSharp.fluid.originalName ===
                            "a11y.png"
                        ).node.childImageSharp.fluid
                      }
                      alt=""
                    />
                  )}
                </div>
              </Col>
              <Col span={3}></Col>
            </Row>
            <br />
          </Col>

          <Col xs={{ span: 1 }} lg={{ span: 1 }} />
        </Row>
      </div>
    </>
  )
}

export default Process
