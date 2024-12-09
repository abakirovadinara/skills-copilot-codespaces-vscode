import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

/*
Create a basic markdown editor in Next.js with the following features:
- Use react hooks
- Create a state for markdown with the default text "type markdown here"
- A text area where users can write markdown 
- Show a live preview of the markdown text as I type
- Support for basic markdown syntax like headers, bold, and italics 
- Use React markdown npm package 
- The markdown text and resulting HTML should be saved in the component's state and updated in real-time 
*/
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div>
            <textarea
                value={markdown}
                onChange={handleChange}
                rows="10"
                cols="50"
            />
            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;
const reverseSentence = (sentence) => {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
};

console.log(reverseSentence("hello world from copilot")); // Output: "Copilot from world hello"
const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 35 },
        { name: 'Alice', age: 28 }
    ]
];

const extractNames = (nestedArray) => {
    return nestedArray.flatMap(innerArray => innerArray.map(item => item.name));
};

const names = extractNames(data);
console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']