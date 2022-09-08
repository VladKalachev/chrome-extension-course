chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "isRunning"], (res) => {
    const time = res.timer ?? 0;
    const isRunning = res.isRunning ?? true;
    if(!isRunning) {
      return 
    }
    chrome.storage.local.set({
      timer: time + 1,
    })
    console.log(`${time + 1}`)
    chrome.action.setBadgeText({
      text: `${time + 1}`
    })
    chrome.storage.sync.get(["notificationTime"], (res) => {
      console.log(res);
      const notificationTime = res.notificationTime ?? 1000;
      console.log(time % notificationTime == 0);
      if (time % notificationTime == 0) {
         this.registration.showNotification("Chrome Timer Extention", {
          body: `${notificationTime} seconds has passed!`,
          icon: "icon.png"
        })
      }
    })
   
  })
})

