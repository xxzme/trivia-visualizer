import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const DIFFICULTY_COLORS = {
    easy: '#9F99D8FF',
    medium: '#6a5bde',
    hard: '#523E93FF'
};

export function DifficultyChart({difficultyStats }) {

    const difficultyData = Object.entries(difficultyStats).map(([name, value]) => ({
        name: name === 'easy' ? 'Easy' : name === 'medium' ? 'Medium' : 'Hard',
        value,
        originalName: name
    }));

    return (
        <div style={{ marginTop: '30px' }}>

            {/* Difficulty diagramm */}
            <div style={{ margin: '0 auto',
            width: '450px'}}>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={difficultyData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" name = "Amount of questions">
                            {difficultyData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={DIFFICULTY_COLORS[entry.originalName]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}