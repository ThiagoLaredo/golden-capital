// netlify-static-forms-handler.js - Versão simplificada
export default async function netlifyStaticFormsHandler(event, context) {
  console.log('Netlify Forms Handler called for form:', event.formName);
  
  try {
    const formData = new FormData();
    
    // Adiciona todos os campos
    Object.entries(event.body).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    // Adiciona o nome do formulário
    formData.append('form-name', event.formName);
    
    // Envia para o Netlify
    const response = await context.fetch('/', {
      method: 'POST',
      body: formData,
    });
    
    return {
      statusCode: response.status,
      body: await response.text(),
    };
  } catch (error) {
    console.error('Error in Netlify Forms Handler:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
}