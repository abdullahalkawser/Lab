#ifndef STRING_ANALYZER_H
#define STRING_ANALYZER_H

#include <string>

class StringAnalyzer {
public:
    static int getLength(const std::string& str);
    static char getCharAt(const std::string& str, int index);
    static int countVowels(const std::string& str);
    static int countConsonants(const std::string& str);
    static std::string reverseString(const std::string& str);
    static void analyze(const std::string& text);
};

#endif
