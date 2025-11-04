
export function decodeHTML(html) {
    if (typeof html !== 'string') {
        return '';
    }

    // reate a temporary element for decoding
    const textarea = document.createElement('textarea');
    textarea.innerHTML = html;
    return textarea.value;
}

//decode html entities
export function decodeQuestion(question) {
    if (!question || typeof question !== 'object') {
        return question;
    }

    return {
        ...question,
        category: decodeHTML(question.category) || []
    };
}