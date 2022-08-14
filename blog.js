

let dataBlog = []
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById("projek").value
    let sdate = document.getElementById("startdate").value
    let edate = document.getElementById("enddate").value
    let describe = document.getElementById("descrip").value
    let image = document.getElementById("input-blog-image").files

    let nodejs = document.getElementById("ICBnoj").checked
    if(nodejs){
        nodejs = document.getElementById("ICBnoj").value
    } else {
        nodejs = ''
    }

    let reactjs = document.getElementById("ICBrej").checked
    if(reactjs){
        reactjs = document.getElementById("ICBrej").value
    } else {
        reactjs = ''
    }

    let nextjs = document.getElementById("ICBnej").checked
    if(nextjs){
        nextjs = document.getElementById("ICBnej").value
    } else {
        nextjs = ''
    }    

    let typescript = document.getElementById("ICBts").checked
    if(typescript){
        typescript = document.getElementById("ICBts").value
    } else {
        typescript = ''
    }    

    image = URL.createObjectURL(image[0])

    console.log(nodejs);
    console.log(reactjs);
    console.log(nextjs);
    console.log(typescript);

    let blog = {
        title,
        sdate,
        edate,
        describe,
        image,
        nodejs,
        reactjs,
        nextjs,
        typescript,
        postAt: new Date(),
        // duration : getDistanceTime((sdate),(edate))
    }

    dataBlog.push(blog)

    console.log(dataBlog);

    renderBlog()
}


function renderBlog() {
    console.log(dataBlog.length);
    document.getElementById("contents").innerHTML = ""
    for (let index = 0; index < dataBlog.length; index++) {
        console.log(dataBlog[index]);
        document.getElementById("contents").innerHTML += 
        `
        <div class="kotak-BP">
            <img src="${dataBlog[index].image}" alt="cutecat">
            <div class="BP-info">
                <div class="BP-title">
                    <p>${dataBlog[index].title}</p>
                </div>
                <div class="BP-duration">
                    <p>posted at : ${getFullTime(dataBlog[index].postAt)}</p>
                </div>
                <div class="BP-detail">
                    <p>
                        ${dataBlog[index].describe}
                    </p>
                </div>
            </div>
            <div class="BP-icon">
                <div>
                <i class="fa-brands fa-${dataBlog[index].nodejs} fa-2xl"></i>
                </div>
                <div>
                <i class="fa-brands fa-${dataBlog[index].nextjs} fa-2xl"></i>
                </div>
                <div>
                <i class="fa-brands fa-${dataBlog[index].reactjs} fa-2xl"></i>
                </div>
                <div>
                <i class="fa-brands fa-${dataBlog[index].typescript} fa-2xl"></i>
                </div>
            </div>

            <div class="BP-button">
                <div class="BP-button-edit">
                    <button>edit</button>
                </div>
                <div class="BP-button-delete">
                    <button>delete</button>
                </div>
            </div>
        </div>
        `
    }

}

function getFullTime(time){

    let month = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"]

    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minutes = time.getMinutes()

    // console.log(date);
    // console.log(month[monthIndex]);
    // console.log(year);

    // console.log(hours);
    // console.log(minutes);

    if(hours < 10){
        hours = "0" + hours
    }else if(minutes < 10){
        minutes = "0" + minutes
    }
    
    // 12 Agustus 2022 09.04
    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
    // console.log(fullTime);
    return fullTime
}

// function getDistanceTime(sdate,edate){

//     let mulai = new Date(sdate)
//     let selesai = new Date(edate)

//     let duration = selesai - mulai
//     console.log(distance);

//     //1 month = 31 hari
//     //1 day = 84600 seconds
//     //1 day = 23 hours ( karna nda nyampe 24, 23.59 trus balik 00.00)
//     //1 hours = 3600 seconds
//     //1 hour = 60 minutes
//     //i minutes = 60 seconds
//     //1 second = 1000 milisecond


//     let distanceDay = Math.floor(duration / (1000 * 3600 * 23))
//     let distanceMonth = Math.floor(duration /  31)
//      // let distanceHours = Math.floor(duration / (milisecond * 60 * 60))
//     // let distanceMinutes = Math.floor(duration / (milisecond * 60))
//     // let distanceSeconds = Math.floor(duration / milisecond)

//     if(distanceMonth <= 0){
//         return distanceDay + "Hari"
//     }else {
//         return distanceMonth + "Bulan"
//     }
//     // } else if(distanceHours > 0){
//     //     return distanceHours + "Jam"
//     // } else if(distanceMinutes > 0){
//     //     return distanceMinutes + "Menit"
//     // } else {
//     //     return distanceSeconds + "Detik"
//     // }
// }