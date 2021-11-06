export function getFormattedOrganiser(organiser) {
  const disallowedKeys = ['password'];

  const formattedOrganiser = {};

  Object.entries(organiser).forEach(([key, val]) => {
    const isDisallowed = disallowedKeys.includes(key);
    if (isDisallowed) {
      return;
    }

    let formattedValue = val;

    if (key === 'email_verified') {
      formattedValue = Boolean(val);
    }

    formattedOrganiser[key] = formattedValue;
  });

  return formattedOrganiser;
}
