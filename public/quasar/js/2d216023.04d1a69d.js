(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d216023"],{c143:function(n,r,a){!function(r,a){n.exports=a()}(0,(function(){"use strict";var n,r={name:"az",messages:{_default:function(n){return n+" göstəricisi yalnışdır"},after:function(n,r){var a=r[0];return n+" yalnız "+a+" tarixindən sonra"+(r[1]?", və ya "+a+" tarixində ":" ")+"ola bilər"},alpha:function(n){return n+" yalnız hərflərdən ibarət olmalıdır"},alpha_dash:function(n){return n+" yalnız hərflər, rəqəmlər və defisdən ibarət ola bilər"},alpha_num:function(n){return n+" yalnız rəqəmlərdən ibarət ola bilər"},alpha_spaces:function(n){return n+" yalnız rəqəmlərdən və ara simvolundan (space) ibarət ola bilər"},before:function(n,r){var a=r[0];return n+" yalnız "+a+" tarixindən öncə"+(r[1]?", və ya "+a+" tarixində ":" ")+"ola bilər"},between:function(n,r){return n+" yalnız "+r[0]+" və "+r[1]+" arası ola bilər"},confirmed:function(n){return n+" təsdiqləməsi yalnışdır"},credit_card:function(n){return n+" göstəriciləri düzgün daxil olunmayıb"},date_between:function(n,r){return n+" "+r[0]+" və "+r[1]+" arası olmalıdır"},date_format:function(n,r){return n+" "+r[0]+" formatında olmalıdır"},decimal:function(n,r){void 0===r&&(r=[]);var a=r[0];return void 0===a&&(a="*"),n+" yalnız rəqəmlərdən"+(a&&"*"!==a?" və nöqtədən sonra "+a+" onluq ədəddən":"")+" ibarət ola bilər"},digits:function(n,r){return n+" "+r[0]+" rəqəmdən ibarət olmalıdır"},dimensions:function(n,r){return n+" ölçüsü "+r[0]+"x"+r[1]+" piksel olmalıdır"},email:function(n){return n+" düzgün formatda daxil olunmalıdır"},excluded:function(n){return n+" göstəricisi yalnışdır"},ext:function(n){return n+" düzgün fayl formatında olmalıdır"},image:function(n){return n+" şəkil olmalıdır"},included:function(n){return n+" göstəricisi yalnışdır"},integer:function(n){return n+" göstəricisi tam ədəd olmalıdır"},ip:function(n){return n+" IP ünvanı düzgün formatda daxil olunmayıb"},length:function(n,r){var a=r[0],t=r[1];return t?n+" uzunluğu "+a+" və "+t+" arası olmalıdır":n+" uzunluğu "+a+" olmalıdır"},max:function(n,r){return n+" uzunluğu ən çox "+r[0]+" simvoldan ibarət ola bilər"},max_value:function(n,r){return n+" göstəricisi ən çox "+r[0]+" və ya daha az olmalıdır"},mimes:function(n){return n+" formatı yalnışdır"},min:function(n,r){return n+" uzunluğu ən az "+r[0]+" simvoldan ibarət olmalıdır"},min_value:function(n,r){return n+" göstəricisi minimum "+r[0]+" və ya daha çox olmalıdır"},numeric:function(n){return n+" yalnız rəqəmlərdən ibarət olmalıdır"},regex:function(n){return n+" formatı yalnışdır"},required:function(n){return n+" əlavə etmək zəruridir"},size:function(n,r){return n+" həcmi "+function(n){var r=1024,a=0===(n=Number(n)*r)?0:Math.floor(Math.log(n)/Math.log(r));return 1*(n/Math.pow(r,a)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][a]}(r[0])+" və daha az olmalıdır"},url:function(n){return n+" düzgün URL formatında daxil olunmalıdır"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((n={})[r.name]=r,n)),r}))}}]);