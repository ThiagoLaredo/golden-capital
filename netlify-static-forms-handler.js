// netlify-static-forms-handler.js - CÓDIGO CORRETO
export default async function netlifyStaticFormsHandler(event, context) {
  const body = new URLSearchParams();
  for (const key in event.body) {
    if (Object.hasOwn(event.body, key)) {
      body.append(key, event.body[key]);
    }
  }
  body.append("form-name", event.formName);

  return await context.fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
}