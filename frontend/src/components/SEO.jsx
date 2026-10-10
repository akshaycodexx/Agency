import { useEffect } from 'react';

export default function SEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | CREATIVION` : 'CREATIVION — Creative, Digital & Growth Agency';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        description || 'Creativion is a modern creative, digital marketing and technology agency helping ambitious businesses build stronger brands and grow digital presence.'
      );
    }
  }, [title, description]);

  return null;
}
