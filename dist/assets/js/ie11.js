$().ready(function(){var ie10Styles=['msTouchAction','msWrapFlow','msWrapMargin','msWrapThrough','msOverflowStyle','msScrollChaining','msScrollLimit','msScrollLimitXMin','msScrollLimitYMin','msScrollLimitXMax','msScrollLimitYMax','msScrollRails','msScrollSnapPointsX','msScrollSnapPointsY','msScrollSnapType','msScrollSnapX','msScrollSnapY','msScrollTranslation','msFlexbox','msFlex','msFlexOrder'];var ie11Styles=['msTextCombineHorizontal'];var d=document;var b=d.body;var s=b.style;var ieVersion=null;var property;for(var i=0;i<ie10Styles.length;i++){property=ie10Styles[i];if(s[property]!=undefined){$('body').addClass("ie-10");}}for(var i=0;i<ie11Styles.length;i++){property=ie11Styles[i];if(s[property]!=undefined){if($('body').hasClass("ie-10")){$('body').removeClass("ie-10").addClass("ie-11");}else{$('body').addClass("ie-11");}}}});