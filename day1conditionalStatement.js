Input Format

Stub code in the editor reads a single integer denoting score from stdin and passes it to the function.

Output Format

The function must return the value of grade (i.e., the letter grade) that Julia earned on the exam.
Solution-

function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}
function getGrade(score) {
    let grade;
if(score>25 && score<=30)  grade='A';
else if(score>20 && score<=25)  grade='B';
else if(score>15 && score<=20)  grade='C';
else if(score>10 && score<=15)  grade='D';
else if(score>5 && score<=10)  grade='E';
else grade='F';
    
    return grade;
}
