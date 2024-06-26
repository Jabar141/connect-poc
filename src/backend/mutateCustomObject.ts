import { CustomObject } from "@commercetools/platform-sdk";
import { apiRoot, projectKey } from "./apiClient";

export async function mutateCustomObject(key: string, container: string, version: number| null, data: Object): Promise<CustomObject>{
    //Update Case
    if(version !== null){
        return (await apiRoot.withProjectKey({projectKey}).customObjects().post(
            {
                body:{
                    key,
                    version,
                    container,
                    value: data
                }
            }
        ).execute()).body;
    }
    //Create new Custom Object
    else{
        return (await apiRoot.withProjectKey({projectKey}).customObjects().post(
            {
                body:{
                    key,
                    container,
                    value: data
                }
            }
        ).execute()).body;
    }
}