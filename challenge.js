const diagonalDifference = (arr) => {
    // Write your code here
    let n = arr[0].length;
    let first =0;
    let second =0;
    for(let i =0; i<n; i++){
        first += arr[i][i];
    }
    //arr.reverse()
    for(let i=0; i<n; i++){
        second += arr[i][n-i-1]
    }
    return(Math.abs(first-second))
}
