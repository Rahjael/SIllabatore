// Various const used in the program
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

const inputFieldID = "#input-field";
const outputFieldID = "#output-field";


// Helper functions
function isConsonant(letter) {
  return consonants.includes(letter);
}
function isVowel(letter) {
  return vowels.includes(letter);
}
function areEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i])
};
// END Helper functions


function divideWord(word) {  
  /*
  Rules are taken from: https://www.linkuaggio.com/2011/08/grammatica-italiana-divisione-in.html
  */ 
 let isolateInitialVowel = (word) => {
    /* 
    Una vocale iniziale di parola, seguita da una sola consonante, costituisce da sola una sillaba. 
    Se trovate una vocale all'inizio della parola e tale vocale è seguita da una sola consonante (solo una: non di più) la vocale forma da sola una sillaba.
    */   
    if(isVowel(word.charAt(0)) && isConsonant(word.charAt(1)) && isVowel(word.charAt(2))) {
      return word.slice(0, 1) + '-' + word.slice(1);
    }    
    return word;
  }  

  let divideDoublesCQ = (word) => {
    /*
    Le doppie (o consonanti geminate) vanno sempre divise (anche il gruppo cq va considerato come doppia).
    */
   for(let i = 0, j=i+1; j < word.length; i++, j++) {
     iChar = word.charAt(i);
     jChar = word.charAt(j);

     if(jChar == iChar || (iChar == 'c' && jChar == 'q')){
       return word.slice(0, j) + '-' + word.slice(j);
      }
    }
    return word;
  }
  
  let divideConsonantTriplets = (word) => {
    // Nelle parole con tre o più consonanti la divisione in sillabe 
    // avviene tra la prima e la seconda.    
    for(let i = 0, j = i + 1, k = j + 1; k < word.length; i++, j++, k++) {
      iChar = word.charAt(i);
      jChar = word.charAt(j);
      kChar = word.charAt(k);

      if([iChar, jChar, kChar].some( c => c === '-')) continue;      
      if([iChar, jChar, kChar].every(isConsonant)) {
        // Added check for 4 consonants ("tungsteno")
        if(isConsonant(word.charAt(k + 1))) {
          word = word.slice(0, k) + '-' + word.slice(k);
          i += 3;
          j = i + 1;
          k = j + 1;
        }
        else if(iChar != 's') {
          word = word.slice(0, j) + '-' + word.slice(j);
          i += 3;
          j = i + 1;
          k = j + 1;
        }
      }
    }
    return word;
  }

  let fixLetterS = (word) => {
    // s va sempre con la sillaba successiva e non con quella precedente
    for(let i = 0, j = i + 1, k = j + 1; j < word.length; i++, j++, k++) {
      iChar = word.charAt(i);
      jChar = word.charAt(j);
      kChar = word.charAt(k);

      // Fixes S only if not double
      if(iChar == 's' && jChar == '-' && kChar != 's'){
        return word.slice(0, i) + '-s' + word.slice(j + 1);
      }
    }
    return word;
  }

  let fix4Vowels = (word) => {
    for(let i = 0, j = i + 1, k = j + 1, z = k + 1; z < word.length; i++, j++, k++, z++) {
      iChar = word.charAt(i);
      jChar = word.charAt(j);
      kChar = word.charAt(k);
      zChar = word.charAt(z);

      if([iChar, jChar, kChar, zChar].every( char => isVowel(char))){
        return word.slice(0, k) + '-' + word.slice(k);
      }
    }
    return word;

  }
    
  /*
  I digrammi e trigrammi non vanno divisi. 
  */
  let isDigramma = (str) => { // str.length === 3
    /*
    I digrammi usati in italiano sono sette:
    GL = davanti a I: egli, figli (in pochi casi, però, gli si pronuncia con la G dura anche davanti a I senza formare digramma: negligente, negligenza, ganglio, glicine ecc.)      
    GN = legno, campagna (non però in parole di origine straniera, come wagneriano, da Wagner)      
    CH = davanti a E e I: oche, chimica      
    GH = davanti a E e I: margherita, laghi      
    SC = davanti a E e I: scegliere, nascita      
    CI = davanti a A, O, U: camicia, marcio, ciuco      
    GI = davanti a A, O, U: giallo giorno, ingiuria
    */
    let digrammi = ['gli',
                    'che', 
                    'chi',
                    'ghe',
                    'ghi',
                    'sce',
                    'sci',
                    'cia',
                    'cio',
                    'ciu',
                    'gia',
                    'gio',
                    'giu',
                    'gna',
                    'gne',
                    'gni',
                    'gno',
                    'gnu'
                  ];
        
    if(digrammi.includes(str)) {
      return true;
    }
    else return false;
  }
    
  let isTrigramma = (str) => { // str.length === 4   
    /*
    I trigrammi usati in italiano sono due:
    GLI + vocale = aglio, maglia, sbagliare, pagliuzza
    SCI + vocale = lascio, sciupare, coscia, fasciato
    Nei trigrammi la "i" serve solo da segno grafico.
    */
    let trigrammi = [ 'glia',
                      'glie',
                      'glio',
                      'gliu',
                      'scia',
                      'scie',
                      'scio',
                      'sciu',
                      ];
  
    if(trigrammi.includes(str)) {
      return true;
    }
    else return false;
  }
  
  let isUndividableConsonants = (str) => { // str.length === 2
    // I nessi costituiti da b, c, d, f, g, p, t, v + l / r non si dividono mai.
    let firstChar = ['b','c','d','f','g','p','t','v'];
    let secondChar = ['l','r'];
    
    if(firstChar.includes(str.charAt(0)) && secondChar.includes(str.charAt(1))) return true;
    else return false;
  }

  let isDittongo = (str) => { // str.length === 2
    let dittongo = ['ia', 'ie', 'ei', 'io', 'oi', 'iu', 'ui', 'ua', 'au', 'ue', 'eu', 'uo', 'ou'];

    if(dittongo.includes(str)) return true;
    else return false;
  }

  let isTrittongo = (str) => { // str.length === 3
    let trittongo = ['iai', 'iei', 'uai', 'uoi', 'iuo'];

    if(trittongo.includes(str)) return true;
    else return false;
  }

  let isIato = (str) => { // str.length === 2
    // TODO not needed at the moment
  }
    
  /*
  *   END SUBROUTINES
  */ 

  /*
  *   ACTUAL ALGORITHM
  */ 


  let dittonghiExceptions = ['m'];
 
  // Apply context rules going backwards
  for(let z = word.length - 1; z > 0; z--) {
    let currentChar = word.charAt(z);
    let prevChar = word.charAt(z - 1);
    let nextChar = word.charAt(z + 1);    

    // 4 letters check
    let str = word.slice(z - 3, z + 1); // previous 3 + currentChar
    if(isVowel(currentChar) && isTrigramma(str)) {
      word = word.slice(0, z - 3) + '-' + word.slice(z - 3);
      z -= 4;
      continue;
    }
    
    // 3 letters checks
    str = word.slice(z - 2, z + 1); // previous 2 + currentChar
    if(isVowel(currentChar) && isDigramma(str)) {
      word = word.slice(0, z - 2) + '-' + word.slice(z - 2);
      z -= 3;
      continue;
    }

    if(isVowel(currentChar) && isTrittongo(str)) {
      if(isConsonant(word.charAt(z - 3))) {
        word = word.slice(0, z - 3) + '-' + word.slice(z - 3);
        z -= 4;
      }
      else if(isVowel(word.charAt(z - 3))) {
        word = word.slice(0, z - 2) + '-' + word.slice(z - 2);
        z -= 3;
      }
      continue;
    }

    // 2 letters checks
    str = word.slice(z - 1, z + 1); // previous + currentChar
    if(isVowel(currentChar) && isDittongo(str) && !dittonghiExceptions.includes(word.charAt(z - 2))) {
      continue;
    }

    if(isConsonant(currentChar) && isVowel(nextChar)) {
      if(!isUndividableConsonants(str)) {
        word = word.slice(0, z) + '-' + word.slice(z);
      }
      continue;
    }

    if(isVowel(currentChar) && isVowel(prevChar)) {
      word = word.slice(0, z) + '-' + word.slice(z);
      continue;
    }

    if(isUndividableConsonants(currentChar + nextChar)) {
      word = word.slice(0, z) + '-' + word.slice(z);
    }
  }
  
  
  // Apply particular rules
  word = divideDoublesCQ(word);
  word = isolateInitialVowel(word);
  word = fixLetterS(word);
  word = divideConsonantTriplets(word);
  word = fix4Vowels(word);

  if(word.charAt(0) == '-') {
    word = word.slice(1);
  }

  return word;
}



// XXX This workaround is necessary to avoid showing uncaught errors in the console
// This export sintax is required by the Jest testing suites but is not accepted by 
// current browsers
try {
  module.exports.isConsonant = isConsonant;
  module.exports.isVowel= isVowel;
  module.exports.divideWord= divideWord;
}
catch(e) {
  /* istanbul ignore next */
  console.log("Exports skipped");
}
