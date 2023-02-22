import {FetchImage} from "../../entities/image";

type Index = {
    server_url: string | undefined;
}

const config: Index = {
    server_url: process.env.REACT_APP_DEV ? process.env.REACT_APP_LOCAL_SERVER_URL : process.env.REACT_APP_SERVER_URL,
};

export {config};