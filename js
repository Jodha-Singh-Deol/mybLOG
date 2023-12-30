<canvas id="myCanvas" width="800" height="400> </canvas>
canvas = document.getElementById('myCanvas');
ctx = canvas.getContex(" 2d"); greencar_width=75; greencar_height=100; greencar_x=5; greencar_y=225; function add() {
    background_imgTag=new Image(); background_imgTag.onload=uploadBackground background_imgTag.src=background_image;
    greencar_imgTag=new Image(); greencar_imgTag.onload=uploadgreencar; greencar_imgTag.src=greencar_image; } fun
    0.function uploadBackground()  {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

    }
function uploadgreencar()  {
    catx.drawImage(greencar_imgTag, greencar_x,greeencar_y, greencar_width, greencar_height);

}
    function up()
    {
        if(greencar_y >=0</canvas>)
    }

    greencar_y = greencar_y - 10;
    console.log("Whenup arrow is pressed, x =""+ greencar_x + "   y = "+greencar_y";)
    uplodebackground();
    uploadgreencar();
