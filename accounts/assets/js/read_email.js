//editor

$('#editor').trumbowyg({
    lang: $('html').attr('lang').split('-')[0].toLowerCase(),
    btns: [
        ['viewHTML'],
        ['undo', 'redo'], // Only supported in Blink browsers
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['justifyRight', 'justifyCenter', 'justifyLeft', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen']
    ],
});

"use strict";
$(function() {
    var tooltip_init = {
        init: function () {
            $("button").tooltip();
        }
    };
    tooltip_init.init()
});