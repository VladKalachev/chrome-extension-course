chrome.alarms.create({
  periodInMinutes: 1 / 60,
})

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer"], (res) => {
    const time = res.timer ?? 0;
    chrome.storage.local.set({
      timer: time + 1,
    })
    console.log(`${time + 1}`)
    chrome.action.setBadgeText({
      text: `${time + 1}`
    })
  })
})