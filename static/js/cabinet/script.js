function bindRemove(selector){
    $(selector).click(function(){
       initialState.orders.splice(parseInt($(this).attr('data-id')), 1)
        renderRows();
        bindRemove(selector);
        bindChange('.btn-change');
    })
}

function renderRows(){
    let innerBody = '';
    initialState.orders.map((orderObj, id) => {
        innerBody += `
            <tr>
                <th scope="row">${ id + 1 }</th>
                <td>${ orderObj.source }</td>
                <td>${ orderObj.url }</td>
                <td>${ orderObj.comment }</td>
                <td>
                    

                </td>
            </tr> 
        `;
    })
    tableBody.html(innerBody);
}

renderRows();
bindRemove('.btn-remove');
bindChange('.btn-change');

// alert('years 2378'.match(/\d{1,6}/g));


btnOpenModal.click(function(){
   
        initialState.modalType = 'add';
        addOrder.text('Добавить');
        AddInput.val('');
        NameInput.val('');
        CommentInput.val(''); 
     
});

addOrder.click(function(){
    if(($('#inputOwner').val()!=0) && ($('#inputOrder').val()!=0)&&($('#inputPrice').val()!=0)){
    if(initialState.modalType == 'add'){
        initialState.orders.push({
            source: (new Date()).toLocaleString(),
            url:$('#inputAdd').val(),  
            comment:$('#inputComment').val()
        }); 
    }
    if(initialState.modalType == 'change'){
        initialState.orders[initialState.currentId] = {
            source: initialState.orders[initialState.currentId]['date'],
            url:$('#inputAdd').val(),
            comment:$('#inputComment').val()
        }
    }
}
        
renderRows();
bindRemove('.btn-remove');
bindChange('.btn-change');
});

function Calendar3(id, year, month) {
    var Dlast = new Date(year,month+1,0).getDate(),
        D = new Date(year,month,Dlast),
        DNlast = D.getDay(),
        DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
        calendar = '<tr>',
        m = document.querySelector('#'+id+' option[value="' + D.getMonth() + '"]'),
        g = document.querySelector('#'+id+' input');
    if (DNfirst != 0) {
      for(var  i = 1; i < DNfirst; i++) calendar += '<td>';
    }else{
      for(var  i = 0; i < 6; i++) calendar += '<td>';
    }
    for(var  i = 1; i <= Dlast; i++) {
      if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
        calendar += '<td class="today">' + i;
      }else{
        if (  // список официальных праздников
            (i == 1 && D.getMonth() == 0 && ((D.getFullYear() > 1897 && D.getFullYear() < 1930) || D.getFullYear() > 1947)) || // Новый год
            (i == 2 && D.getMonth() == 0 && D.getFullYear() > 1992) || // Новый год
            ((i == 3 || i == 4 || i == 5 || i == 6 || i == 8) && D.getMonth() == 0 && D.getFullYear() > 2004) || // Новый год
            (i == 7 && D.getMonth() == 0 && D.getFullYear() > 1990) || // Рождество Христово
            (i == 23 && D.getMonth() == 1 && D.getFullYear() > 2001) || // День защитника Отечества
            (i == 8 && D.getMonth() == 2 && D.getFullYear() > 1965) || // Международный женский день
            (i == 1 && D.getMonth() == 4 && D.getFullYear() > 1917) || // Праздник Весны и Труда
            (i == 9 && D.getMonth() == 4 && D.getFullYear() > 1964) || // День Победы
            (i == 12 && D.getMonth() == 5 && D.getFullYear() > 1990) || // День России (декларации о государственном суверенитете Российской Федерации ознаменовала окончательный Распад СССР)
            (i == 7 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 2005)) || // Октябрьская революция 1917 года
            (i == 8 && D.getMonth() == 10 && (D.getFullYear() > 1926 && D.getFullYear() < 1992)) || // Октябрьская революция 1917 года
            (i == 4 && D.getMonth() == 10 && D.getFullYear() > 2004) // День народного единства, который заменил Октябрьскую революцию 1917 года
           ) {
          calendar += '<td class="holiday">' + i;
        }else{
          calendar += '<td>' + i;
        }
      }
      if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
        calendar += '<tr>';
      }
    }
    for(var  i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#'+id+' tbody').innerHTML = calendar;
    g.value = D.getFullYear();
    m.selected = true;
    if (document.querySelectorAll('#'+id+' tbody tr').length < 6) {
        document.querySelector('#'+id+' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
    document.querySelector('#'+id+' option[value="' + new Date().getMonth() + '"]').style.color = 'rgb(220, 0, 0)'; // в выпадающем списке выделен текущий месяц
    }
    Calendar3("calendar3",new Date().getFullYear(),new Date().getMonth());
    document.querySelector('#calendar3').onchange = function Kalendar3() {
      Calendar3("calendar3",document.querySelector('#calendar3 input').value,parseFloat(document.querySelector('#calendar3 select').options[document.querySelector('#calendar3 select').selectedIndex].value));
    }




