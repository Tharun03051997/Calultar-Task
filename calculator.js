function result(aa)
{
    const rrr = document.getElementById('display')
    if(rrr.value == "Invalid")
    {
        rrr.value =""+aa;
        
    }
    else{
    rrr.value+= aa;
    }
}

function AC()
{
    const rrr = document.getElementById('display')
    rrr.value ='';
}

function DEL()
{
    const rrr = document.getElementById('display')
    if(rrr.value == "Invalid")
    {
        rrr.value ='';
    }
    else{
    rrr.value= rrr.value.slice(0,-1);
    }
}

function dot()
{
    const rrr = document.getElementById('display')
    
    
    if(rrr.value=='')
    {
        rrr.value= "0."
        
    }

    else if(rrr.value=="Invalid")
    {
        rrr.value ="Invalid";
    }
    

    
    else{
        const tharun = rrr.value.split('');
        console.log(tharun)
     
       if(!tharun.includes('.'))
        {
           tharun.push('.')
            console.log(tharun);
            const kumar = tharun.join('');
            console.log(kumar)
            rrr.value = kumar;
       }
       else{

       }
    }
}

function add(ohm)
{
    const rrr = document.getElementById('display')
    
    
    if(rrr.value=='')
    {
        rrr.value= "Invalid"
        
    }

    else if(rrr.value=="Invalid")
    {
        rrr.value ="Invalid";
    }
    
    else if(rrr.value[rrr.value.length-1]=='+' || rrr.value[rrr.value.length-1]=='-' || rrr.value[rrr.value.length-1]=='*' || rrr.value[rrr.value.length-1]=='/')
    {
        rrr.value = rrr.value.slice(0,-1) + ohm;
    }
    else
    {
        const tharun = rrr.value.split('');
        tharun.push('+')
        const kumar = tharun.join('');
        rrr.value = kumar

    }
}

function sub(ohm)
{
    const rrr = document.getElementById('display')
    
    
    if(rrr.value=='')
    {
        rrr.value= "Invalid"
        
    }

    else if(rrr.value=="Invalid")
    {
        rrr.value ="Invalid";
    }
    else if(rrr.value[rrr.value.length-1]=='+' || rrr.value[rrr.value.length-1]=='-' || rrr.value[rrr.value.length-1]=='*' || rrr.value[rrr.value.length-1]=='/')
    {
        rrr.value = rrr.value.slice(0,-1) + ohm;
    }
    else
    {
        const tharun = rrr.value.split('');
        tharun.push('-')
        const kumar = tharun.join('');
        rrr.value = kumar

    }
}

function multiply(ohm)
{
    const rrr = document.getElementById('display')
    
    
    if(rrr.value=='')
    {
        rrr.value= "Invalid"
        
    }

    else if(rrr.value=="Invalid")
    {
        rrr.value ="Invalid";
    }
    else if(rrr.value[rrr.value.length-1]=='+' || rrr.value[rrr.value.length-1]=='-' || rrr.value[rrr.value.length-1]=='*' || rrr.value[rrr.value.length-1]=='/')
    {
        rrr.value = rrr.value.slice(0,-1) + ohm;
    }
    else
    {
        const tharun = rrr.value.split('');
        tharun.push('*')
        const kumar = tharun.join('');
        rrr.value = kumar

    }
}

function slash(ohm)
{
    const rrr = document.getElementById('display')
    
    
    if(rrr.value=='')
    {
        rrr.value= "Invalid"
        
    }

    else if(rrr.value=="Invalid")
    {
        rrr.value ="Invalid";
    }
    else if(rrr.value[rrr.value.length-1]=='+' || rrr.value[rrr.value.length-1]=='-' || rrr.value[rrr.value.length-1]=='*' || rrr.value[rrr.value.length-1]=='/')
    {
        rrr.value = rrr.value.slice(0,-1) + ohm;
    }
    else
    {
        const tharun = rrr.value.split('');
        tharun.push('/')
        const kumar = tharun.join('');
        rrr.value = kumar

    }
}


