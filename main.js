var result;
$(document).ready(function() {
  $('#parse').click(function() {
    try {
      var myCodeMirror = $(".CodeMirror")[0].CodeMirror
      var source = myCodeMirror.getValue()

      out.className = "unhidden";
      
      // Import: Change: $('#input').val() -> source, i forget it, again 
      result = parser.parse(source);
      $('#output').html(JSON.stringify(result,undefined,2));
    } catch (e) {
      $('#output').html('<div class="error"><pre>\n' + String(e) + '\n</pre></div>');
    }
  });
  $('#download').click(function() {
  	
  	var aux='';
  	for(var j=0;j < result.block.stament.length ;j++){
  		aux += result.block.stament[j].id + ' ';
  		for(var i=0; i < result.block.stament[j].set.value.length  ;i++){
  			  aux += result.block.stament[j].set.value[i].x;
  			  aux += ',';
  		 	 	aux += result.block.stament[j].set.value[i].y;
  		 		aux += ' ';
  		}
  		aux += 'END ';
  	}
   	window.location.href = 'service.php?f='+aux;
  });
});

  

