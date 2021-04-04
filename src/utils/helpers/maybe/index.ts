/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const maybe = (val: any): any | undefined =>
  val !== '' && val !== null && val !== 0 ? val : undefined;
