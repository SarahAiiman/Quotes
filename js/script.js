$(document).on('mouseover' , '.container .section' , function() 
{
    $(this).addClass('active').siblings().removeClass('active')
})