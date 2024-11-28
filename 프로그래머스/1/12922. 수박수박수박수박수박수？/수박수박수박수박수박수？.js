const solution=(n)=>[...new Array(n)].map((_,index)=>(index+1)%2===1?"수":"박").join("");
