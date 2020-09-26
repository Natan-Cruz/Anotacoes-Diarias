<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import { isDarkMode, toLight, toDark } from "./components/Theme.js";

export default {
	name: 'App',
	created(){
		const theme = localStorage.getItem("theme");
		switch(theme){
			case "light":
				toLight()
			break
			case "dark":
				toDark()
			break
			case "system":
				if(isDarkMode())
					toDark()
				else
					toLight()
			break
			default:
				toLight()
		}
	},
	methods:{
		toLight(){
			let root = document.documentElement;

			root.style.setProperty('--background', "#fff");
			root.style.setProperty('--surface', "#fff");
			root.style.setProperty('--title', "#000");
			root.style.setProperty('--title-card', "rgb(29,29,29)");
			root.style.setProperty('--preview-text-card', "#000");
			root.style.setProperty('--border-contrast', "border");
		},
		toDark(){
			let root = document.documentElement;
			root.style.setProperty('--background', "#121212");
			root.style.setProperty('--surface', "#515151");
			root.style.setProperty('--title', "rgba(255, 255, 255, 0.87)");
			root.style.setProperty('--title-card', "rgba(255, 255, 255, 0.6)");
			root.style.setProperty('--preview-text-card', "rgba(255, 255, 255, 0.55)");
			root.style.setProperty('--border-contrast', "solid 1px rgba(255, 255, 255, 0.15)");
		}
	}
}
</script>

<style lang="scss">
	@import "@/components/Modal.scss";

	:root{
		--background: #fff;
		--surface: #fff;
		--details-color: #000;
		--title: #000;
		--title-card: rgb(29, 29, 29);
		--preview-text-card: #000;
		--border-contrast: none;

		transition: 250ms;

		// DARK MODE
		// --background: #121212;
		// --surface: #515151;
		// --details-color: rgba(18, 18, 18, 0.7);
		// --title: rgba(255, 255, 255, 0.87);
		// --title-card: rgba(255, 255, 255, 0.6);
		// --preview-text-card: rgba(255, 255, 255, 0.55);
		// --border-contrast: solid 1px rgba(255, 255, 255, 0.15);
	}
	*{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-size: 10px;
		font-family: 'Roboto', cursive, Arial, sans-serif;
	}
	li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	html{
		background-color: var(--background);
	}

	.font_normal{
		color: var(--title);
		font-size: 1.7em;
		line-height: 1em;
	}
</style>
