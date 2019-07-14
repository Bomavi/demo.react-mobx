import Styled from 'styled-components';
import { ThemeBase } from 'utils/themes';

declare global {
	declare interface DefaultTheme extends ThemeBase, Styled {}
}
