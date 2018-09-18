import babel from 'rollup-plugin-babel';
import pkg from './package.json'
import uglify from "rollup-plugin-uglify-es";

export default {
	input: './src/index.js',
	output: [
        {
            name: 'SumLib',
            file: pkg.main,
            format: 'umd'
        },
        {
            name: 'SumLib',
            file: pkg.module,
            format: 'es'
		},
		{
            name: 'SumLib',
            file: pkg.cjs,
            format: 'cjs'
        }
    ],
    experimentalCodeSplitting: true,
    experimentalDynamicImport: true,
    plugins: [
        babel(),
        uglify()
    ]
}