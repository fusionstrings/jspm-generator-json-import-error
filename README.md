# Problem with parsing import assertion

## Steps to reproduce

Running file in Deno works correctly
```sh
deno run -A main.js

# result
# application/javascript; charset=utf-8
# text/css; charset=utf-8
# image/png

```

Trying to generate `deno.importmap` throws parsing error;
```sh
chomp

# result
# deno.importmap invalidated
# 🞂 deno.importmap
# /@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:72
# }, descriptor)), Object.assign(new constructor(), properties));
#                                ^

# SyntaxError: /https:/deno.land/x/media_types@v3.0.2/mod.ts: Support for the experimental syntax 'importAssertions' isn't currently enabled (32:83):

#   30 |
#   31 | import { extname } from "https://deno.land/std@0.131.0/path/mod.ts";
# > 32 | import db from "https://raw.githubusercontent.com/jshttp/mime-db/v1.52.0/db.json" assert {
#      |                                                                                   ^
#   33 |   type: "json",
#   34 | };
#   35 |

# Add @babel/plugin-syntax-import-assertions (https://github.com/babel/babel/tree/main/packages/babel-plugin-syntax-import-assertions) to the 'plugins' section of your Babel config to enable parsing.
#     at instantiate (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:72:32)
#     at constructor (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:358:12)
#     at Object.raise (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:3335:19)
#     at Object.expectPlugin (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:3384:16)
#     at Object.maybeParseImportAssertions (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:16289:12)
#     at Object.parseImport (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:16160:29)
#     at Object.parseImport (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:10155:30)
#     at Object.parseStatementContent (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:14643:27)
#     at Object.parseStatementContent (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:10267:18)
#     at Object.parseStatement (/Users/shukla001/@fusionstrings/jspm-generator-json-import/node_modules/@babel/parser/lib/index.js:14533:17) {
#   code: 'BABEL_PARSE_ERROR',
#   reasonCode: 'MissingPlugin',
#   loc: Position { line: 32, column: 82, index: 1547 },
#   pos: [Getter/Setter],
#   missingPlugin: [Getter/Setter]
# }
```