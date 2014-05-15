(function($) {
  $(document).ready(function() {
    $('.handle').closest('tbody').activeAdminSortable();
  });

  $.fn.activeAdminSortable = function() {
    this.sortable({
      update: function(event, ui) {
        var url = ui.item.find('[data-sort-url]').data('sort-url');

        $.ajax({
          url: url,
          type: 'post',
          data: { position: ui.item.index() + 1 },
          success: function() {
            if (typeof Turbolinks === 'undefined') {
              window.location.reload();
            } else {
              Turbolinks.visit(window.location.pathname + window.location.search);
            }
          }
        });
      }
    });

    this.disableSelection();
  }
})(jQuery);
