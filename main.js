import Cue from './src/cue'

new Cue({ // eslint-disable-line
  querySelector: '.app',
  name: 'root',
  methods: {
    clickHandler() { console.log('clicked') }
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
              id: 'bar'
            },
            on: {
              click: this.clickHandler
            }
          },
          'click me!'
        ),
        h(
          'span',
          {
            attrs: {
              id: 'bar2'
            }
          },
          'please click the btn'
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
