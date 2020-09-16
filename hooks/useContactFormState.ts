import { useCallback, useReducer } from 'react';

interface UseContactFormStateValues {
  agreedToPrivacyPolicy: boolean;
  companyHeadCount: string;
  companyName: string;
  contactEmail: string;
  contactName: string;
  contactPhoneNumber: string;
  contactPhoneNumberCountryCode: string;
}

interface UseContactFormStateResult {
  onAgreedToPrivacyPolicyChange(v: boolean): void;
  onCompanyHeadCountChange(v: string): void;
  onCompanyNameChange(v: string): void;
  onContactEmailChange(v: string): void;
  onContactNameChange(v: string): void;
  onContactPhoneNumberChange(v: string): void;
  onContactPhoneNumberCountryCodeChange(v: string): void;
  onReset(): void;
  values: UseContactFormStateValues;
}

const initState = {
  agreedToPrivacyPolicy: false,
  companyHeadCount: '',
  companyName: '',
  contactEmail: '',
  contactName: '',
  contactPhoneNumber: '',
  contactPhoneNumberCountryCode: '',
};

function reducer(
  state: UseContactFormStateValues,
  action
): UseContactFormStateValues {
  switch (action.type) {
    case 'onChange':
      return { ...state, [action.key]: action.value };
    case 'reset':
      return { ...initState };
    default:
      return { ...state };
  }
}

function useContactFormState(): UseContactFormStateResult {
  const [state, dispatch] = useReducer(reducer, { ...initState });
  const onAgreedToPrivacyPolicyChange = useCallback(
    (v) =>
      dispatch({ type: 'onChange', key: 'agreedToPrivacyPolicy', value: v }),
    []
  );
  const onCompanyHeadCountChange = useCallback(
    (v) => dispatch({ type: 'onChange', key: 'companyHeadCount', value: v }),
    []
  );
  const onCompanyNameChange = useCallback(
    (v) => dispatch({ type: 'onChange', key: 'companyName', value: v }),
    []
  );
  const onContactEmailChange = useCallback(
    (v) => dispatch({ type: 'onChange', key: 'contactEmail', value: v }),
    []
  );
  const onContactNameChange = useCallback(
    (v) => dispatch({ type: 'onChange', key: 'contactName', value: v }),
    []
  );
  const onContactPhoneNumberChange = useCallback(
    (v) => dispatch({ type: 'onChange', key: 'contactPhoneNumber', value: v }),
    []
  );
  const onContactPhoneNumberCountryCodeChange = useCallback(
    (v) =>
      dispatch({
        type: 'onChange',
        key: 'contactPhoneNumberCountryCode',
        value: v,
      }),
    []
  );
  const onReset = useCallback(() => dispatch({ type: 'reset' }), []);

  return {
    onAgreedToPrivacyPolicyChange,
    onCompanyHeadCountChange,
    onCompanyNameChange,
    onContactEmailChange,
    onContactNameChange,
    onContactPhoneNumberChange,
    onContactPhoneNumberCountryCodeChange,
    onReset,
    values: state,
  };
}

export default useContactFormState;
