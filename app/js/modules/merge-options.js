module.exports = (
    function(
        $
    ) {
    "use strict";

    /**
     * Merge Options
     * @param options
     */
    $.fn.mergeOptions = (options, _options) => {
        const _create = () => {
            if (typeof options === 'object' && options !== null) {
                $.each(options, function (i, val) {
                    _options[i] = val;
                });
            }
        };
        _create();
    };
}(jQuery));