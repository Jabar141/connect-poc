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
        "https://api.europe-west1.gcp.commercetools.com",
        "https://auth.europe-west1.gcp.commercetools.com",
        "https://mc-api.europe-west1.gcp.commercetools.com/graphql"
      ]
    }
  },
  env: {
    development: {
      initialProjectKey: 'honda-poc',
    },
    production: {
      applicationId: 'clwsm4il2006rbxekr1hwtkco',
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