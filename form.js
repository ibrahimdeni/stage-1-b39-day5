function submitData() {

    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

        if (name == "") {
            return alert("silahkan nama diisi terlebih dahulu")
        } else if (email == "") {
            return alert("silahkan email diisi terlebih dahulu")
        } else if (phone == "") {
            return alert("silahkan nomor telepon diisi terlebih dahulu")
        } else if (subject == "") {
            return alert("silahkan subject diisi terlebih dahulu")
        } else if (message == "") {
            return alert("silahkan message diisi terlebih dahulu")
        }

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);
    
    let emailReceiver = "ibrahimdeniharyanto@gmail.com"

    let a = document.createElement('a')
    a.href=`mailto:${emailReceiver}?subject=${subject}&body=Halo pak, maaf mengganggu waktu anda, perkenalkan nama saya ${name} saya berniat melamar di bagian ${subject}, jika kriteria saya sebagai ${subject} memenuhi, tolong hubungi saya ke ${phone}, dan ${email}. oh ya, saya ada pesan untuk bapak, berikut pesan saya ${message}.`
    a.click()

    }