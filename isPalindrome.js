let isPalindrome = (str) => {
    const clean = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, ""), cleanStr = clean(str);
    return cleanStr.split('').reduce((match, c, i)=>
        {
            if (!match)
            {
                return false;
            }
            return c == cleanStr[cleanStr.length -1 -i];
        }, true
    );
};
function checkPalindrome(expected, string) {
    let pass = (expected === isPalindrome(string));
    console.log(pass ? "pass" : "fail");
}

checkPalindrome(true, "race car");
checkPalindrome(false, "not a palindrome");
checkPalindrome(false, "mama");
checkPalindrome(true, "eye");