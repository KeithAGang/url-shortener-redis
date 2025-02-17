export interface request  {
    url: string,
    short: string
}

export type response = {
    
        URL             : string,    
        CustormShort    : number,
        Expiry          : number,
        XRateRemaining  : number,
        XRateLimitReset : number
    
}