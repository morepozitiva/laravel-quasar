(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0cba78"],{"4b1e":function(a,r,n){!function(r,n){a.exports=n()}(0,(function(){"use strict";var a,r={name:"tr",messages:{after:function(a,r){return a+" "+r[0]+" alanından ileri bir tarih olmalıdır"},alpha:function(a){return a+" yalnızca harf içerebilir"},alpha_dash:function(a){return a+" alanı harf ve tire (-) ya da alttan tire (_) içerebilir"},alpha_num:function(a){return a+" yalnızca harf ve rakam içerebilir"},alpha_spaces:function(a){return a+" yalnızca harf boşluk (space) içerebilir"},before:function(a,r){return a+" "+r[0]+" alanından önce bir tarih olmalıdır"},between:function(a,r){return a+" "+r[0]+" ile "+r[1]+" aralığında olmalıdır"},confirmed:function(a){return a+" doğrulaması hatalı"},credit_card:function(a){return a+" numarası hatalı"},date_between:function(a,r){return a+" "+r[0]+" ile "+r[1]+" tarihleri arasında olmalıdır"},date_format:function(a,r){return a+" "+r[0]+" formatında olmalıdır"},decimal:function(a,r){void 0===r&&(r=[]);var n=r[0];return void 0===n&&(n="*"),a+" sayısal"+("*"!==n?" ve noktadan sonra "+n+" basamaklı":"")+" olmalıdır"},digits:function(a,r){return a+" sayısal ve "+r[0]+" basamaklı olmalıdır"},dimensions:function(a,r){return a+" alanı "+r[0]+" piksel ile "+r[1]+" piksel arasında olmalıdır"},email:function(a){return a+" alanının geçerli bir e-posta olması gerekir"},excluded:function(a){return a+" alanına geçerli bir değer giriniz"},ext:function(a){return a+" alanı geçerli bir dosya olmalıdır"},image:function(a){return a+" alanı resim dosyası olmalıdır"},included:function(a){return a+" alanına geçerli bir değer giriniz"},ip:function(a){return a+" alanı geçerli bir ip adresi olmalıdır"},max:function(a,r){return a+" alanı "+r[0]+" karakterden fazla olmamalıdır"},max_value:function(a,r){return a+" alanı "+r[0]+" ya da daha az bir değer olmalıdır"},mimes:function(a){return a+" geçerli bir dosya olmalıdır"},min:function(a,r){return a+" alanına en az "+r[0]+" karakter girilmelidir"},min_value:function(a,r){return a+" alanı "+r[0]+" ya da daha fazla bir değer olmalıdır"},numeric:function(a){return a+" alanına sayısal bir değer giriniz"},regex:function(a){return a+" formatı geçersiz"},required:function(a){return a+" alanı gereklidir"},size:function(a,r){return a+" alanı "+function(a){var r=1024,n=0===(a=Number(a)*r)?0:Math.floor(Math.log(a)/Math.log(r));return 1*(a/Math.pow(r,n)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][n]}(r[0])+"'dan daha az olmalıdır"},url:function(a){return a+" geçersiz URL"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((a={})[r.name]=r,a)),r}))}}]);