// functions for daata analysis

export function getCategoryStats(questions) {
    const stats = {};
    questions.forEach(q => {
        stats[q.category] = (stats[q.category]||0) + 1;
    });
    return stats;
}

export function getDifficultyStats(questions) {
    const stats = { easy: 0, medium: 0, hard: 0 };
    questions.forEach(q => {
        stats[q.difficulty] = stats[q.difficulty] + 1;
    });
    return stats;
}

export function getCategories(questions) {
    return [...new Set(questions.map(q => q.category))];
}