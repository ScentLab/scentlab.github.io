import { typingInterval } from './typingInterval'
import type { TypewriterOptions } from '../types'

type UnwriteEffect = (currentNode: Element, options: TypewriterOptions) => Promise<void>

const unwriteEffect: UnwriteEffect = async (currentNode, options) => {
	options.dispatch('done')
	await typingInterval(typeof options.loop === 'number' ? options.loop : 1500)
	const text = currentNode.innerHTML.replaceAll('&amp;', '&')
	for (let index = text.length - 1; index >= 0; index--) {
		const letter = text[index]
		letter === '>' && (index = text.lastIndexOf('<', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
}

export { unwriteEffect }