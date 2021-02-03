export const removeSpaces = (text: string): string =>
	text.replace(/^\s+/g, '').replace(/\s{2,}/g, ' ');
