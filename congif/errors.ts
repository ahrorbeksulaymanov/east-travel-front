import { message } from 'antd';
import { AxiosError } from 'axios';

export class ResponseError {
    error!: AxiosError

    constructor(error: AxiosError) {
        this.error = error;
        this.errors(error.response);
    }

    private errors(response: any) {
        switch (response?.status) {
            case 401:
                this[401]();
                break;
            case 403:
                this[403]();
                break;
            case 404:
                this[404]();
                break
            // case 422:
            //     this[422](response?.data);
            //     break
            // case 500:
            //     this[500]();
            //     break
            default:
                this.withoutStatusError()
        }
    }

    private 401(): void {
        message.warning("Tasdiqlanmagan foydalanuvchi!");
    }

    private 403(): void {
        message.warning("Faydalanish huquqi yo'q!");
    }

    private 404(): void {
        message.error("Ma'lumot topilmadi!");
    }

    private withoutStatusError() {
        // message.warning("warning")
        // // createBrowserHistory().push("/disconnect")
    }

}


export const error_401 = (err_message: Error) => {
    message.error(err_message?.message);
}

export const error_500 = (err_message: Error) => {
    message.error(err_message?.message);
}

export const error_403 = (err_message: Error) => {
    message.error(err_message?.message);
}

export const error_422 = (err_message: Error) => {
    message.error(err_message?.message);
}