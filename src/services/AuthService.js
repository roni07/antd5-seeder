import publicAPI from "../rest_handlers/publicAPI";
import {USER_REFRESH_TOKEN, USER_SIGNIN_URL} from "../configs/APIUrl";

export default class AuthService {

    static login = data => publicAPI.post(USER_SIGNIN_URL, data);

    static refreshToken = async refreshToken => {
        try {
            const res = await publicAPI.post(USER_REFRESH_TOKEN, null, {
                headers: {
                    'refresh-token': refreshToken
                }
            });
            return res.data;
        } catch (err) {
            console.error(err);
            return null;
        }
    }

}
