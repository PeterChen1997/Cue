module.exports = {
    title: 'Vue —— 从入门到出家',
    description: '简介明了的介绍一下Vue',
    configureWebpack: {
        resolve: {
            alias: {
            '@alias': 'path/to/some/dir'
            }
        }
    },
    base: '/Cue/',
    themeConfig: {
        repo: 'PeterChen1997/Cue',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '错别字纠正',
        sidebarDepth: 3,
        nav: [
          {
            text: '正文',
            link: '/note/',
          },
          {
            text: '我的博客',
            link: 'https://bloglite.peterchen.club'
          }
        ],
        sidebar: [
            {
                title: 'vue',
                collapsable: false,
                children: [
                    'note/1-Vue介绍.md',
                    'note/2-render.md'
                ]
            }
        ]
    }
}