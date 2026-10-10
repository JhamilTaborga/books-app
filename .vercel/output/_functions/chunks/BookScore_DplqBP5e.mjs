import { l as renderTemplate, u as maybeRenderHead } from "./server_RLJKc2vC.mjs";
import { n as setOnSetGetEnv } from "./runtime_CQmuPWzA.mjs";
import { t as createComponent } from "./compiler_BHvyAGF3.mjs";
//#region \0astro:env/server
setOnSetGetEnv(() => {});
var SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=5&base=10&format=plain&rnd=new";
//#endregion
//#region src/components/BookScore.astro
var $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
	const scoreValue = await (await fetch(SCORE_API_ENDPOINT)).text();
	return renderTemplate`${maybeRenderHead($$result)}<span class="text-xs" id="score">⭐ Puntuación: ${scoreValue.trim()}/5</span>`;
}, "C:/Users/jhami/Desktop/programing/develop/books-app/src/components/BookScore.astro", void 0);
var $$file = "C:/Users/jhami/Desktop/programing/develop/books-app/src/components/BookScore.astro";
var $$url = void 0;
//#endregion
export { $$BookScore as default, $$file as file, $$url as url };
