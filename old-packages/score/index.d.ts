interface Answer {
    domain: string;
    score: number;
    facet?: string;
}

interface CalculateResultFunction {
    (score: number, count: number): string;
}

interface Data {
    answers: Answer[];
    calculateResult?: CalculateResultFunction;
}

interface Result {
    [domain: string]: {
        score: number;
        count: number;
        result: string;
        facet: {
            [facet: string]: {
                score: number;
                count: number;
                result: string;
            }
        }
    }
}

declare function calculateScores(data: Data): Result;

export = calculateScores;
