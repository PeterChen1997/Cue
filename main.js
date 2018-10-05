import Cue from './src/cue'

new Cue({ // eslint-disable-line
  querySelector: '.app',
  name: 'root',
  render: function (h) {
    return h(
      'div',
      {
        attrs: {
          id: 'foo'
        }
      },
      'nice'
    )
  }
})
