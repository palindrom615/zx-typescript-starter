import { $ } from "zx";
import colors from "./sample.json" assert { type: "json" };

await $`echo ${colors
  .map(
    (c) => `.${c.color} {
    color: ${c.value};
}`
  )
  .join("\n")}`;
