import test from 'ava';
import execa from 'execa';

test('cli 1', async t => {
	const {stdout} = await execa('./cli.js', ['help']);
	t.is(stdout, 'help');
});

test('cli 2', async t => {
	const {stdout} = await execa('./cli.js', ['test test']);
	t.is(stdout, 'testTest');
});
