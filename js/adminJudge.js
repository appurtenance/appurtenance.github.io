// temp workaround for broken admin judge view, restores save 
$(function() {
    $.getScript("https://openwater-themes.s3.amazonaws.com/js/waitForElement.js", function() {
        $('.warningPanel').waitUntilExists(function() {
            $(".warningPanel").hide();
            $(".finalize").hide();
            submitButtons = $('<div class="submitButtons" style="padding: 2px"> <input type="submit" class="submit save" value="Save Draft"> <br> <a class="btn" href="/a/organizations/main/judgescorecards/selectround">Cancel and Go Back</a> <input type="submit" class="submit finalize backToList" value="Save and Back to List"> <input type="submit" class="submit finalize goToNext" value="Save and Go to Next"></div>');
        });
        $(".submitButtons").append(submitButtons);
    });
});