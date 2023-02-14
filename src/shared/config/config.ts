import {FetchImage} from "../../entities/image";

type Config = {
    server_url: string | undefined;
}

const config: Config = {
    server_url: process.env.REACT_APP_DEV ? process.env.REACT_APP_LOCAL_SERVER_URL : process.env.REACT_APP_SERVER_URL,
};

export {config};