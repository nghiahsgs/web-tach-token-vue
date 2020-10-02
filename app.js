const app = new Vue({
	el : "#app",
  data:{
  		/* input_lines:"a1|a2|a3|a4|a5\nb1|b2|b3|b4|b5" */
      input_lines:''
  },
  computed:{
  	data(){

      data_r = []      

      nb_row = this.input_lines.split('\n').length
      nb_col = this.input_lines.split('\n')[0].split('|').length

      for(let i=0; i< nb_row; i++){
        let row = []
        for(let j=0; j< nb_col; j++){
          e = this.input_lines.split('\n')[i].split('|')[j]
          row.push(e)
        }  
        data_r.push(row)
      }
      return data_r

    },
  	data_tranpose(){
			nb_row = this.data.length
      nb_col = this.data[0].length
      

      
      let data2 = []
      for(let i=0;i<nb_col;i++){
        let row =[]
        for(let j=0;j<nb_row;j++){
          //hang i, cot j
          row.push(this.data[j][i])
        }
        data2.push(row)
      }
      return data2

    }
  }
})