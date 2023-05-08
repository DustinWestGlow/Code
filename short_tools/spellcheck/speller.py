from nltk import tokenize
import json

valid_words = {}
with open('words_dictionary.json') as word_file:
    valid_words = json.load(word_file)
        
def spellcheck(text):
    correct = 0
    words = tokenize.word_tokenize(text)
    for word in words:
        if word.lower() in valid_words:
            correct += 1
    return correct