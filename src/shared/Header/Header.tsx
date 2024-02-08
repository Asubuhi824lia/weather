import Select from 'react-select'
import s from './Header.module.scss'
import variables from '/src/styles/variables.module.scss';
import GlobalSvgSelector from '../../assets/icons/svg_tags/global/GlobalSvgSelector';


const options = [
  { value: 'Выберите город', label: 'Выберите город', isDisabled: true },
  { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
  { value: 'Москва', label: 'Москва' },
  { value: 'Екатеринбург', label: 'Екатеринбург' }
]

const selectStyles = {
	control: (baseStyles: any) => ({
		...baseStyles,
		border: 'none',
		borderRadius: `calc(${variables["border-radius"]} / 2)`,	
		backgroundColor: 0 ? '#4793FF33' : '#4F4F4F',
		color: 'black',
		width: '194px',
		fontSize: '14px',
		lineHeight: '20px',
		cursor: 'pointer',
	}),
	singleValue: (baseStyles: any) => ({
		...baseStyles,
		color: 0 ? 'black' : 'white',
	})
}


function Header() {
	return (
		<header className={s.header}>
			<div className={s.wrapper}>
				<div className={s.logo}>
					<GlobalSvgSelector id="header-logo" />
				</div>
				<div className={s.title}>React weather</div>
			</div>
			<div className={s.wrapper}>
				<div className={s.change_theme}>
					<GlobalSvgSelector id="change-theme"/>
				</div>
				<Select
					classNamePrefix="select-city"
					name='city'
					defaultValue={options[0]}
					options={options} 
					styles={selectStyles}
				/>
			</div>
		</header>
	);
}

export default Header;