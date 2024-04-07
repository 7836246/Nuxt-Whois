import {defineStore} from 'pinia'
import {front} from "~/apis/index";

export const useStyleStore = defineStore('useStyleStore', {
    state: () => {
        return {
            common: {
                primaryColor: '#316C72FF',
                primaryColorHover: '#316C72E3',
                primaryColorPressed: '#2B4C59FF',
                primaryColorSuppl: '#316C72E3',

                infoColor: '#2080F0FF',
                infoColorHover: '#4098FCFF',
                infoColorPressed: '#1060C9FF',
                infoColorSuppl: '#4098FCFF',

                successColor: '#18A058FF',
                successColorHover: '#36AD6AFF',
                successColorPressed: '#0C7A43FF',
                successColorSuppl: '#36AD6AFF',

                warningColor: '#F0A020FF',
                warningColorHover: '#FCB040FF',
                warningColorPressed: '#C97C10FF',
                warningColorSuppl: '#FCB040FF',

                errorColor: '#D03050FF',
                errorColorHover: '#DE576DFF',
                errorColorPressed: '#AB1F3FFF',
                errorColorSuppl: '#DE576DFF',
            },
        }
    },
    actions: {
        updatePrimaryColor(common: any) {
            this.common.primaryColor = common.primaryColor;
            this.common.primaryColorHover = common.primaryColorHover;
            this.common.primaryColorPressed = common.primaryColorPressed;
            this.common.primaryColorSuppl = common.primaryColorSuppl;

            this.common.infoColor = common.infoColor;
            this.common.infoColorHover = common.infoColorHover;
            this.common.infoColorPressed = common.infoColorPressed;
            this.common.infoColorSuppl = common.infoColorSuppl;

            this.common.successColor = common.successColor;
            this.common.successColorHover = common.successColorHover;
            this.common.successColorPressed = common.successColorPressed;
            this.common.successColorSuppl = common.successColorSuppl;

            this.common.warningColor = common.warningColor;
            this.common.warningColorHover = common.warningColorHover;
            this.common.warningColorPressed = common.warningColorPressed;
            this.common.warningColorSuppl = common.warningColorSuppl;
        },
    },
    getters: {},
    persist: {
        storage: persistedState.cookiesWithOptions({
            sameSite: 'strict',
        }),
    },
})