function equal()
{
    const rrr = document.getElementById('display')
    
    if(eval(rrr.value).toString().includes('.'))
    {
        const mansa = eval(rrr.value).toString();
        const kayalvizhi = mansa.split('.')
        console.log(kayalvizhi)
       const nandu = kayalvizhi[0].toString();
       const jaya = kayalvizhi[1].toString();
       console.log(nandu)
       const nandulength =nandu.length;
        
       if(nandulength%2==1)
       {
    
        if(nandulength<=3)
        {
            rrr.value =eval(rrr.value)
        }
        else if(nandulength>3)
        {
            
            const arr =[]
            const jaga = (nandu.length)-3;
            let count =0;
            for(i=0; i<jaga; i++)
            {
                arr.push(nandu[i])
                count++;
                if(count==2)
                {
                    arr.push(",");
                    count=0;
                }
            }
            
            for(i=jaga; i<nandulength; i++)
            {
                arr.push(nandu[i])
            }
            
            for(i=0; i<jaya.length; i++)
            {
                if(i==0)
                {
                    arr.push(".")
                }
                arr.push(jaya[i])
            }
            console.log(arr);
            const yamuna = arr.join('')
            console.log(yamuna)
            rrr.value =yamuna;

        }
       }
       else
       {
        //const ramesh = eval(rrr.value)
        //console.log(ramesh)
        //const harika = ramesh.toString();
        if(nandulength%2==0)
        {
            
            const arr=[];
            if(nandulength==4)
            {
                const arr =[]
                for(i=0; i<nandulength; i++)
                {
                    arr.push(nandu[i])
                    if(i==0)
                    {
                        arr.push(",")
                    }

                }
                for(i=0; i<jaya.length; i++)
                {
                    if(i==0)
                    {
                        arr.push(".")
                    }
                    arr.push(jaya[i])
                }
                const varsha =arr.join('');
                console.log(varsha)
                arr.value = varsha;
                
            }
            else if(nandulength<4)
            {
                rrr.value =eval(rrr.value)
            }
            else if(nandulength>4)
            {
                let count=0;

                const jaga = nandulength-3
                const arr=[]
                for(i=0; i<jaga; i++)
                {
                    arr.push(nandu[i])
                    if(i==0)
                    {
                        arr.push(",")
                    }
                    if(i>0)
                    {
                        count++;
                        if(count==2)
                        {
                            arr.push(",")
                            count=0;
                        }
                    }
                }
                for(i=jaga; i<nandulength; i++)
                {
                    arr.push(nandu[i])
                }
                for(i=0; i<jaya.length; i++)
                {
                    if(i==0)
                    {
                        arr.push(".")
                    }
                    arr.push(jaya[i])
                }
                console.log("I love monisha")
                console.log(arr)
                const karpagam = arr.join('')
                rrr.value = karpagam;
            }
            
        }
        
        
       
       }
    }
   
      else if(rrr.value=='Invalid')
          {
    
                rrr.value = ""
               }
     else{
        const ramesh = eval(rrr.value);
        const harika = ramesh.toString();
   
         const ramya1 =harika.length;
          const swetha = harika.split;

 if(ramya1%2==1)
{ 
    
     if(ramya1<=3)
   {
    rrr.value  = ramesh;
   }
   else if(ramya1>3)
   {
    
    const arr=[];
            const jaga = (harika.length)-3;
            let count =0;
          for(i=0; i<jaga; i++)
          {
            arr.push(harika[i])
            count++
            if(count==2)
            {
                arr.push(",");
                count=0;
            }
          
            }

            for(i=jaga; i<harika.length; i++)
          {
            arr.push(harika[i])
          }
         console.log(arr)
         console.log(arr.join(''))
     const rakhee = arr.join('');
     rrr.value = rakhee;
   }
}

else{
    //rrr.value =eval(rrr.value)
    const ramesh = eval(rrr.value)
    console.log(ramesh)
    const harika = ramesh.toString();
    console.log(typeof(harika))
    console.log(harika.length)
    if(harika.length%2==0)
    {
       if(harika.length==4)
        {
            const arr =[]
            console.log(arr)
            for(i=0; i<harika.length; i++)
            {
            
               arr.push(harika[i])
               if(i==0)
               {
                arr.push(",")
               }
            }
          const trisha = arr.join('')
          console.log(trisha)
          rrr.value = trisha;
        }
        else if(harika.length>4)
        {
            const arr=[];
            const jaga = (harika.length)-3;
            let count =0;
          for(i=0; i<jaga; i++)
          {
            arr.push(harika[i])
            if(i==0)
            {
                arr.push(",")
            }
            if(i>0)
            {
                count++
            
                if(count==2)
                {
                    arr.push(",")
                    count=0
                }
            }
            
            
          }
          for(i=jaga; i<harika.length; i++)
          {
            arr.push(harika[i])
          }
          console.log(arr.join(''))
          rrr.value =arr.join('')
        }
        else if(harika.length<4)
        {
            rrr.value = ramesh;
        }
    }
}}
}
