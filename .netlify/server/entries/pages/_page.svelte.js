import { c as create_ssr_component, d as add_attribute, f as each, e as escape, h as null_to_empty, v as validate_component } from "../../chunks/index.js";
import "confetti-js";
const LettersToPick_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.svelte-13v6dac{font-family:'Balloon', sans-serif;font-size:200px;color:brown;margin:5px;cursor:pointer}h1.svelte-13v6dac{font-size:30px}.red.svelte-13v6dac{color:red}.purple.svelte-13v6dac{color:purple}.blue.svelte-13v6dac{color:blue}canvas.svelte-13v6dac{position:relative;z-index:1;pointer-events:none}#buttonDiv.svelte-13v6dac{position:absolute;display:flex;justify-content:center;flex-direction:column;align-items:center}",
  map: null
};
const LettersToPick = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let redLettersPick = ["r", "w", "e", "k", "d"];
  let { pickedLetters = [] } = $$props;
  let { confetti = false } = $$props;
  if ($$props.pickedLetters === void 0 && $$bindings.pickedLetters && pickedLetters !== void 0)
    $$bindings.pickedLetters(pickedLetters);
  if ($$props.confetti === void 0 && $$bindings.confetti && confetti !== void 0)
    $$bindings.confetti(confetti);
  $$result.css.add(css$1);
  return `${$$result.head += `<!-- HEAD_svelte-1vsebkm_START -->${$$result.title = `<title>Balloon Spelling</title>`, ""}<meta name="${"description"}" content="${"Spelling with Balloons"}"><!-- HEAD_svelte-1vsebkm_END -->`, ""}

<canvas id="${"my-canvas"}" class="${"svelte-13v6dac"}"></canvas>
<div${add_attribute("id", "buttonDiv", 0)} class="${"svelte-13v6dac"}"><div>${each(redLettersPick, (letter) => {
    return `<button class="${escape(null_to_empty(letter), true) + " svelte-13v6dac"}">${escape(letter)}
      </button>`;
  })}</div>
  <h1 class="${"svelte-13v6dac"}">How do you spell the word, Red?</h1>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-afc9ce{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%;height:100vh}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-t32ptj_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-t32ptj_END -->`, ""}

<section class="${"svelte-afc9ce"}">${validate_component(LettersToPick, "LettersToPick").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Page as default
};
