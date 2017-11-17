export function formatLink( url ) {

	if ( CONFIG.baseURL ) {
		// remove trailing slash if present
		const baseURL = CONFIG.baseURL.replace( /\/$/, '' );
		// remove base URL
		url = url.replace( baseURL, '' );
	}

	return url;
}