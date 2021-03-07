export const regData = [
    {
        key: '1',
        example: '数字',
        expression: '^[0-9]*$',
    },
    {
        key: '2',
        example: 'n位的数字',
        expression: '^\\d{n}$',
    },
    {
        key: '3',
        example: '至少n位的数字',
        expression: '^\\d{n,}$',
    },
    {
        key: '4',
        example: 'm-n位的数字',
        expression: '^\\d{m,n}$',
    },
    {
        key: '5',
        example: 'n位的数字',
        expression: '^\\d{n}$',
    },
    {
        key: '6',
        example: '正数、负数、和小数',
        expression: '^(\\-|\\+)?\\d+(\\.\\d+)?$',
    },
    {
        key: '7',
        example: '非零的正整数',
        expression: '^[1-9]\\d*$',
    },
    {
        key: '8',
        example: '非零的负整数',
        expression: '^\\-[1-9][]0-9"*$',
    },
    {
        key: '9',
        example: '非负整数',
        expression: '^\\d+$',
    },
    {
        key: '10',
        example: '非正整数',
        expression: '^-[1-9]\\d*|0$',
    },
    {
        key: '11',
        example: '非负浮点数',
        expression: '^\\d+(\\.\\d+)$',
    },
    {
        key: '12',
        example: '非正浮点数',
        expression: '^((-\\d+(\\.\\d+))|(0+(\\.0+)))$',
    },
    {
        key: '13',
        example: '正浮点数',
        expression: '^[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*$',
    },
    {
        key: '14',
        example: '负浮点数',
        expression: '^-([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$',
    },
    {
        key: '15',
        example: '浮点数',
        expression: '^(-?\\d+)(\\.\\d+)?$',
    },
    {
        key: '16',
        example: '汉字',
        expression: '^[\\u4e00-\\u9fa5]{0,}$',
    },
    {
        key: '17',
        example: '英文和数字',
        expression: '^[A-Za-z0-9]+$',
    },
    {
        key: '18',
        example: 'Email地址',
        expression: '^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$',
    },
    {
        key: '19',
        example: '手机号码',
        expression: '^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$',
    },
    {
        key: '20',
        example: '身份证号(15位、18位)',
        expression: '(^\\d{15}$)|(^\\d{18}$)|(^\\d{17}(\\d|X|x)$)',
    },
    {
        key: '21',
        example: '以字母开头，长度在6~18之间，只能包含字母、数字和下划线',
        expression: '^[a-zA-Z]\\w{5,17}$',
    },
    {
        key: '22',
        example: '必须包含大小写字母和数字的组合，不能使用特殊字符(长度n-m)',
        expression: '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{n,m}$',
    },
    {
        key: '23',
        example: '必须包含大小写字母和数字的组合，可以使用特殊字符(长度n-m)',
        expression: '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{n,m}$',
    },
];