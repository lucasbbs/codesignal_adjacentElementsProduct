function adjacentElementsProduct(inputArray) {
    let productArray = inputArray.map((v, i, array)=>{
        return i!=array.length-1?(array[i]*array[i+1]):NaN;
    });
    return productArray.sort(function(a, b){return b - a})[0];
}
