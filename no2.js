function spellingWord(word) {
    console.log('\n=======================')
    console.log('Sample Input:')
    console.log(word)
    const arrDic = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
    let result = []

    for (let i = 0; i < arrDic.length; i++) {
        let find = []
        if (word.startsWith(arrDic[i])) {
            find.push(arrDic[i])
            let lessWord = word.replace(arrDic[i], "")
            let lessDic = arrDic.filter(item => item !== arrDic[i])
            while (lessWord.length > 0) {
                let next = lessDic.filter(item => lessWord.startsWith(item))
                if (next.length == 0) {
                    find = []
                    break;
                }
                find.push(next[0])
                lessWord = lessWord.replace(next[0], "")
            }
        }
        if (find.length > 0) {
            result.push(find)
        }
    }

    console.log('\nSample Output:')

    if (result.length == 0) {
        console.log('<no way>')
    } else {
        result.forEach(item => {
            console.log(item.toString())
        })
    }
    
}

spellingWord('program')
spellingWord('programit')
spellingWord('programmerit')
spellingWord('programlala')
spellingWord('proletarian')