/**
 *
 * @param {string} name
 * @example
 * ```
 * goodbyeConsole({ name: "hasin023" }); // Output: Goodbye hasin023 🔥
 * ```
 * This is a goodbye function. It says goodbye to the given name. It is a simple function that logs a string.
 */

export function goodbyeConsole({ name }: { name: string }) {
	console.log(`Goodbye ${name || "World"} 🔥`);
}

/**
 *
 * @param {string} name
 * @returns {string}
 * @example
 * ```
 * const res = goodbyeReturn({ name: "hasin023" });
 * console.log(res); // Output: Goodbye hasin023 🔥
 * ```
 * This is a goodbye function. It says goodbye to the given name. It is a simple function that returns a string.
 */

export function goodbyeReturn({ name }: { name: string }): string {
	return `Goodbye ${name || "World"} 🔥`;
}
