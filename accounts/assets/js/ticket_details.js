

// File upload js
const pond = FilePond.create(
    document.querySelector('.ticket-file-upload'),
    {
        labelIdle: `<i class="fa-solid fa-cloud-arrow-up me-2 f-s-30 mb-3 text-primary"></i>
                         <p class="f-s-18">فایلی را انتخاب کنید</p>
                         <p class="f-s-14 text-secondary text-center pe-3 ps-3">فرمت‌های JPEG، PNG و PDF، حداکثر ۵۰ مگابایت</p>
                         <p class="btn btn-lg file-btn btn-primary mt-3 f-s-14">انتخاب فایل</p>`,
    }
);

FilePond.registerPlugin(FilePondPluginFileValidateType);
FilePond.registerPlugin(FilePondPluginImagePreview);
FilePond.registerPlugin(FilePondPluginFileEncode);
FilePond.registerPlugin(FilePondPluginFileValidateSize);
FilePond.registerPlugin(FilePondPluginImageExifOrientation);

const pondInput = FilePond.create(
    document.querySelector('#id'),
    {
        labelIdle: `<i class="fa-solid fa-cloud-upload fa-fw f-s-60 text-secondary"></i> <div class="filepond--label-action text-decoration-none">فایل‌های خود را آپلود کنید</div>`,
    }
);

// Editor js
$('#editor-1').trumbowyg({
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