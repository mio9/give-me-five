export default 5;

export const five = 5;

/**
 * Gives you a five.
 * @returns 5
 */
export function giveMeFive() {
    return five;
}

/**
 * Gives you a five after a delay, default to 5 seconds
 * @param delay
 * @returns 5
 */
export async function giveMeFiveLater(delay: number): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5)
        }, delay || 5000);
    })
}