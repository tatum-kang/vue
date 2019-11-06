const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// node.js에서는 module에서 특정 값을 export 하기 위해서는 아래와같이 export할 값들을 정의한다. 
module.exports = {
    mode:'development', // 상업용은 production 이게 default 값이다.
    // 모든파일들의 시작점
    entry: {
        app: path.join(__dirname, 'src', 'main.js')
    },
    // webpack은 기본적으로 js 만 변환가능 따라서 css나 html은 모듈을 통해서 웹팩이 이해할수 있도록 변환 필요.
    // 변환내용을 작성하는곳 .
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test:/\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            }
        ]
    },
    // 웹팩을 통해서 번들된 결과를 추가 처리하는 부분
    plugins: [
        new VueLoaderPlugin(),
    ],
    // 웹팩을 통해서 번들된 결과물이 정의되는 곳
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),

    },
}