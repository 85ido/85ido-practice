(function(window, $) {
    'use strict';

    var NOOP = function() {};
    var TPL = _.template($('#modal-tpl').html());
    var DEFAULT_OPTIONS = {
        backdrop: true,
        buttons: [
            {
                text: '是',
                flag: 'yes'
            },
            {
                text: 'Cancel',
                flag: 'cancel'
            }
        ]
    };
    var _resizeHandler;
    function showModal(options, callback) {
        if (typeof callback === 'undefined') {
            callback = NOOP;
        }

        var modalId = _.uniqueId('modal_');
        var opts = $.extend(true, {}, DEFAULT_OPTIONS, options);
        opts.buttons.reverse();
        var $modal = TPL({
            id: modalId,
            options: opts    
        });

        $('body').append($modal);

        var $modal = getModal(modalId);
        $modal.on('click', '.buttons [modal-flag]', function() {
            var flag = $(this).attr('modal-flag');
            closeModal($modal, callback, flag);
        });
        _resizeHandler = _.debounce(function() {
            central(modalId);
        }, 20);
        $(window).on('resize', _resizeHandler);
        central(modalId);
    }

    function getModal(modalId) {
        return $('#' + modalId);
    }

    function closeModal($modal, callback, flag) {
        if (typeof $modal === 'string') {
            $modal = getModal(modal);
        }
        $(window).off('resize', _resizeHandler);
        $('.modal-backdrop').remove();
        $modal.remove();
        if (typeof callback === 'function') {
            callback(flag);
        }
    }

    function central(modalId) {
        var $window = $(window);
        var winWidth = $window.width();
        var winHeight = $window.height();
        var $container = getModal(modalId);
        var containerWidth = $container.width();
        var containerHeight = $container.height();
        $container.css({
            left: (winWidth / 2) - (containerWidth / 2),
            top: (winHeight / 2) - (containerHeight / 2)
        });
    }

    window.showModal = showModal;
})(window, $);
