import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const usePresStore = defineStore('Pres', () => {
  const Eltham = ref({
      HDMI: {
        conected: true,
        HDCP: false,
        resolution: '1920 x 1080',
      },
      Airmedia: {
        IPadress: '10.0.0.xxx',
        Code: '1988',
        Hostname: 'Eltham-Room',
        numUsers: 2,
      },
    }),
    Mitcham = ref({
      HDMI: {
        conected: false,
        HDCP: false,
        resolution: '1280 x 720',
      },
      Airmedia: {
        IPadress: '10.0.0.xxx',
        Code: '1234',
        Hostname: 'Mitcham-Room',
        numUsers: 0,
      },
    }),
    Melbourne = ref({
      HDMI: {
        conected: false,
        HDCP: false,
        resolution: '1920 x 1080',
      },
      Airmedia: {
        IPadress: '10.0.0.xxx',
        Code: '0000',
        Hostname: 'Melbourne-Room',
        numUsers: 0,
      },
    })

  return {
    Eltham,
    Mitcham,
    Melbourne,
  }
})
