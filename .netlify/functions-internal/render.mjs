import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Balloon.woff","favicon.png","robots.txt"]),
	mimeTypes: {".woff":"font/woff",".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-77ac2bac.js","imports":["_app/immutable/start-77ac2bac.js","_app/immutable/chunks/index-53c2dfc6.js","_app/immutable/chunks/singletons-1f4fabc3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
