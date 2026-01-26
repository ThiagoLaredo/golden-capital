// netlify-static-forms-handler.js
// Código oficial de migração da Netlify
export default function netlifyStaticFormsHandler(event) {
  const body = new URLSearchParams();
  for (const key in event.body) {
    if (Object.hasOwn(event.body, key)) {
      body.append(key, event.body[key]);
    }
  }
  body.append("form-name", event.formName);

  return fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
}