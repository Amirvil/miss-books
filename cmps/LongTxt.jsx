const { useState, useEffect } = React

export function LongTxt({ txt, length = 100 }) {
    const [isExpanded, setIsExpanded] = useState(false)

    if (txt.length <= length) return <p>{txt}</p>

    const displayText = isExpanded ? txt : txt.substring(0, length) + '...'

    return (
        <p className="long-txt">
            {displayText}
            <button 
                onClick={() => setIsExpanded(prev => !prev)}
                style={{ marginLeft: '5px', cursor: 'pointer', border: 'none', background: 'none', color: 'blue', textDecoration: 'underline' }}
            >
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </p>
    )
}