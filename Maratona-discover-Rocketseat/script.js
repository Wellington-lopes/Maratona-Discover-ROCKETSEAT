const Modal = {
     open(){
         // abrir modal
         // adicionar a class active no modal
         document
             .querySelector('.modal-overlay')
             .classList
             .add('active')
     },
     close(){
         // fechar o modal
         // remover a classe active do modal
         document
             .querySelector('.modal-overlay')
             .classList
             .remove('active')
     }
 }

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    }, 
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    }, 
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    }, 

];
 
 const Transaction = {
     income() {
         //somar as entradas
     },
     expenses() {
         //somar as saídas
     }
     total() {
         //Entradas - saídas
     }
 }

 //document object model
const DOM = {
    innerHTMLTransaction() {

        const html = `
            <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">22/01/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="remover transação">
            </td>
            </tr>
        `

    }
}