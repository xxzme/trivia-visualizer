import { useState, useEffect, useRef } from 'react';
import {decodeQuestion} from '../utils/htmlUtils';



export function useTrivia() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const reloadTimeoutRef = useRef(null);
    const isFetchingRef = useRef(false);

    async function fetchQuestions() {
        // if data loading, no more request
        if (isFetchingRef.current) {
            return;
        }

        try {
            isFetchingRef.current = true;
            setLoading(true);
            setError(null);

            console.log('Loading data');
            const response = await fetch('https://opentdb.com/api.php?amount=50');

            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            const data = await response.json();
            const decodedQuestions = data.results.map(decodeQuestion);
            setQuestions(decodedQuestions);

        } catch (err) {
            setError(err.message);
            console.error(err);
        } finally {
            setLoading(false);
            isFetchingRef.current = false;
        }
    }

    function reloadData() {
        // cancel previous request if exists
        if (reloadTimeoutRef.current) {
            clearTimeout(reloadTimeoutRef.current);
        }

        setQuestions([]);
        setError(null);
        setLoading(true);

        // because of rate limit we must wait 5 seconds
        reloadTimeoutRef.current = setTimeout(() => {
            fetchQuestions();
            reloadTimeoutRef.current = null;
        }, 5000);
    }

    useEffect(() => {
        fetchQuestions();
        return () => {
            if (reloadTimeoutRef.current) {
                clearTimeout(reloadTimeoutRef.current);
            }
        };
    }, []);

    return { questions, loading, error, reloadData };
}