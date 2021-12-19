window.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.querySelector(".cart-button");
    const containerCart = document.querySelector(".cart__container");

    cartButton.addEventListener("click", () => { containerCart.classList.toggle("open") });

    /* window.addEventListener("click", (e) => {
        if (outsideClick(e, containerCart))
            containerCart.classList.remove("open");
        else
            console.log("test");
    }); */

});

function outsideClick(event, notelem) {

    let clickedOut = true,
        i, len = notelem.length;
    for (i = 0; i < len; i++) {
        if (event.target == notelem[i] || notelem[i].contains(event.target))
            clickedOut = false;
    }

    return clickedOut ? true : false;
}