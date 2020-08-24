#!/usr/bin/env node
'use strict';
const meow = require('meow');
const changeCase = require('change-case');

const cli = meow(`
	Usage
		$ change-case-cli [input]

	Options
		--to  [Default: camel]
			camel
			capital
			constant
			dot
			header
			no
			param
			pascal
			path
			sentence
			snake

		--shift [default 0]

	Examples
	  $ change-case-cli snake_case_string
	  snakeCaseString
`, {
	flags: {
		to: {
			type: 'string',
			default: 'camel'
		},
		shift: {
			type: 'int',
			default: 0
		}
	}
});

if (cli.input.length > 0) {
	let result = cli.input.join(' ');
	if (cli.flags.shift) {
		result = changeCase.snakeCase(result);
		const org = result.split('_');
		const {length} = org;
		const {shift} = cli.flags;
		const out = [];
		for (let i = 0; i < length; i++) {
			out.push(org[(i + shift + length) % length]);
		}

		result = out.join('_');
	}

	switch (cli.flags.to) {
		case 'camel':
			result = changeCase.camelCase(result);
			break;
		case 'capital':
			result = changeCase.capitalCase(result);
			break;
		case 'constant':
			result = changeCase.constantCase(result);
			break;
		case 'dot':
			result = changeCase.dotCase(result);
			break;
		case 'header':
			result = changeCase.headerCase(result);
			break;
		case 'no':
			result = changeCase.noCase(result);
			break;
		case 'param':
			result = changeCase.paramCase(result);
			break;
		case 'pascal':
			result = changeCase.pascalCase(result);
			break;
		case 'path':
			result = changeCase.pathCase(result);
			break;
		case 'sentence':
			result = changeCase.sentenceCase(result);
			break;
		case 'snake':
			result = changeCase.snakeCase(result);
			break;
		default:
			break;
	}

	console.log(result);
}
