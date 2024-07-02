import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settingsStore', {
    state: ()=>({
        mainSettings: {
            onEew: {
                notification: false,
                sound: false,
                focus:false,
            },
            onEewWarn: {
                notification: false,
                sound: false,
                focus:false,
            },
            onReport: {
                notification: false,
                sound: false,
                focus:false,
            },
            muteNotification: false,
            soundEffect: 'srev',
            autoShowMap: false,
            showAbout: false,
        },
    }),
    getters: {
        requestNotification: (state)=>(
            state.mainSettings.onEew.notification || 
            state.mainSettings.onEewWarn.notification || 
            state.mainSettings.onReport.notification
        ),
    },
    actions: {
        setMainSettings(jsonString){
            if(jsonString){
                Object.assign(this.mainSettings, JSON.parse(jsonString))
            }
        },
    }
})
