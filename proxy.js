var DIRECT = "DIRECT";
var BLACK = "PROXY 8.8.8.8:53";

function d(h, r) {
    return dnsDomainIs(h, r);
}

function FindProxyForURL(url, host) {
    var h = host.toLowerCase();
    if (d(h,"tpc.googlesyndication.com")) {
        return BLACK;
    }
    return PROXY_DIRECT;
}
