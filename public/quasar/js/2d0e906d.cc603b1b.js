(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0e906d"],{"8c7c":function(e,n,t){!function(n,t){e.exports=t()}(0,(function(){"use strict";var e,n={name:"fi",messages:{after:function(e,n){return e+" tulee olla jälkeen "+n[0]},alpha:function(e){return e+" voi sisältää vain kirjaimia"},alpha_dash:function(e){return e+" voi sisältää vain kirajimia, numeroita, ja tavu-, tai alaviivoja"},alpha_num:function(e){return e+" voi sisältää vain kirjaimia ja numeroita"},before:function(e,n){return e+" tulee olla ennen "+n[0]},between:function(e,n){return"Kentän "+e+" tulee olla "+n[0]+" ja "+n[1]+" väliltä"},confirmed:function(e,n){return e+" ei vastannut "+n[0]},date_between:function(e,n){return e+" tulee olla "+n[0]+" ja "+n[1]+" väliltä"},date_format:function(e,n){return e+" tulee olla muodossa "+n[0]},decimal:function(e,n){void 0===n&&(n=[]);var t=n[0];return void 0===t&&(t="*"),e+" tulee olla numeerinen ja voi sisältää"+(t&&"*"!==t?" "+t:"")+" desimaalia"},digits:function(e,n){return e+" tulee olla numeerinen ja tarkalleen "+n[0]+" merkkiä"},dimensions:function(e,n){return e+" tulee olla "+n[0]+" pikseliä kertaa "+n[1]+" pikseliä"},email:function(e){return e+" tulee olla kelvollinen sähköpostiosoite"},excluded:function(e){return e+" tulee olla kelvollinen arvo"},ext:function(e){return e+" tulee olla kelvollinen tiedosto"},image:function(e){return e+" tulee olla kelvollinen kuva"},included:function(e){return e+" tulee olla kelvollinen arvo"},ip:function(e){return e+" tulee olla kelvollinen IP-osoite"},max:function(e,n){return e+" ei saa olla pidempi kuin "+n[0]+" merkkiä"},mimes:function(e){return e+" tulee olla kelvollinen tiedostotyyppi"},min:function(e,n){return e+" tulee olla vähintään "+n[0]+" merkkiä"},numeric:function(e){return e+" voi sisältää vain numeroita"},regex:function(e){return e+" tulee olla kelvollinen säännöllinen lauseke"},required:function(e){return e+" on pakollinen kenttä"},size:function(e,n){return e+" tulee olla vähemmän kuin "+function(e){var n=1024,t=0===(e=Number(e)*n)?0:Math.floor(Math.log(e)/Math.log(n));return 1*(e/Math.pow(n,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t]}(n[0])},url:function(e){return e+" tulee olla kelvollinen URL-osoite"}},attributes:{}};return"undefined"!=typeof VeeValidate&&VeeValidate.Validator.localize(((e={})[n.name]=n,e)),n}))}}]);