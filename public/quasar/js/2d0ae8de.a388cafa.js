(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0ae8de"],{"0b0f":function(e,n,r){!function(n,r){e.exports=r()}(0,(function(){"use strict";var e,n={name:"da",messages:{_default:function(e){return e+" er ikke gyldig"},after:function(e,n){return e+" skal være efter "+n[0]},alpha:function(e){return e+" må kun indeholde bogstaver"},alpha_dash:function(e){return e+" må kun indeholde tal, bogstaver, bindestreger og underscores"},alpha_num:function(e){return e+" må kun indeholde tal og bogstaver"},alpha_spaces:function(e){return e+" må kun indeholde bogstaver og mellemrum"},before:function(e,n){return e+" skal være før "+n[0]},between:function(e,n){return e+" skal være mellem "+n[0]+" og "+n[1]},confirmed:function(e,n){return e+" skal matche "+n[0]},date_between:function(e,n){return e+" skal være mellem "+n[0]+" og "+n[1]},date_format:function(e,n){return e+" skal være i formatet: "+n[0]},decimal:function(e,n){void 0===n&&(n=[]);var r=n[0];return void 0===r&&(r="*"),e+" skal være numerisk og må maksimalt indeholde"+(r&&"*"!==r?" "+r:"")+" decimaler"},digits:function(e,n){return e+" skal være et tal på "+n[0]+" cifre"},dimensions:function(e,n){return e+" skal være "+n[0]+" pixels gange "+n[1]+" pixels"},email:function(e){return e+" skal være en gyldig email"},excluded:function(e){return e+" skal være en gyldig værdi"},ext:function(e){return e+" skal være en gyldig filtype"},image:function(e){return e+" skal være et billede"},included:function(e){return e+" skal være en gyldig værdi"},ip:function(e){return e+" skal være en gyldig ip-adresse"},max:function(e,n){return e+" må maksimalt være "+n[0]+" karakterer"},mimes:function(e){return e+" skal være en gyldig filtype"},min:function(e,n){return e+" skal minimum være "+n[0]+" karakterer"},numeric:function(e){return e+" skal være numerisk"},regex:function(e){return e+" skal have et gyldigt format"},required:function(e){return e+" skal udfyldes"},size:function(e,n){return e+" må maksimalt have en størrelse på "+function(e){var n=1024,r=0===(e=Number(e)*n)?0:Math.floor(Math.log(e)/Math.log(n));return 1*(e/Math.pow(n,r)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}(n[0])},url:function(e){return e+" skal være en gyldig URL"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n}))}}]);