function kimTuThap(){
    let i = 1;

    while (i < 100) {
        //phân thân vòng lặp
        document.write("<hr width = " + i + "%>");
        i++;
    }
}

function bai1(){
    let i=+0;
    let j=+0;
    while(i!=-1){
        i= +prompt('nhap 1 so', '');
        j+= i;
        document.write('tong cac so duoc nhap la: ' + j +'<br>');
    }
}