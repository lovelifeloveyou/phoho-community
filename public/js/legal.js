/**
 * Created by 邱建强 on 2017/12/20.
 */
// 过滤html标签
function filterTag(text) {
	text = text.
	replace(/</g, '&lt;').
	replace(/>/g, '&gt;').
	replace(/\//, '&frasl;');
	return text;
}

function checkChar (str) {
	var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
	if (pattern.test(str)) {
		return -1;
	} else {
		return 1;
	}
}