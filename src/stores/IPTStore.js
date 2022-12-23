import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIPTStore = defineStore('IPT', () => {
  const devices = ref([
    {
      IPID: '11',
      name: 'LCD 1 TCP/IP',
      IPaddress: '10.100.0.2',
      conected: true,
    },
    {
      IPID: '12',
      name: 'LCD 2 TCP/IP',
      IPaddress: '10.100.0.3',
      conected: true,
    },
    {
      IPID: '13',
      name: 'LCD 3 TCP/IP',
      IPaddress: '10.100.0.4',
      conected: false,
    },
    {
      IPID: '14',
      name: 'LCD 4 TCP/IP',
      IPaddress: '10.100.0.5',
      conected: true,
    },
    {
      IPID: '15',
      name: 'LCD 5 TCP/IP',
      IPaddress: '10.100.0.6',
      conected: true,
    },
    {
      IPID: '16',
      name: 'LCD 6 TCP/IP',
      IPaddress: '10.100.0.7',
      conected: true,
    },
  ])

  return { devices }
})
