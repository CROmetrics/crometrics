/**
 * @desc when() polls or an jQuery && an element
 * You can disable the log call by adding silentWhen=true as a query parameter to the page
 * or creating a silentWhen variable on the window and setting it to true;
 */
import log from './log';
import getParam from './get-param';

function when(selector, callback, optTimeout, optQuitPolling) {
  // quit if we have gone past the optQuitPolling time
  if (optQuitPolling <= 0) {
    log(selector, ' not found, stopped polling');
    return false;
  }

  // sniff for jQuery in local namespace
  var $jq = (
    typeof jQuery === 'function' ? jQuery : (
      (typeof $ === 'function' && $.fn && $.fn.jquery) ? $ : undefined
    )
  );

  // search dom for element
  var $this = typeof $jq === 'function' ? $jq(selector) : [];

  if((getParam('silentWhen') === '' || getParam('silentWhen') !== 'true') && window.silentWhen !== true) {
    log('when:', selector, $this);
  }

  var timeToQuit = optQuitPolling ? optQuitPolling - (optTimeout || 50) : undefined;

  return $this.length ? callback.call($this, $this) : setTimeout(
    when.bind(null, selector, callback, optTimeout, timeToQuit),
    optTimeout || 50
  );

}

export default when;
