import { Hono } from 'hono'
import Layout from '@components/Layout'
import { SiteData } from '@components/Layout'
import Navbar from "@components/NavBar"
import Button from "@components/Button"

const app = new Hono()

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <Navbar></Navbar>
    <h1>Hello {props.name}</h1>
    <Button></Button>
  </Layout>
)

app.get('/', (c) => {
  const props = {
    name: 'World',
    siteData: {
      title: 'Alo'
    },
  }
  return c.html(<Content {...props} />)
})

export default app
