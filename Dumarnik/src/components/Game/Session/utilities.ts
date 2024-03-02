function displayTimer(secs: number) {
    if (secs % 60 < 10) {
        return `${Math.floor(secs / 60)}:0${secs % 60}`;
    } else {
        return `${Math.floor(secs / 60)}:${secs % 60}`;
    }
}

export default displayTimer;