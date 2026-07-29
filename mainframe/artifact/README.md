# Hosted single-file portfolio

`portfolio.html` is the page published to the Claude artifact URL. It is
fully self-contained — Anek Latin is embedded as a woff2 data URI and the
hero backdrop is drawn on canvas, so the page makes **no** external requests
(the artifact CSP blocks them).

- `portfolio.src.html` — the editable source, with `__FONT_B64__` where the
  font data URI goes.
- `anek-latin.woff2` — the variable font, latin subset.

Rebuild after editing the source:

    node -e "const fs=require('fs');fs.writeFileSync('portfolio.html',fs.readFileSync('portfolio.src.html','utf8').replace('__FONT_B64__',()=>fs.readFileSync('anek-latin.woff2').toString('base64')))"

Note the `()=>` — a plain string replacement would expand `$&` sequences
inside the base64 payload.
