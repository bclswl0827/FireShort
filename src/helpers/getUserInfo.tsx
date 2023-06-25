import userRequest from "./userRequest";

export interface Result {
    ua: string | "";
    country: string | "Unknown";
    ip: string | "0.0.0.0";
}

const getUserInfo = async (): Promise<Result> => {
    const ipAPIs = [
        "https://ipwho.is",
        "https://ipinfo.io/json",
        "https://ipapi.co/json",
        "https://ip.nf/me.json",
        "https://ip-api.io/json",
        "https://freeipapi.com/api/json",
        "https://api.wolfx.jp/geoip.php",
        "https://www.geoplugin.net/json.gp",
    ];

    const { userAgent } = navigator;
    for (let api of ipAPIs) {
        try {
            const res = await userRequest({
                url: api,
                method: "get",
            });

            const {
                // Possible keys for country
                country_name,
                countryName,
                country,
                geoplugin_countryName,
                // Possible keys for ip
                ip,
                query,
                ipAddress,
                geoplugin_request,
            } = res.data;
            return {
                ua: userAgent,
                country:
                    country ||
                    countryName ||
                    country_name ||
                    geoplugin_countryName,
                ip: ip || query || ipAddress || geoplugin_request,
            };
        } catch {
            continue;
        }
    }

    return {
        ua: userAgent,
        country: "Unknown",
        ip: "0.0.0.0",
    };
};

export default getUserInfo;
