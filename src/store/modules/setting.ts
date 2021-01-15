import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
export interface ISettingsState {
    // theme: string
    // fixedHeader: boolean
    showSettings: boolean;
    // showTagsView: boolean
    // showSidebarLogo: boolean
    // sidebarTextTheme: boolean
}
@Module({ dynamic: true, store, name: 'settings' })
class Setting extends VuexModule implements ISettingsState {
    public showSettings = false;

    @Mutation
    private CHANGE_SETTING(payload: { key: string, value: any; }) {
        const { key, value } = payload;
        if (Object.prototype.hasOwnProperty.call(this, key)) {
            (this as any)[key] = value;
        }
    }

    @Action
    public ChangeSetting(payload: { key: string, value: any; }) {
        this.CHANGE_SETTING(payload);
    }
}

export const SettingsModule = getModule(Setting);


