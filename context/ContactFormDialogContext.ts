import { createContext } from 'react';

const ContactFormDialogContext = createContext<() => void | null>(null);

export default ContactFormDialogContext;
