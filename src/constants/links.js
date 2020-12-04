import React from 'react'
import { Link } from 'gatsby'

const data = [
    {
        id: 1,
        text: "home",
        url: "/"
    },
    {
        id: 2,
        text: "about",
        url: "/about/"
    },
    {
        id: 3,
        text: "offers",
        url: "/offers/"
    },
    {
        id: 4,
        text: "mobile fitting",
        url: "/mobile/"
    },
    {
        id: 5,
        text: "order mobile tyres",
        url: "/order/"
    },
    {
        id: 6,
        text: "contact us",
        url: "/contact/"
    },
]

export default ({ styleClass }) => {
    const tempLinks = data.map(link => {
        return (
            <li key={link.id}>
                <Link to={link.url}>{link.text}</Link>
            </li>
        )
    })
    return (
        <ul className={`page-links ${styleClass ? styleClass : ""}`}>
            {tempLinks}
        </ul>
    )
}
