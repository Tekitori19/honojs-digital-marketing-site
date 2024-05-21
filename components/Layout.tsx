import { html } from "hono/html"

export interface SiteData {
    title: string,
    children?: any
}

const Layout = (props: SiteData) => html`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="https://hono.dev/favicon.ico" type="image/x-icon">
    <title>${props.title}</title>
    <style>
        main{
            margin: 15.37px 81.6px 0;
        }
    </style>
</head>
<body>
    <main>
        ${props.children}
    </main>
</body>
</html>
`

export default Layout