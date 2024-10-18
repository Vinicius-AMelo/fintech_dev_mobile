import { loadAsync } from 'expo-font'
import { useEffect, useState } from 'react'
import { TextStyle } from 'react-native'

const loadFonts = async () => {
	await loadAsync({
		'SF-Bold': require('../../assets/fonts/SF-Pro-Display-Bold.otf'),
		'SF-Semibold': require('../../assets/fonts/SF-Pro-Display-Semibold.otf'),
		'SF-Regular': require('../../assets/fonts/SF-Pro-Display-Regular.otf'),
		'SF-Light': require('../../assets/fonts/SF-Pro-Display-Light.otf'),
	})
}

const importFonts = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	useEffect(() => {
		loadFonts().then(() => setFontsLoaded(true))
	}, [])

	if (!fontsLoaded) {
		return null
	}
	return fontsLoaded
}

const headings: { [key: string]: TextStyle } = {
	h1: {
		fontSize: 48,
		fontWeight: '700',
	},
	h2: {
		fontSize: 34,
		fontWeight: '700',
	},
	h3: {
		fontSize: 24,
		fontWeight: '700',
	},
	h4: {
		fontSize: 20,
		fontWeight: '700',
	},
	h5: {
		fontSize: 18,
		fontWeight: '700',
	},
	big: {
		fontSize: 16,
		fontWeight: '400',
	},
	p: {
		fontSize: 14,
		fontWeight: '400',
		lineHeight: 24,
	},
	small: {
		fontSize: 12,
		fontWeight: '400',
		lineHeight: 16,
	},
}

export { headings, importFonts }
