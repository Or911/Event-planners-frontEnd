
const eventDateFormatIL = function(eventDate){
    return new Date(eventDate).toLocaleString('he-IL' , {dateStyle : "full"})
}

export {eventDateFormatIL}