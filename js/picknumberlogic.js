$(document).ready(() => {
    let splitToJson;
    $('#clickme').on("click", (e) => {
        e.preventDefault()

        const LOTTERYAPI = "https://data.ny.gov/resource/5xaw-6ayf.json?$limit=100&$select=winning_numbers";
        // const arrTest = [01,03,03,02,02]
        // console.log(getMode(arrTest));
        $.getJSON({
            url: LOTTERYAPI
        }).done((result, status, xhr) => {
            let toJSON = JSON.stringify(result)
            let formatToJson = ""

            for (const i of toJSON) {
                if(i.match(/^\d+$/) && i!=(" ") && i!="undefined" && i!=null) {
                formatToJson += i
            }
        }
        splitToJson = formatToJson.match(/.{1,2}/g)
        // document.querySelector("#debug").innerText = splitToJson
        // Methods

        // console.log(getMax(splitToJson))
        // console.log(getMin(splitToJson))
        console.log(getMode(splitToJson))
        
        }).fail((xhr, status, error) => {
            alert("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        })
    })

    function getMax(arr){
        return Math.max(...arr); 
    }

    function getMin (arr){
        return Math.min.apply(null, arr);
    }

    function getMode (arr) {  
        const arrObj = {}

        arr.forEach((key) => {
            if (!arrObj[key]) {
                arrObj[key] = 0
            }
            arrObj[key]++
        })
        
        let result = []
        let maxValue = 0
        for (const key in arrObj) {
            if (arrObj[key] > maxValue) {
                result = [key]
                maxValue = arrObj[key]
            } else if(arrObj[key] === maxValue){
                result.push(key);
            }
        }
        if(Object.keys(arrObj).length === result.length){
            result = []
        }

        return "Number of Times: " + maxValue + ", Mode: " + result.sort(function(a, b){return a - b})
    }
});

