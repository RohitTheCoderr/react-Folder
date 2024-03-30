
import { PropTypes } from "prop-types"
export function Navbar(props) {
    return (
    <>
    {props.title}
    </>)
}

Navbar.PropTypes = {
    title:PropTypes.title.string
}




