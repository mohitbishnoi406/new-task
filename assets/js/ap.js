let add = document.querySelector( ".add" );
let save = document.querySelector( ".save" );
let output = document.querySelector( ".output" );
let savetxt = document.querySelector( ".savetxt" );
let reset = document.querySelector( ".reset" );

add.addEventListener( "click", function ()
{
    output.innerHTML = +output.innerHTML + 1;
    save.classList.replace( "notallow", "save" );
} );
save.addEventListener( "click", function ()
{
    if ( output.innerHTML == 0 )
    {
        save.classList.replace( "save", "notallow" );
    } else
    {
        if ( savetxt.innerHTML == 0 )
        {
            savetxt.innerHTML = output.innerHTML;
        } else{
            savetxt.innerHTML += "," + output.innerHTML;
        }
        output.innerHTML = 0;
    }
} );
reset.addEventListener( "click", function ()
{
    output.innerHTML = 0;
    savetxt.innerHTML = 0;
    save.classList.replace( "notallow", "save" );

} );