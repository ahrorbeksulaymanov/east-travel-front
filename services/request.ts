import instance from "@/congif/axios";


export interface IStateParams {
    perPage: number,
    currentPage: number,
}

type TypeGetAll = <T>({ url, urlParams, _params }: { url: string, urlParams?: IStateParams, _params?: Record<string | number, any> }) => Promise<T>

export const getAll: TypeGetAll = async ({ url, urlParams, _params }) => {

    let params: Record<string | number, any> = {}

    if (urlParams) {
        const { perPage, currentPage } = urlParams;
        params = {
            'per-page': perPage,
            page: currentPage,
            ..._params
        }
    } else {
        params = { ..._params }
    }


    const response = await instance({ url, method: 'GET', params });

    return response.data.data;

}