(function() {

    $(document).ready(function() {

        var language = $("html").attr("lang");

        if (language === 'en-US') {
            language = undefined;
        }

        tinymce.init({
            "selector": ".wysiwyg-editor",
            "language": language,
            "plugins": "save image link media",
            "content_css": "/css/tinymce/default.min.css",
            "toolbar": "save | undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media",
            "menubar": false,
            "statusbar": false,
            "relative_urls": false
        });

    });

})();