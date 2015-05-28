var IMAGE_SELECTOR = '.rohit-image-container';
var CONENT_SELECTOR = '.content-links';
var CONENT_CHILD_SELECTOR = '.padding-bottom-20';
var FOOTER_SELECTOR = '.footer';
 
$(document).ready(function() {
    $(IMAGE_SELECTOR).fadeIn(1000, showContent);
});
function showContent() {    
    var counter = 1;
    $(CONENT_SELECTOR).children('div').each(function() {
        $(this).fadeIn(700 * counter);
        counter++;
    });

    $(FOOTER_SELECTOR).fadeIn(2000);
}