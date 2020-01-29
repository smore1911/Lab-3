function onEnterPressed(event){
    if(event.key !="Enter"){
        return;
    }
    addEntry();
}

function addEntry(){
    let snippet=`
        <tr>
                <td>❌</td>
                <td>Rinkal</td>
        </tr>
    `
    document.getElementById("tbody").innerHTML+=snippet;
}