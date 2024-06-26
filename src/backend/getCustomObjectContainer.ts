import { CustomObject } from "@commercetools/platform-sdk";
import { apiRoot, projectKey } from "./apiClient";

export async function fetchCustomObjectsContainer() {
    const customObjects: CustomObject[] = (await apiRoot.withProjectKey({ projectKey }).customObjects().get().execute()).body.results;

    const containerSet = new Set<string>;

    customObjects.forEach(async (customObject: CustomObject) => {
        containerSet.add(customObject.container);
    });

    console.log(containerSet);
    return Array.from(containerSet);

}