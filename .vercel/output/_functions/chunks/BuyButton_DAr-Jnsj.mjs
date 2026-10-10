import { d as addAttribute, l as renderTemplate, u as maybeRenderHead, y as createAstro } from "./server_RLJKc2vC.mjs";
import { t as createComponent } from "./compiler_BHvyAGF3.mjs";
//#region src/components/BuyButton.astro
createAstro("https://astro.build");
var $$BuyButton = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BuyButton;
	const SPAIN = "ES";
	const country = Astro.request.headers.get("X-Vercel-IP-Country") ?? "ES";
	const storeCountry = country === SPAIN ? "spain" : "usa";
	const countryName = country === SPAIN ? "España" : "Estados Unidos";
	const { buy } = Astro.props;
	const url = buy[storeCountry];
	return renderTemplate`${maybeRenderHead($$result)}<a class="text-black h-8 w-64 flex justify-center items-center bg-gray-100 border border-white rounded-2xl"${addAttribute(url, "href")}>Compra en Amazon ${countryName}</a>`;
}, "C:/Users/jhami/Desktop/programing/develop/books-app/src/components/BuyButton.astro", void 0);
var $$file = "C:/Users/jhami/Desktop/programing/develop/books-app/src/components/BuyButton.astro";
var $$url = void 0;
//#endregion
export { $$BuyButton as default, $$file as file, $$url as url };
