import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
/**
 * The DropDownTree component contains a list of predefined values from which you can choose a single or multiple values.
 * ```html
 * <ejs-dropdowntree></ejs-dropdowntree>
 * ```
 */
export declare class DropDownTreeComponent extends ComponentBase {
    ej2Instances: any;
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    protected hasInjectedModules: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    constructor();
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    render(createElement: any): any;
    clear(): void;
    ensureVisible(item: string | Object): void;
    getData(item?: string | Object): undefined[];
    getLocaleName(): string;
    hidePopup(): void;
    selectAll(state: boolean): void;
    showPopup(): void;
}
export declare const DropDownTreePlugin: {
    name: string;
    install(Vue: any): void;
};
