/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
		"./*.{php, inc.php}",
		"./use-case-pages/*.php",
		"./htmx/**/*.php",
		"./components/**/*.{php,inc.php}",
		"./components/resume-templates/*.{php,inc.php}",
		"./components/resume-templates/editor/*.{php,inc.php}",
		"./components/resume-templates/print/*.{php,inc.php}",
		"./hiring-files/*.php",
		"./dynamic-og/*.php",
		"./p-seo/*.php",
		"./hiring-files/components/*.inc.php",
	],
	safelist: ["btn-primary-green", "btn-main"],
	theme: {
		extend: {},
	},
	plugins: [
		require("daisyui"),
		require("@tailwindcss/forms"),
		require("tailwindcss"),
		require("autoprefixer"),
		require("@tailwindcss/typography"),
	],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#7B61FF",
					secondary: "#190C2E",
					accent: "#37cdbe",
					neutral: "#3d4451",
					"base-100": "#ffffff",

					"--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
					"--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
					"--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
					"--animation-btn": "0.25s", // duration of animation when you click on button
					"--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
					"--btn-focus-scale": "0.95", // scale transform of button when you focus on it
					"--border-btn": "1px", // border width of buttons
					"--tab-border": "1px", // border width of tabs
					"--tab-radius": "0.5rem", // border radius of tabs
				},
			},
			"emerald",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
			"dim",
			"nord",
			"sunset",
		], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
		darkMode: false,
	},
};

