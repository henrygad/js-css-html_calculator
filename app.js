const  dispaly_input = document.querySelector('.input')
const display_output = document.querySelector('.output')
const key_els = document.querySelectorAll('.key')
let input = ''
let result = ''

/* function calcalate() {
   let first_value = ''
   let second_value = ''
   let symbol_value = ''
 

    const operator = ['+', '-', '*', '/', '%']
    const symbol_eval = operator.includes(key_value)
         if(first_value && symbol_eval){
            if (second_value) {
               result = calcalate()
               first_value = result 
               second_value = ''
            }
         symbol_value = key_value
         } else if(!symbol_value){
         first_value += key_value
         } else if(symbol_value){
         second_value += key_value
         }

         if(symbol_value == '%'){
            result = calcalate()
            first_value = result
            second_value = ''
         } 


   first_value = parseFloat(first_value)
   second_value = parseFloat(second_value)

   if(symbol_value == '%') return first_value/100 
   if(symbol_value == '+') return first_value + second_value
   if(symbol_value == '-') return first_value - second_value
   if(symbol_value == '*') return first_value * second_value
   if(symbol_value == '/') return first_value / second_value 
} */


for(let key of key_els){
  const key_value = key.getAttribute('data-key')

  key.addEventListener('click', () => {

   if(key_value == 'clearall'){
        input = result = first_value = second_value = symbol_value = ''
      return dispaly_input.innerHTML = display_output.innerHTML = ''
   } else if(key_value == 'backspace') {
        input = input.slice(0, -1)
   } else if(key_value == '=') {
          result = eval(percentFittre(input))
           display_output.innerHTML = resultFitter(result)
   } else if(key_value == 'brackgets'){
      if(input.indexOf('(') == -1 || 
         input.lastIndexOf('(') < input.lastIndexOf(')')){
         input += '('
      } else if(input.indexOf('(') !== -1) {
         input += ')'
      }
   } else {
       if(keyRepent(key_value, input)) {
         input += key_value
       }
   }
   dispaly_input.innerHTML = inputFilter(input)
  })
}

//

function percentFittre(value) {
   const arr = []
   const arr_percent = value.split('')

   arr_percent.forEach(text => {
      if(text == '%') {
         text = '/100'
      } else {
         text = text
      }
      arr.push(text)

   })
    return arr.join('')
}

//

function inputFilter(value) {
   const arr = []
   const input_arr = value.split('')

      input_arr.forEach(text => {
         if(text == '+'){
           text = ` <span class="operator">${text}</span> `
         } else if(text == '-'){
           text = ` <span class="operator">${text}</span> `     
         } else if(text == '*'){
           text = ` <span class="operator">${text}</span> `     
         }else if(text == '/'){
           text = ` <span class="operator">÷</span> `     
         }else if(text == '%'){
           text = ` <span class="percent">${text}</span> `     
         }else if(text == '('){
           text = ` <span class="brackets">${text}</span> `     
         }else if(text == ')'){
           text = ` <span class="brackets">${text}</span> `     
         }  
         arr.push(text)
      })
    return arr.join('')   
}

//

function keyRepent(value , value2) {
   const last_input = value2.slice(-1)
 
   if(value == '.' && last_input == '.') return false 
   if(value == '+' && last_input == '+')return false 
   if(value == '-' && last_input == '-')return false  
   if(value == '*' && last_input == '*')return false  
   if(value == '/' && last_input == '/')return false  
   if(value == '%' && last_input == '%')return false 

   return true 
} 

function resultFitter(value) {
   const arr_value = value.toString()
   console.log(arr_value)
   for(i = 0; i < arr_value.length; i++){
      console.log(arr_value[i])

   }

}