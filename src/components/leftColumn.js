import React from "react"
import { Column, Menu, MenuItem, MenuText } from 'react-foundation'

class LeftColumn extends React.Component {
  render() {
    return (
      <Column large={3} medium={3} small={3}>
        <Menu isVertical>
          <MenuText>Bay Phillips</MenuText>
          <MenuItem><a>First Item</a></MenuItem>
          <MenuItem><a>Second Item</a></MenuItem>
          <MenuItem><a>Third Item</a></MenuItem>
          <MenuItem><a>Fourth Item</a></MenuItem>
        </Menu>
      </Column>
    )
  }
}

export default LeftColumn