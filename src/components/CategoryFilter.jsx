export function CategoryFilter({ categories, selectedCategory, onCategoryChange, totalQuestions, questions }) {
    return (
        <div style={{margin: '20px 0'}}>
            <label style={{color: '#e0e7ff', marginRight: '10px', fontSize: '16px'}}>Choose category: </label>
            <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#543f98',
                    color: '#ffffff',
                    border: '2px solid #a78bfa',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: '500',
                    transition: 'all 0.3s'
                }}
            >
                <option value="all">All categories ({totalQuestions})</option>
                {categories.map(cat => (
                    <option key={cat} value={cat}>
                        {cat} ({questions.filter(q => q.category === cat).length})
                    </option>
                ))}
            </select>
        </div>
    );
}