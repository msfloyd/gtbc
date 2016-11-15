//change bible image from a closed bible to an open bible

$(document).ready(function() {
            $('#bibleimg').on({
            'click': function() {
             var src = ($(this).attr('src') === 'Images/bible.jpg')
                ? 'Images/open-bible.jpg'
                : 'Images/bible.jpg';
             $(this).attr('src', src);
            }
        });
});