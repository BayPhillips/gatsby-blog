import React from "react"
import { Row, Column, Menu, MenuItem, MenuText } from 'react-foundation'

class NavigationBar extends React.Component {
  render() {
    return (
      <Row className="top-bar">
        <Column>
          <Menu>
            <MenuText>Bay Phillips</MenuText>
            <MenuItem><a>Blog</a></MenuItem>
            <MenuItem><a>Social</a></MenuItem>
          </Menu>
        </Column>
      </Row>
    )
  }
}

export default NavigationBar