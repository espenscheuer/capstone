import React, { useState } from "react"
import { Layout, Menu } from "antd"
import {
  BlockOutlined,
  TeamOutlined,
  ProfileOutlined,
  LayoutOutlined,
} from "@ant-design/icons"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Overview from "./overview"
import Team from "./team"
import Process from "./process"
import Deliverable from "./deliverable"

function IndexPage({ data }) {
  const { Header, Content, Footer, Sider } = Layout

  const [page, setPage] = useState("1")

  const pages = {
    "1": <Overview updatePage={setPage} />,
    "2": <Process />,
    "3": <Deliverable />,
    "4": <Team />,
  }

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken)
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type)
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[page]}
          onClick={e => {
            setPage(e.key)
          }}
        >
          <Menu.Item key="1" icon={<ProfileOutlined />}>
            Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<BlockOutlined />}>
            Process
          </Menu.Item>
          <Menu.Item key="3" icon={<LayoutOutlined />}>
            Deliverable
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            Team
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}><Img fluid={data.file.childImageSharp.fluid} alt="" />{pages[page]}</Content>
        <Footer style={{ textAlign: "center" }}>HCDE + Microsoft Teams</Footer>
      </Layout>
    </Layout>
  )
}

export const query = graphql`
  query {
    file: file(relativePath: { eq: "low.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          src
        }
      }
    }
  }
`

export default IndexPage
