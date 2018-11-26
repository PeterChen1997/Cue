import Cue from './src/cue'

new Cue({ // eslint-disable-line
    querySelector: '.app',
    name: 'root',
    data() {
        return {
            items: [
                { id: 1, val: 'A' },
                { id: 2, val: 'B' },
                { id: 3, val: 'C' }
            ]
        }
    },
    methods: {
        clickHandler() {
            this.items.reverse().push({ id: 4, val: 'D' })
        }
    },
    render: function (createElement) {
        if (this.items.length) {
            return createElement(
                'div',
                {},
                [
                    createElement(
                        'button',
                        {
                            on: {
                                click: () => this.clickHandler()
                            }
                        },
                        'nice'
                    ),
                    createElement(
                        'ul',
                        {},
                        this.items.map(function (item) {
                            return createElement(
                                'li',
                                { key: item.id },
                                item.val
                            )
                        })
                    )
                ]
            )
        }
    }
})

// something for parcel
if (module.hot) {
    module.hot.dispose(() => {
        window.location.reload()
    })
}
