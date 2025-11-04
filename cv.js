document.getElementById("downloadCv").addEventListener("click", function(){
   const link = document.createElement("a");
   link.href = "./subhendu resume 2.pdf";
    link.download = "subhendu resume 2.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});