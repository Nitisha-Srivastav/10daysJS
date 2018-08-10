Input Format

Stub code in the editor reads a single string denoting s from stdin.

Output Format

Return either A, B, C, or D according to the criteria given above

Solution-
function getLetter(s) {
    let letter;
    switch(s.charAt(0))
        {
                case('a'||'e'||'i'||'o'||'u'):
               { letter='A';
                break;}
                case('b'||'c'||'d'||'f'||'g'):
                 {letter='B';
                    break;}
                case('h'||'j'||'k'||'l'||'m'):
               { letter='C';
                break;}
                case('n'||'p'||'q'||'r'||'s'||'t'||'v'||'w'||'x'||'y'||'z'):
                {letter='D';
                }
        }
    
    return letter;
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
