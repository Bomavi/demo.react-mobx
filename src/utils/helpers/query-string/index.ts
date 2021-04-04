/* npm imports: common */
import { stringify } from 'query-string';

export const withoutEmptyValues = (
  obj: Record<string, any>
): Record<string, never> =>
  Object.keys(obj)
    .filter((k) => obj[k] !== undefined && obj[k] !== '')
    .reduce(
      (acc, k) => ({
        ...acc,
        [k]: obj[k],
      }),
      {}
    );

export const queryString = (obj: Record<string, any>): string => {
  const objWithoutEmptyValues = withoutEmptyValues(obj);

  if (Object.keys(objWithoutEmptyValues).length > 0) {
    return `?${stringify(objWithoutEmptyValues)}`;
  }

  return '';
};
