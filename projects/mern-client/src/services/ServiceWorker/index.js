export class ServiceWorker {
	static register() {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('../../../sw.js');
		}
	}
}
