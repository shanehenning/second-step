'use strict';
$(document).ready(function() {
  if($('div.content').length === 0){
    $('#no-webinars').show();
    $('#yes-webinars').hide();
    return;
  } else{
    $('#yes-webinars').show();
    $('#no-webinars').hide();
  }

  var totalChecked;

  function otherCheckedTopicsIn(art) {
    var topics = [];
    var currentlyCheckedBoxes = [];
    $('.topic-checkbox').each(function(idx, checkbox) {
      if ($(checkbox).is(':checked')) {
        currentlyCheckedBoxes.push($(checkbox).prop('value'));
      }
    });
    $(art).find('.webinar-topics a').each(function(idx, topicLink) {
      var linkClasses = $(topicLink).attr('class').split(/\s+/);
      linkClasses = linkClasses.filter(function(a) {
        return a !== 'EDNcategorycolor-default';
      });
      linkClasses.forEach(function(className) {
        topics.push(className);
      });
    });
    for (var i = 0; i < topics.length; i++) {
      for (var j = 0; j < currentlyCheckedBoxes.length; j++) {
        if (topics[i] === currentlyCheckedBoxes[j]) return true;
      }
    }
  }

  $('.topic-checkbox').on('click', function() {
    var $clickedCheckbox = $(this);
    var chosenTopic = $clickedCheckbox.prop('value');
    if (chosenTopic === 'All') {
      $clickedCheckbox.is(':checked') ? ($('.article').show(), $('.topic-checkbox').prop('checked', true)) : ($('.article').hide(), $('.topic-checkbox').prop('checked', false));
    }
    if ($clickedCheckbox.is(':checked')) {
      $('.' + chosenTopic).closest('.article').show();
      totalChecked = 0;
      $('.topic-checkbox').each(function(idx, checkbox) {
        if ($(checkbox).is(':checked')) totalChecked++;
      });
      if (totalChecked === ($('.topic-checkbox').length - 1)) $('#toggle-all').prop('checked', true);
    } else {
      $('#toggle-all').prop('checked', false);
      $('.' + chosenTopic).closest('.article').each(function(idx, post) {
        if (otherCheckedTopicsIn(post) === true) return;
        $(post).hide();
      });
    }
  });
});
