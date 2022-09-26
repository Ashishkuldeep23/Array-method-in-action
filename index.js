

var givenArr = [] ;



function arr_display(){
    
    let text = document.getElementById("arr_input").value
    
    let arr = text.split(" ")

    // console.log(arr)
    // document.getElementById("arr").value  = arr

    // document.getElementById("arr_show").innerHTML = `[${arr}]`

    givenArr = arr

    document.getElementById("arr_show").innerHTML = `Your Array:[${givenArr}]`
}



function arr_pop(){
    let popa = givenArr.pop()
    // alert(popa)

    document.getElementById("arr_new").innerHTML = `New Array:${givenArr}`

    document.getElementById("arr_method").innerHTML = `Method result:${popa} `

}


function arr_push(){
    let pus_get = document.getElementById("arr_push_new").value

    let arr_insert_push = pus_get.split(" ")

    let new_arr_by_push = [...givenArr , ...arr_insert_push ]

    document.getElementById("arr_new").innerHTML = `New Array:${new_arr_by_push}`

    givenArr = [...new_arr_by_push]

    let arr_new_length = givenArr.length
    
    document.getElementById("arr_method").innerHTML = `Method result:${arr_new_length} `

}



function arr_shift(){

    let shifta = givenArr.shift()
    // alert(shifta)

    document.getElementById("arr_new").innerHTML = `New Array:${givenArr}`

    document.getElementById("arr_method").innerHTML = `Method result:${shifta} `
    
}




function arr_unshift(){

    let unshift_get = document.getElementById("arr_unshift_new").value

   let arr_insert_unshift = unshift_get.split(" ")

   let new_arr_by_unshift = [...arr_insert_unshift , ...givenArr ]


   document.getElementById("arr_new").innerHTML = `New Array:${new_arr_by_unshift}`

   givenArr = [...new_arr_by_unshift]

   let arr_new_length = givenArr.length


   document.getElementById("arr_method").innerHTML = `Method result:${arr_new_length} `


}
