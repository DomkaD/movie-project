import {axiosInstance, AxiosRes} from "./axios.service";

import {IAccountDetail} from "../interfaces";
import {_urls} from "../configs";

const accountService = {
    getDetails: (session_id: string): AxiosRes<IAccountDetail> => axiosInstance.get(_urls.account + '?session_id=' + session_id),
}

export {accountService}
