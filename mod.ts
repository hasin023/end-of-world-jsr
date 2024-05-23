/**
 *
 * @param {string} name
 * @returns {string}
 * @example
 * ```
 * goodbye('Pansy') // => 'Goodbye Pansy 🔥'
 * ```
 * This is a goodbye function. It says goodbye to the given name. It is a simple function that returns a string.
 */

export function goodbye({ name }: { name: string }) {
	console.log(`Goodbye ${name || "World"} 🔥`);
}
