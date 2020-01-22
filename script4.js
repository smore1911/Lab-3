function onEnterPressed(event){
    if(event.key !="Enter"){
        return;
    }
    addEntry();
}

var id=0

function addEntry(){
    let snippet=`
        <tr id=>
                <td>❌</td>
                <td>John</td>
        </tr>
    `
    document.getElementById("tbody").innerHTML+=snippet;
}