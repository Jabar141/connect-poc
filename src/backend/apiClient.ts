//require('dotenv').config();
import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { ApiRoot, createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";
import fetch from "node-fetch";

export const projectKey = process.env.CTP_PROJECT_KEY ?? "";
const clientId = process.env.CTP_CLIENT_ID ?? "";
const clientSecret = process.env.CTP_CLIENT_SECRET ?? "";
const apiUrl = process.env.CTP_API_URL ?? "";
const authUrl = process.env.CTP_AUTH_URL ?? "";

const authMiddlewareOptions = {
    host: authUrl,
    projectKey,
    credentials: {
        clientId,
        clientSecret,
    },
    scopes: [`manage_project:${projectKey}`],
};

const httpMiddlewareOptions = {
    host: apiUrl,
    fetch,
};

const client = new ClientBuilder()
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withUserAgentMiddleware()
    .build();

export const apiRoot: ApiRoot = createApiBuilderFromCtpClient(client);

