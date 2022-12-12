import { c as create_ssr_component } from "../../chunks/index.js";
const styles = "";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-6b4nvy{display:flex;flex-direction:column;min-height:100vh}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"app svelte-6b4nvy"}"><main>${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export {
  Layout as default
};
