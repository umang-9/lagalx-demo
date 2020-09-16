import React, { ReactElement, ReactNode, useCallback, useState } from 'react';
import ContactFormDialog from 'components/ContactFormDialog';
import ContactFormDialogContext from 'context/ContactFormDialogContext';

interface ContactFormDialogProviderProps {
  children: ReactNode;
}

function ContactFormDialogProvider(
  props: ContactFormDialogProviderProps
): ReactElement {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), []);

  return (
    <>
      <ContactFormDialog onClose={(): void => setOpen(false)} open={open} />
      <ContactFormDialogContext.Provider value={onOpen}>
        {props.children}
      </ContactFormDialogContext.Provider>
    </>
  );
}

export default ContactFormDialogProvider;
