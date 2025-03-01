
export class Translation{

    word_type: string;
    gender: string;
    sentences: string[][];
    meanings: string[];

    constructor(word_type_: string, gender_: string, sentences_: string[][], meanings_: string[]) {
        this.word_type = word_type_;
        this.gender = gender_;
        this.sentences = sentences_;
        this.meanings = meanings_;
    }
}

export class Word{

    word: string;
    translations: Translation[];

    constructor(word_: string, translation_: Translation[]) {
        this.word = word_;
        this.translations = translation_;
    }

}