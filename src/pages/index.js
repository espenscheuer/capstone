import React, { useState } from "react"
import { Layout, Menu } from "antd"
import {
  BlockOutlined,
  TeamOutlined,
  ProfileOutlined,
  LayoutOutlined,
} from "@ant-design/icons"
import {  graphql } from "gatsby"
import Overview from "./overview"
import Team from "./team"
import Process from "./process"
import Deliverable from "./deliverable"
import Img from "gatsby-image" 
import "../styles/global.css" // requires a loader 


function IndexPage({ data }) {
  const { Content, Footer, Sider } = Layout
  const textStyle = {fontSize : 16, height : 60, display: "flex", alignItems: "center"}
  const [page, setPage] = useState("1")

  const pages = {
    "1": <Overview updatePage={setPage} images = {data.overview.edges} />,
    "2": <Process />,
    "3": <Deliverable />,
    "4": <Team images = {data.team.edges}/>,
  }

  return (
    <Layout>
      <Sider
        width = {256}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <div className="logo" >
          {data.overview.edges && <Img fluid={data.overview.edges[3].node.childImageSharp.fluid} alt="" />}
        </div>
        <Menu
          style={{ width: 256 }}
          theme="dark"
          mode="inline"
          selectedKeys={[page]}
          onClick={e => {
            setPage(e.key)
          }}
        >
          <Menu.Item style = {textStyle} key="1" icon={<ProfileOutlined style = {textStyle} />}>
            Overview
          </Menu.Item>
          <Menu.Item style = {textStyle} key="2" icon={<BlockOutlined style = {textStyle}/>}>
            Process
          </Menu.Item>
          <Menu.Item style = {textStyle} key="3" icon={<LayoutOutlined style = {textStyle} />}>
            Deliverable
          </Menu.Item>
          <Menu.Item style = {textStyle} key="4" icon={<TeamOutlined style = {textStyle} />}>
            Team
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>{pages[page]}</Content>
        <Footer style={{ textAlign: "center" }}>HCDE + Microsoft Teams</Footer>
      </Layout>
    </Layout>
  )
}

export const query = graphql`
  query {
    team: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "team"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    overview: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "overview"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
