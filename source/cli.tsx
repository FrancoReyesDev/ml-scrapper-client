#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
// import meow from 'meow';
import App from './app.js';

// const cli = meow();
// 	`
// 	Usage
// 	  $ mp-scraper-client

// 	Options
// 		--name  Your name

// 	Examples
// 	  $ mp-scraper-client --name=Jane
// 	  Hello, Jane
// `,
// 	{
// 		importMeta: import.meta,
// 		flags: {
// 			// name: {
// 			// 	type: 'string',
// 			// },
// 		},
// 	},
// );

// name={cli.flags.name}
render(<App />);
