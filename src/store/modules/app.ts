

import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '..';

export enum DeviceType {
    Mobile,
    Desktop,
}

export interface SideBar {
    open: boolean;
    hasAnimation: boolean;
}
export interface MyAppState {
    sideBar: SideBar;
    device: DeviceType;
    language: string;
    size: string;
}
@Module({ dynamic: true, store, name: 'AppState', })
class App extends VuexModule implements MyAppState {
    public sideBar = {
        open: false,
        hasAnimation: false
    };
    public device = DeviceType.Mobile;
    public language = 'en';
    public size = 'middle';

    @Mutation
    private TOGGLE_SIDEBAR(withoutAnimation: boolean) {
        this.sideBar.open = !this.sideBar.open;
        this.sideBar.hasAnimation = withoutAnimation;
    }

    @Mutation
    private CLOSE_SIDEBAR(withoutAnimation: boolean) {
        this.sideBar.open = false;
        this.sideBar.hasAnimation = withoutAnimation;
    }

    @Mutation
    private TOGGLE_DEVICE(device: DeviceType) {
        this.device = device;
    }

    @Mutation
    private SET_LANGUAGE(language: string) {
        this.language = language;
    }

    @Mutation
    private SET_SIZE(size: string) {
        this.size = size;
    }

    @Action
    public ToggleSideBar(withoutAnimation: boolean) {
        this.TOGGLE_SIDEBAR(withoutAnimation);
    }

    @Action
    public CloseSideBar(withoutAnimation: boolean) {
        this.CLOSE_SIDEBAR(withoutAnimation);
    }

    @Action
    public ToggleDevice(device: DeviceType) {
        this.TOGGLE_DEVICE(device);
    }

    @Action
    public SetLanguage(language: string) {
        this.SET_LANGUAGE(language);
    }

    @Action
    public SetSize(size: string) {
        this.SET_SIZE(size);
    }
}

export const AppModule = getModule(App);