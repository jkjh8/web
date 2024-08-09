module.exports = {
  gStatus: {
    version: '',
    ttsAddress: 'http://127.0.0.1:9998',
    bridge: { connected: false, id: '', lastupdate: '' },
    scheduler: {
      main: { connected: false, id: '', lastupdate: '' },
      backup: { connected: false, id: '', lastupdate: '' },
      active: 'main',
      auto: false
    },
    defaultFolder: __dirname,
    mediaFolder: '',
    interval: 50,
    gainStep: 2,
    mode: 'Normal',
    activeMode: 'main',
    backupId: '',
    backupAddress: '',
    backupActive: false,
    voice: '',
    relayOnTime: 5,
    ttsMode: 'sapi',
    backupFile: false
  }
}
