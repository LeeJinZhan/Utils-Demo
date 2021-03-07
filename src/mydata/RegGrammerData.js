// 普通字符
export const normalChData = [
    {
        key: '1',
        character: "\\cx",
        description: "匹配由x指明的控制字符。例如，\\cM 匹配一个 Ctrl-M 或回车符"
    },
    {
        key: '2',
        character: "\\f",
        description: "匹配一个换页符"
    },
    {
        key: '3',
        character: "\\n",
        description: "匹配一个换行符"
    },
    {
        key: '4',
        character: "\\r",
        description: "匹配一个回车符"
    },
    {
        key: '5',
        character: "\\s",
        description: "匹配任何空白字符，包括空格、制表符、换页符等等"
    },
    {
        key: '6',
        character: "\\S",
        description: "匹配任何非空白字符"
    },
    {
        key: '7',
        character: "\\t",
        description: "匹配一个制表符"
    },
    {
        key: '8',
        character: "\\v",
        description: "匹配一个垂直制表符"
    }
]

// 特殊字符
export const specialChData = [
    {
        key: '1',
        character: "$",
        description: "匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 '\\n' 或 '\\r'。要匹配 $ 字符本身，请使用 \\$"
    },
    {
        key: '2',
        character: "( )",
        description: "标记一个子表达式的开始和结束位置。子表达式可以获取供以后使用。要匹配这些字符，请使用 \\( 和 \\)"
    },
    {
        key: '3',
        character: "*",
        description: "匹配前面的子表达式零次或多次。要匹配 * 字符，请使用 \\*"
    },
    {
        key: '4',
        character: "+",
        description: "匹配前面的子表达式一次或多次。要匹配 + 字符，请使用 \\+"
    },
    {
        key: '5',
        character: ".",
        description: "匹配除换行符 \n 之外的任何单字符。要匹配 . ，请使用 \\."
    },
    {
        key: '6',
        character: "[",
        description: "标记一个中括号表达式的开始。要匹配 [，请使用 \\["
    },
    {
        key: '7',
        character: "?",
        description: "匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配 ? 字符，请使用 \\?"
    },
    {
        key: '8',
        character: "\\",
        description: "将下一个字符标记为或特殊字符、或原义字符、或向后引用、或八进制转义符。例如， 'n' 匹配字符 'n'。'\\n' 匹配换行符"
    },
    {
        key: '9',
        character: "^",
        description: "匹配输入字符串的开始位置，除非在方括号表达式中使用，此时它表示不接受该字符集合。要匹配 ^ 字符本身，请使用 \\^"
    },
    {
        key: '10',
        character: "{",
        description: "标记限定符表达式的开始。要匹配 {，请使用 \\{"
    },
    {
        key: '11',
        character: "|",
        description: "指明两项之间的一个选择。要匹配 |，请使用 \\|"
    }
]

// 限定符
export const qualifyChData = [
    {
        key: '1',
        character: "*",
        description: "匹配前面的子表达式零次或多次。例如，zo* 能匹配\"z\" 以及 \"zoo\"。* 等价于{0,}。"
    },
    {
        key: '2',
        character: "+",
        description: "匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 \"zo\" 以及 \"zoo\"，但不能匹配 \"z\"。+ 等价于 {1,}。"
    },
    {
        key: '3',
        character: "?",
        description: "匹配前面的子表达式零次或一次。例如，\"do(es)?\" 可以匹配 \"do\" 、 \"does\" 中的 \"does\" 、 \"doxy\" 中的 \"do\" 。? 等价于 {0,1}。"
    },
    {
        key: '4',
        character: "{n}",
        description: "	n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 \"Bob\" 中的 'o'，但是能匹配 \"food\" 中的两个 o。"
    },
    {
        key: '5',
        character: "{n,}",
        description: "n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 \"Bob\" 中的 'o'，但能匹配 \"foooood\" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。"
    },
    {
        key: '6',
        character: "{n,m}",
        description: "m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，\"o{1,3}\" 将匹配 \"fooooood\" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。"
    }
]

// 定位符
export const locateChData = [
    {
        key: '1',
        character: "^",
        description: "匹配输入字符串开始的位置。如果设置了 RegExp 对象的 Multiline 属性，^ 还会与 \\n 或 \\r 之后的位置匹配。"
    },
    {
        key: '2',
        character: "$",
        description: "匹配输入字符串结尾的位置。如果设置了 RegExp 对象的 Multiline 属性，$ 还会与 \\n 或 \\r 之前的位置匹配。"
    },
    {
        key: '3',
        character: "\\b",
        description: "匹配一个单词边界，即字与空格间的位置。"
    },
    {
        key: '4',
        character: "\\B",
        description: "非单词边界匹配。"
    }
]
