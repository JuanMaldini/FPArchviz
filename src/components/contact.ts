const CONTACT_EMAIL = "fparchviz@gmail.com";

const EMAIL_SUBJECT = `Consulta sobre visualizacion arquitectonica`;

const EMAIL_BODY = `Hola FPArchviz,

Me gustaría ponerme en contacto con ustedes.

Quedo atento a su respuesta.

Gracias.`;

const INSTAGRAM_USERNAME = "fparchviz";

export const getContactEmail = () => CONTACT_EMAIL;

export const getEmailHref = () => {
  const params = new URLSearchParams({
    subject: EMAIL_SUBJECT,
    body: EMAIL_BODY,
  });

  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${CONTACT_EMAIL}?${query}`;
};

export const getInstagramHref = () =>
  `https://www.instagram.com/${INSTAGRAM_USERNAME}/`;
