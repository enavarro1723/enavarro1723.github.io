var arrLang = {

    'EN':{
        'about':'About me',
        'education':' Education',
        'experience':' Experience',
        'interests': ' Interests'
    },
    'ES':{
        'about': 'Sobre mi',
        'education':' Formación',
        'experience':' Experiencia',
        'interests': ' Intereses'
    }
}

$(function(){
    $('.translate').click(function(){
        var lang = $(this).attr('id');

        $('.lang').each(function(index,elemnent){
            $(this).text(arrLang[lang][$(this).attr('key')]);

        });

    });
});
