import { useState } from 'react';


const StringTransform = () => {

    const [inputString, setInputString] = useState('hello world');
    const [transformedString, setTransformedString] = useState(inputString);

    const handleInputChange = (e) => {
        setInputString(e.target.value);
    };

    const toLower = () => {
        setTransformedString(inputString.toLowerCase());
    };

    const toUpper = () => {
        setTransformedString(inputString.toUpperCase());
    };

    const toCamel = () => {
        const words = inputString.split(' ');
        const camelCase = words.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            } else {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }).join('');
        setTransformedString(camelCase);
    };

    const toPascal = () => {
        const words = inputString.split(' ');
        const pascalCase = words.map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ).join('');
        setTransformedString(pascalCase);
    };

    const toSnake = () => {
        const snakeCase = inputString.replace(/\s+/g, '_').toLowerCase();
        setTransformedString(snakeCase);
    };

    const toKebab = () => {
        const kebabCase = inputString.replace(/\s+/g, '-').toLowerCase();
        setTransformedString(kebabCase);
    };

    const trim = () => {
        setTransformedString(inputString.trim());
    };

    return (
        <>
            <main className='h-screen text-white flex flex-col justify-evenly items-center'>
            <h1 className='text-4xl mt-5'>String Transformer</h1>
                <div className='h-full w-full flex justify-center items-center flex-col gap-5'>
                    <textarea
                        rows={4}
                        className='bg-violet-950 p-3 w-1/2'
                        placeholder="Enter a sentence..."
                        value={inputString}
                        onChange={handleInputChange}
                    />
                    <div className='flex gap-4'>
                        <button className='rounded-lg bg-yellow-600 px-4 py-2' onClick={toLower}>Lower Case</button>
                        <button className='rounded-lg bg-yellow-600 px-4 py-2' onClick={toUpper}>Upper Case</button>
                        <button className='rounded-lg bg-yellow-600 px-4 py-2' onClick={toCamel}>Camel Case</button>
                        <button className='rounded-lg bg-yellow-600 px-4 py-2' onClick={toPascal}>Pascal Case</button>
                        <button className='rounded-lg bg-yellow-600 px-4 py-2' onClick={toSnake}>Snake Case</button>
                        <button className='rounded-lg bg-yellow-600 px-4 py-2' onClick={toKebab}>Kebab Case</button>
                        <button className='rounded-lg bg-yellow-600 px-4 py-2' onClick={trim}>Trim</button>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <strong>Transformed String:</strong>
                        <p>{transformedString}</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default StringTransform
