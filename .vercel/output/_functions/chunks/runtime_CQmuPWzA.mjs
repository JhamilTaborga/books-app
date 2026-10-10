function setGetEnv(fn) {
	_onSetGetEnv();
}
var _onSetGetEnv = () => {};
function setOnSetGetEnv(fn) {
	_onSetGetEnv = fn;
}
//#endregion
export { setOnSetGetEnv as n, setGetEnv as t };
