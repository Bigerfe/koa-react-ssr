
/**
 * webpack编译后输出的信息有很多是无用的,我们筛选一下
 * @param {编译后的信息} messages
 */
function formatMessages(json) {
    const warnings = json.warnings.map(mes => { return formatLine(mes); });
    const errors = json.errors.map(mes => { return formatLine(mes); });
    return {
        errors: errors,
        warnings: warnings
    }
}

function formatLine(mes) {
    var lines = mes.split('\n');
    lines = lines.filter(function (line) {
        // eslint 会输出一些无用的带@前缀的路径信息
        //比如@ ./client/entry.js 并没有什么用处忽略即可
        return line.indexOf(' @ ') !== 0;
    });
    mes = lines.join('\n');
    return mes;
}

module.exports = formatMessages;