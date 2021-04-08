//FUNCÕES
function nanData(array){
  let list=[];
  for(let j=1; j<array.length-1; ++j){
    let aux=array[j].split(",")
    for(let k=9; k<aux.length; ++k){
        if(aux[k]==''|| aux[k]=='no' || aux[k]=='0'){
            aux[k]="false"
        }
        if(aux[k]=="yes" || aux[k]=='1'){
            aux[k]="true"
        }
    }
    list.push(aux)
  }
  return list; 
}
function mergeArrays(arrays,x,y){
  let tmp=[];
  let tmp2=[];
  let aux = (x < y )? x: y;
  for(let i=0;i<arrays.length;i++){
      if(i==aux){
        // concate os arrays
        for(let j=0;j<arrays[0].length;j++){
          if(j<2){
            tmp2.push(arrays[i][j])
          }else{
            tmp2.push(arrays[x][j].concat(',', arrays[y][j]));
          }
  
        }
        //console.log(tmp2);
        tmp.push(tmp2);
      }else{
        if (i!= x && i!= y){
          tmp.push(arrays[i]);
        }
      }
  }
 // console.log(tmp)
  return tmp
}
function merge(array){
  //console.log(array);
  let list = [];
  for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
      if(array[j][0]==array[i][0] && array[j][1]==array[i][1]){
        let aux =mergeArrays(array,i,j);
        //list.push(aux); vai virar uma lista de lista de listas
        return aux;  
      }
    }
  }
  return array;
}

function groups(array){
  let lista =[];
  for(let i=0;i<array.length;i++){
      let tmp=(array[i][8].concat(", ",array[i][9])).split(",");
      let tmp4=tmp.toString().split("/");
      //console.log(tmp4);
      //console.log("proxima interação: "+i)
      lista.push(tmp4.toString())
  }
  
  return lista;
}

function removeElement(arr,i,j){
  var newStr = arr[i].replace(arr[i][j],"");
  return newStr;
}
function remNoise(arr){
  let newArray = [];
  let flag =0;
  let tmp="";
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]=='"' ||arr[i][j]==':'){
          tmp =removeElement(arr,i,j)
          flag=1;
        }
    }
    if(flag==1){
      newArray.push(tmp);
      flag=0;
    }else{
      newArray.push(arr[i])
    }
  }
  return newArray;
}

function repeatData(arr){
  let lista=[];
  for(let i=0;i<arr.length;i++){
    if(lista.indexOf(arr[i])==-1){
      lista.push(arr[i]);
    }
  }
  return lista;
}

function removeSpace(arr){
  let newArray=[];
  for(let i=0;i<arr.length;i++){
    newArray.push(arr[i].trim());
  }
  return newArray;
}

function telefone(arr){
  //console.log(arr)
  let tmp=[];
  for(let i=0;i<arr.length;i++){
    if(i==3 || i==5 || i==7){
      let aux=arr[i].split(",");
      //console.log(aux);
      for(let j=0;j<aux.length;j++){
        if(aux[j][0]=='k'){
          aux.shift();
          //console.log(aux)
        }
      }
      tmp.push(aux.toString())
    }else{
      tmp.push(arr[i]);
    }
  }
  return tmp;
}
function telefonefix(arr){
  //console.log(arr)
  let tmporaria=[];
  for(let i=0;i<arr.length;i++){
    if(i==3 || i==5 || i==7){
      let aux=arr[i].split(",");
      //console.log("telefones:\n")
     // console.log(aux);
      for(let j=0;j<aux.length;j++){
        if(aux[j][0]=='1'){
          let str= "";
          for(let k=0;k<aux[j].length;k++){
            if(k==0){
              str+="("+aux[j][k];
            }
            else if(k==1){
              str+=aux[j][k]+")";
            }
            else if(k==2){
              if(aux[j][k]==" "){
                str+=aux[j][k];
              }else{
              str+=" "+aux[j][k];
              }
            }
            else if(k==7){
              if(aux[j][k]=="-" || aux[j][k+1]=="-"){
                str+=aux[j][k];
              }else{
              str+="-"+aux[j][k];
              }
            }
            else{
              str+=aux[j][k];
            }
          }
          aux.toString().replace(arr[j],str)
        }        
      }
      tmporaria.push(aux.toString());
  }
}
  return tmporaria;
}
function mailextract(arr){
  let mail=[];
  
  for(let i=0;i<arr.length;i++){
    let tmp=[];
    let aux=[];
    let aux1=[];
    let aux2=[];
    for(let j=0;j<arr[i].length;j++){
      if(j==2){
        aux.push(arr[i][j])
      }
      if(j==4){
        aux1.push(arr[i][j])
      }
      if(j==6){
        aux2.push(arr[i][j])
      }
    }
    tmp.push(aux);
    tmp.push(aux1);
    tmp.push(aux2);
    mail.push(tmp);

  }
  return mail;
}
function mailfix(arr){
  let mail=[];
  let a=[];
  for(let j=0;j<arr[0].length;j++){
    let aux=arr[0][j].toString().split(",");
    if(j==0){
        tmp1=[];
        let aux1=aux[0].replace("(","");
        aux1=aux1.trim();
        tmp1.push(aux1)
        tmp1.push(aux[1])
        a.push(tmp1)   
      }
      if(j==1){
        let tmp2=[];
        tmp2.push(aux[0]);
        let tmp=aux[1].toString().split("/");
        tmp2.push(tmp[0]);
        tmp2.push(tmp[1]);
        a.push(tmp2)
      }
      if(j==2){
        let tmp3=[]
        let tmp4=aux.pop();
        tmp3.push(aux.toString())         
        a.push(tmp3)
      } 
    }
  mail.push(a);
  mail.push(arr[1].toString().split(","))
  mail.push(arr[2].toString().split(","))
  console.log(mail)
  return mail
}
/* ***************************************************************************************************** */
/* **************************** SOLUCAO DO PROBLEMA **************************************************** */

