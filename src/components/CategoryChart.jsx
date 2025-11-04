import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const COLORS = ['#7f6fb3', '#6b49d8', '#ac9e84', '#578354', '#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1', '#d084d0'];
export function CategoryChart ({ categoryStats}) {
    const categoryData = Object.entries(categoryStats)
        .map(([name, value]) => ({
            name,
            value
        }))
        .sort((a, b) => b.value - a.value);
    return (
        <div style={{marginBottom: '30px' }}>
        <h3>Category</h3>
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    </div>);
}