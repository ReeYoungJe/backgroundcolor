function randomColor (){
    let colorCode = "#" + Math.round(Math.random() * 0xffffff).toString(16);
    $('p').html('현재 색상은? ' + colorCode)
    $('.randomColor').css('background', colorCode)

}
