import Cue from './src/cue'

new Cue({ // eslint-disable-line
  querySelector: '.app',
  name: 'root',
  data () {
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
    return h('div',
      {
        attrs: {
          id: 'foo',
          'data-test': 'nice'
        }
      },
      [
        h('button',
          {
            attrs: {
              class: 'bar'
            },
            on: {
              click: () => this.clickHandler(1)
            }
          },
          '+'
        ),
        h('button',
          {
            attrs: {
              class: 'bar'
            },
            on: {
              click: () => this.clickHandler(-1)
            }
          },
          '-'
        ),
        h('span',
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
