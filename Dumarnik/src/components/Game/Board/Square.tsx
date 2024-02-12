
import './table.css'

const bulgarianAlphabet = {
    1: 'А',
    2: 'Б',
    3: 'В',
    4: 'Г',
    5: 'Д',
    6: 'Е',
    7: 'Ж',
    8: 'З',
    9: 'И',
    10: 'Й',
    11: 'К',
    12: 'Л',
    13: 'М',
    14: 'Н',
    15: 'О',
    16: 'П',
    17: 'Р',
    18: 'С',
    19: 'Т',
    20: 'У',
    21: 'Ф',
    22: 'Х',
    23: 'Ц',
    24: 'Ч',
    25: 'Ш',
    26: 'Щ',
    27: 'Ъ',
    28: 'Ь',
    29: 'Ю',
    30: 'Я',
};

const Square = () => {
    

    return (
        <div className='game-board'>
            <table className='default-table'>
                <tbody>
                    {Object.entries(bulgarianAlphabet).map((item, index) => (
                        <td key={index}>{item}</td>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Square