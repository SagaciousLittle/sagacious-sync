
/**
 * synchronous function that returns promise
 *
 * @export
 * @param {() => Promise} asyncFun
 * @param {*} self function self
 * @returns {() => unknown} syncFun
 */
export declare function fun(asyncFun: () => Promise<unknown>, self: unknown): () => unknown

/**
 * synchronous promise
 *
 * @export
 * @param {Promise<unknown>} promise
 * @returns {unknown}
 */
export declare function p(promise: Promise<unknown>): unknown
