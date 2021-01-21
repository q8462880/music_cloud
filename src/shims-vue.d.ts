/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    import * as lodash from 'lodash';
    const _: typeof lodash;
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

