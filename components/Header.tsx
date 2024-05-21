import { html } from "hono/html"
import Button from "@components/Button"

interface props {
    children?: any
}

const Head = (props: props) => html`
    <div>
        <p>For B2B Businesses</p>
        <h2>
            We Connect You With
            Your Ideal Customer -
            You Do The Rest.
        </h2>
        <p>
            Supercharge your pipeline with prospects that
            need what you offer.
        </p>
        ${props.children}
    </div>
`

const Head2 = (props: props) => <Head>
        <Button/>
        {props.children}
    </Head>

const Header = () => <Head2>
    <div>
        <img src="Business-Growth-illustration-1.png"/>
    </div>
</Head2>

export default Header