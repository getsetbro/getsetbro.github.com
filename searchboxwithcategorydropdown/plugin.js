/*global $, jQuery*/
$.fn.sscrmsearch = function() {
  var formID = $(this),
    myform_el = formID,
    myform_icon_el = formID.find('.myform-icon'),
    myform_input_el = formID.find('.myform-input'),
    myform_reset_el = formID.find('.myform-reset'),
    myform_submit_el = formID.find('.myform-submit'),
    myform_dropdown_el = formID.find('.myform-dropdown'),
    myform_dropdown_chx = myform_dropdown_el.find('[type="radio"]'),
    myform_checked = null,
    search_val = null,
    myform_open_dropdown = function() {
      myform_el.addClass('open-dropdown');
    },
    myform_close_dropdown = function() {
      myform_el.removeClass('open-dropdown');
    },
    myform_toggle_dropdown = function() {
      myform_el.toggleClass('open-dropdown');
    },
    myform_get_focus = function() {
      myform_open_dropdown();
      myform_el.addClass('has-focus');
    },
    myform_lose_focus = function() {
      myform_close_dropdown();
      myform_el.removeClass('has-focus');
    },
    myform_icon_setme = function() {
      myform_getChecked();
      myform_icon_el.attr('class', 'myform-icon ' + myform_checked);
    },
    myform_input_resetme = function() {
      myform_input_el.val('');
    },
    myform_reset_visible_on = function() {
      myform_reset_el.addClass('visible-on');
    },
    myform_reset_visible_off = function() {
      myform_reset_el.removeClass('visible-on');
    },
    myform_getChecked = function() {
      myform_checked = myform_dropdown_el.find(':checked').val();
    },
    myform_dropdown_resetme = function() {
      //myform_dropdown_chx.prop('checked', false).filter("[name=searchfilter]:first").prop('checked', true);
      myform_icon_setme();
    },
    myform_hardreset = function() {
      myform_input_resetme();
      myform_reset_visible_off();
      myform_dropdown_resetme();
      myform_input_el.blur();
      myform_submit_el.blur();
      myform_lose_focus();
    },
    myform_blur = function() {
      myform_close_dropdown();
      myform_input_el.blur();
      myform_submit_el.blur();
    };

  //bindings
  myform_icon_el.click(function() {
    myform_toggle_dropdown();
  });
  myform_input_el.mouseup(function() {
    myform_get_focus();
  }).keyup(function(e) {
    if(e.which !== 13) {
      myform_close_dropdown();
    }
    if( myform_input_el.val() ) {
      myform_reset_visible_on();
    } else {
      myform_reset_visible_off();
    }
  });
  myform_dropdown_chx.change(function(e) {
    myform_input_el.focus();
    myform_icon_setme();
  });
  myform_reset_el.click(function() {
    myform_hardreset();
  });

  //focus
  $('body').click(function() {
    myform_lose_focus();
  });
  myform_el.click(function(e) {
    e.stopPropagation();
  });

  //submit
  myform_el.submit(function(e) {
    e.preventDefault();
    myform_getChecked();
    search_val = (autocomplete_val) ? autocomplete_val : myform_input_el.val();
    if(myform_input_el.val() !== '') {
      $('.ol').append('<li>search in ' + myform_checked + ' for ' + search_val + '</li>');
      $('.ol2').empty();
      myform_blur();
    } else {
      $('.ol2').append('<li><b>please include text<b></li>');
      myform_input_el.focus();
    }
    autocomplete_val = null;
  });

};