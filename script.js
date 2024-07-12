let  qrContentInput = document.getElementById("qr-content");
let qrForm = document.getElementById("qr-form");
let qrCode;

function generateQrCode(qrContent){
    return new QRCode("qr-code",{
        text : qrContent,
        height : 256,
        width  : 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H,
    });
}
qrForm.addEventListener('submit',function(event){
    event.preventDefault();
    let qrContent = qrContentInput.value;
    if(qrCode == null){
        qrCode = generateQrCode(qrContent);
    }
    else{
        qrCode.makeCode(qrContent);
    }
})