import { IRootState } from "./store";
import { DeviceType } from "./store/modules/app";

export const appSettings: IRootState = {
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