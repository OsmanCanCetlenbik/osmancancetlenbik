
var express = require('express');
var router = express.Router();
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
    { 'baslik': 'Anasayfa',
      'sayfaBaslik':{
         'siteAd':'Mekan32',
         'aciklama':'Isparta civarındaki mekanları keşfedin!'
      },
      'mekanlar':[
        {
          'ad':'Starbucks',
          'adres':'Centrum Garden',
          'puan':'3',
          'imkanlar':['kahve','çay','pasta'],
          'mesafe':'10km'
        },
        {
          'ad':'Gloria Jeans',
          'adres':'SDU Doğu Kampüsü',
          'puan':'8',
          'imkanlar':['kahve','çay','kek'],
          'mesafe':'5km'
        },
        {
          'ad':'Terra Pizza',
          'adres':'Centrum Garden',
          'puan':'4',
          'imkanlar':['burger','kola','patates'],
          'mesafe':'10km'
        },
        {
          'ad':'Harman Etli Ekmek Kebap',
          'adres':'Iyaş AVM',
          'puan':'3',
          'imkanlar':['kahvaltı','simit','çay'],
          'mesafe':'12km'
        },
        {
          'ad':'Mado',
          'adres':'Iyaş AVM',
          'puan':'6',
          'imkanlar':['dondurma','tatlı','içecek'],
          'mesafe':'5km'
        }
      ]
    });
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay',{
      'baslik':'Mekan Bilgisi',
      'sayfaBaslik':'Starbucks',
      'mekanBilgisi':{
          'ad':'Starbucks',
          'puan':3,
          'imkanlar':['kahve','çay','pasta'],
          'koordinatlar':{
              'enlem':37.781885,
              'boylam':30.566034
          },
          'saatler':[
              {
                'gunler':'Pazartesi-Cuma',
                'acilis':'7:00',
                'kapanis':'23:00',
                'kapali':false
              },
              {
                'gunler':'Cumartesi',
                'acilis':'9:00',
                'kapanis':'22:30',
                'kapali':false
              },
              {
                'gunler':'Pazar',
                'kapali':true
              }
            ],
            'yorumlar':[
                {
                  'yorumYapan':'Osman Can ÇETLENBİK',
                  'puan':4,
                  'tarih':'1.12.2020',
                  'yorumMetni':'Yerinde içerseniz güzel fakat çekirdek kahveleri kötü.'
                }
            ]
      }
  });
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}


module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}