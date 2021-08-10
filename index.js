// Your code here
function saturdayFun(param = "roller-skate"){
    return `This Saturday, I want to ${param}!`
}
const mondayWork = function(p = "go to the office"){
    return `This Monday, I will ${p}.`
}
function wrapAdjective(wrapper = "*"){
    return function(inner = "special"){
        return `You are ${wrapper}${inner}${wrapper}!`
    }
    }

    