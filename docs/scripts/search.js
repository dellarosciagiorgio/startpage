$(document).ready(function() {
    $('.enterpress').keydown(function(event) {
        if (event.keyCode == 13) {
            this.form.q.value = this.form.q.value
            this.form.submit();
            return false;
        }
    });
});