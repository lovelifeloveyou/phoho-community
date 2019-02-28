/**
 * Created by 邱建强 on 2017/12/20.
 */
$(window).ready(function () {
	$('.back').on('click', function () {
		if (document.referrer === window.location.href || document.referrer.indexOf('http://' + document.domain) === -1) {
			window.location.href = '/';
			return;
		}
		window.history.back();
	});
});