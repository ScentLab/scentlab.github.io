import App from "./App.svelte";

const app = new App({
	target: document.body,
});

export default app;

if (import.meta?.hot) {
	import.meta.hot.accept();
	import.meta.hot.dispose(() => {
		app.$destroy();	
	});
}

declare global {
	interface Window {
	  dataLayer: any[]
	}
	interface ImportMeta {
		hot: {
			accept: Function;
			dispose: Function;
		};
		env: {
			MODE: string;
			SNOWPACK_PUBLIC_API_URL: string;
		};
	}
}