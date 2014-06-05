/* Lexer */

%{
    var reserved_words = {
		PROGRAM: 'program',
		LINE: 'line',
		POINT: 'point',
		SET: 'set' ,
		ROUTE: 'route'
    }

    function idORrw(x) {
        return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID'
    }

    %}

%%

[\s\t\n\r] /* Ignorar espacios */

'=' return 'ASSIGN'
[*/+-] return yytext

\b[a-zA-Z_]\w*\b return idORrw(yytext)
\b[0-9]+\b return 'NUMBER'
'{' return 'LLAVE_OPEN'
'}' return 'LLAVE_CLOSE'
',' return 'COMMA'
';' return 'END_SENTENCE'
'(' return 'PAR_OPEN'
')' return 'PAR_CLOSE'

<<EOF>> return 'EOF'

. return 'INVALID'
