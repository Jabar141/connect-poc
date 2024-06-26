import { PERMISSIONS, entryPointUriPath } from './src/constants';
 
/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'honda-custom-app-connect',
  entryPointUriPath,
  mcApiUrl: "https://mc.europe-west1.gcp.commercetools.com/honda-poc",
  cloudIdentifier: 'gcp-us',
  headers: {
    csp: {
      "connect-src": [
        "https://api.us-central1.gcp.commercetools.com",
        "https://auth.us-central1.gcp.commercetools.com",
        "https://mc-api.us-central1.gcp.commercetools.com/graphql"
      ]
    }
  },
  env: {
    development: {
      initialProjectKey: 'honda-poc',
    },
    production: {
      applicationId: 'clxvehcqz001811rzbnir3gq7',
      url: 'https://connect-honda-poc.com',
    },
  },
  oAuthScopes: {
    view: ['view_customers'],
    manage: ['manage_customers'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Custom Object',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View, PERMISSIONS.Manage],
  },
  submenuLinks: [
    {
      uriPath: 'customobject',
      defaultLabel: 'Custom Object',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View, PERMISSIONS.Manage],
    },
  ],
};
 
export default config;