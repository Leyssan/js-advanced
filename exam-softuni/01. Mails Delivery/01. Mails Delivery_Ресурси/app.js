function solve() {
const recipientNameElement = document.getElementById('recipientName')
const titleElement = document.getElementById('title')
const messageElement = document.getElementById('message')
const addButtonElement = document.getElementById('add')
const resetButtonElement = document.getElementById('reset')
const listOfMailInputElement = document.getElementById('list')

resetButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    recipientNameElement.value = ''
    titleElement.value = ''
    messageElement.value = ''

})

addButtonElement.addEventListener('click', (e) => {
    e.preventDefault();

let recipientName = recipientNameElement.value
let title = titleElement.value
let message = messageElement.value

if (recipientNameElement.value === "" || titleElement.value === "" || messageElement.value  === "") {
            return;
        } 


        recipientNameElement.value = ''
titleElement.value = ''
messageElement.value = ''
 
let listOfMailCellElement = document.createElement('li')

let recipientNameCellElement = document.createElement('h4')
let titleElementCellElement = document.createElement('h4')
let messageCellElement = document.createElement('span')

let actionCellElements = document.createElement('div');
actionCellElements.setAttribute('id', 'list-action');

let sendCellButtonElement = document.createElement('button')

let deleteCellButton = document.createElement('button')




titleElementCellElement.textContent = `Title: ${title}`
recipientNameCellElement.textContent = `Recipient Name: ${recipientName}`
messageCellElement.textContent = `${message}`

sendCellButtonElement.textContent = 'Send'

sendCellButtonElement.setAttribute('type', 'submit')
sendCellButtonElement.setAttribute('id','send')

sendCellButtonElement.addEventListener('click', (e) => {
    e.preventDefault();   
    e.target.parentNode.parentNode.remove();

const sentmailCellElement = document.getElementsByClassName('sent-list')[0]

let liElement = document.createElement('li')
let span1Element = document.createElement('span')
let span2Element = document.createElement('span')
let divElement = document.createElement('div')
divElement.setAttribute('class', 'btn')
let delBtn = document.createElement('button')
delBtn.setAttribute('type', 'submit')
delBtn.setAttribute('class', 'delete')

span1Element.textContent = `To: ${recipientName}`
span2Element.textContent = `Title: ${title}`
delBtn.textContent = `Delete`
delBtn.addEventListener('click', deletFunc)

divElement.appendChild(delBtn)
liElement.appendChild(span1Element)
liElement.appendChild(span2Element)
liElement.appendChild(divElement)
sentmailCellElement.appendChild(liElement)
})

deleteCellButton.textContent = 'Delete'

deleteCellButton.setAttribute('type', 'submit')
deleteCellButton.setAttribute('id','delete')
deleteCellButton.addEventListener('click', deletFunc)

listOfMailCellElement.appendChild(titleElementCellElement)
listOfMailCellElement.appendChild(recipientNameCellElement)
listOfMailCellElement.appendChild(messageCellElement)
listOfMailCellElement.appendChild(actionCellElements )

actionCellElements .appendChild(sendCellButtonElement)
actionCellElements .appendChild(deleteCellButton)

listOfMailInputElement.appendChild(listOfMailCellElement)

function deletFunc(e) {
    e.preventDefault();   
    e.target.parentNode.parentNode.remove();

   const deleteListElement = document.getElementsByClassName('delete-list')[0];
 
    let deleteLiElement = document.createElement('li');
    let nameSpanElement = document.createElement('span');
    nameSpanElement.textContent = `To:${recipientName}`;
    let titleSpanElement = document.createElement('span');
    titleSpanElement.textContent = `Title:${title}`;

    deleteLiElement.appendChild(nameSpanElement);
    deleteLiElement.appendChild(titleSpanElement);

   deleteListElement.appendChild(deleteLiElement);
}

})
}
solve()