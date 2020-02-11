$(".page-scroll").on("click", function(e){

    e.preventDefault();

  // ambil href
     var tujuan = $(this).attr("href");

     // tangkap elemen
     var elemenTujuan = $(tujuan);

     // pindahkan scroll
    
     $('html, body').animate({
         scrollTop: elemenTujuan.offset().top - 50
     }, 1250, 'easeInOutExpo');

    
});
