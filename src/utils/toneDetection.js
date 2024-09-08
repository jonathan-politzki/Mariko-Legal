const aggressiveWords = [
    'angry', 'furious', 'hostile', 'aggressive', 'threatening', 'violent',
    'rude', 'insulting', 'offensive', 'abusive', 'harsh', 'cruel', 'fuck', 'shit', 'damn'
  ];
  
  export const detectTone = (text) => {
    const lowercaseText = text.toLowerCase();
    return aggressiveWords.some(word => lowercaseText.includes(word));
  };