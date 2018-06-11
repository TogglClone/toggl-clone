module.exports = {
    handleTimeDifference(difference){
        if(isNaN(difference)){
            return "Error! Input must be a number"
        }
        
        let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
        let minutes = Math.floor((difference % (60 * 60)) / (60))
        let seconds = Math.floor(difference % 60)
        
        if(seconds < 10){
            seconds = '0' + seconds
        }
        if(minutes < 10){
            minutes = '0' + minutes
        }
        return {
            seconds: seconds,
            minutes: minutes,
            hours: hours
        }
    }
}
