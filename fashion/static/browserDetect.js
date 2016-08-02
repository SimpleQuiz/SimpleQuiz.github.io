
function getInternetExplorerVersion() {
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
  let rv = -1; // Return value assumes failure.
  if (navigator.appName === 'Microsoft Internet Explorer') {
    const ua = navigator.userAgent;
    const re = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
    if (re.exec(ua) !== null) {
      rv = parseFloat(RegExp.$1);
    }
  }
  return rv;
}

function getInternetExplorer11() {
// Returns the version of Internet Explorer or a -1
// (indicating the use of another browser).
  let rv = -1; // Return value assumes failure.
  const ua = navigator.userAgent;
  const re = new RegExp('rv:11.[0-9]');
  if (re.exec(ua) !== null) {
    rv = 1;
  }
  return rv;
}

function isIE() {
  return getInternetExplorerVersion() !== -1 || getInternetExplorer11() !== -1;
}

export default isIE();
