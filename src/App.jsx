import { useState } from 'react';
import { useTrivia } from './hooks/useTrivia';
import { getCategoryStats, getDifficultyStats, getCategories } from './utils/dataAnalysis';
import { CategoryFilter } from './components/CategoryFilter';
import { CategoryChart } from './components/CategoryChart';
import { DifficultyContainer } from './components/DifficultyContainer'
import {TryAgainButton} from './components/TryAgainButton';
import {Stats} from './components/Stats';
import {ReloadButton} from './components/ReloadButton';
import {ShowHideButton} from './components/ShowHideButton';
import './App.css';

function App() {
    const { questions, loading, error, reloadData } = useTrivia();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredQuestions = selectedCategory === 'all'
        ? questions
        : questions.filter(q => q.category === selectedCategory);

    const categories = getCategories(questions);
    const difficultyStats = getDifficultyStats(filteredQuestions);
    const categoryStats = getCategoryStats(questions);
    const [showCategoryChart, setShowCategoryChart] = useState(false);

    return (
        <div className="app-container">
            <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />

            <div className="content-wrapper">
                <div className="main-container">
                    <h1 className="app-title"> Trivia quiz visualizer</h1>

                    {loading && (
                        <div className="loading-container">
                            <p className="loading-text"> Loading questions...</p>
                            <div className="loader"></div>
                        </div>
                    )}

                    {error && (
                        <p className="error-text"> {error}</p>
                    ) && (<TryAgainButton reloadData={reloadData}/>)}

                    {questions.length > 0 && (
                        <div>
                            <Stats categories={categories}
                                   questions={questions}/>

                            <ReloadButton onReload={reloadData}/>

                            <CategoryFilter
                                categories={categories}
                                selectedCategory={selectedCategory}
                                onCategoryChange={setSelectedCategory}
                                totalQuestions={questions.length}
                                questions={questions}
                            />

                            <ShowHideButton
                                showChart={showCategoryChart}
                                onToggle={() => setShowCategoryChart(!showCategoryChart)}
                            />

                            {showCategoryChart && <CategoryChart categoryStats={categoryStats} />}

                            <DifficultyContainer difficultyStats={difficultyStats}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;