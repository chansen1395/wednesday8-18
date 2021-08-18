### Describe: pigLatin()

### Test: "It will add 'way' to the end of words that begin with a vowel."
### Code: pigLatin("a");
### Expected Output: "away"

### Test: "It will add the first letter and 'ay' to the end of words that begin with a consonant."
### Code: pigLatin("ta");
### Expected Output: "atay"

### Test: "It will move a number to the end."
### Code: pigLatin("3days 456");
### Expected Output: "days3 564"

### Test: "It will remove whitespace."
### Code: pigLatin("    a    b    ");
### Expected Output: "away bay"

### Test: "It will not affect single numbers."
### Code: pigLatin("3");
### Expected Output: "3"

### Test: "It will display a blank if no input or only whitespace."
### Code: pigLatin("     ");
### Expected Output: ""
### Code: pigLatin("");
### Expected Output: ""
