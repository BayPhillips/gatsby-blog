import {pipe} from 'lodash/fp'
import axios from 'axios'

import {
  MenuNode,
  RecipeNode,
  RecipeImageNode,
  RecipeTagNode,
} from './nodes'

export const sourceNodes = async (
  { boundActionCreators: { createNode } },
  {}
) => {
  await createMenu(createNode)
}

async function createMenu(createNode) {
  const menuResponse = await axios.get("https://api.plated.com/api/v4/menus.json")
  // console.log("What is this " + menuResponse.data + " and createNode " + createNode)
  menuResponse.data.mains.forEach(pipe(MenuNode, createNode))
}