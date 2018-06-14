import { Injectable } from '@angular/core';


@Injectable()
export class UrlResolverService {

    getServiceEndpointUrl(endpoint: string) {
        const currentUrl = location.href;
        let url;
        //grab the part of the path before the hash 
        if (currentUrl.indexOf('#') !== -1) {
            url = currentUrl.substring(0, currentUrl.lastIndexOf('#') - 1 );
        } else {
            url = currentUrl.substring(0, currentUrl.lastIndexOf('/') );
        }

        // allows the endpoint to have a leading slash or not
        if (!endpoint.startsWith('/')) {
            url = url + '/';
        }
        return url + endpoint ;
    }

}
