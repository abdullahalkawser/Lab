#include "../include/StringAnalyzer.h"
#include <iostream>
#include <algorithm>

int StringAnalyzer::getLength(const std::string& str) { return str.length(); }
char StringAnalyzer::getCharAt(const std::string& str, int index) {
    if(index >= 0 && index < (int)str.length()) return str[index];
    return '\0';
}
int StringAnalyzer::countVowels(const std::string& str) {
    int count = 0;
    for(char c : str) {
        char lower = std::tolower(c);
        if(lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') count++;
    }
    return count;
}
int StringAnalyzer::countConsonants(const std::string& str) {
    int count = 0;
    for(char c : str) {
        char lower = std::tolower(c);
        if(lower >= 'a' && lower <= 'z' && lower != 'a' && lower != 'e' && lower != 'i' && lower != 'o' && lower != 'u') count++;
    }
    return count;
}
std::string StringAnalyzer::reverseString(const std::string& str) {
    std::string rev = str;
    std::reverse(rev.begin(), rev.end());
    return rev;
}
void StringAnalyzer::analyze(const std::string& text) {
    std::cout << "[Digital Forensics Text Analysis]\n";
    std::cout << "Text: " << text << "\n";
    std::cout << "Length: " << getLength(text) << "\n";
    std::cout << "Vowels: " << countVowels(text) << "\n";
    std::cout << "Consonants: " << countConsonants(text) << "\n";
    std::cout << "Reversed: " << reverseString(text) << "\n";
}
