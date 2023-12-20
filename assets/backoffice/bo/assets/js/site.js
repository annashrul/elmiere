function setSite(data){
    localStorage.setItem('site', JSON.stringify(data));
}

function getSite(){
    var retrievedObject = localStorage.getItem('site');
    var res=JSON.parse(retrievedObject);
    $(".titleSite").html(toCammelCase(res.nama));
    $("#logoSite").attr("src",base_assets + res.gambar);
    $('.iconSite').attr('href', base_assets+res.icon);
}

function toCammelCase(str){
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
        return $1.toUpperCase();
    });
}
