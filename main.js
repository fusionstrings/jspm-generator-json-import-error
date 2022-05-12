import {
  contentType,
  lookup,
} from "https://deno.land/x/media_types@v3.0.2/mod.ts";
import json from "./static-resources.json" assert { type: "json" };

Object.values(json).forEach((value) => {
  console.log(contentType(lookup(value)));
});
