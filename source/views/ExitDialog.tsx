import React from 'react';
import {Text, useApp as useInkApp, useInput} from 'ink';
import {useApp} from '../providers/AppProvider.js';

export const ExitDialog: React.FC = () => {
	const [_, dispatch] = useApp();
	const {exit} = useInkApp();
	useInput((_, key) => (key.escape ? exit() : dispatch({type: 'cancelExit'})));
	return (
		<Text>
			<Text backgroundColor={'red'}> ! </Text> Presiona ESC para salir y
			cualquier tecla para volver
		</Text>
	);
};
