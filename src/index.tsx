import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import Layout from '@components/Layout'
import { SiteData } from '@components/Layout'
import Navbar from "@components/NavBar"
import Button from "@components/Button"
import Header from "@components/Header"

const app = new Hono()

app.use('/static/*', serveStatic({ root: '../public/images' }))

const Content = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <Header></Header>
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

app.get(
  '/static/*',
  serveStatic({
    root: '../public/images',
    rewriteRequestPath: (path) => path.replace(/^\/static/, '../public/images'),
  })
)

export default app
