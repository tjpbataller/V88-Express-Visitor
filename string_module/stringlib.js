class StringLib
{
    concat(word1, word2)
    { 
        return word1+word2;
    }
    repeat(word, times)
    {
        let newWord = word; 

        for(let x=times; x>1; x--)
        {
            newWord += word;
        }
        
        return newWord;
    }
    toString(input)
    {
        return `"${input}"`;
    }
    charAt(word, index)
    {
        return word[index];
    }
};
module.exports = StringLib;