// precisamos arrumar o csv:
// verificar se temos pessoas repetidas e dar um merge nas linhas que cuja as pessoas já estão presentes
// arrumar o telefone, tirando as impurezas (aplicar as tags)
// arrumar os emails em tipos     ( aplicara as tags)


// LIBS
const fs = require("fs"); 
csv = fs.readFileSync("input.csv");
const PNF = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();   
// get the header of CSV input
var array = csv.toString().split("\n"); 
let headers = array[0].split(",") ;

//  passo  1
/************************************************** */
/******** arrumando os dados faltantes ************ */
let listoflist = nanData(array);
//console.log(nanData(array));

//  passo 2
/************************************************** */
// Arrumando pessoas repetidas com mesmo ID ******* */

listoflist=merge(listoflist);
//console.log(listoflist);

// passo3
/************************************************** */
/******** removendo impurezas nos dados *********** */
let newlist=[];
let newlist1=[];

for(let i=0; i<listoflist.length; i++){
  newlist.push(remNoise(listoflist[i]));
}
for(let i=0; i<listoflist.length; i++){
   newlist1.push(remNoise(listoflist[i]));
}
//console.log(newlist1);

// passo 4 
/************************************************** */
// ********* arrumar os  telefones **************** */
//console.log(newlist1);
let newlist2=[];
for(let i=0; i<newlist1.length; i++){
  newlist2.push(telefone(newlist1[i]));
  //console.log(newlist2);
}
//console.log(newlist2);
telefone=[];
for(let i=0; i<newlist1.length; i++){
  telefone.push(telefonefix(newlist2[i]));
  //console.log(newlist2);
}
//console.log(telefone)
//console.log(newlist2);
// passo 5 
/************************************************** */
// ********* arrumar os emails    ***************** */
let email=mailextract(newlist2);
//console.log("emails:")
//console.log(email)
//console.log("fix email: ")
let emailFixed=mailfix(email);
//passo6
/************************************************** */
// ********* arrumando os HEADERS ***************** */
newHeaders = ["fullname", "eid", "groups" ,"addresses", "invisible","see_all"];
//console.log(newHeaders)

//passo 7
/************************************************** */
// ********* arrumando os Groups ***************** */
let grupos= groups(listoflist);
let tmp=remNoise(grupos);
tmp=remNoise(tmp)

a=[];
let aa=[];
for(let i=0; i<tmp.length; i++){
  aa.push(removeSpace(tmp[i].split(",")));
}
let tmp2=[];
for(let i=0; i<aa.length; i++){
  a.push(repeatData(aa[i]));
}
//passo 8
/************************************************** */
// ********* arrumando os Addresses *************** */
address={};


//arrumando o json file output

















//console.log(merge(listoflist));
//let listoflist=merge(listoflist);

/*
for (let i = 1; i < array.length - 1; i++) { 
  let obj = {} 
  let str = array[i] 
  let s = ''

  let flag = 0 
  for (let ch of str) { 
    if (ch === '"' && flag === 0) { 
      flag = 1 
    } 
    else if (ch === '"' && flag == 1) flag = 0 
    if (ch === ', ' && flag === 0) ch = '|'
    if (ch !== '"') s += ch 
  } 
  // Split the string using pipe delimiter |  
  // and store the values in a properties array 
  let properties = s.split("|")
  //console.log(properties)
 
  //result.push(obj) 
}
*/


/*
const CSVToJSON = require('csvtojson');

// convert users.csv file to JSON array
CSVToJSON().fromFile('input.csv')
    .then(users => {

        // users is a JSON array
        // log the JSON array
        console.log(users);
    }).catch(err => {
        // log error if any
        console.log(err);
    });
 */ 
// Convert the data to String and 
// split it in an array 

  

  //console.log(properties) 
  
  // For each header, if the value contains 
  // multiple comma separated data, then we 
  // store it in the form of array otherwise 
  // directly the value is stored 
  /*
  for (let j in headers) { 
    if (properties[j].includes(",")) { 
      obj[headers[j]] = properties[j] 
        .split(", ").map(item => item.trim()) 
    } 
    else obj[headers[j]] = properties[j] 
  } 
*/    
  // Add the generated object to our 
  // result array  
 
  
// Convert the resultant array to json and  
// generate the JSON output file. 
//let json = JSON.stringify(result); 
//fs.writeFileSync('output.json', json); 
