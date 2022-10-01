---
to: "<%=  withCssModule ? `src/components/${path}/${name}/${name}.module.scss` : null %>"
---
.<%= h.changeCase.camelCase(name); %> {
}