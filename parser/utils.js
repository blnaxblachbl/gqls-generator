const setTabs = (defaultTabs, level) => {
    return '\t'.repeat(defaultTabs + level)
}

const camelToDelimiter = (name) => {
    return name.split("").map(item => item === item.toLowerCase() ? item.toUpperCase() : `_${item.toUpperCase()}`).join("")
}

module.exports = {
    setTabs,
    camelToDelimiter
}