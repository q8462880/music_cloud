import { appSettings } from "@/settings";
import { createStore } from "vuex";
import { MyAppState } from "./modules/app";
import { ISettingsState } from "./modules/setting";
export interface IRootState {
    app: MyAppState;
    // user: IUserState;
    // tagsView: ITagsViewState;
    // errorLog: IErrorLogState;
    // permission: IPermissionState;
    settings: ISettingsState;
}

export default createStore<IRootState>({
    // state: appSettings,
    // mutations: {},
    // actions: {},
    // modules: {}
});

