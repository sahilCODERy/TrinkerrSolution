function mirrorString(st){
    st=st.split("");
    for(let i=0, j=st.length-1; i<st.length/2,j>=st.length/2;){
        
        if((st[i]>='a' && st[i]<='z' || st[i]>='A' && st[i]<='Z') && (st[j]>='a' && st[j]<='z' || st[j]>='A' && st[j]<='Z')){
            let temp=st[i];
            st[i]=st[j];
            st[j]=temp;
            i++;
            j--;
        }
        if(!(st[i]>='a' && st[i]<='z' || st[i]>='A' && st[i]<='Z') ){
            i++;
        }
        if(!(st[j]>='a' && st[j]<='z' || st[j]>='A' && st[j]<='Z') ){
            j--;
        }
        
    }

    return st.join("");
}

console.log(mirrorString("ab-cd"))
console.log(mirrorString("a-bC-dEf-ghIj"))
