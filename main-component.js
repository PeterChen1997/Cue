import Cue from './src/cue'

Cue.component('show-tips', {
  props: ['clickCount'],
  render: function (h) {
    return h(
      'span',
      'total click count:' + this.clickCount
    )
  }
})

new Cue({ // eslint-disable-line
  querySelector: '.app',
  name: 'root',
  data() {
    return {
      clickCount: 0
    }
  },
  methods: {
    clickHandler: function (num) {
      this.clickCount += num
      console.log('clicked' + this.clickCount)
    }
  },
  render: function (h) {
    return h(
      'div',
      {
        attrs: {
          id: 'foo',
          'data-test': 'nice'
        }
      },
      [
        h(
          'button',
          {
            attrs: {
              class: 'bar'
            },
            on: {
              click: () => this.clickHandler(1)
            }
          },
          '点击click'
        ),
        h(
          'show-tips',
          {
            props: {
              clickCount: this.clickCount
            }
          },
          'total click count:' + this.clickCount
        )
      ]
    )
  }
})
// something for parcel
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload()
  })
}
