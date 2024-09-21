$(document).ready(function() {
    // Update selector width based on the text width
    $("#image-selector-dataset-temp-option").html($('#image-selector-dataset option:selected').text());
    $('#image-selector-dataset').width($("#image-selector-dataset-temp").width());

    $('#image-selector-dataset').change(function() {
        // Update the temp selector for proper width adjustment
        $("#image-selector-dataset-temp-option").html($('#image-selector-dataset option:selected').text());
        $('#image-selector-dataset').width($("#image-selector-dataset-temp").width());

        // Get the selected value from the dropdown
        var selectedValue = $('#image-selector-dataset').val();

        // Update the image sources in the comparison sliders
        $('#dataset-seg figure.before img').attr('src', 'assets/figures/' + selectedValue + '_img.png');
        $('#dataset-seg figure.after img').attr('src', 'assets/figures/' + selectedValue + '_seg.png');

        $('#dataset-depth figure.before img').attr('src', 'assets/figures/' + selectedValue + '_img.png');
        $('#dataset-depth figure.after img').attr('src', 'assets/figures/' + selectedValue + '_depth.png');

        $('#dataset-normal figure.before img').attr('src', 'assets/figures/' + selectedValue + '_img.png');
        $('#dataset-normal figure.after img').attr('src', 'assets/figures/' + selectedValue + '_normal.png');
    });
});
