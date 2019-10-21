export function splitUrl ( url ) {
    let offset = ""
    if(url) {
        const urlPart = url.split("?");
        const second = urlPart[1].split('&');
        offset = second[0];
    }
    return offset;
}
