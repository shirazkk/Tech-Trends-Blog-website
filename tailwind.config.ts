import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontSize: '2.25rem', // 36px
							fontWeight: '700',
							lineHeight: '1.25',
							color: 'hsl(var(--foreground))',
						},
						h2: {
							fontSize: '1.875rem', // 30px
							fontWeight: '600',
							lineHeight: '1.3',
							color: 'hsl(var(--foreground))',
						},
						h3: {
							fontSize: '1.5rem', // 24px
							fontWeight: '500',
							lineHeight: '1.4',
							color: 'hsl(var(--foreground))',
						},
						p: {
							fontSize: '1.2rem', // 16px
							lineHeight: '1.75',
							color: 'hsl(var(--muted-foreground))',
						},
						strong: {
							fontWeight: '600',
							color: 'hsl(var(--foreground))',
						},
					},
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"), // Added typography plugin
	],
} satisfies Config;
