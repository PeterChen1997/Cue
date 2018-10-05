import Cue from './src/cue'

new Cue({ // eslint-disable-line
  querySelector: '.app',
  name: 'root',
  render: function (h) {
    return h(
      'div',
      {
        attrs: {
          id: 'foo212',
          'data-test': 'nice'
        }
      },
      'nice13224'
    )
  }
})

// something for parcel
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload()
  })
}
