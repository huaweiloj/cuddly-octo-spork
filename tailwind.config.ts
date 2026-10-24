import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink:'#172033', brand:'#5b5bd6', mint:'#dff8ed' }, boxShadow: { soft:'0 20px 60px rgba(27,39,75,.08)' } } }, plugins: [] };
export default config;
