/**
 * Module dependencies.
 */
import raf from 'raf'
import TWEEN from '@tweenjs/tween.js'

const EASING = {
  'in-out-quad': TWEEN.Easing.Quadratic.InOut
}

/**
 * Scroll to `(x, y)`.
 *
 * @param {Number} x
 * @param {Number} y
 * @api public
 */

const scrollTo = (x, y, options = {}) => {
  // start position
  let start = scroll()
  let animate

  // setup tween
  const tween = new TWEEN.Tween(start)
    .to({ x, y }, +options.duration || 1000)
    .easing(EASING[options.ease] || EASING['in-out-quad'])
    .onUpdate(() => {
      window.scrollTo(start.x, start.y)
    }).onComplete(() => {
      animate = () => {}
    }).start()
  
  animate = () => {
    raf(animate);
    TWEEN.update();
  }

  animate();
  
  return tween;
}

/**
 * Return scroll position.
 *
 * @return {Object}
 * @api private
 */

const scroll = () => {
  var x = window.pageXOffset || document.documentElement.scrollLeft;
  var y = window.pageYOffset || document.documentElement.scrollTop;
  return { x, y };
}

export default scrollTo