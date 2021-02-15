import { hasSingleTextNode } from './hasSingleTextNode'
import { createElement } from './createElement'
import type { TypewriterElement } from '../types'

type GetElements = (parentElement: Element) => TypewriterElement[]

const getElements: GetElements = parentElement => {
	if (hasSingleTextNode(parentElement)) {
		const text = parentElement.textContent!
		const childNode = createElement(parentElement.textContent!, 'p')
		parentElement.textContent = ''
		parentElement.appendChild(childNode)
		return [{ currentNode: childNode, text }]
	} else {
		const childElements = [...parentElement.children]
		return childElements.map(currentNode => {
			const textWithFilteredAmpersand = currentNode.innerHTML.replaceAll('&amp;', '&')
			return {
				currentNode,
				text: textWithFilteredAmpersand
			}
		})
	}
}

export { getElements }