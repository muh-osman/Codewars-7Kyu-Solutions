// return masked string
function maskify(cc) {
    if (cc.length > 4) {
        return cc.replace(/.(?=.{4,}$)/g, "#")
    } else {
        return cc
    }

    // return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}


console.log(maskify("4556364607935616"))