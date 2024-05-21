import { html } from 'hono/html'
import Button from '@components/Button'

interface props{
    children?: any
}

const Nav = (props: props) => html`
<nav>
    <h1>Growth with system</h1>
    <ul>
        <li>case studies</li>
        <li>testimonials</li>
        <li>Contact</li>
    </ul>
    ${props.children}
</nav>
`

const NavBar = () => <Nav><Button></Button></Nav>
export default NavBar;