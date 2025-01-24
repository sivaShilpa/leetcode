class Solution {
    public int countValidWords(String sentence) {
        int countOfTokens = 0;
        String[] sentArray = sentence.trim().split("\\s+");

        System.out.println(sentArray.length);

        for (int i = 0; i < sentArray.length; i++) {
            String word = sentArray[i];

            if (isToken(word)) {
                System.out.println("index " + i + " length " + word.length());
                countOfTokens++;
            }
        }

        return countOfTokens;
    }

    public boolean isToken(String word) {
        int countOfHyphens = 0;

        if ((word.charAt(0) == '!' || word.charAt(0) == ',' || word.charAt(0) == '.' || Character.isLetter(word.charAt(0)))
                && word.length() == 1) {
            return true;
        }

        for (int j = 0; j < word.length(); j++) {
            char letter = word.charAt(j);
            System.out.println(letter);
            if (Character.isDigit(letter)) {
                return false;
            }
            if (letter == '-' && (j == 0 || j == word.length() - 1)) {
                return false;
            }
            if ((letter == '-' && j != 0 && j != word.length() - 1)) {
                if (!Character.isLetter(word.charAt(j - 1)) || !Character.isLetter(word.charAt(j + 1))) {
                    return false;
                } else {
                    if (countOfHyphens > 0) {
                        return false;
                    } else {
                        countOfHyphens++;
                        continue;
                    }
                }
            }
            if ((letter == '!' || letter == ',' || letter == '.') && (j != word.length() - 1)) {
                return false;
            }

        }

        return true;
    }
}