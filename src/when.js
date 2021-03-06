/**
 * @desc when() polls or an jQuery && an element
 */
import log from './log';

function when(selector, callback, optTimeout) {
  'use strict';

  // sniff for jQuery in local namespace
  var $jq = (
    typeof jQuery === 'function' ? jQuery : (
      (typeof $ === 'function' && $.fn && $.fn.jquery) ? $ : undefined
    )
  );

  // search dom for element
  var $this = typeof $jq === 'function' ? $jq(selector) : [];

  log('when:', selector, $this);

  return $this.length ? callback.call($this, $this) : setTimeout(
    when.bind(null, selector, callback, optTimeout),
    optTimeout || 50
  );

}

export default when;
