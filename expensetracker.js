document.getElementById('forminp').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amt').value;
    const category = document.getElementById('cat').value;
    const date = document.getElementById('date').value;
    const newRow = document.createElement('tr');
    const amountCell = document.createElement('td');
    const categoryCell = document.createElement('td');
    const dateCell = document.createElement('td');
    const deleteCell=document.createElement('button');
    const editCell = document.createElement('button');
    amountCell.textContent = amount;
    categoryCell.textContent = category;
    dateCell.textContent = date;
    deleteCell.textContent='Delete';
    editCell.textcontent='Edit';    
    newRow.appendChild(amountCell);
    newRow.appendChild(categoryCell);
    newRow.appendChild(dateCell);
    newRow.appendChild(deleteCell);
    //newRow.appendChild(editCell);
    deleteCell.addEventListener('click',function(){
        newRow.remove();
    });
  //  editCell.addEventListener('click',function(){
   //     newRow.update();
    //})
   
    


    document.querySelector('#tab tbody').appendChild(newRow);
    document.getElementById('amt').value = '';
    document.getElementById('cat').value = '';
    document.getElementById('date').value = '';
});