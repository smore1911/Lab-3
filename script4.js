function onEnterPressed(event){
    if(event.key !=="Enter"){
        return;
    }
    addEntry();
}

var id=0;

function addEntry(){
    let snippet=`
        <tr id="${id}">
                <td onClick="removeEntry(${id})">❌</td>
                <td>John</td>
        </tr>
    `
    document.getElementById("tbody").innerHTML+=snippet;
}

function removeEntry(id){
    document.getElementById(id).remove();
}