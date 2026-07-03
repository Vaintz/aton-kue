// Navbar Effect

window.addEventListener("scroll",function(){

    const navbar=document.querySelector(".custom-navbar");

    if(window.scrollY>50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
    topBtn.classList.toggle("show", window.scrollY > 300);
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}); 

// ================= Order Product =================

function pesanProduk(nama, harga) {
    const nomor = "6283142569029";

    const pesan =
`Halo Admin,

Saya ingin memesan produk:

Nama Produk : ${nama}
Harga        : ${harga}

Mohon informasi mengenai stok dan cara pemesanannya.
Terima kasih.`;

    window.open(
        `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`,
        "_blank"
    );
}