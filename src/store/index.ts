import { appSettings } from "@/settings";
import { createStore } from "vuex";
import { MyAppState } from "./modules/app";
import { MySettingsState } from "./modules/setting";
export interface MyRootState {
    app: MyAppState;
    // user: IUserState;
    // tagsView: ITagsViewState;
    // errorLog: IErrorLogState;
    // permission: IPermissionState;
    settings: MySettingsState;
}

export default createStore<MyRootState>({
    // state: appSettings,
    // mutations: {},
    // actions: {},
    // modules: {}
});

