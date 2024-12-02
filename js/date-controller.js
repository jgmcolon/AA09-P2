function changeDate(){
    let actualYear = new Date().getFullYear()
    document.getElementById('footer-date').innerText = `${actualYear} EasyLoan. All Rights Reserved`
}
document.addEventListener('DOMContentLoaded', e => {
    console.log('content loaded')


    //Updating Dates
    changeDate()
})