const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent = `The time is ${currentTime}`;

chrome.action.setBadgeText({
    text: 'TIME'
}, () => {
    console.log("Finished setting bade text.")
})