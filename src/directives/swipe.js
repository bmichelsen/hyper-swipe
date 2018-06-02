import Vue from 'vue'

const _data = {
  down: false,
  initialX: 0,
  swiperLength: 100
}

export function mousedown (e, el, _data) {
  _data.down = true
  _data.initialX = e.clientX
}

export function mouseup (e, el, _data) {
  _data.down = false
  el.style.transform = ''
}

// TODO: Refactor. It works, but isn't pretty.
export function mousemove (e, el, _data, modifiers, vnode) {
  if (_data.down && (modifiers.left || modifiers.right)) {
    let distance = e.clientX - _data.initialX

    let left         = modifiers.left
    let left_swipe   = left && (distance < 0)
    let left_arrived = (distance <= -_data.swiperLength)

    let right         = modifiers.right
    let right_swipe   = right && (distance > 0)
    let right_arrived = (distance >= _data.swiperLength)

    if (left_swipe || right_swipe) {
      el.style.transform = `translate(calc(${distance}px)`

      if (left_arrived) {
        mouseup(e, el, _data)
        swiperEmitter('swipe-left', vnode)
      } else if (right_arrived) {
        mouseup(e, el, _data)
        swiperEmitter('swipe-right', vnode)
      }
    }
  }
}

/**
* Emit an event.
*
* Check whether the directive is used in a Vue component or on a regular
* DOM element. This matters in how we emit the event. We'll call `$emit()`
* on components, but for regular DOM elements we need to dispatch a native
* DOM event since the `$emit()` method isn't available.
*/
export function swiperEmitter (event, vnode) {
  if (vnode.componentInstance) {
    vnode.componentInstance.$emit(event)
  } else {
    vnode.elm.dispatchEvent(new CustomEvent(event))
  }
}

export default Vue.directive('swipe', {
  inserted: function (el, binding, vnode) {
    el.addEventListener('mouseup', (e) => mouseup(e, el, _data))
    el.addEventListener('mousedown', (e) => mousedown(e, el, _data))
    el.addEventListener('mousemove', (e) => mousemove(e, el, _data, binding.modifiers, vnode))
  }
})
