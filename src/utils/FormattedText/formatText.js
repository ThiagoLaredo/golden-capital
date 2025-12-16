// utils/formatText.js
export const formatText = (text) => {
  if (!text) return null;
  
  // Divide o texto por ** e processa as partes
  const parts = text.split(/(\*\*.*?\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // Remove os ** e aplica strong
      const content = part.slice(2, -2);
      return <strong key={index}>{content}</strong>;
    }
    return part;
  });
};