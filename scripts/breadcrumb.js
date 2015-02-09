var Breadcrumb;

Breadcrumb = {};

Breadcrumb.apps = {
    breadcrumb: function() {
        "use strict";

        var actualTitle,
            actualURL,
            previousTitle,
            previousURL,
            title,
            breadcrumb,
            htmlBreadcrumb,
            _getTitleOnly,
            _addPrevious,
            _addHTML;

        actualTitle = document.title;
        actualURL = window.location.href;
        breadcrumb = document.querySelector('.breadcrumb');
        htmlBreadcrumb = '';

        _getTitleOnly = function(fullTitle) {
            var separator,
                title;

            separator = ' · ';
            title = fullTitle.split(separator);

            return title[1];
        };

        _addPrevious = function() {
            previousTitle = localStorage.title;
            previousURL = localStorage.url;
        };

        void( ((localStorage.title) && (localStorage.url)) && _addPrevious() );

        localStorage.setItem('title', actualTitle);
        localStorage.setItem('url', actualURL);

        if (previousTitle !== localStorage.title) {
            previousTitle = _getTitleOnly( previousTitle );
            title = _getTitleOnly( localStorage.title );

            htmlBreadcrumb += '<a href=' + previousURL + '>' + previousTitle + '</a>';
            htmlBreadcrumb += ' <span>&raquo;</span> ';
            htmlBreadcrumb += '<a href=' + localStorage.url + '>' + title + '</a>';
        } else {
            title = _getTitleOnly( localStorage.title );
            htmlBreadcrumb += '<a href=' + localStorage.url + '>' + title + '</a>';
        }

        _addHTML = function() {
            breadcrumb.innerHTML = htmlBreadcrumb;
        };

        void ( breadcrumb && _addHTML() );
    }
};

Breadcrumb.apps.breadcrumb();
