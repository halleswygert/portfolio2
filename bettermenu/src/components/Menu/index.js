import React from "react"
import MenuItem from "../MenuItem"

export default class Menu extends React.Component {
    render() {
        return (
            <div class="menu">
                <h1>{this.props.menuName} Menu</h1>
                <div class="menuItems">
                    {this.props.menuItems.map((item) => (
                        <MenuItem {...item}></MenuItem>
                    ))}
                </div>
            </div>
        )
    }
}