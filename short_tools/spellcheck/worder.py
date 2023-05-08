import json

def load_words_alpha():
    with open('words_alpha.txt') as word_file:
        valid_words = set(word_file.read().split())
        return valid_words

def load_words_json():
    with open('words_dictionary.json') as word_file:
        valid_words = json.load(word_file)
    return valid_words


if __name__ == '__main__':
    english_words = load_words_json()
    # demo print
    print('And'.lower() in english_words)
    print('brutus?' in english_words)