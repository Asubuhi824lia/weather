import headerLogo		from './Header_logo'
import changeTheme 	from './change_theme'


interface Props {
	id: string
}


function GlobalSvgSelector({ id }: Props) {
	switch (id) {
		case "header-logo":		return headerLogo;
		case "change-theme":	return changeTheme;
		default:
			return null;
	}
}

export default GlobalSvgSelector;