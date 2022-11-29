export interface tokenProps {
    jti: string
    role: 'admin' | 'common'
    unique_name: string
    sid: string
}

export function parseJwt (token: string | null): tokenProps {
    var base64Url: any = token?.split('.')[1];
    var base64: any = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload: any = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}