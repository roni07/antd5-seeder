import {useLocation} from 'react-router-dom';
import Permission from "./Permission";
import moment from "moment";
import {ACCESS_TOKEN} from "./Constant";

export const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

export const getParams = (query, data) => {
    for (const key of Object.keys(data)) {
        data = {...data, [key]: query.get(key) || ""}
    }
    return data;
}

export const isValueExistInSearch = (data) => {

    for (const key of Object.keys(data)) {
        if (data[key]) {
            return ["1"];
        }
    }
    return ["0"];
}

export const getBase64Image = (data) => {
    const base64 = btoa(
        new Uint8Array(data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
        ),
    );

    return "data:;base64," + base64;
}

export const bindUrlWithParams = (url, params) => {
    let result = url;

    Object.keys(params).forEach(key => {
        if (!params[key]) {
            delete params[key];
        }
    });

    Object.keys(params).forEach((key, index) => {

        if (index === 0) {
            result += `?${key}=${params[key]}`;
        } else {
            result += `&${key}=${params[key]}`;
        }

    });

    return result;
}

export const getFullPreviousRoute = (history) => {
    return `${history.location.pathname}${history.location.search}`;
}

export const resetState = (data) => {
    for (const key of Object.keys(data)) {
        data = {...data, [key]: ""}
    }
    return data;
}

export const getAllNonObjectValues = (data) => {

    let singleValue = {};

    for (const [key, value] of Object.entries(data)) {
        if (typeof value !== "object") {
            singleValue[key] = value;
        }
    }
    return singleValue;
}

export const getAllNestedObjectValues = (data) => {
    let singleValue = [];

    for (const value of Object.values(data)) {
        if (value && typeof value === "object") {
            singleValue.push(value);
        }
    }
    return singleValue
}

export const getPercentageValue = (value, percent) => {
    return (value * percent) / 100;
}

export const hasPermission = (loggedInUserPermissions, permissions) => {

    if (!permissions) {
        return false;
    }

    if (permissions.includes(Permission.ALL)) {
        return true;
    }

    if (!loggedInUserPermissions) {
        return false;
    }

    for (const permission of permissions) {

        if (loggedInUserPermissions.includes(permission)) {
            return true;
        }

    }

    return false;
}

export const apiUserAuth = () => {
    return {
        // Authorization: "Basic " + Buffer.from("shamim:aA12456").toString("base64")
        Authorization: "Basic dXNlcjp1c2Vy"
        // Authorization: "Basic " + btoa("shamim:aA12456")
    }
}

export const authorizationHeader = () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    return {"Authorization": `Bearer ${accessToken}`};
}

export const getErrorMessage = (error) => {
    if (error.response) {

        if (error.response.data) {
            return error.response.data.message || error.response.data.error;
        }

        return error.response.data;
    } else {
        return error.message;
    }
    // try {
    //     const msg = error.response.data.detail || error.response.data.message;
    //     if (typeof msg === "string") {
    //         return msg;
    //     }
    //     return "Something went wrong."
    // } catch (e) {
    //     return "Something went wrong."
    // }
}

export const isRepresentativePresent = (value) => {

    if (!value) {
        return false;
    }

    const {rep_name, rep_mobile_code, rep_mobile, rep_email} = value;
    return !!(rep_name || rep_mobile_code || rep_mobile || rep_email);
}

export const checkUserType = (profile, type) => {
    return profile && profile.userType === type;
}

export const toDate = (dateTime) => {
    return moment(dateTime).format("MM-DD-YYYY")
}

export const parseDateToMoment = (date) => {
    return moment(moment(date).format("YYYY-MM-DD HH:mm:ss"))
}

export const phoneNumberConcat = (mobileCode, phoneNumber) => {
    return `${mobileCode}-${phoneNumber}`;
}

export const phoneNumberParse = mobileNumber => {

    const split = mobileNumber.split("-");

    return {
        mobileCode: split[0],
        mobileNumber: split[1],
    }
}
