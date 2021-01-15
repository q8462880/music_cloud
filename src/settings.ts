import { MyRootState } from "./store";
import { DeviceType } from "./store/modules/app";

export const appSettings: MyRootState = {
    app: {
        sideBar: {
            open: false,
            hasAnimation: true
        },
        device: DeviceType.Mobile,
        language: 'en',
        size: 'middle',
    },
    settings: {
        showSettings: false
    }
};